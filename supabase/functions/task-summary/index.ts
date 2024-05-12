import { openai } from "../_shared/openai.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { handleErrorRes } from "../_shared/error.ts";
import { tasksToSummaryPrompt } from "../_shared/prompt.ts";
import { getUserByTgKey } from "../_shared/telegram.ts";
import { utils } from "../_shared/utils.ts";
import { createSupabaseClient } from "../_shared/supabase.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    });
  }

  const authHeader = req.headers.get("Authorization")!;

  if (!authHeader) {
    const tgKey = req.headers.get("tg-key")!;

    const { data } = await getUserByTgKey(
      tgKey,
    );
    if (!data || data === null) {
      return handleErrorRes(new Error("User not found."), 401);
    }
  }

  try {
    const supabase = createSupabaseClient(
      req.headers.get("Authorization")!,
    );

    const todayDate = utils.getTodayDate();

    const { data: tasks, error: taskError } = await supabase.from("tasks")
      .select("note_string").eq("due_date", todayDate);

    if (taskError) {
      return handleErrorRes(taskError);
    }
    if (!tasks || !tasks.length) {
      return new Response("No tasks found.");
    }

    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0613",
      messages: [{
        role: "user",
        content: `${tasksToSummaryPrompt} ${JSON.stringify(tasks)}`,
      }],
      temperature: 0,
    });
    const summary = res.choices[0].message.content?.trim();

    const { error: summaryError } = await supabase.from("summaries").insert([{
      text: summary,
      due_date: todayDate,
    }]);

    if (summaryError) {
      return handleErrorRes(summaryError);
    }

    return new Response(
      JSON.stringify({
        summary,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      },
    );
  } catch (error) {
    return handleErrorRes(error);
  }
});

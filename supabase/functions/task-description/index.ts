import { openai } from "../_shared/openai.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { handleErrorRes } from "../_shared/error.ts";
import { taskToDescriptionPrompt } from "../_shared/prompt.ts";
import { getUserByTgKey } from "../_shared/telegram.ts";
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

  const { id } = await req.json();

  const supabase = createSupabaseClient(
    req.headers.get("Authorization")!,
  );

  const { data, error: selectError } = await supabase
    .from("tasks")
    .select("title")
    .eq("id", id).single();

  if (selectError) {
    return handleErrorRes(selectError);
  }
  if (!data || data?.title === null) {
    return handleErrorRes(new Error("No such task found."));
  }

  try {
    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0613",
      messages: [{ role: "system", content: taskToDescriptionPrompt }, {
        role: "user",
        content: data.title,
      }],
      temperature: 0,
    });
    const description = res.choices[0].message.content?.trim();
    console.log(description);

    return new Response(
      JSON.stringify({
        description,
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

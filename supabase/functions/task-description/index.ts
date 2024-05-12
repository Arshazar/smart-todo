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

  const { title } = await req.json();

  try {
    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0613",
      messages: [{ role: "system", content: taskToDescriptionPrompt }, {
        role: "user",
        content: title,
      }]
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

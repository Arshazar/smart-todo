import { openai } from "../_shared/openai.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { handleErrorRes } from "../_shared/error.ts";
import { textToTaskPrompt } from "../_shared/prompt.ts";
// import { verifyJwt } from "../_shared/jwt.ts";
import { getUserByTgKey } from "../_shared/telegram.ts";

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

  const { text } = await req.json();

  try {
    const todayDate = new Date();
    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0613",
      messages: [{
        role: "system",
        content: `${textToTaskPrompt} ${todayDate}`,
      }, {
        role: "user",
        content: text,
      }],
      temperature: 0.5,
    });
    const jsonString = res.choices[0].message.content?.trim();
    console.log({jsonString});
    const data = JSON.parse(jsonString as string);

    return new Response(
      JSON.stringify({
        data,
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

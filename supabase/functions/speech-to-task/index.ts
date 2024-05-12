// deno-lint-ignore-file no-extra-boolean-cast
import axiod from "axiod";

import { utils } from "../_shared/utils.ts";
import { openai } from "../_shared/openai.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { handleErrorRes } from "../_shared/error.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  const formData = await req.formData();
  const { file } = utils.formDataToObj(formData);
  const authHeader = req.headers.get("Authorization")!;

  try {
    const { text } = await openai.audio.transcriptions.create({
      file,
      model: "whisper-1",
    });

    const { data, status } = await axiod.post(
      Deno.env.get("SUPABASE_URL")! + "/functions/v1/text-to-task",
      JSON.stringify({ text }),
      {
        headers: {
          "Authorization": authHeader,
          "Content-Type": "application/json",
        },
      },
    );

    if (!data) {
      return handleErrorRes(new Error("Error in text-to-task api"), status);
    }

    return new Response(
      JSON.stringify(data),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      },
    );
  } catch (error) {
    console.log("Error: ", error);
    return handleErrorRes(error);
  }
});

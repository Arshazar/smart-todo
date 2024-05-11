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
  console.log("file: ", file);

  try {
    const { text } = await openai.audio.transcriptions.create({
      file,
      model: "whisper-1",
    });

    const { data: taskData, error: taskError } = axiod.post(
      Deno.env.get("SUPABASE_URL")! + "/functions/v1/text-to-task",
      {
        headers: {
          "Authorization": req.headers.get("Authorization")!,
          "Content-Type": "application/json",
        },
        data: { text },
      },
    );

    if (taskError) return handleErrorRes(taskError);

    return new Response(
      JSON.stringify({ data: taskData }),
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

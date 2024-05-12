// deno-lint-ignore-file no-extra-boolean-cast
import { telegramApi } from "../_shared/telegram.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { handleErrorRes } from "../_shared/error.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    });
  }

  const { api } = await req.json();

  if (!api) return handleErrorRes(new Error("No api found"), 405);

  try {
    // const tgKey = req.headers.get("tg-key")!;
    // api.headers["tg-key"] = tgKey;

    const res = await telegramApi({
      method: api.method,
      url: api.url,
      config: {
        method: api.method,
        url: api.url,
        headers: api.headers,
        data: api.data,
      },
    });

    return new Response(JSON.stringify(res.data));
  } catch (error) {
    console.log("error", error);

    return handleErrorRes(error);
  }
});

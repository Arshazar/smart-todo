// deno-lint-ignore-file no-extra-boolean-cast
import { telegramApi } from "../_shared/telegram.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { handleErrorRes } from "../_shared/error.ts";
import { verifyJwt } from "../_shared/jwt.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    });
  }

  let { api } = await req.json();

  if (!!api) return handleErrorRes(new Error("No api found"), 400);

  try {
    api.headers["tg-key"] = await verifyJwt(req.headers.get("tg-key")!);

    const res = await telegramApi(api);

    return new Response("ok", res);
  } catch (error) {
    return handleErrorRes(error);
  }
});

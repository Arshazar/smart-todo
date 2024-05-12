import axiod from "axiod";
import { IAxiodResponse, IRequest } from "axiod/interfaces";

import { createSupabaseClient } from "./supabase.ts";

type ApiT = {
  method: "get" | "post" | "put" | "delete" | "patch";
  url: string;
  config?: IRequest;
};

async function telegramApi(
  { method, url, config }: ApiT,
): Promise<IAxiodResponse> {
  return await axiod[method](url, {
    ...config,
    headers: {
      "Authorization": "Bearer " + Deno.env.get("SUPABASE_ANON_KEY")!,
      "apikey": Deno.env.get("SUPABASE_ANON_KEY")!,
      "Content-Type": "application/json",
      ...config?.headers,
    },
  });
}

async function getUserByTgKey(tgKey: string) {
  const supabase = createSupabaseClient(
    "Bearer " + Deno.env.get("SUPABASE_ANON_KEY")!,
    true,
  );
  return await supabase.from("users").select("*").eq(
    "tg_key",
    tgKey,
  );
}

export { getUserByTgKey, telegramApi };

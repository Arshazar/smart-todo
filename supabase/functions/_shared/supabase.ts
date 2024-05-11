import { createClient } from "supabase";

import { Database } from "./db.types.ts";

const createSupabaseClient = (
  accessToken?: string,
  isAdmin: boolean = false,
) => {
  const supabaseClient = createClient<Database>(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get(isAdmin ? "SUPABASE_SERVICE_ROLE_KEY" : "SUPABASE_ANON_KEY")!,
    {
      global: {
        headers: { Authorization: accessToken ?? "" },
      },
    },
  );
  return supabaseClient;
};

export { createSupabaseClient };

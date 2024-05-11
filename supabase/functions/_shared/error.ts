import { PostgrestError } from "supabase";

import { corsHeaders } from "./cors.ts";

const handleErrorRes = (
  error: Error | PostgrestError,
  status: number = 400,
) => {
  return new Response(
    JSON.stringify({ error: error.message }),
    {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status,
    },
  );
};

export { handleErrorRes };

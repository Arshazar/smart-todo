import axiod from "axiod";
import { Data as DataT, IAxiodResponse, IHeaderData } from "axiod/interfaces";

type ApiT = {
  method: "get" | "post" | "put" | "delete";
  url: string;
  headers: IHeaderData[];
  data?: DataT;
};

async function telegramApi(
  { method, url, headers, data }: ApiT,
): Promise<IAxiodResponse> {
  return await axiod[method](url, {
    headers: {
      "Authorization": "Bearer " + Deno.env.get("SUPABASE_ANON_KEY")!,
      "apikey": Deno.env.get("SUPABASE_ANON_KEY")!,
      "Content-Type": "application/json",
      ...headers,
    },
    data,
  });
}

export { telegramApi };

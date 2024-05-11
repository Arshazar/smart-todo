import { openai } from "../_shared/openai.ts";
import { handleErrorRes } from "../_shared/error.ts";
import { createSupabaseClient } from "../_shared/supabase.ts";

Deno.serve(async (req) => {
  const { ids, table, nameColumn, contentColumn, embeddingColumn } = await req
    .json();

  console.log("ids", ids);
  console.log("table", table);
  console.log("nameColumn", nameColumn);
  console.log("contentColumn", contentColumn);
  console.log("embeddingcolumn", embeddingColumn);

  const supabase = createSupabaseClient(
    req.headers.get("Authorization")!,
    true,
  );

  const { data: rows, error: selectError } = await supabase
    .from(table)
    .select(`id, name, ${nameColumn}, ${contentColumn}` as "*")
    .in("id", ids)
    .is(embeddingColumn, null);

  if (selectError) {
    return handleErrorRes(selectError, 500);
  }

  for (const row of rows) {
    const { id, [contentColumn]: content, [nameColumn]: name } = row;

    if (!content) {
      console.error(`No content available in column '${contentColumn}'`);
      continue;
    }
    if (!name) {
      console.error(`No name available in column '${nameColumn}'`);
      continue;
    }

    const output = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: `${name}: ${content}`,
      encoding_format: "float",
    });

    const embedding = JSON.stringify(output.data[0].embedding);

    const { error } = await supabase
      .from(table)
      .update({
        [embeddingColumn]: embedding,
      })
      .eq("id", id);

    if (error) {
      console.error(
        `Failed to save embedding on '${table}' table with id ${id}`,
      );
    }

    console.log(
      `Generated embedding ${
        JSON.stringify({
          table,
          id,
          nameColumn,
          embeddingColumn,
        })
      }`,
    );
  }

  return new Response(null, {
    status: 204,
    headers: { "Content-Type": "application/json" },
  });
});

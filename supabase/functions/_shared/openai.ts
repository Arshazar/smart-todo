import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: Deno.env.get("OPENAI_KEY")!,
});

export { openai };

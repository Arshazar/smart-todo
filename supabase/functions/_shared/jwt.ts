// deno-lint-ignore-file no-explicit-any
import { validateJwt } from "djwt/validate.ts";

async function verifyJwt(token: string): Promise<any> {
  const publicKey = Deno.env.get("TG_PUBLIC_KEY")!;

  const decodedToken = await validateJwt(token, publicKey, {
    isThrowing: false,
  });

  if (decodedToken && !decodedToken.isValid) {
    throw new Error("Invalid JWT token");
  }

  return decodedToken;
}

export { verifyJwt };

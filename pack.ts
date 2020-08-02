import { pack } from "./mod.ts";

if (Deno.args.length !== 2) {
  console.error(`Usage: pack <file_in> <file_out>`);
  Deno.exit(1);
}

await pack(Deno.args[0], Deno.args[1]);

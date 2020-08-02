import { assertEquals } from "https://deno.land/std@0.62.0/testing/asserts.ts";
import { pack } from "./mod.ts";

async function test(file_in: string, file_out: string) {
  await pack(file_in, file_out);
  let data_in = await Deno.readTextFile(file_in);
  let data_out = (await import(`./${file_out}`)).default;
  assertEquals(data_in, data_out);
}

Deno.test("deno_favicon", async () => {
  await test("test_data/deno_favicon.ico", "test_data/deno_favicon.ts");
});

Deno.test("big_list_of_naughty_strings", async () => {
  await test(
    "test_data/big_list_of_naughty_strings.txt",
    "test_data/big_list_of_naughty_strings.ts"
  );
});

Deno.test("deno_exe", async () => {
  await test("test_data/deno.exe", "test_data/deno_exe.ts");
});

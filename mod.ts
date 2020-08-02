export async function pack(file_in: string, file_out: string) {
  let data = await Deno.readTextFile(file_in);
  return Deno.writeTextFile(file_out, `export default \`${escape(data)}\``);
}

function escape(s: string) {
  return s.replace(/[\\`$]/g, "\\$&").replace(/\r/g, "\\r");
}

/*
 * Example #2. Fetch a file and print to stdout
 */

const url: string = Deno.args[0];
const res: Response = await fetch(url);
const body: Uint8Array = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);

// Command to run:
// deno run --allow-net=example.com https://deno.land/std/examples/curl.ts https://example.com

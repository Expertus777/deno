/*
 * Example #4. Creating of TCP server
 * For that, we first:
 * create the hostname
 * then, create the port
 * then listen to hostname and port
 */

const hostname: string = "0.0.0.0";
const port: number = 8080;
const listener = Deno.listen({hostname, port});
console.log(`Listening on ${hostname}:${port}`);
console.log(listener);
for await (const conn of listener) {
    console.log('1 conn:', conn);
    Deno.copy(conn, conn);
    console.log('2 conn:', conn);
}

// Command to run:
// deno run ...

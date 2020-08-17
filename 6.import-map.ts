/*
 * With imports map you can
 * import { red } from "fmt/colors.ts";
 * against:
 * import { red } from "https://deno.land/std@0.65.0/fmt/colors.ts";
 * The import map is in imports-map.json file
 * It looks like an object with main "imports" key and generally imports map object, like this:
 * {
      "imports": {
          "fmt/": "https://deno.land/std@0.65.0/fmt/"
      }
    }
 *
 * Also we can map any project folder root or src folders.
 * E.g.: "/": "./" or "/": "./src" - starting directory for absolute imports e.g.:
 * import { MyUtil } from "/util.ts";
 */

import { red, dim } from "fmt/colors.ts";
console.log(
    dim(
        red(
            "Hello red world!"
        )
    )
);


// Run command: deno run --importmap=imports-map.json --unstable 6.import-map.ts

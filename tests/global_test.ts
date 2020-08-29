import {assert, assertEquals} from "https://deno.land/std@0.65.0/testing/asserts.ts";

Deno.test("assert test", () => {
    assert("Assert throws if param is false");
    assert(true);
});

Deno.test("assertEquals tests", () => {
    assertEquals(2, 2);
})

// Run command: deno test tests/

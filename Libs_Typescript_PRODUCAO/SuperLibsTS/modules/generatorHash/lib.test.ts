// deno-lint-ignore-file no-explicit-any no-unused-vars no-inferrable-types
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { idd } from "./lib.ts";

/* sut
************************************* */
const sut = idd;


Deno.test({
  name: "deve retornar um hash do tipo string.",
  only: false,
  fn() {
    const where = sut
    expect(where).toBeTruthy();
    expect(where).not.toBeUndefined();
  },
});

/* TESTER_CONSOLE ************* */
// console.log(sut)

export default 1;

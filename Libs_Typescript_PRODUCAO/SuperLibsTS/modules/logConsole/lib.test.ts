// deno-lint-ignore-file no-explicit-any no-unused-vars
// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { log } from "./lib.ts";

const sut = log;
const inputSut1 = "foo";
// const inputSut2 = "bar";

Deno.test({
  name: "deve retornar o tipo undefined",
  only: false,
  fn() {
    expect(sut(inputSut1)).toEqual(undefined);
  },
});

/* TESTER_CONSOLE ************************************* */

function tester_() {
  return sut("RESPOSTA DO SUT LOG >>>>>> ", inputSut1);
}
// tester_();

export default 1;

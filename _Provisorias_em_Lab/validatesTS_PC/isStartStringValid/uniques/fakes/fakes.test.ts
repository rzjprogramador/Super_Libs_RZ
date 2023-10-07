// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { fakesIsStartStringValid } from "./fakes.ts";


const sut = fakesIsStartStringValid

Deno.test({
  name: "deve retornar os valores definidos.",
  only: false,
  async fn() {
    expect(sut.FAIL.underline).toEqual("_foo");
    expect(sut.FAIL.voidString).toEqual("");
    expect(sut.FAIL.space).toEqual(" ");
    expect(sut.FAIL.twoSpace).toEqual("  ");
    expect(sut.FAIL.ponto).toEqual(".foo");
    expect(sut.FAIL.hasteg).toEqual("#foo");
    expect(sut.FAIL.all).toEqual("._#$%&@");
  },

});

export default 1;

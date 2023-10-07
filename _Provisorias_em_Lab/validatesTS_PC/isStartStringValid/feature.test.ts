// deno-lint-ignore-file no-explicit-any prefer-const
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
// deno-lint-ignore no-unused-vars
import { Log } from "../../../_roots/depsGlobal/replicas.ts";

import { fakesIsStartStringValid, isStartStringValid, feedbacksIsStartStringValid } from "./uniques/mod/mod.ts";

const sut = isStartStringValid
const inputFAIL = fakesIsStartStringValid.FAIL
const feedFAIL = feedbacksIsStartStringValid.FAIL.specialCharacters

const makeSut = (input: string) => {
  const tryPromise = () => {
    try {
      return sut(input)
    }
    catch (err: any) {
      return err.message
    }
  }
  return tryPromise().catch((err: any) => err.message)
}

Deno.test({
  name: "[ FAIL -> maxString ] deve retornar o feedback correto ao receber input falha com underline",
  only: false,
  async fn() {
    const whereInput_underline = makeSut(inputFAIL.hasteg)
    const whereInput_voidString = makeSut(inputFAIL.voidString)
    const whereInput_space = makeSut(inputFAIL.space)
    const whereInput_twoSpace = makeSut(inputFAIL.twoSpace)
    const whereInput_ponto = makeSut(inputFAIL.ponto)
    const whereInput_hasteg = makeSut(inputFAIL.hasteg)
    const whereInput_fail_all = makeSut(inputFAIL.all)

    expect(await whereInput_underline).toEqual(feedFAIL);
    expect(await whereInput_voidString).toEqual(feedFAIL);
    expect(await whereInput_space).toEqual(feedFAIL);
    expect(await whereInput_twoSpace).toEqual(feedFAIL);
    expect(await whereInput_ponto).toEqual(feedFAIL);
    expect(await whereInput_hasteg).toEqual(feedFAIL);
    expect(await whereInput_fail_all).toEqual(feedFAIL);
  },
});

/* TESTER_CONSOLE ************************************* */

// makeSut(inputFAIL.all).then((er: any) => Log(er));


export default 1;

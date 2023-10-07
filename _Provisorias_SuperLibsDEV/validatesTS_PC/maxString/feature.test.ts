// deno-lint-ignore-file no-explicit-any prefer-const
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { fakesMaxString, maxString, feedbacksMaxtring } from "./uniques/mod/mod.ts";
// deno-lint-ignore no-unused-vars
import { Log } from "../../../_roots/depsGlobal/replicas.ts";

const sut = maxString
const inputSut = fakesMaxString
const mock_setMaxText = 10
let maxText = mock_setMaxText

async function Sut() {
  try {
    return await sut(inputSut.fail_1, mock_setMaxText);
  }
  catch (err: any) {
    // Log('RESPOSTA >>>>>>>>>> ', err.message)
    return err.message
  }
}

Deno.test({
  name: "[ FAIL -> maxString ] deve retornar o feedback do tipo resolvido string",
  only: false,
  async fn() {
    const res = Sut().catch(err => err)
    const assertion = typeof await res === 'string'
    expect(assertion).toEqual(true);
  },

});

Deno.test({
  name: "[ FAIL -> maxString ] deve retornar o feedback correto.",
  only: false,
  async fn() {
    const res = Sut().catch(err => err)
    const assertion = `${feedbacksMaxtring.feedLettersMaxValid} ${maxText} ${feedbacksMaxtring.feedLettersMaxValidInputClient} ${inputSut.fail_1.length}`
    expect(await res).toEqual(assertion);
  },

});

/* TESTER_CONSOLE ************************************* */

// Sut().then(er => Log(er));


export default 1;

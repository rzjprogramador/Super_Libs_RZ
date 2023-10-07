// deno-lint-ignore-file no-constant-condition
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { SuperTestsTS } from "./lib.ts";

const sut = SuperTestsTS

Deno.test({
  name: "[ async ] catchMessageThrowNewError : captura e compara mensagem exata do lançamento de novo erro.",
  only: false,
  async fn() {
    const funcaoQueLancaExcecao = async () => {
      if (true) {
        // console.log('msg_1')
        throw await new Error('msg_1')
      }
    }

    expect(await sut.catchMessageThrowNewError?.(funcaoQueLancaExcecao)).toEqual('msg_1');

  },

});


export default 1;
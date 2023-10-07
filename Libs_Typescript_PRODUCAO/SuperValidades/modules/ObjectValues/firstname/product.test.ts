// deno-lint-ignore-file no-explicit-any
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { firstname } from "./lib.ts";
import { msg } from "../../_global/deps/replicas.global.deps.ts";

const sut = await firstname

Deno.test({
  name: "[ OK ] deve retornar o input novamente se o input for correto.",
  only: false,
  async fn() {
    const target = 'okok'
    const result = await sut.product(target)

    expect(result).toEqual(target);
  },
});

Deno.test({
  name: "[ FAIL ] deve retornar a mensagem de erro correta se receber caracteres invalidos.",
  only: false,
  async fn() {
    const target = '$%2'

    const getError = async () => {
      try {
        return await sut.product(target)
      }
      catch (err: any) {
        return await err.message
      }
    }

    expect(await getError()).toEqual(msg.startValidCaractere);
  },
});

Deno.test({
  name: "[ FAIL ] deve retornar a mensagem de erro ao receber apenas 1 letra.",
  only: false,
  async fn() {
    const target = 'f'

    const getError = async () => {
      try {
        return await sut.product(target)
      }
      catch (err: any) {
        return await err.message
      }
    }

    expect(await getError()).toEqual('Ops... as letras não podem ser menor que 2');
  },
});

export default 1;
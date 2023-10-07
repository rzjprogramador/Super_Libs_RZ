// deno-lint-ignore-file no-explicit-any
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import {
  minString,
  setMinStringObjUse,
  type ISetMinString
} from "./lib.ts";
import { msg } from "../../_global/deps/replicas.global.deps.ts";

const sut = minString
const setMiniStringSut: ISetMinString = setMinStringObjUse

Deno.test({
  name: "[ FAIL ] deve retornar message de exceção onde as letras nao pode ser menor que 2.",
  only: false,
  async fn() {
    const catchMsg = async () => {
      const inputSet = setMiniStringSut

      try {
        return await sut.perform('f', inputSet)
      }
      catch (err: any) {
        return err.message
      }
    }



    expect(await catchMsg()).toBe(`${msg.validatorsText.min.exception} 2`);
  },

});

Deno.test({
  name: "[ FAIL ] deve retornar message de exceção onde as letras nao pode ser menor que 3.",
  only: false,
  async fn() {
    const catchMsg = async () => {
      const inputSet = { ...setMiniStringSut, minLetters: 3 }
      try {
        return await sut.perform('fa', inputSet)
      }
      catch (err: any) {
        return err.message
      }
    }

    expect(await catchMsg()).toEqual(`${msg.validatorsText.min.exception} 3`);
  },

});


export default 1;
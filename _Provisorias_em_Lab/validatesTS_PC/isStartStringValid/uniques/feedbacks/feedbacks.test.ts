// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { feedbacksIsStartStringValid } from "./feedbacks.ts";


const sut = feedbacksIsStartStringValid.FAIL

Deno.test({
  name: "deve retornar os valores definidos.",
  only: false,
  async fn() {
    expect(sut.specialCharacters).toEqual("Ops... não pode iniciar com caracteres invalidos!");
  },

});

export default 1;

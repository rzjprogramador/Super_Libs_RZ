import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { feedbacksMinString } from "./feedbacks.ts";

const sut = feedbacksMinString

Deno.test({
  name: "deve retornar os valores defnidos no feedbacks -> MinString",
  only: false,
  async fn() {
    expect(sut.feedLettersMinValid).toEqual("Ops... o total de letras não pode ser menor que ");
  },

});

export default 1;


import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { feedbacksMaxtring } from "./feedbacks.ts";

const sut = feedbacksMaxtring

Deno.test({
  name: "deve retornar os valores definidos no feedbacks -> MaxString",
  only: false,
  async fn() {
    expect(sut.feedLettersMaxValid).toEqual("Ops... o total de letras não pode ser maior que:");

    expect(sut.feedLettersMaxValidInputClient).toEqual(" -- letras digitadas = ")
  },

});

export default 1;

// deno-lint-ignore-file no-explicit-any no-unused-vars

import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { fakeMaiorIdade, fakeMaiorOrMenorIdade } from "../../lib/mod.ts"

const sut = fakeMaiorIdade;

Deno.test("deve retornar as mensagens corretas", () => {
  expect(sut.idadeMinima).toBe(18);
  expect(sut.feedExceptionIdadeMinima()).toBe(
    `Ops! só é permitido idade maior que 18`,
  );
});

Deno.test("deve retornar o correspondente ao objeto fakeMaiorOrMenorIdade", () => {
  expect(fakeMaiorOrMenorIdade.hoje).toBe("Thu May 18 2023");
  expect(fakeMaiorOrMenorIdade.dataSimuladaMaiorQue18OK).toEqual({
    dia: "18",
    mes: "05",
    ano: "2005",
  });
  expect(fakeMaiorOrMenorIdade.dataSimuladaMenorQue18FAIL).toEqual({
    dia: "19",
    mes: "05",
    ano: "2005",
  });
});

/* TESTER_CONSOLE ************************************* */

function showFoo() {
  // console.log(sut.idadeMinima);
  // console.log(sut.feedExceptionIdadeMinima());
}
showFoo();

export default 1;

// deno-lint-ignore-file no-explicit-any no-unused-vars no-inferrable-types
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { Log } from "../../../_roots/depsGlobal/replicas.ts";

import {
  featSuperDateTS, getAgeMock, fakeMaiorOrMenorIdade, setIdadeMinima,
  type RegisterPerson
} from "./../uniques/mod/mod.ts";

/* sut
************************************* */
const sut = featSuperDateTS;

Deno.test("deve retornar data agora", () => {
  const actual = sut.dateNow;

  expect(actual).not.toBeFalsy();
});

/* <<<
  * baseDateFields()
>>> */
Deno.test("[ baseDateFields() ] deve retornar os campos IDateFields -> iguais ao date real do sistema no momento.", () => {
  const hoje = new Date();

  const actual = sut._baseDateFields();

  const assertion = {
    dia: hoje.getDate().toString().padStart(2, "0"),
    mes: String(hoje.getMonth() + 1).padStart(2, "0"),
    ano: String(hoje.getFullYear()),
    horario: String(`${hoje.getHours()}:${hoje.getMinutes()}`),
  };

  expect(actual).toEqual(assertion);
  expect(actual).toHaveProperty("dia");
  expect(actual).toHaveProperty("mes");
  expect(actual).toHaveProperty("ano");
  expect(actual).toHaveProperty("horario");
  expect(actual).not.toHaveProperty("foo");
});

/* TESTER_CONSOLE ************* */
function SHOW_baseDateFields() {
  Log(sut._baseDateFields());
}
// SHOW_baseDateFields();

/* <<<
  * currentYear()
>>> */
Deno.test({
  name: "[ currentYear() ] deve retornar o ano atual",
  only: false,
  fn() {
    const where = sut.currentYear();
    const assertion = sut.registerPerson().CreateAt.ano;
    // extraindo o ano atual de registerPerson...no expect parseando para Number
    // Log("  >>>>>>> ", where);
    expect(where).toEqual(Number(assertion));
  },
});
/* TESTER_CONSOLE ************* */
function SHOW_currentYear() {
  Log(sut.currentYear());
}
// SHOW_currentYear();

/* <<<
  * getAge()
>>> */
const sutGetAge = getAgeMock;
const inputSutGetAge = fakeMaiorOrMenorIdade;

Deno.test("[ getAge() ] deve retornar { 18 } que é a idade minima", () => {
  const input = inputSutGetAge.dataSimuladaMaiorQue18OK;
  const actual = sutGetAge(input);

  // Log(">>>>>>>>>>", actual)
  const assertion: number = 18;

  expect(actual).toEqual(assertion);
});

Deno.test("[ getAge() ] deve retornar o feddBack de excessao se nao for maior de idade.", () => {
  // referente ao hoje >> estou simulando o amanha entao tem que ter 17 e é menor de idade
  const input = inputSutGetAge.dataSimuladaMenorQue18FAIL;
  const execute = () => {
    try {
      sutGetAge(input);
    } catch (err: any) {
      const message: string = err.message;
      return message;
    }
  };
  expect(execute()).toEqual(setIdadeMinima.feedExceptionIdadeMinima());
});

/* TESTER_CONSOLE ************* */
function SHOW_getAgeOk() {
  // console.log(sutGetAge(inputSutGetAge.dataSimuladaMaiorQue18OK));
}
// SHOW_getAgeOk();

function SHOW_getAgeFAIL() {
  try {
    sutGetAge(inputSutGetAge.dataSimuladaMenorQue18FAIL);
  } catch (err: any) {
    Log(err);
  }
}
// SHOW_getAgeFAIL();

/* <<<
  * registerPerson()
>>> */
const dateObjeto = featSuperDateTS._baseDateFields();

const registerPersonMock = (): RegisterPerson => {
  return {
    ID: "1",
    IDB: "1",
    CreateAt: {
      dia: dateObjeto.dia,
      mes: dateObjeto.mes,
      ano: dateObjeto.ano,
      horario: dateObjeto.horario,
    },
  };
};

// SUTRegisterPerson
const sutRegisterPerson = registerPersonMock;

Deno.test("[ registerPerson() ] deve retornar -> output identico ao input && e conter as props corretas.", () => {
  const input: RegisterPerson = {
    ID: "1",
    IDB: "1",
    CreateAt: {
      dia: dateObjeto.dia,
      mes: dateObjeto.mes,
      ano: dateObjeto.ano,
      horario: dateObjeto.horario,
    },
  };

  const res: RegisterPerson = {
    ID: "1",
    IDB: "1",
    CreateAt: {
      dia: dateObjeto.dia,
      mes: dateObjeto.mes,
      ano: dateObjeto.ano,
      horario: dateObjeto.horario,
    },
  };

  const actual = sutRegisterPerson();
  const assertion = input;

  expect(actual).toEqual(assertion);
  expect(actual).toHaveProperty("ID");
  expect(actual).toHaveProperty("IDB");
  expect(actual).toHaveProperty("CreateAt");
});

/* TESTER_CONSOLE ************* */
function SHOW_RegisterPerson() {
  console.log(sutRegisterPerson());
}
// SHOW_RegisterPerson();

/* *************************************************** */

export default 1;

import { ISetIdadeMinima } from "../mod/mod.ts";

const fakeMaiorIdade: ISetIdadeMinima = {
  idadeMinima: 18,
  feedExceptionIdadeMinima() {
    return `Ops! só é permitido idade maior que ${this.idadeMinima}`;
  },
};

type IFakeMaiorOrMenorIdade = {
  hoje: string;
  dataSimuladaMaiorQue18OK: IDateFormat;
  dataSimuladaMenorQue18FAIL: IDateFormat;
};

type IDateFormat = { dd: string; mm: string; yy: string };
const dateFormatOK: IDateFormat = {
  dd: "18",
  mm: "05",
  yy: "2005",
};

const dateFormatFAIL: IDateFormat = {
  dd: "19",
  mm: "05",
  yy: "2005",
};

const fakeMaiorOrMenorIdade: IFakeMaiorOrMenorIdade = {
  hoje: "Thu May 18 2023",
  dataSimuladaMaiorQue18OK: dateFormatOK,
  dataSimuladaMenorQue18FAIL: dateFormatFAIL,
};

export { fakeMaiorIdade, fakeMaiorOrMenorIdade, type IDateFormat };

import { ISetIdadeMinima } from "../../lib/mod.ts";

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

type IDateFormat = { dia: string; mes: string; ano: string };
const dateFormatOK: IDateFormat = {
  dia: "18",
  mes: "05",
  ano: "2005",
};

const dateFormatFAIL: IDateFormat = {
  dia: "19",
  mes: "05",
  ano: "2005",
};

const fakeMaiorOrMenorIdade: IFakeMaiorOrMenorIdade = {
  hoje: "Thu May 18 2023",
  dataSimuladaMaiorQue18OK: dateFormatOK,
  dataSimuladaMenorQue18FAIL: dateFormatFAIL,
};

export { fakeMaiorIdade, fakeMaiorOrMenorIdade, type IDateFormat };

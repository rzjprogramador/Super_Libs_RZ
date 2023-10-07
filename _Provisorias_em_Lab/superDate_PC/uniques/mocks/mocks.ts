import {
  setIdadeMinima, fakeMaiorOrMenorIdade,
  type FieldsDate
} from "../mod/mod.ts";

const getAgeMock = (
  data: FieldsDate,
  setAgeMin: number = setIdadeMinima.idadeMinima,
) => {
  // const hoje = new Date();// abaixo fixei a data mockada com a data de hoje ao inves de atual
  const hoje = new Date(fakeMaiorOrMenorIdade.hoje);

  const nascimento = new Date(data.mm + "/" + data.dd + "/" + data.yy);
  // Log(nascimento)

  //Retorna a diferença entre hoje e a data de nascimento em anos.
  let ano = hoje.getFullYear() - nascimento.getFullYear();

  //Retorna a diferença de mês do mês de nascimento para o atual.
  const m = hoje.getMonth() - nascimento.getMonth();

  //Caso ainda não tenha ultrapassado o dia e o mês
  if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
    ano--;
  }

  // lancar excessao caso seja menor de idade
  if (ano < setAgeMin) {
    throw new Error(setIdadeMinima.feedExceptionIdadeMinima());
  }

  return ano;
};

// Log(getIdadeMock(fakeMaiorOrMenorIdade.dataSimuladaMaiorQue18OK));

export { getAgeMock };

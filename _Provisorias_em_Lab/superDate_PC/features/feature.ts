// para usar chame as props ou metodos que ja dara a data congelada util apra testes em 17-05-2023

import { BaseDateFields, ISuperDateTS } from "../uniques/contracts/types.ts";
import { fakeMaiorIdade, setIdadeMinima } from "../uniques/mod/mod.ts";

/**
 * @name name  superDateTS
 * @returns -> desencadeamento de metodos: [currentYear() -> mostra ano_atual] + [getAge(dataNascimento)  -> mostra idade] + [registerPerson() fornece identificadores<ID, IDB, CreateAt> para registro de Pessoa]
 * @infoUsoInterno o artefatoPrincipal na appLib será usado no formato camelCase.
 * @infoUsoExterno ao fazer download primeiro replique ex: { camelCaseTS as SnakeCaseTS} depois use no formato SnakeCase
 * @exemple SuperDateTS.currentYear()  // retornará -> o ano_atual
 */

const featSuperDateTS: ISuperDateTS = {
  dateNow: new Date("05/17/2023"),

  /**
   * @description metodo BASE para quem precisa retornar um obj com campos de DataAtual
   * @param param0  sem params -> só executar
   * @returns obj dataAtual -> { dia, mes, ano, horario }
   * @exemple superDate.baseDateFields()
   */

  _baseDateFields() {
    const hoje = new Date();

    const log: BaseDateFields = {
      dia: hoje.getDate().toString().padStart(2, "0"),
      mes: String(hoje.getMonth() + 1).padStart(2, "0"),
      ano: String(hoje.getFullYear()),
      horario: String(`${hoje.getHours()}:${hoje.getMinutes()}`),
    };
    return log;
  },

  /**
   * @description retorna -> o ano atual
   * @exemple superDate.currentYear()
   */

  currentYear() {
    return this.dateNow.getFullYear();
  },

  /**
   * @description retorna a idade em numero.
   * @param param0  recebe obj com campos de nascimento { dd: string, mm: string, yy: string,}
   * @returns  number : retorna a idade
   * @exemple superDate.getName ({ dd: string, mm: string, yy: string,})
   */

  getAge(data, setAgeMin = setIdadeMinima.idadeMinima) {
    const nascimento = new Date(data.mm + "/" + data.dd + "/" + data.yy);

    //Retorna a diferença entre this.dateNow e a data de nascimento em anos.
    let ano = this.dateNow.getFullYear() - nascimento.getFullYear();

    //Retorna a diferença de mês do mês de nascimento para o atual.
    const m = this.dateNow.getMonth() - nascimento.getMonth();

    //Caso ainda não tenha ultrapassado o dia e o mês
    if (m < 0 || (m === 0 && this.dateNow.getDate() < nascimento.getDate())) {
      ano--;
    }

    // lancar excessao caso seja menor de idade
    if (ano < setAgeMin) {
      throw new Error(
        `${fakeMaiorIdade.feedExceptionIdadeMinima()} ${setAgeMin}`,
      );
    }

    return ano;
  },

  /**
   * @description este metodo retorna -> campos dataAtual, para registros.
   * @param param0  sem params -> só executar
   * @returns obj dataAtual -> { dia, mes, ano, horario }
   * @exemple superDate.registerPerson()
   */

  registerPerson() {
    return {
      ID: Date.now().toString(),
      IDB: Date.now().toString(),
      CreateAt: {
        dia: this._baseDateFields().dia,
        mes: this._baseDateFields().mes,
        ano: this._baseDateFields().ano,
        horario: this._baseDateFields().horario,
      },
    };
  },
};

export { featSuperDateTS };

/* */
// console.log(superDate.currentYear())

import { setMinStringObjUse, type ISetMinString } from "../../_global/sets/setMinString/setsMinString.ts"

const minString = {

  /**
   * @description  metodo asyncrono minString : valida o minimo esperado para uma string.
  * @input (1º stringTarget, 2ªopcional ObjSetMiniString com valor miniLetras, e a resposta de feedback > senao passado assume o default.)
  * @returns em caso de sucesso devolve a string de entrada, em caso de erro retorna um novoErro com a mensagem de feedback.
   */

  async perform(stringTarget: string, sets: ISetMinString = setMinStringObjUse) {
    if (stringTarget.length < sets.minLetters) {
      throw new Error(sets?.feedbackException?.())
    }
    return await stringTarget
  }

}


export {
  minString,
  setMinStringObjUse,
  type ISetMinString,
}
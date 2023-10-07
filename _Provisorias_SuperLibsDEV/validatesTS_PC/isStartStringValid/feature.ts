
/**
 * @description hasStartSpecialCharacters() == tem inicio com caracteres especiais () ?
 * @param param0  (s: string)
 * @returns boolean
 * @details checa se começa com letras validas, e se nao pode começar com espaços ou caracteres especiais.
 */

import { feedbacksIsStartStringValid } from "./uniques/feedbacks/feedbacks.ts";

function hasStartSpecialCharacters(s: string): boolean {
  const regex = /^[A-Za-z][\s+\w]+[A-Za-z]+$/;
  return regex.test(s);
}

type IIStartStringValidFN = (s: string) => Promise<string>

/**
* @description isStartStringValid - è começo de string válida?
* @returns a mesma string de input || ou feedback excessao error
* @details checa se o inicial da string de input começa com caracteresEspeciais se sim retorna uma excessao com feedback.
*/

const isStartStringValid: IIStartStringValidFN = async (s) => {
  if (
    typeof s === 'undefined'
    || !hasStartSpecialCharacters(s)
  ) {
    throw new Error(feedbacksIsStartStringValid.FAIL.specialCharacters)
  }
  return await s
}

export {
  isStartStringValid,
  type IIStartStringValidFN
}
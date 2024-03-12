import type { TypeValidateScalar } from "./types.ts"

const setTextDefault: TypeValidateScalar = {
  text: 2,
  number: 0,
  rules: [],
  messageError: "Ops"
}

export type ValidateScalarUseFN = (target: string, sets: TypeValidateScalar) => any

/**
 * @param obj com opcionais para validacao:( tamanho para texto, tamanho para numero, valor a ser passado gebnericamente no tipo para regra)
 */

const validateText: ValidateScalarUseFN = async (target, sets = setTextDefault) => {
  if (target.length < sets?.text!) {
    throw new Error(`${sets.messageError} ${sets.text}`)
  }
  return await target
}


export {
  validateText,
}
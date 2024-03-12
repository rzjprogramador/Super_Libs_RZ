import { ValidateScalarUseFN } from "../../ValidateScalar/index.ts";
import { TypeValidateScalar } from "../../ValidateScalar/types.ts";
import { pipeValidateAsync } from "./service.ts";

export type ValidateScalarFN = (data: any, listFn: ValidateScalarUseFN[], validateScalar: TypeValidateScalar) => any

/**
 * @note  As apis usaram esta funcionalidade.
 * @description  FUNCAO PIPE ASSINCRONO TS: DIVERSAS FUNCOES SOBRE MESMO ARGUMENTO.
* @args (obs: no validadeSacalar preencher com o obj deste tipo.propriedade desejada )
* @returns retornará o resultado do dadoAlvo submetido por todas as funcoes do array recebido.
 */

export const usePipeValidateAsync: ValidateScalarFN = async (data, listFn, validateScalar) => {
  try {
    return await pipeValidateAsync(data, listFn, validateScalar)
  } catch (error) {
    throw error
  }
}
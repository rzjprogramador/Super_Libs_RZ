import { ValidateScalarFN } from "./pipe.ts"

// Servico para o pipe master a ser usado pelas apis

export const pipeValidateAsync: ValidateScalarFN = async (data, listFn, validateScalar) => {
  return await listFn.reduce((acc, atfn) => {
    return atfn(acc, validateScalar)
  }, data)
}
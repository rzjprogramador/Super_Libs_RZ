// deno-lint-ignore-file ban-types

/**
 * @description  FUNCTION PIPE ASSINCRONO  TS: DIVERSAS FUNCOES SOBRE MESMO ARGUMENTO.
* @args (dadoAlvo, array_de_funcoes_sobre_o_dadoAlvo )
* @returns retornará o resultado do dadoAlvo submetido por todas as funcoes do array recebido.
 */

export const pipeAsync = async (target: any, listFn: Function[]) => {
  return await listFn.reduce((acc: any, atfn: Function) => {
    return atfn(acc)
  }, target)
}
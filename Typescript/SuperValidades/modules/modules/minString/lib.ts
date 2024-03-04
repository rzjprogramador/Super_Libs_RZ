
const exception = {
  min: 'Ops... as letras não podem ser menor que',
}

/**
 * @description  metodo asyncrono minString : valida o minimo esperado para uma string.
* @input (1º stringTarget, 2ªopcional ObjSetMiniString com valor miniLetras, e a resposta de feedback > senao passado assume o default.)
* @returns em caso de sucesso devolve a string de entrada, em caso de erro retorna um novoErro com a mensagem de feedback.
 */

const minString = async (stringTarget: string, lengthString: number = 2) => {
  if (stringTarget.length < lengthString) {
    throw new Error(`${exception.min} ${lengthString}`)
  }
  return await stringTarget
}


export {
  minString,
  // setMinStringObjUse,
  // type ISetMinString,
}
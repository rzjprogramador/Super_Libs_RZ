// deno-lint-ignore-file no-explicit-any

class SuperTestsTS {
  // constructor() { }

  /**
     * @description  catchMessageThrowNewError : captura e compara mensagem exata do lançamento de novo erro.
     * @input  methodTargetAsync  returns .toEqual(messageError)
     * @exemple expect(await getAsyncMessageNewErrorThrowTest ( methodtargetAsync )).toEqual('msg_1')
     */

  static async catchMessageThrowNewError(methodTarget: any) {
    try {
      return await methodTarget()
    }
    catch (err: any) {
      return err.message
    }
  }

}

export { SuperTestsTS }
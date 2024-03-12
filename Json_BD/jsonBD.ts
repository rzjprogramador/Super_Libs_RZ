// deno-lint-ignore-file prefer-const
export class JsonBD {
  static readonly msgErroRead = "Ops, Erro Leitura de Arquivo"
  static readonly msgErroSave = "Ops, Erro Save não salva dado no Arquivo"
  static readonly msgErroPost = "Ops, Erro Post inserir dado no Arquivo"
  static readonly msgErroNotfound = "Ops, Não encontrado!"
  // obs: erros post e delete nao precisa de msg porque vao repassar o erro após verificar se encontrou o solicitado.

  static instance() {
    return new JsonBD()
  }

  useVerificationFindIndex(index: number) {
    if (index < 0) {
      throw new Error(`${JsonBD.msgErroNotfound}`)
    }
  }

  /**
   * @passosLogicos [ ler, modifica e salva no arquivo ]
     @logica : recebe objJS - converte em string - converte em Textenconder - grava com writeFileSync do Deno
    */
  async saveBD(filePath: string, data: Object) {
    try {
      const dataConvertString = JSON.stringify(data)
      const encoder = new TextEncoder();
      const dataEnconderString = encoder.encode(dataConvertString)
      await Deno.writeFileSync(filePath, dataEnconderString)
      return
    } catch (e) {
      // console.error(e)
      throw new Error(`${JsonBD.msgErroSave}`)
    }
  }

  /**
   * @desc acao que lê e obtem o arquivo passado em formato object js
   * @input { filePath } add string com o caminho do arquivo apartir da raiz ex: 'data_exemplos/data.json'
   * @returns devolverá o arquivo em objeto javascript onde poderemos desencadear suas props.
   */
  async read(filePath: string) {
    try {
      const fileAsc = await Deno.readFileSync(`${Deno.cwd()}/${filePath}`)
      const fileString = new TextDecoder().decode(fileAsc)
      const fileObj = JSON.parse(fileString)
      return fileObj
    } catch (e) {
      // console.error(e)
      throw new Error(`${JsonBD.msgErroRead}`)
    }
  }

  async getAll(filePath: string) {
    return await this.read(filePath)
  }

  /**
   * @desc criar novo objeto no arquivo json
   * @logic [ ler, modifica e salva no arquivo ]
   * @input { filePath } add string com o caminho do arquivo apartir da raiz ex: 'data_exemplos/data.json'
   * @returns devolverá o arquivo em objeto javascript onde poderemos desencadear suas props.
   */
  async post(filePath: string, data: Object,) {
    try {
      const currentContent: any[] = await this.read(filePath)
      await currentContent.push(data)
      await this.saveBD(filePath, currentContent)
      // return await currentContent
    } catch (e) {
      // console.error(e)
      throw new Error(`${JsonBD.msgErroPost}`)
    }
  }

  async putUpdate(filePath: string, id: string, newObj: Object) {
    try {
      const currentContent: any[] = await this.read(filePath)
      let objSelect = currentContent.find((i) => i.id === id)
      let selectItem = currentContent.findIndex((i) => i.id === id)
      this.useVerificationFindIndex(selectItem)
      currentContent[selectItem] = { ...objSelect, ...newObj }
      await this.saveBD(filePath, currentContent)
      return

    } catch (e) {
      throw e
    }
  }

  async delete(filePath: string, id: string) {
    try {
      const currentContent: any[] = await this.read(filePath)
      let selectItem = currentContent.findIndex((i) => i.id === id)
      this.useVerificationFindIndex(selectItem)
      await currentContent.splice(selectItem, 1)
      await this.saveBD(filePath, currentContent)
      return true

    } catch (e) {
      throw e
    }
  }

}

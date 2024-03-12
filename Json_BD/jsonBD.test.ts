import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { JsonBD } from "./jsonBD.ts";

// TODO: FAZER TEST DE GRAVACAO SOMENTE UMA VEZ NO ARQUIVO JSON...SE JA GRAVOU NAO GRAVAR MAIS.

const sut = JsonBD.instance()
const sutMsgErrorRead = JsonBD.msgErroRead
const sutMsgErrorPost = JsonBD.msgErroPost
const fileJsonBD = 'bd/json/data.json'
const fileJsonBDFAIL = 'bdxxxxxx/json/data.json'
const bd: any[] = await sut.read(fileJsonBD)

Deno.test({
  name: "[ read ] deve ler o arquivo json e devolver um objeto de instancia de Array e nao uma string.",
  only: false,
  async fn() {
    const res = await sut.read(fileJsonBD)
    // console.log(res.entidade)
    expect(res).toBeInstanceOf(Array);
    expect(res).not.toBeInstanceOf(String);
  },

});

Deno.test({
  name: "[ getAll ] deve mostrar todo conteudo em instancia de Array do arquivo json em object js.",
  only: false,
  async fn() {
    const res = await sut.getAll(fileJsonBD)
    // console.log("TODOS >>", res)
    expect(res).toBeInstanceOf(Array);
  },

});

Deno.test({
  name: "[ post FAIL] não deve criar este novo objeto passando o endereco de arquivo.json inexistente.",
  only: false,
  async fn() {
    const newObject_NOT_SAVE = { id: "1000", nome: "fail", sobrenome: "failll" }

    async function tryPost() {
      try {
        const res = await sut.post(fileJsonBDFAIL, newObject_NOT_SAVE)
      } catch (e) {
        return e.message
      }
    }
    console.log(await tryPost())
    expect(await tryPost()).toEqual(sutMsgErrorPost)
  },

});

Deno.test({
  name: "[ update ] deve atualizar o objeto encontrado.",
  only: false,
  async fn() {
    const nomeUp = "mudei4"
    const objUP = { nome: nomeUp, }
    const action = await sut.putUpdate(fileJsonBD, '1', objUP)

    const getAll: any[] = await sut.getAll(fileJsonBD)

    console.log("NOME DO PRIMEIRO", bd[0].nome)

    expect(getAll[0].nome).toBe(nomeUp)
  },

});


import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { JsonBD } from "./jsonBD.ts";

// TODO: fazer post de criacao novo ..mas sem ficar recriando a cada test - before e after lembrar como usar

const sut = JsonBD.instance()
const sutClass = JsonBD
const fileJsonBD = 'bd/json/data.json'
const fileJsonBDFAIL = 'bdxxxxxx/json/data.json'
const bd: any[] = await sut.read(fileJsonBD)
const idNotExist = '9999'

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
        return await sut.post(fileJsonBDFAIL, newObject_NOT_SAVE)
      } catch (e) {
        return e.message
      }
    }
    console.log(await tryPost())
    expect(await tryPost()).toEqual(sutClass.msgErroPost)
  },

});

Deno.test({
  name: "[ post FAIL] TODO : não deve recriar elemento que ja existe.",
  only: false,
  async fn() {
    const duplicate = { id: "2", nome: "any2", sobrenome: "any" }

    async function tryPost() {
      try {
        return await sut.post(fileJsonBD, duplicate)
      } catch (e) {
        return e.message
      }
    }
    // console.log(await tryPost())
    expect(await tryPost()).toEqual(sutClass.msgErroPost)
  },

});

Deno.test({
  name: "[ post ok] TODO : deve inserir este novo elemento sem retornar Erro.",
  only: false,
  async fn() {
    const postObject = { id: "3", nome: "any3", sobrenome: "any" }

    async function tryPost() {
      try {
        return await sut.post(fileJsonBD, postObject)
      } catch (e) {
        return e.message
      }
    }
    // console.log(await tryPost())
    expect(await tryPost()).not.toThrow
  },

});

Deno.test({
  name: "[ update ] deve atualizar o objeto encontrado.",
  only: false,
  async fn() {
    const nomeUp = "mudei_somente_o_Nome_1"
    const objUP = { nome: nomeUp, }
    const action = await sut.putUpdate(fileJsonBD, '1', objUP)

    const getAll: any[] = await sut.getAll(fileJsonBD)

    console.log("NOME DO PRIMEIRO", bd[0].nome)

    expect(getAll[0].nome).toBe(nomeUp)
  },

});

Deno.test({
  name: "[ update FAIL ] não deve atualizar elemento não encontrado.",
  only: false,
  async fn() {
    async function tryUpdate() {
      try {
        const nomeUp = "mudei_somente_o_Nome_2"
        const objUP = { nome: nomeUp, }
        await sut.putUpdate(fileJsonBD, idNotExist, objUP)
      } catch (e) {
        return e.message
      }
    }
    expect(await tryUpdate()).toEqual(sutClass.msgErroNotfound)
  },

});

Deno.test({
  name: "[ delete ] deve deletar o objeto encontrado.",
  only: false,
  async fn() {
    const idRequest = '4'
    const deleteThis = { id: idRequest, nome: 'DELETAR', sobrenome: 'Deletar' }
    await sut.post(fileJsonBD, deleteThis)
    await sut.delete(fileJsonBD, idRequest)

    const getAll: any[] = await sut.getAll(fileJsonBD)

    expect(getAll.length).toBe(3)
    // TODO : fazer outra verificacao.
  },

});

Deno.test({
  name: "[ delete FAIL ] não deve deletar elemento não encontrado.",
  only: false,
  async fn() {

    async function tryDelete() {
      try {
        await sut.delete(fileJsonBD, idNotExist)
      } catch (e) {
        return e.message
      }
    }

    expect(await tryDelete()).toEqual(sutClass.msgErroNotfound)
  },

});


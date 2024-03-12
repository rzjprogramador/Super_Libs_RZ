import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { JsonBD } from "./jsonBD.ts";

const sut = JsonBD.instance()
const sutMsgErrorRead = JsonBD.msgErroRead
const sutMsgErrorPost = JsonBD.msgErroPost
const fileJsonBD = 'bd/json/data.json'
const fileJsonBDFAIL = 'bdxxxxxx/json/data.json'

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

// TODO: NESTE TEST >> PARAR DE GRAVAR NO ARQUIVO A CADA TEST RODADO.
// Deno.test({
//   name: "[ post OK] deve criar um novo objeto e inserir no arquivo json.",
//   only: false,
//   async fn() {
//     const newObject = { nome: "nomeNovo2", sobrenome: "sobrenomeNovo2" }
//     const newObject3 = { nome: "nomeNovo3", sobrenome: "sobrenomeNovo3" }

//     async function tryPost() {
//       try {
//         const res = await sut.post(fileJsonBD, newObject)
//         const res3 = await sut.post(fileJsonBD, newObject3)
//         console.log("TODOS >>", res)
//       } catch (error) {
//         return error.message
//       }
//     }
//     expect(await tryPost()).not.toThrow();
//   },

// });

Deno.test({
  name: "[ post FAIL] não deve criar este novo objeto passando o endereco de arquivo.json inexistente.",
  only: false,
  async fn() {
    const newObject = { nome: "fail", sobrenome: "failll" }

    async function tryPost() {
      try {
        const res = await sut.post(fileJsonBDFAIL, newObject)
      } catch (error) {
        return error.message
      }
    }
    console.log(await tryPost())
    expect(await tryPost()).toEqual(sutMsgErrorPost)
  },

});

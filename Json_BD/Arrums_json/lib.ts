import { writeJsonSync, readJsonSync } from 'https://deno.land/x/jsonfile/mod.ts';

const objExemplo1 = { nome: "nome1", sobrenome: "sobrenome1" }

// escreve no arquivo
const writeFileJSONAsync = async (path: string, data: any) => {
  const file = readFileJsonASync(path).then(() => {
    writeJsonSync(path, data, { append: true })
  })
  // writeJsonSync(path, data, { append: true })
  return data
}
writeFileJSONAsync("./data.json", objExemplo1)


// Ler o arquivo
const readFileJsonASync = async (path: string) => {
  const lerArquivoJSON = await readJsonSync(path);
  return await lerArquivoJSON
}
// console.log(await readFileJsonASync("./data.json"))





// tutorial da lib fs do deno :https://reactgo.com/deno-write-to-json-file/


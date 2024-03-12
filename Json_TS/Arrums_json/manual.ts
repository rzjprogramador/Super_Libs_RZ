

const decoder = new TextDecoder('utf-8')
const data = await Deno.readFile('data.json')
const dataParseJSON = JSON.parse(decoder.decode(data))

// dataParseJSON.usuarios.push({ novo: "foo" })
const request1 = { novo: "foo" }
Deno.writeFileSync('data.json', JSON.stringify(request1),  { mode: 0o777 })

console.log(dataParseJSON)
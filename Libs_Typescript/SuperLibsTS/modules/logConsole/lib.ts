// deno-lint-ignore-file no-explicit-any

/**
 * @description recomendado fazer uma replica para uso ex: { log as Log }
 * @returns retorna a visualizacao no console -> do tipo void
 * @exemple Log('foo type')
 */

const log = (...args: any[]): void => {
  for (const arg of args) {
    console.log(arg);
  }
}
// function log(...args: any[]): void {
//   for (const arg of args) {
//     console.log(arg);
//   }
// }


export { log };

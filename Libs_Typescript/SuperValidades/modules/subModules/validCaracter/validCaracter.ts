
/**
 * @description hasStartSpecialCharacters() == tem inicio com caracteres especiais () ?
 * @param param0  (s: string)
 * @returns boolean
 * @details checa se começa com letras validas, e se nao pode começar com espaços ou caracteres especiais.
 */

import { msg } from "../../_global/deps/replicas.global.deps.ts";

function hasStartSpecialCharacters(s: string): boolean | void {
  const regex = /^[A-Za-z][\s+\w]+[A-Za-z]+$/;
  const result = regex.test(s)

  if (!result) {
    throw new Error(msg.startValidCaractere)
  }
  // -> | void
}

export { hasStartSpecialCharacters }
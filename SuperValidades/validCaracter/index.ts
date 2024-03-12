
/**
 * @description hasStartSpecialCharacters() == tem inicio com caracteres especiais () ?
 * @param param0  (s: string)
 * @returns boolean
 * @details checa se começa com letras validas, e se nao pode começar com espaços ou caracteres especiais.
 */


export const hasStartSpecialCharacters = (s: string) => {
  const regex = /^[A-Za-z][\s+\w]+[A-Za-z]+$/;
  const result = regex.test(s)

  if (!result) {
    throw new Error("Ops.. digite apenas letras validas!")
  }
  return s
  // -> | void
}

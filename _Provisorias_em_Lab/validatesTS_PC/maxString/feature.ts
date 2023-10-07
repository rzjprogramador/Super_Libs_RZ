// deno-lint-ignore no-unused-vars
import { feedbacksMaxtring, setMaxText } from "./uniques/mod/mod.ts"

type IMaxStringFN = (d: string, maxText?: number) => Promise<string>

const setMaxTextLocal = 10
// const setMaxTextLocal = setMaxText
// para testar coloque na feature em 2º argumento o maximo de 10 na suite de test.

const maxString: IMaxStringFN = async (d, maxText = setMaxTextLocal,) => {
  if (d.length > maxText) {
    throw new Error(`${feedbacksMaxtring.feedLettersMaxValid} ${maxText} ${feedbacksMaxtring.feedLettersMaxValidInputClient} ${d.length}`)
  }
  return await d
}

export {
  maxString,
  type IMaxStringFN
}
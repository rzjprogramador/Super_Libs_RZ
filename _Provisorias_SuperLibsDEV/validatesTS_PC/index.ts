import { minString, type IMiniStringFN } from "./minString/uniques/mod/mod.ts"
import { maxString, type IMaxStringFN } from "./maxString/uniques/mod/mod.ts"
import { isStartStringValid, type IIStartStringValidFN } from "./isStartStringValid/uniques/mod/mod.ts"

interface ISuperValidateTS {
  minString: IMiniStringFN
  maxString: IMaxStringFN
  isStartStringValid: IIStartStringValidFN
}

const superValidateTS: ISuperValidateTS = {
  minString,
  maxString,
  isStartStringValid,
}

export {
  superValidateTS,
  type ISuperValidateTS
}

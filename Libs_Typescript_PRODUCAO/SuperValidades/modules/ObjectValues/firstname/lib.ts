// deno-lint-ignore-file no-explicit-any
import {
  minString, setMinStringObjUse,
  type ISetMinString,
} from "../../../modules/subModules/minString/lib.ts";
import { hasStartSpecialCharacters } from "../../subModules/validCaracter/validCaracter.ts";

// -- com este obj posso reproduzir diversos tipos de firstname: [person, product, etc...]

const firstname = {

  async person(target: string, sets: ISetMinString = setMinStringObjUse) {
    try {
      const minStringValidate = await minString.perform(target, sets)
      await hasStartSpecialCharacters(target)
      // -- somente avalia o input --

      const result = await minStringValidate
      return await result
    }
    catch (err: any) {
      throw err
    }
  },

  async product(target: string, sets: ISetMinString = setMinStringObjUse) {
    try {
      const minStringValidate = await minString.perform(target, sets)
      await hasStartSpecialCharacters(target)
      // -- somente avalia o input --

      const result = await minStringValidate
      return await result
    }
    catch (err: any) {
      throw err
    }
  }

}

export { firstname }


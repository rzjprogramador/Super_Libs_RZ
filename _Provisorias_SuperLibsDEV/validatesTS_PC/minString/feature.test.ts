// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { minString, setMinText, feedbacksMinString, fakeFAILStringMin } from "./uniques/mod/mod.ts";
import { Log } from "../../../_roots/depsGlobal/replicas.ts";

const sut = minString
const inputSut = fakeFAILStringMin

async function makeSutThrow(sut: any, inputTarget: any) {
	try {
		return await sut(inputTarget);
	}
	catch (err: any) {
		// Log('RESPOSTA >>>>>>>>>> ', err.message)
		return err.message
	}
}

Deno.test({
	name: "[ FAIL -> minString ] deve retornar o feedback de excessao ao receber strings maior que o definido como limite.",
	only: false,
	async fn() {
		const res = makeSutThrow(sut, inputSut).catch(err => err)
		const assertion = `${feedbacksMinString.feedLettersMinValid}${setMinText}`;
		// Log('  >>>>>>> ', await res)
		expect(await res).toEqual(assertion);
	},

});

/* TESTER_CONSOLE ************************************* */

async function tester_() {
	try {
		await sut(inputSut);
	}
	catch (err: any) {
		return err.message
	}
}
tester_().then(er => Log(er));


export default 1;
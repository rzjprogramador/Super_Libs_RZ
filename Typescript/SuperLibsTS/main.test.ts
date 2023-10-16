import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import {
  log,
} from "./main.ts";


const logSUT = log


Deno.test({
  name: "deve conter as props [ #PropsOK ].",
  only: false,
  async fn() {
    expect(logSUT).toBeTruthy()

  },

});

/* TESTER_CONSOLE ************************************* */

async function tester_() {
}
tester_();

/*
* PARA RODAR ONLY SÓ ESTE TEST ```deno test <caminhoDesteArquivo>```
*/

export default 1;

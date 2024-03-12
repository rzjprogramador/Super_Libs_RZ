// // deno-lint-ignore-file no-explicit-any
// import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
// import {
// exception,
//   minString,
// } from "./index.ts";

// const sut = minString

// Deno.test({
//   name: "[ FAIL ] deve retornar message de exceção onde as letras nao pode ser menor que 2.",
//   only: false,
//   async fn() {
//     const catchMsg = async () => {

//       try {
//         return await sut('f', 2)
//       }
//       catch (err: any) {
//         return err.message
//       }
//     }



//     expect(await catchMsg()).toBe(`${exception} 2`);
//   },

// });

// Deno.test({
//   name: "[ FAIL ] deve retornar message de exceção onde as letras nao pode ser menor que 3.",
//   only: false,
//   async fn() {
//     const catchMsg = async () => {
//       const inputSet = { ...setMiniStringSut, minLetters: 3 }
//       try {
//         return await sut.perform('fa', inputSet)
//       }
//       catch (err: any) {
//         return err.message
//       }
//     }

//     expect(await catchMsg()).toEqual(`${msg.validatorsText.min.exception} 3`);
//   },

// });


// export default 1;
# README

---

# SuperValidatesTS

### Utilizacao Metodos
---

**Metodo : minString()**
  * @description  metodo asyncrono minString : valida o minimo esperado para uma string.
  * @input (1º stringTarget, 2ªopcional ObjSetMiniString com valor miniLetras, e a resposta de feedback > senao passado assume o default.)
  * @returns em casode sucesso devolve a string de entrada, em caso de erro retorna um novoErro com a mensagem de feedback.
  *
  * // exemple use in: file.test.ts

    ```#typescript
    import { SuperValidatesTS } from "github.com/***todo";

    const sut = SuperValidatesTS

    // object Set MiniString
    const setMiniStringSut: SetMinString = {
      minLetters: 2,
      feedbackException(this: SetMinString) {
        return `Ops... as letras não podem ser menor que ${this.minLetters!}`
      }
    }


    await sut.minString('f', setMiniStringSut)
    ```
---

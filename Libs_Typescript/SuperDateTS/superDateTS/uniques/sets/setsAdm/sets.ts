interface ISetIdadeMinima {
  idadeMinima: number;
  feedExceptionIdadeMinima: () => string;
}

const setIdadeMinima: ISetIdadeMinima = {
  idadeMinima: 18,
  feedExceptionIdadeMinima() {
    return `Ops! só é permitido idade maior que ${this.idadeMinima}`;
  },
};

export {
  setIdadeMinima,
  type ISetIdadeMinima,
}

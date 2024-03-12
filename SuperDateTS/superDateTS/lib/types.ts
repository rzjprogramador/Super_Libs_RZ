
interface IDateFieldsStrings {
  dia: string;
  mes: string;
  ano: string;
  horario?: string;
}

interface ISuperDateTS {
  dateNow: Readonly<Date>
  _baseDateFields: () => IDateFieldsStrings
  currentYear: () => Promise<number>
  getAge: (data: IDateFieldsStrings, setAgeMin?: number) => Promise<number>
}

export {
  // type_modulos auxiliares
  type IDateFieldsStrings,

  // type_modulo Principal e feature princiapl
  type ISuperDateTS,
}
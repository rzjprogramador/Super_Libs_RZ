
interface RegisterPerson {
  ID: string;
  IDB: string;
  CreateAt: BaseDateFields;
}

type FieldsDate = { dd: string; mm: string; yy: string };

interface BaseDateFields {
  dia: string;
  mes: string;
  ano: string;
  horario: string;
}

interface ISuperDateTS {
  dateNow: Date
  _baseDateFields: () => BaseDateFields
  currentYear: () => number
  getAge: (data: FieldsDate, setAgeMin: number) => number
  registerPerson: () => RegisterPerson

}

export {
  // type_modulos auxiliares
  type FieldsDate,
  type RegisterPerson,

  type BaseDateFields,

  // type_modulo Principal e feature princiapl
  type ISuperDateTS,
}
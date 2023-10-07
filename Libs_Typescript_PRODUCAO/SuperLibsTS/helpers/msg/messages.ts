export const msg: IMsg = {
  sucessCreated: 'Criado com Sucesso!',
  allReadExist: 'Ops...Já cadastrado no sistema!',
  exceptions: {
    startValidCaractere: 'Digite apenas caracteres válidos!',
    minText: 'Ops... as letras não podem ser menor que',
    permissionMin: 'Ops...permitido apenas menor que',
    permissionMax: 'Ops...permitido apenas maior de',
  }
}

interface IMsg {
  sucessCreated: string
  allReadExist: string
  exceptions: IExceptionsMsg
}

interface IExceptionsMsg {
  startValidCaractere: string
  minText: string
  permissionMin: string
  permissionMax: string
}
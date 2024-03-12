export interface Response {
  data: any
  statusCode: number
}

export const ok = (data: any): Response => ({
  data,
  statusCode: 200
})

export const badRequest = (data: any): Response => ({
  data,
  statusCode: 400
})
/** Respuesta del servidor */
export interface Response {
  /** Informacion de la repuesta */
  data: ResponseData
  /**Codigo de respuesta del servidor*/
  status: number
}

/* Informacion obtenida del servidor*/
export interface ResponseData {
  /** Indica si la operacion solicitada a sido exitosa */
  status: boolean
  /**  Mensaje de la operacion */
  message: string
  /** Errores de validación que presentaron los campos del formulario */
  errors?: ErrorsResponseData
  /**  Informacion de la se sesión del usuario */
  user?: User
}
/** Errores de validacion que presenta un campo */
interface ErrorsResponseData {
  [index: string]: []
}

import { Customer, User, UserAuth } from "."
import { ConfigState, Configs, Customer, User, UserAuth } from "."

/** Respuesta del servidor */
export type Response = {
  /** Informacion de la repuesta */
  data: ResponseData
  /**Código de respuesta del servidor*/
  status: number
}

/* Información obtenida del servidor*/
export type ResponseData = {
  /** Indica si la operación solicitada a sido exitosa */
  status: boolean
  /**  Mensaje de la operación */
  message: string
  /** Errores de validación que presentaron los campos del formulario */
  errors: ErrorsResponseData
  /**  Información de la se sesión del usuario */
  userAuth: UserAuth
  /**Un usuario */
  user: User
  /**Suma total de la mensualidad de los clientes */
  proceeds: number
  /**Todos los clientes */
  customers: Customer[]
  /**Un cliente */
  customer: Customer
  /**Id del cliente afectado */
  customerID: number
  /**Configuración del cliente */
  configs:Configs
}
/** Errores de validación que presenta un campo */
type ErrorsResponseData = {
  [index: string]: []
}


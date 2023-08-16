/**Cliente */
export interface Customer {
  //debe ser opcional para usar el operador delete
  id?: number | string
  name: string,
  last_name: string,
  mac: string,
  phone: string,
  start_date: Date,
  expiration_date: Date,
}

/**Usuario */
export interface User {
  id?: number | string,
  name: string,
  last_name: strint,
  user: string,
  email: string
}

/**Configuracion */
export interface Configs{
  amount:number
}

/**Información de sesión del usuario */
export interface UserAuth {
  /** id que tiene en la bd  */
  id: string,
  /** Nombre que tiene en la bd  */
  name: string,
  /** Token de autorizacion para peticiones de los endPoints  */
  token: string
}

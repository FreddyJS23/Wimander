import { Configs, Customer, User } from "."

/** Formulario de login*/
export type UserForm = {
  user: string
  password: string
}

/**Formulario de registro de usuario */
export type RegisterUserForm = {
  name: string,
  last_name: string,
  user: string,
  email: string,
  password: string
  password2: string
}

/**Formulario de actualización de usuario */
export interface UserUpdateForm extends User {
  password: string,
  last_password: string,
}

//omitir o eliminar algunos tipos de la interface original
export type CustomerFormUpdate = Omit<Customer, 'start_date' | 'expiration_date'>

export type ExtendsConnectionFom = {
  id?: number | string
  /**Extender la conexión 15 o 30 dias */
  extendsConnection: '15D' | '30D'
}

interface CustomerFormRegister extends Customer {
  /**Plan de conexion */
  plan: '15D' | '30D'
  /**Monto*/
  amount: number
}

/**Formulario registro de cliente */
export type CustomerRegister = Omit<CustomerFormRegister, 'id' | 'expiration_date'>

/**Formulario para las configuraciones */
export type ConfigsForm = Pick<Configs, 'amount'>

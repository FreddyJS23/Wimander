/** Formulario de logeo*/
export interface UserForm {
    user: string
    password: string
  }

  /**Formulario de registro de usuario */
export interface RegisterUserForm{
  name: string,
  last_name: string,
  user: string,
  email: string,
  password: string
  password2: string
}

export interface Customer{
  //debe ser opcional para usar el operador delete
  id?:number | string
  name: string,
  last_name: string,
  mac: string,
  phone:string,
  start_date: Date,
  expiration_date: Date,

}

//omitir o eliminar algunos tipos de la interface original
export type CustomerFormUpdate  = Omit<Customer,'start_date' | 'expiration_date'> 
  
export interface ExtendsConnectionFom{
id?:number | string
/**Extender la conexión 15 o 30 dias */
extendsConnection:'15D' | '30D'
}

interface CustomerFormRegister extends Customer{
  plan:'15D' | '30D'
  amount:number
} 

export type CustomerRegister=Omit<CustomerFormRegister, 'id' | 'expiration_date'>
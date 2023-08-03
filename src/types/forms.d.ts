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
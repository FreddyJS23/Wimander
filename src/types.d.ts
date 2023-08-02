import { AlertColor } from "@mui/material"
import { HTMLInputTypeAttribute } from "react"
import { FieldErrors, UseFormRegister, ValidationRule } from "react-hook-form"

export interface tarjetaDashboardInterface {
  titulo: string,
  contenido: string,
  style: string

}

export interface CamposFormInterface {
 /**
  *id que tomara el input
 
 *Nombre que tomara register
 
 *id que tomara el label
  */
  inputName: string,
  /**
   * Nombre del label
   */
  name: string,
  /**
   * Estilo adicional del label
   * @default "label"
   */
  styleLabel?: string,
  /**
   *  Estilo adicional del input
   * @default "input"
   */
  styleInput?: string,
  /**
   * Tipo de input
   */
  type:  HTMLInputTypeAttribute
  /**
   * Gancho para control del input
   */
  register: UseFormRegister,
  /**
   * Expresión regular para el campo
   */
  pattern?: ValidationRule<RegExp>
  /**
   * Indica si el campo es requerido para la validación
   */
  required?: boolean
 /**
   * Indica la longitud máxima que debe tener
   */
  maxLength?: number,
  /**
   * Indica la longitud mínima que debe tener
   */
  minLength?: number,
  /**
   * Indica el valor mínimo que debe tener
   */
  min?: number,
  /**
   *  Indica el valor máximo que debe tener
   */
  max?: number
  /**
   * Objeto con los campos que no pasen su validación
   */
  errors: FieldErrors
  /**
   * Texto de ayuda en el tooltip
   */
  tip?: string | null

}

export interface RegistroLogin {
  nombre: string,
  apellido: string
  correo: string,
  usuario: string,
  password: string,
  password2: string,

}
export interface InicioLogin {
  usuario: string,
  password: string,
}


export interface ButtonInterface {

   /**
   * Tipo de boton
   */
  type?:'submit' | 'reset' | 'button' | undefined,
  /**
   * Estilo adicional
   */
  style?: string
  /**
   * Entrada de texto 
   */
  value?: string
  onClick?: () => void
  onSubmit?: (e) => void
  /**
   * Entrada de texto o un componente
   */
  children?: React.DetailedHTMLProps
  /**
   * Estado de carga
   */
  loading?:boolean
}

export interface ElementSidebarInterface {
  children?: React.DetailedHTMLProps
  name: string,
  link: string,
  style: string
}

export interface ModalBaseInterface {
  children: React.ReactElement;
  encabezado: string;
  open: boolean
  handleClose: () => void

}

export interface ModalInterface {
  encabezado: string
  open: boolean
  handleClose: () => void
  cliente: number

}

export interface User {
  id: string,
  name:string,
  token: string
}


export interface AuthContextInterface {
  user?: User
  initialStateUser: User
  setUser: Dispatch<SetStateAction<User>>
}


interface AnimacionContainer {
  children: React.ReactElement | JSXElementConstructor;
}


export interface AnimacionModalInterface extends AnimacionContainer {
  in?: boolean;

}

export interface Response {
  data: ResponseData
  status: number

}

export interface ResponseData {
  status: boolean
  message: string
  errors?:ErrorsResponseData
  user?: User
}

interface ErrorsResponseData{
  [index:string]:[]
}

export interface UserForm {
  user: string
  password: string
}

export interface AlertsInterface {
  open: boolean,
  /**
  * Mensaje que tendra la alerta
  */
  mensaje: string
  onClose: () => void
  /**
  * Tipo de alerta
  */
  tipo: AlertColor
}

export interface RegisterUserForm{
    name: string,
    last_name: string,
    user: string,
    email: string,
    password: string
    password2: string
}

export interface alertState{

  open:boolean,
  mensaje:string
  tipo:AlertColor
}

export interface ControlFormLogin{
/**
 *Alternar entre formulario de registro y inicio
 * @returns 
 */
  handleClick:()=>void
}
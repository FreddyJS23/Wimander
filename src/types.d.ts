export interface tarjetaDashboardInterface {
  titulo: string,
  contenido: string,
  style: string

}

export interface CamposFormInterface {
  inputName: string,
  name: string,
  styleLabel?: string,
  styleInput?: string,
  type: string
  register: UseFormRegister,
  pattern?: ValidationRule<RegExp>
  required?: boolean
  maxLength?: number,
  minLength?: number,
  min?: number,
  max?: number
  errors: FieldErrors
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
  type?: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>>,
  style?: string
  value: string
  onClick?: () => void
  onSubmit?: (e) => void
  children?: React.DetailedHTMLProps
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
  user: string,
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
  user?: User
}


export interface UserForm {
  user: string
  password: string
}

export interface AlertsInterface {
  error: boolean,
  mensaje: string
  onClose: () => void
  errorType: AlertColor
}
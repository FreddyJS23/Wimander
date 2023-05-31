export interface tarjetaDashboardInterface{
    titulo:string,
    contenido:string,
    style:string

}

export interface CamposFormInterface{
    id:string,
    name:string,
    styleLabel?:string,
    styleInput?:string,
    type:string
    handleChange:(e)=>void,
    value:string

}

export interface RegistroLogin{
    nombre:string,
    apellido:string
    correo:string,
    usuario:string,
    password:string,
    password2:string,

}
export interface InicioLogin{
    usuario:string,
    password:string,
}

export interface ButtonInterface{
    type?:DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>>,
    style?:string 
    value:string
    onClick?:()=>void
    onSubmit?:(e)=>void
    children?:React.DetailedHTMLProps
}

export interface ElementSidebarInterface{
    children?:React.DetailedHTMLProps
    name:string,
    link:string,
    style:string
}

export interface ModalBaseInterface {
    children: React.ReactElement;
    encabezado: string;
    open:boolean
    handleClose:()=>void
  
  }
  
export interface ModalInterface {
    encabezado:string
    open:boolean
    handleClose:()=>void
    cliente:number
    
  }
  
export  interface User{
    user:string,
    token:string
  }
  
  
export  interface LoginContext{
    user:user
    handleLogin:()=>void
    handleLogout:()=>void
  }
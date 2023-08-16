import { GridRowId } from "@mui/x-data-grid"
import { HTMLInputTypeAttribute } from "react"

export type CamposFormInterface = {
  /**
   *id que tomara el input
   *
  *Nombre que tomara register
  *
  *id que tomara el label
   */
  inputName: string,
  /** Nombre del label */
  name: string,
  /**Estilo adicional del label
   * @default "label"
   */
  styleLabel?: string,
  /**Estilo adicional del input
   * @default "input"
   */
  styleInput?: string,
  /**Tipo de input*/
  type: HTMLInputTypeAttribute
  /** Hook para control del input */
  register: UseFormRegister,
  /** Expresión regular para el campo*/
  pattern?: ValidationRule<RegExp>
  /**Indica si el campo es requerido para la validación */
  required?: boolean
  /**Indica la longitud máxima que debe tener */
  maxLength?: number,
  /** Indica la longitud mínima que debe tener */
  minLength?: number,
  /**Indica el valor mínimo que debe tener */
  min?: number,
  /**Indica el valor máximo que debe tener */
  max?: number
  /**Objeto con los campos que no pasen su validación, para asignar un clase error al label */
  errors: FieldErrors
  /**Texto de ayuda en el tooltip */
  tip?: string | null
  /**Tipo de decoracion que tendra el input */
  decoracion?:'texto' | 'icono'
  /**Elemento decorativo */
element?:string

}

export type tarjetaDashboardInterface = {
  titulo: string,
  contenido: string,
  style: string
}

export type ButtonInterface = {
  /** Tipo de boton */
  type?: 'submit' | 'reset' | 'button' | undefined,
  /** Estilo adicional*/
  style?: string
  /** Texto que tendrá el botón  */
  value?: string
  /**Click en el boton
   * @param paramter - parámetro que recibirá la función click
   */
  onClick?: (paramater?) => void
  /**Submit */
  onSubmit?: (e) => void
  /** Componente que recibirá el botón*/
  children?: React.DetailedHTMLProps
  /**Estado de carga */
  loading?: boolean
  /**En caso que requiera enviar un parámetro para la función onClick */
  parameter?: number | string
}

/**Elemento lista del sidebar */
export type ElementSidebarInterface = {
  /**Contenido adicional que puede tener */
  children?: React.DetailedHTMLProps
  /**Titulo del elemento */
  name: string,
  /**Ruta a la que redireccionara */
  link: string,
  /**Estilo del elemento */
  style: string
}
/**Elemento botón lista del sidebar */
export type ButtonSidebarInterface={
   /**Contenido adicional que puede tener */
   children?: React.DetailedHTMLProps
   /**Titulo del elemento */
   name: string,
   /**Evento botón */
   onClick: (e:React.MouseEvent)=>void,
   /**Estilo del elemento */
   style: string
   /**Identificar el nombre del botón para apertura modales */
   id:string
} 

/**Modal personalizado */
export interface ModalInterface {
  /**Parámetro que recibirá el modal para hacer una petición a un endPoint */
  parameter?: GridRowId
  /**Titulo del modal */
  encabezado: string;
  /**Control de apertura del modal y su animación */
  open: boolean
  /**Cierra el modal actual */
  handleClose: () => void

}

/**Modal padre que envolverá el contenido */
export interface ModalBaseInterface extends ModalInterface {
  /**Contenido que tendrá el modal */
  children: React.ReactElement;
}

/**Animación base */
interface AnimacionBase {
  /**Elementos que tendrán una animación */
  children: React.ReactElement;
  in?: boolean;
  onClick?: ()=>void;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: ()=>void;
  
}

export interface AnimacionModalInterface extends AnimacionBase {
  
  in?: boolean;

}

/**Alerta personalizada */
export type AlertsInterface = {
  /** Determina si la alerta es visible o no */
  open: boolean,
  /** Mensaje que tendrá la alerta */
  mensaje: string
  /**Cierre de la alerta */
  onClose: () => void
  /**  Tipo de alerta */
  tipo: AlertColor
}

/**Iconos con las distintas acciones disponibles */
export type AccionesTablaInterface = {
  /**Click en icono para la distintas opciones
   * @param e Evento del click
   * @param  paramId parámetro con el id de la columna 
   */
  handleClick: (e: React.MouseEvent<HTMLImageElement>, paramId: GridRowId) => void
  /**Parámetro recibido de una columna de la tabla */
  paramId: GridRowId
}

/**Botones radio personalizados */
export type RadioButtonInterface = {
  /**Titulo que tendrá el botón */
  titulo: string;
  /**Nombre que tendrá el botón y recibirá el register */
  name: string;
  /**Valor de los distintos botones */
  value: string | number;
  /**Hook para el control del input */
  register: UseFormRegister
}

/**Interfaz del sidebar */
export type SidebarInterface = {
  /**Activar estilos para un sidebar responsive */
  responsive?:boolean
}
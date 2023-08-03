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
      * Hook para control del input
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
   
   export interface tarjetaDashboardInterface {
    titulo: string,
    contenido: string,
    style: string
  }
  
  export interface ButtonInterface {

    /** Tipo de boton */
   type?:'submit' | 'reset' | 'button' | undefined,
   /** Estilo adicional*/
   style?: string
   /** Entrada de texto  */
   value?: string
   onClick?: () => void
   onSubmit?: (e) => void
   /** Entrada de texto o un componente*/
   children?: React.DetailedHTMLProps
   /**Estado de carga */
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

  interface AnimacionContainer {
    children: React.ReactElement | JSXElementConstructor;
  }
  
  export interface AnimacionModalInterface extends AnimacionContainer {
    in?: boolean;
  
  }

  /**Alerta personalizada */
export interface AlertsInterface {
  /** Determina si la alerta es visible o no */
  open: boolean,
  /** Mensaje que tendra la alerta */
  mensaje: string
  onClose: () => void
  /**  Tipo de alerta */
  tipo: AlertColor
}


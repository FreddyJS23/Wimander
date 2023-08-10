import { AlertColor } from "@mui/material"

/**Context del usuario */
export interface AuthContextInterface {
    /**Informacion del usuario */
    user?: UserAuth
    /**Estado inicial del usuario */
    initialStateUser: UserAuth
    /**Cambio de estado del usuario */
    setUser: Dispatch<SetStateAction<UserAuth>>
  }

   /**Información del usuario */
export interface UserAuth {
    /** id que tiene en la bd  */
    id: string,
    /** Nombre que tiene en la bd  */
    name:string,
    /** Token de autorizacion para peticiones de los endPoints  */
    token: string
  }
  
  /**Estado de la alerta */
export interface AlertState{
  /**Determina si la alerta es visible o no */
   open:boolean,
   /**Mensaje de la alerta */
   mensaje:string
   /**Tipo de alerta */
   tipo:AlertColor
 }
  /**Estado de la alerta */
export interface AlertContextInterface{
  /**Estado actual de la alerta */
  alertState:AlertState
  /**Cambio de estado de la alerta */
  setAlertState:Dispatch<SetStateAction<AlertState>>
  /**Estado inicial de la alerta */
  initialAlertState:AlertState
 /**Cierre de la alerta */
  onClose:()=>void
 }
  
 
 /**Estado de la configuracion */
export interface ConfigState{
  /**Monto mensual de los usuarios */
   amount:number
 }
  /**Context de la configuracion */
export interface ConfigContextInterface{
  /**Configuraciones de la apliacion */
  configs:ConfigState
  /**Cambiar configuraciones de la apliacion */
  setConfigs:Dispatch<SetStateAction<ConfigState>>

 }

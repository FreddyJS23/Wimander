import { AlertColor } from "@mui/material"
import { Configs } from "."

/**Context del usuario */
export interface AuthContextInterface {
  /**Informacion del usuario */
  user?: UserAuth
  /**Estado inicial del usuario */
  initialStateUser: UserAuth
  /**Cambio de estado del usuario */
  setUser: Dispatch<SetStateAction<UserAuth>>
}


/**Estado de la alerta */
export interface AlertState {
  /**Determina si la alerta es visible o no */
  open: boolean,
  /**Mensaje de la alerta */
  mensaje: string
  /**Tipo de alerta */
  tipo: AlertColor
}

/**Contexto  de la alerta */
export interface AlertContextInterface {
  /**Estado actual de la alerta */
  alertState: AlertState
  /**Cambio de estado de la alerta */
  setAlertState: Dispatch<SetStateAction<AlertState>>
  /**Estado inicial de la alerta */
  initialAlertState: AlertState
  /**Cierre de la alerta */
  onClose: () => void
}


/**Context de la configuración */
export interface ConfigContextInterface {
  /**Configuraciones de la apliacion */
  configs: Configs
  /**Cambiar configuraciones de la aplicación */
  setConfigs: Dispatch<SetStateAction<ConfigState>>
}

import { AlertStateConst, AlertStateMsj } from "../types"

export const ALERT_ERROR:AlertStateConst = { open: true, tipo: 'error' }
export const ALERT_SUCCESS:AlertStateConst = { open: true, tipo: 'success' }
export const ALERT_MSJ_ERROR_408:AlertStateMsj = {mensaje:`Error 408: Sin conexión al servidor`}
export const ALERT_MSJ_CUSTOMER_CREATED:AlertStateMsj = {mensaje:"Cliente creado"}
export const ALERT_MSJ_CUSTOMER_EDITED:AlertStateMsj ={mensaje:"Cliente editado"}
export const ALERT_MSJ_USER_CREATED:AlertStateMsj = {mensaje:"Usuario creado"}
export const ALERT_MSJ_USER_EDITED:AlertStateMsj ={mensaje: "Usuario editado"}
export const ALERT_MSJ_USER_DELETE:AlertStateMsj ={mensaje: "Usuario eliminado"}
export const ALERT_MSJ_PASSWORDS_NOT_MATCH:AlertStateMsj ={mensaje: "Contraseña no coinciden"}
export const ALERT_MSJ_CONNECTION_EDITED:AlertStateMsj = {mensaje:"Se ha extendido la fecha de vencimiento"}
export const ALERT_MSJ_CONFIGURATION_SAVED:AlertStateMsj = {mensaje:"Se ha guardado la configuración"}
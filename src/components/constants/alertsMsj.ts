import { AlertStateConst } from "../../types";

export const ALERT_ERROR: AlertStateConst = { open: true, tipo: 'error' }
export const ALERT_SUCCESS: AlertStateConst = { open: true, tipo: 'success' }
export const ALERT_MSJ_ERROR_408 = `Error 408: Sin conexión al servidor`
export const ALERT_MSJ_CUSTOMER_CREATED = "Cliente creado"
export const ALERT_MSJ_CUSTOMER_EDITED = "Cliente editado"
export const ALERT_MSJ_USER_CREATED = "Usuario creado"
export const ALERT_MSJ_USER_EDITED = "Usuario editado"
export const ALERT_MSJ_CONNECTION_EDITED = "Se ha extendido la fecha de vencimiento"
export const ALERT_MSJ_CONFIGURATION_SAVED = "Se ha guardado la configuración"
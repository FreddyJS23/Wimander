import { AlertState } from ".";

/**Estado actual de la alerta */
export type AlertStateConst=Omit<AlertState,'mensaje'> 
/**Mensaje de la alerta */
export type AlertStateMsj=Pick<AlertState,'mensaje'> 
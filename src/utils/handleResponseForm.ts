import { GetErrorsResponse } from "../utils/GetErrorsResponse";
import { ALERT_ERROR, ALERT_MSJ_ERROR_408, ALERT_SUCCESS } from "../constants";
import { AlertState, AlertStateMsj, ErrorsResponseData, } from "../types";

/**Manejar respuesta del servidor al enviar formulario
 * @return Apertura de una alerta
 * @param status - Código de respuesta recibido del servidor
 * @param handleClose - Función que maneja el cierre del modal
 * @param setLoader - Función que cambia el estado de la carga del botón
 * @param setAlertState - Función que cambia el estado de la alerta 
 * @param success - Mensaje de operación exitosa en el modal
 * @param e - Evento submit del formulario
 * @param errors - Objecto con los nombres de los campos del formulario que hayan tenido un error 
 */
export const handleResponseForm = (
  status: number,
   handleClose: () => void,
   setLoader: React.Dispatch<React.SetStateAction<boolean>>, 
   setAlertState: React.Dispatch<React.SetStateAction<AlertState>>, 
   success: AlertStateMsj,
   e?: React.BaseSyntheticEvent,
   errors?: ErrorsResponseData ,
   ) => {

  //respuesta exitosa
  if (status == 200 || status == 201) {
    handleClose()
    setLoader(false)
    setAlertState({
      ...ALERT_SUCCESS,
      ...success
    });
    return e?.target.reset()
  }

  //Errores en los campos
  if (GetErrorsResponse(errors)) {
    setLoader(false)
    return setAlertState({
      ...ALERT_ERROR,
      mensaje: GetErrorsResponse(errors),
    });

  }

  //Errores del servidor
  if (status == 408) {
    setLoader(false)
    return setAlertState({
      ...ALERT_ERROR,
      ...ALERT_MSJ_ERROR_408
    });
  } else if (status != 200) {
    setLoader(false)
    return setAlertState({
      ...ALERT_ERROR,
      mensaje: `Error${status} - error `,
    });
  }

}
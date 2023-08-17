import { useContext, useState } from "react";
import { AlertContext } from "../../context/AlertContext";
import { ModalBase } from ".";
import style from "../../styles/modales.module.css";
import { Button } from "../Botones";
import { EliminarCliente } from "../../services/customer";
import { ModalInterface } from "../../types";
import alertOrangeIcon from "../../assets/alertaOrange.svg";

/**Modal para eliminar un cliente */
export const ModalDeleteClient = ({
  open,
  encabezado,
  handleClose,
  parameter,
}: ModalInterface) => {
  //Control alertas
  const { setAlertState } = useContext(AlertContext);
  const [loader, setLoader] = useState(false)

  //Eliminar cliente
  const onClick = async (cliente?: string | number) => {
    setLoader(true)
    const { data, status } = await EliminarCliente(cliente);

    //respuesta exitosa
    if (status == 200) {
      setAlertState({
        open: true,
        mensaje: `Cliente con un id ${data.customerID} eliminado`,
        tipo: "success",
      });
      handleClose()
    }

    //Errores del servidor
    if (status == 408) {
      return setAlertState({
        open: true,
        mensaje: `Error 408: Sin conexión al servidor`,
        tipo: "error",
      });
    } else if (status != 200) {
      return setAlertState({
        open: true,
        mensaje: `Error${status} - ${data.message} `,
        tipo: "error",
      });
    }
    setLoader(false)
  };

  return (
    <ModalBase encabezado={encabezado} open={open} handleClose={handleClose}>
      <div className={style["container-eliminar"]}>
        <div>
          <img src={alertOrangeIcon} alt="alerta" />
          <p>Tenga en cuenta que esta accion no se puede deshacer</p>
        </div>
        <Button
          onClick={onClick}
          parameter={parameter}
          value="Eliminar"
          style="buttonRed"
          loading={loader}
        />
      </div>
    </ModalBase>
  );
};

import { useContext, useState } from "react";
import { AlertContext } from "../../context/AlertContext";
import { ModalBase } from ".";
import style from "../../styles/modales.module.css";
import { Button } from "../Botones";
import { ModalInterface } from "../../types";
import alertOrangeIcon from "../../assets/alertaOrange.svg";
import { ALERT_MSJ_CUSTOMER_DELETE, ALERT_SUCCESS } from "../../constants";

/**Modal para eliminar un cliente */
export const ModalDeleteClient = ({
  open,
  encabezado,
  handleClose,
  parameter,
}: ModalInterface) => {
  //Control alertas
  const { setAlertState } = useContext(AlertContext);
  const [loader, setLoader] = useState(false);

  //Eliminar cliente
  const onClick = async () => {
    setLoader(true);
    setTimeout(() => {
      setAlertState({ ...ALERT_SUCCESS, ...ALERT_MSJ_CUSTOMER_DELETE });
      setLoader(false);
      handleClose();
    }, 1000);
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

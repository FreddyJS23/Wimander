import { Modal, Zoom } from "@mui/material";
import { ModalBaseInterface } from "../../types";
//import { AnimacionModal } from "../Animaciones";
import style from "../../styles/modales.module.css";
import cerrarIcon from "../../assets/cerrar.svg";
import { TIMED_ANIMATION_MODAL } from "../../constants";

/** estrucura principal del modal */
export const ModalBase = ({
  children,
  encabezado,
  open,
  handleClose,
}: ModalBaseInterface) => {
  return (
    <Modal open={open} closeAfterTransition onClose={handleClose}>
      <Zoom in={open} timeout={TIMED_ANIMATION_MODAL}>
        <div className={`${style["container-modal"]} `}>
          <div className={style["container-encabezado"]}>
            <p>{encabezado}</p>
            <img onClick={handleClose} src={cerrarIcon} alt="cerrar" />
          </div>
          <div className={style["container-cuerpo"]}>{children}</div>
        </div>
      </Zoom>
    </Modal>
  );
};

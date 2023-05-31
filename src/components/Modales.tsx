import { Fade, Modal } from "@mui/material";
import { useState } from "react";
import style from "../styles/modales.module.css";
import Button from "./Button";
import CamposForm from "./CamposForm";
import cerrarIcon from "../assets/cerrar.svg";
import { ModalBaseInterface, ModalInterface } from "../types";
import RadioButton from "./RadioButton";
import alertOrangeIcon from "../assets/alertaOrange.svg";

interface Props {
  modalBase: ModalBaseInterface;
  modal: ModalInterface;
}

// estrucura principal del modal
const ModalBase = ({
  children,
  encabezado,
  open,
  handleClose,
}: Props["modalBase"]) => {
  return (
    <Modal open={open} closeAfterTransition>
      <Fade in={open}>
        <div className={`${style["container-modal"]} `}>
          <div className={style["container-encabezado"]}>
            <p>{encabezado}</p>
            <img onClick={handleClose} src={cerrarIcon} alt="cerrar" />
          </div>
          <div className={style["container-cuerpo"]}>{children}</div>
        </div>
      </Fade>
    </Modal>
  );
};

//modal para editar cliente
export const ModalEditarClient = ({
  open,
  encabezado,
  handleClose,
  cliente,
}: Props["modal"]) => {
  /* aqui hiria una peticion para pedir la informacion dle cliente enviado el id del cliente
  obteniendo la infomacion llenar el state form*/
  const initialForm = { nombre: "", apellido: "", correo: "", telefono: "" };

  const [form, setForm] = useState(initialForm);

  const handleSubmit = () => {
    return;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <ModalBase encabezado={encabezado} open={open} handleClose={handleClose}>
      <form action="" className={style["formEdit"]} autoComplete="off">
        <div className={style["container-seccion"]}>
          <CamposForm
            id="nombre"
            type="text"
            name="Nombre"
            value={form.nombre}
            handleChange={handleChange}
          />
          <CamposForm
            id="apellido"
            type="text"
            name="Apellido"
            value={form.apellido}
            handleChange={handleChange}
          />
        </div>
        <div className={style["container-seccion"]}>
          <CamposForm
            id="correo"
            type="email"
            name="Correo"
            value={form.correo}
            handleChange={handleChange}
          />
          <CamposForm
            id="telefono"
            type="text"
            name="Telefono"
            value={form.telefono}
            handleChange={handleChange}
          />
        </div>
        <Button type={"submit"} onSubmit={handleSubmit} value="Editar" />
      </form>
    </ModalBase>
  );
};

// modal para expandir fecha
export const ModalExpandirFecha = ({
  open,
  encabezado,
  handleClose,
}: ModalInterface) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    return;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <ModalBase encabezado={encabezado} open={open} handleClose={handleClose}>
      <form action="" className={style["formExpandirFecha"]}>
        <div>
          <RadioButton
            handleChange={handleChange}
            name="fecha"
            titulo="Ampliar 15 dias"
            value={15}
          />
          <RadioButton
            handleChange={handleChange}
            name="fecha"
            titulo="Ampliar 30 dias"
            value={30}
          />
        </div>

        <Button type={"submit"} onSubmit={handleSubmit} value="Expandir" />
      </form>
    </ModalBase>
  );
};

// modal para eliminar cliente
export const ModalDeleteClient = ({
  open,
  encabezado,
  handleClose,
}: ModalInterface) => {
  return (
    <ModalBase encabezado={encabezado} open={open} handleClose={handleClose}>
      <div className={style["container-eliminar"]}>
        <div>
          <img src={alertOrangeIcon} alt="alerta" />
          <p>Tenga en cuenta que esta accion no se puede deshacer</p>
        </div>
        <Button value="Eliminar" style="buttonRed" />
      </div>
    </ModalBase>
  );
};

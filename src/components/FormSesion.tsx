import CamposForm from "./CamposForm";
import { useContext, useState } from "react";
import styles from "../styles/login.module.css";
import flechaButton from "../assets/right-arrow.svg";
import Button from "./Button";
import { AuthContext } from "../context/AuthContext";
import {  ControlFormLogin, UserForm, AlertState } from "../types/index";
import { useForm, SubmitHandler } from "react-hook-form";
import { Autenticar } from "../services/auth";
import Alerts from "./Alerts";


const FormSesion = ({ handleClick }: ControlFormLogin) => {
  const { setUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>();

  //estado de la alerta
  const [alertOpen, setAlertOpen] = useState<AlertState>({
    open: false,
    mensaje: "",
    tipo: "success",
  });

  //logica validacion de usuario
  const onSubmit: SubmitHandler<UserForm> = async (form) => {
    const { data, status } = await Autenticar(form);
   
    if (status == 200) setUser(data.user);
   
    else if (status == 408) setAlertOpen({ open: true,tipo:"error", mensaje: `${status}: error de conexion` });
   
    else setAlertOpen({ open: true,tipo:"success", mensaje: data.message });};
 

  //cierre de alerta
 
 
  const onClose = () => {
    setAlertOpen({ ...alertOpen, open: false });
  };
 
  return (
    <>
      <form
        action=""
        className={styles["formLoginInicio"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <CamposForm
          maxLength={20}
          minLength={3}
          required={true}
          inputName="user"
          name="Usuario"
          type="text"
          styleLabel="labelLogin"
          register={register}
          errors={errors}
         
        />
        <CamposForm
          maxLength={20}
          minLength={3}
          required={true}
          register={register}
          inputName="password"
          name="Contraseña"
          type="password"
          styleLabel="labelLogin"
          errors={errors}
          
        />
        <div className={styles["container-buttons"]}>
          <Button type={"submit"} value="Iniciar" style="buttonIniciarSesion">
            <img src={flechaButton} alt="icono flecha derecha" />{" "}
          </Button>

          <Button onClick={handleClick} value="Registrar" />
        </div>
      </form>
      <Alerts open={alertOpen.open} mensaje={alertOpen.mensaje} onClose={onClose} tipo={alertOpen.tipo} />
    </>
  );
};

export default FormSesion;

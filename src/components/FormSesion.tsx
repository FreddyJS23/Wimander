import InputLogin from "./CamposForm";
import { useContext, useState } from "react";
import styles from "../styles/login.module.css";
import flechaButton from "../assets/right-arrow.svg";
import Button from "./Button";
import { AuthContext } from "../context/AuthContext";
import {  UserForm } from "../types";
import { useForm, SubmitHandler } from "react-hook-form";
import { Autenticar } from "../services/auth";
import Alerts from "./Alerts";

interface Props {
  handleClick: () => void;
}

const FormSesion = ({ handleClick }: Props) => {
  const { setUser, user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>();

  //estado de error de alerta
  const [error, setError] = useState({ error: false, mensaje: "" });

  //logica validacion de usuario
  const onSubmit: SubmitHandler<UserForm> = async (form) => {
    const { data, status } = await Autenticar(form);
   
    if (status == 200) setUser(data.user);
   
    else if (status == 408) setError({ error: true, mensaje: `${status}: error de conexion` });
   
    else setError({ error: true, mensaje: data.message });};
 

  //cierre de alerta
  const onClose = () => {
    setError({ ...error, error: false });
  };
 
  return (
    <>
      <form
        action=""
        className={styles["formLoginInicio"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputLogin
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
        <InputLogin
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
      <Alerts error={error.error} mensaje={error.mensaje} onClose={onClose} errorType="error" />
    </>
  );
};

export default FormSesion;

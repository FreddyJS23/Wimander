import { ControlFormLogin, RegisterUserForm } from "../types/index";
import CamposForm from "./CamposForm";
import { useContext, useState } from "react";
import styles from "../styles/login.module.css";
import Button from "./Button";
import { useForm, SubmitHandler } from "react-hook-form";
import Alerts from "./Alerts";
import { createUser } from "../services/user";
import { GetErrorsResponse } from "../utils/GetErrorsResponse";
import { CircularProgress } from "@mui/material";
import { AlertContext } from "../context/AlertContext";

export const FormRegistroUsuario = ({ handleClick }: ControlFormLogin) => {
  //Control de formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterUserForm>({ defaultValues: { name: "", email: "" } });

  //Estado de la alerta
  const { setAlertState, alertState, onClose } = useContext(AlertContext);

  //Estado de carga del Boton
  const [loading, setLoading] = useState(false);

  //Envió de formulario
  const onSubmit: SubmitHandler<RegisterUserForm> = async (form, e) => {
    setLoading(true);
    const { data, status } = await createUser(form);
    const { errors } = data;
    //Comprobar si las contraseñas son iguales
    if (getValues("password") != getValues("password2")) {
      setAlertState({
        open: true,
        mensaje: "Las contraseñas no coinciden",
        tipo: "error",
      });
    }

    //Respuesta exitosa
    if (status == 201) {
      e?.target.reset();
      setAlertState({ open: true, mensaje: "usuario creado", tipo: "success" });
      setTimeout(() => {
        handleClick();
      }, 1000);
    }

    //Errores en los campos
    if (GetErrorsResponse(errors))
      setAlertState({
        open: true,
        mensaje: GetErrorsResponse(errors),
        tipo: "error",
      });

    //Errores del servidor
    if (status == 408) {
      setAlertState({
        open: true,
        mensaje: `Error 408: Sin conexión al servidor`,
        tipo: "error",
      });
    } else if (status != 200) {
      setAlertState({
        open: true,
        mensaje: `Error${status} - ${data.message} `,
        tipo: "error",
      });
    }

    setLoading(false);
  };

  return (
    <>
      <form
        action=""
        className={styles["formLoginRegistro"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <CamposForm
          type="text"
          register={register}
          inputName="name"
          name="Nombre"
          styleLabel="labelLogin"
          errors={errors}
          minLength={3}
          maxLength={25}
          tip={"Minimo 3 caracteres y maximo 25 "}
        />
        <CamposForm
          type="text"
          register={register}
          inputName="last_name"
          name="Apellido"
          styleLabel="labelLogin"
          errors={errors}
          minLength={3}
          maxLength={25}
          tip={"Minimo 3 caracteres y maximo 25 "}
        />
        <CamposForm
          type="text"
          register={register}
          inputName="email"
          name="Correo"
          styleLabel="labelLogin"
          errors={errors}
          pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
          tip={"Debe ser un correo valido"}
        />
        <CamposForm
          type="text"
          register={register}
          inputName="user"
          name="Usuario"
          styleLabel="labelLogin"
          errors={errors}
          minLength={3}
          maxLength={15}
          tip={"Minimo 3 caracteres y maximo 15 "}
        />
        <CamposForm
          type="password"
          register={register}
          inputName="password"
          name="Contraseña"
          styleLabel="labelLogin"
          errors={errors}
          minLength={7}
          maxLength={15}
          tip={"Minimo 7 caracteres y maximo 25 "}
        />
        <CamposForm
          type="password"
          register={register}
          inputName="password2"
          name="Repetir contraseña"
          styleLabel="labelLogin"
          errors={errors}
          minLength={7}
          maxLength={15}
          tip={"Deben coincidir"}
        />

        <div className={styles["container-buttons"]}>
          <Button loading={loading} type={"submit"} value={"Registrarse"} />
        </div>
      </form>
      <Alerts
        open={alertState.open}
        tipo={alertState.tipo}
        onClose={onClose}
        mensaje={alertState.mensaje}
      />
    </>
  );
};

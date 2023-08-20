import { ControlFormLogin, RegisterUserForm } from "../../types/index";
import { CamposForm } from "../Elements";
import { useContext, useState } from "react";
import styles from "../../styles/login.module.css";
import { Button } from "../Botones";
import { useForm, SubmitHandler } from "react-hook-form";
import { Alerts } from "../Elements/Alerts";
import { AlertContext } from "../../context/AlertContext";
import {
  ALERT_ERROR,
  ALERT_MSJ_USER_CREATED,
  ALERT_MSJ_PASSWORDS_NOT_MATCH,
  ALERT_SUCCESS,
} from "../../constants";

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
  const [loader, setLoader] = useState(false);

  //Envió de formulario
  const onSubmit: SubmitHandler<RegisterUserForm> = async (form, e) => {
    setLoader(true);

    //Comprobar si las contraseñas son iguales
    if (getValues("password") != getValues("password2")) {
      setLoader(false);
      return setAlertState({
        ...ALERT_ERROR,
        ...ALERT_MSJ_PASSWORDS_NOT_MATCH,
      });
    }
    setTimeout(() => {
      setAlertState({ ...ALERT_SUCCESS, ...ALERT_MSJ_USER_CREATED });
      setLoader(false);
      e?.target.reset();
    }, 1000);
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
          <Button loading={loader} type={"submit"} value={"Registrarse"} />
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

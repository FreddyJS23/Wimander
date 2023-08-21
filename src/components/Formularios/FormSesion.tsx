import { CamposForm } from "../Elements";
import { useContext, useState } from "react";
import styles from "../../styles/login.module.css";
import flechaButton from "../../assets/right-arrow.svg";
import { Button } from "../Botones";
import { AuthContext } from "../../context/AuthContext";
import { ControlFormLogin, UserForm } from "../../types/index";
import { useForm, SubmitHandler } from "react-hook-form";
import { Alerts } from "../Elements";
import { AlertContext } from "../../context/AlertContext";
import { useCookies } from "react-cookie";
import { ALERT_ERROR, CREDITIANLS, USER_SESSION } from "../../constants";
import { expiracionCookie } from "../../utils/expiracionCookie";

export const FormSesion = ({ handleClick }: ControlFormLogin) => {
  const { setUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>();

  //estado de la alerta
  const { setAlertState, onClose, alertState } = useContext(AlertContext);
  const { 1: setCookie } = useCookies();

  //Estado de carga boton
  const [loading, setLoading] = useState(false);
  //Envio de formulario
  const onSubmit: SubmitHandler<UserForm> = async (form) => {
    setLoading(true);

    if (
      form.user == CREDITIANLS.user &&
      form.password == CREDITIANLS.password
    ) {
      setTimeout(() => {
        setCookie("SessionUser", USER_SESSION, { path: "/",expires:expiracionCookie() });
        setUser(USER_SESSION);
        setLoading(false);
      }, 1000);
    } else {
      setLoading(false);
      setAlertState({
        ...ALERT_ERROR,
        mensaje: `Credenciales invalidas`,
      });
    }
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
          <Button
            type={"submit"}
            loading={loading}
            value="Iniciar"
            style="buttonIniciarSesion"
          >
            <img src={flechaButton} alt="icono flecha derecha" />{" "}
          </Button>

          <Button onClick={handleClick} value="Registrar" />
        </div>
      </form>
      <Alerts
        open={alertState.open}
        mensaje={alertState.mensaje}
        onClose={onClose}
        tipo={alertState.tipo}
      />
    </>
  );
};

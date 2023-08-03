import { ControlFormLogin, RegisterUserForm, alertState } from "../types/index";
import CamposForm from "./CamposForm";
import { useState } from "react";
import styles from "../styles/login.module.css";
import Button from "./Button";
import { useForm, SubmitHandler } from "react-hook-form";
import Alerts from "./Alerts";
import { createUser } from "../services/user";
import { GetErrorsResponse } from "../utils/GetErrorsResponse";
import { CircularProgress } from "@mui/material";


export const FormRegistroUsuario = ({ handleClick }: ControlFormLogin) => {
  //control de formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterUserForm>({ defaultValues: { name: "", email: "" } });

  //estado de la alerta
  const [alertOpen, setAlertOpen] = useState<alertState>({
    open: false,
    mensaje: "",
    tipo: "success",
  });

  //estado de carga del boton
  const [loading, setLoading] = useState(false);

  //logica validacion de registro
  const onSubmit: SubmitHandler<RegisterUserForm> = async (form, e) => {
    setLoading(true);
    //comprobar si contraeñas son iguales
    if (getValues("password") != getValues("password2")) {
      setLoading(false);
      return setAlertOpen({
        open: true,
        mensaje: "Las contraseñas no coinciden",
        tipo: "error",
      });
    }

    const { data, status } = await createUser(form);
    //error del servidor
    if (status == 408) {
      setLoading(false);
      return setAlertOpen({
        open: true,
        mensaje: "408: Sin conexion al servidor",
        tipo: "error",
      });
    }

    const { errors } = data;
    //obtener errores de los campos del servidor
    if (GetErrorsResponse(errors)) {
      setLoading(false);
      return setAlertOpen({
        open: true,
        mensaje: GetErrorsResponse(errors),
        tipo: "error",
      });
    } else if (status == 201) {
      e?.target.reset();
      setAlertOpen({ open: true, mensaje: "usuario creado", tipo: "success" });
      setTimeout(() => {
        handleClick();
      }, 1000);
    }
    setLoading(false);
  };

  //cierre de alerta
  const onClose = () => {
    setAlertOpen({ ...alertOpen, open: false });
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
          <Button loading={loading} type={"submit"}>
            {loading ? (
              <CircularProgress
                sx={{ color: "white" }}
                disableShrink={true}
                size={24}
                thickness={5}
              />
            ) : (
              "Registrar"
            )}
          </Button>
        </div>
      </form>
      <Alerts
        open={alertOpen.open}
        tipo={alertOpen.tipo}
        onClose={onClose}
        mensaje={alertOpen.mensaje}
      />
    </>
  );
};

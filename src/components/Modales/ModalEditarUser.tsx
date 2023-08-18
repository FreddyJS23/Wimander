import { useState, useContext } from "react";
import { AlertContext } from "../../context/AlertContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { GetErrorsResponse } from "../../utils/GetErrorsResponse";
import { ModalBase } from ".";
import style from "../../styles/modales.module.css";
import { CamposForm } from "../Elements";
import { Button } from "../Botones";
import { ModalInterface, UserUpdateForm } from "../../types";
import { ActualizarUser, GetUser } from "../../services/user";
import {ALERT_SUCCESS,ALERT_MSJ_USER_EDITED,ALERT_ERROR, ALERT_MSJ_ERROR_408} from '../constants'

/**Modal para editar usuario */
export const ModalEditarUser = ({
  open,
  encabezado,
  handleClose,
  parameter,
}: ModalInterface) => {
  //Control alertas
  const { setAlertState } = useContext(AlertContext);
  const [loader, setLoader] = useState(false);
  //Control formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserUpdateForm>({
    //Obtener valores de los campos para el formulario de forma asíncrona
    defaultValues: async () =>
      GetUser(parameter).then((res) => {
        const { id, name, last_name, user, email } = res.data.user;
        return {
          id,
          name,
          last_name,
          user,
          email,
          password: "",
          last_password: "",
        };
      }),
  });

  //Envió de formulario
  const onSubmit: SubmitHandler<UserUpdateForm> = async (form, e) => {
    setLoader(true);
    const { data, status } = await ActualizarUser(form.id, form);
    const { errors } = data;

    //respuesta exitosa
    if (status == 200) {
      e?.target.reset();
      setAlertState({
       ...ALERT_SUCCESS,
       ...ALERT_MSJ_USER_EDITED
      });
      handleClose()
    }

    //Errores en los campos
    if (GetErrorsResponse(errors)) {
      setLoader(false);
      return setAlertState({
        ...ALERT_ERROR,
        mensaje: GetErrorsResponse(errors),
      });
    }

    //Errores del servidor
    if (status == 408) {
      return setAlertState({
        ...ALERT_ERROR,
        ...ALERT_MSJ_ERROR_408
        
      });
    } else if (status != 200) {
      return setAlertState({
       ...ALERT_ERROR,
        mensaje: `Error${status} - ${data.message} `,
       
      });
    }
    setLoader(false);
  };

  return (
    <ModalBase encabezado={encabezado} open={open} handleClose={handleClose}>
      <form
        action=""
        className={style["formEdit"]}
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <div className={style["container-seccion"]}>
          <CamposForm
            type="text"
            register={register}
            inputName="name"
            name="Nombre"
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
            errors={errors}
            minLength={3}
            maxLength={25}
            tip={"Minimo 3 caracteres y maximo 25 "}
          />
        </div>

        <div className={style["container-seccion"]}>
          <CamposForm
            type="text"
            register={register}
            inputName="email"
            name="Correo"
            errors={errors}
            pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
            tip={"Debe ser un correo valido"}
          />
          <CamposForm
            type="text"
            register={register}
            inputName="user"
            name="Usuario"
            errors={errors}
            minLength={3}
            maxLength={15}
            tip={"Minimo 3 caracteres y maximo 15 "}
          />
        </div>
        <div className={style["container-seccion"]}>
          <CamposForm
            type="password"
            register={register}
            inputName="last_password"
            name="Contraseña anterior"
            errors={errors}
            minLength={7}
            maxLength={15}
          />
          <CamposForm
            type="password"
            register={register}
            inputName="password"
            name="Nueva contraseña"
            errors={errors}
            minLength={7}
            maxLength={15}
            tip={"Minimo 7 caracteres y maximo 25 "}
          />
        </div>

        <Button type={"submit"} value="Editar" loading={loader} />
      </form>
    </ModalBase>
  );
};

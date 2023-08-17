import { useContext, useState } from "react";
import { AlertContext } from "../../context/AlertContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { ModalBase } from ".";
import style from "../../styles/modales.module.css";
import { CamposForm } from "../Elements";
import { Button } from "../Botones";
import { ConfigsForm, ModalInterface } from "../../types";
import { GetConfigs, UpdateConfigs } from "../../services/config";
import { ConfigsContext } from "../../context/configurations";

/**Modal para cambiar configuracion dle usuario */
export const ModalSettings = ({
  open,
  encabezado,
  handleClose,
}: ModalInterface) => {
  //Control alertas
  const { setAlertState } = useContext(AlertContext);
  const { configs, setConfigs } = useContext(ConfigsContext);
  const [loader, setLoader] = useState(false)
  //Control formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfigsForm>({
    defaultValues: configs,
  });

  //Envió de formulario
  const onSubmit: SubmitHandler<ConfigsForm> = async (form, e) => {
    setLoader(true)
    const { data, status } = await UpdateConfigs(form);

    //respuesta exitosa
    if (status == 200 || status == 201) {
      const { data } = await GetConfigs();
      e?.target.reset();
      setConfigs(data.configs);
      setAlertState({
        open: true,
        mensaje: "Se ha guardado la configuración",
        tipo: "success",
      });
      handleClose();
    }

    //Errores del servidor
    if (status == 408) {
      return setAlertState({
        open: true,
        mensaje: `Error 408: Sin conexión al servidor`,
        tipo: "error",
      });
    } else if (status != 200) {
      return setAlertState({
        open: true,
        mensaje: `Error${status} - ${data.message} `,
        tipo: "error",
      });
    }
    setLoader(false)
  };

  return (
    <ModalBase encabezado={encabezado} open={open} handleClose={handleClose}>
      <form
        action=""
        className={style["formConfiguracion"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={style["container-seccion"]}>
          <CamposForm
            decoracion={"texto"}
            element={"$"}
            errors={errors}
            inputName="amount"
            name="Monto mensual"
            register={register}
            type="number"
            min={1}
            required={true}
            styleInput="inputSmall"
          />
        </div>
        <Button type={"submit"} onSubmit={handleSubmit} value="Guardar" />
      </form>
    </ModalBase>
  );
};

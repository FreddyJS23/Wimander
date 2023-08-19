import { useContext, useState } from "react";
import { AlertContext } from "../../context/AlertContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { ModalBase } from ".";
import style from "../../styles/modales.module.css";
import { CamposForm } from "../Elements";
import { Button } from "../Botones";
import { ConfigsForm, ModalInterface } from "../../types";
import { ConfigsContext } from "../../context/configurations";
import {ALERT_MSJ_CONFIGURATION_SAVED} from '../../constants'
import { handleResponseForm } from "../../utils/handleResponseForm";
import { UpdateConfigs } from "../../services/config";

/**Modal para cambiar configuracion dle usuario */
export const ModalSettings = ({
  open,
  encabezado,
  handleClose,
}: ModalInterface) => {
  //Control alertas
  const { setAlertState } = useContext(AlertContext);
  const { configs } = useContext(ConfigsContext);
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
    const {errors}=data
   
    handleResponseForm(status,handleClose,setLoader,setAlertState,ALERT_MSJ_CONFIGURATION_SAVED,e,errors)
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
        <Button type={"submit"} onSubmit={handleSubmit} value="Guardar" loading={loader} />
      </form>
    </ModalBase>
  );
};

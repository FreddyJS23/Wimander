import { useContext, useState } from "react";
import { AlertContext } from "../../context/AlertContext";
import { ExtendsConnectionFom, ModalInterface } from "../../types";
import { SubmitHandler, useForm } from "react-hook-form";
import { ModalBase } from ".";
import style from "../../styles/modales.module.css";
import { RadioButton } from "../Elements";
import { Button } from "../Botones";
import { ALERT_MSJ_CONNECTION_EDITED, ALERT_SUCCESS } from "../../constants";

/**Modal para expandir la fecha del cliente */
export const ModalExpandirFecha = ({
  open,
  encabezado,
  handleClose,
  parameter,
}: ModalInterface) => {
  //Control alertas
  const { setAlertState } = useContext(AlertContext);
  const [loader, setLoader] = useState(false);
  //Control formulario
  const { register, handleSubmit } = useForm<ExtendsConnectionFom>({
    defaultValues: { id: parameter },
  });

  //Envió de formulario
  const onSubmit: SubmitHandler<ExtendsConnectionFom> = async (_form, e) => {
    setLoader(true);
    setTimeout(() => {
      setAlertState({ ...ALERT_SUCCESS, ...ALERT_MSJ_CONNECTION_EDITED });
      setLoader(false);
      e?.target.reset();
      handleClose();
    }, 1000);
  };

  return (
    <ModalBase encabezado={encabezado} open={open} handleClose={handleClose}>
      <form
        action=""
        className={style["formExpandirFecha"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <RadioButton
            register={register}
            name="extendsDate"
            titulo="Ampliar 15 días"
            value={"15D"}
          />
          <RadioButton
            register={register}
            name="extendsDate"
            titulo="Ampliar 30 días"
            value={"30D"}
          />
        </div>
        <Button
          type={"submit"}
          onSubmit={handleSubmit}
          value="Expandir"
          loading={loader}
        />
      </form>
    </ModalBase>
  );
};

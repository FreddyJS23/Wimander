import { useContext } from "react";
import { AlertContext } from "../../context/AlertContext";
import { ExtendsConnectionFom, ModalInterface } from "../../types";
import { SubmitHandler, useForm } from "react-hook-form";
import { ModalBase } from ".";
import style from "../../styles/modales.module.css";
import { RadioButton } from "../Elements";
import { Button } from "../Botones";
import { extendsConnection } from "../../services/extendsConnection";

/**Modal para expandir la fecha del cliente */
export const ModalExpandirFecha = ({
  open,
  encabezado,
  handleClose,
  parameter,
}: ModalInterface) => {
  //Control alertas
  const { setAlertState } = useContext(AlertContext);

  //Control formulario
  const { register, handleSubmit } = useForm<ExtendsConnectionFom>({
    defaultValues: { id: parameter },
  });

  //Envió de formulario
  const onSubmit: SubmitHandler<ExtendsConnectionFom> = async (form, e) => {
    const { data, status } = await extendsConnection(form.id, form);

    //respuesta exitosa
    if (status == 200) {
      e?.target.reset();
      setAlertState({
        open: true,
        mensaje: "Se ha extendido la fecha de vencimiento",
        tipo: "success",
      });
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
        <Button type={"submit"} onSubmit={handleSubmit} value="Expandir" />
      </form>
    </ModalBase>
  );
};

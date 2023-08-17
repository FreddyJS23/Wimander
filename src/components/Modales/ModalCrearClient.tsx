import { useContext, useState } from "react";
import { AlertContext } from "../../context/AlertContext";
import { ConfigsContext } from "../../context/configurations";
import { CustomerRegister, ModalInterface } from "../../types";
import { SubmitHandler, useForm } from "react-hook-form";
import { CrearCliente } from "../../services/customer";
import { GetErrorsResponse } from "../../utils/GetErrorsResponse";
import { ModalBase } from ".";
import style from "../../styles/modales.module.css";
import { CamposForm, RadioButton } from "../Elements";
import { Button } from "../Botones";

/**Modal para crear cliente */
export const ModalCrearClient = ({
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
  } = useForm<CustomerRegister>({ defaultValues: { amount: configs.amount } });

  //Envió de formulario
  const onSubmit: SubmitHandler<CustomerRegister> = async (form, e) => {
    setLoader(true)
    const { data, status } = await CrearCliente(form);
    const { errors } = data;

    //respuesta exitosa
    if (status == 201) {
      e?.target.reset();
      setAlertState({
        open: true,
        mensaje: "Cliente creado",
        tipo: "success",
      });
      handleClose()
    }

    //Errores en los campos
    if (GetErrorsResponse(errors))
      return setAlertState({
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
    } else if (status != 201) {
      setAlertState({
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
        className={style["formRegister"]}
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <div className={style["container-seccion"]}>
          <CamposForm
            inputName="name"
            register={register}
            type="text"
            name="Nombre"
            maxLength={15}
            minLength={3}
            required={true}
            errors={errors}
          />
          <CamposForm
            inputName="last_name"
            register={register}
            type="text"
            name="Apellido"
            maxLength={15}
            minLength={3}
            required={true}
            errors={errors}
          />
        </div>
        <div className={style["container-seccion"]}>
          <CamposForm
            type="text"
            register={register}
            inputName="mac"
            name="Mac"
            errors={errors}
            tip={"Debe ser una direccion MAC valida"}
          />
          <CamposForm
            inputName="phone"
            register={register}
            type="text"
            name="Telefono"
            maxLength={15}
            minLength={3}
            required={true}
            errors={errors}
          />
        </div>

        <div className={style["container-seccion"]}>
          <CamposForm
            inputName="start_date"
            styleInput="start_date"
            register={register}
            type="date"
            name="Inicio del plan"
            required={true}
            errors={errors}
          />

          <div className={style["container-plan"]}>
            <p>Plan</p>
            <div className={style["container-radioButtons"]}>
              <RadioButton
                name="plan"
                register={register}
                titulo="15 días"
                value={"15D"}
              />
              <RadioButton
                name="plan"
                register={register}
                titulo="30 días"
                value={"30D"}
              />
            </div>
          </div>
        </div>

        <Button type={"submit"} value="Crear" loading={loader} />
      </form>
    </ModalBase>
  );
};

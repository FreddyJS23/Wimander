import { useContext } from "react";
import { AlertContext } from "../../context/AlertContext";
import { CustomerFormUpdate, ModalInterface } from "../../types";
import { SubmitHandler, useForm } from "react-hook-form";
import { GetErrorsResponse } from "../../utils/GetErrorsResponse";
import { ModalBase } from ".";
import style from "../../styles/modales.module.css";
import { CamposForm } from "../Elements";
import { Button } from "../Botones";
import { ActualizarCliente, GetCliente } from "../../services/customer";

/**Modal para editar cliente */
export const ModalEditarClient = ({
  open,
  encabezado,
  handleClose,
  parameter,
}: ModalInterface) => {
  //Control alertas
  const { setAlertState } = useContext(AlertContext);

  //Control formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerFormUpdate>({
    //Obtener valores de los campos para el formulario de forma asíncrona
    defaultValues: async () =>
      GetCliente(parameter).then((res) => {
        const { id, name, last_name, mac, phone } = res.data.customer;
        return { id, name, last_name, mac, phone };
      }),
  });

  //Envió de formulario
  const onSubmit: SubmitHandler<CustomerFormUpdate> = async (form, e) => {
    const { data, status } = await ActualizarCliente(form.id, form);
    const { errors } = data;

    //respuesta exitosa
    if (status == 200) {
      e?.target.reset();
      setAlertState({
        open: true,
        mensaje: "Cliente editado",
        tipo: "success",
      });
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
        className={style["formEdit"]}
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
        <Button type={"submit"} value="Editar" />
      </form>
    </ModalBase>
  );
};

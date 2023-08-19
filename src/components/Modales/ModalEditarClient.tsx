import { useContext, useState } from "react";
import { AlertContext } from "../../context/AlertContext";
import { CustomerFormUpdate, ModalInterface } from "../../types";
import { SubmitHandler, useForm } from "react-hook-form";
import { ModalBase } from ".";
import style from "../../styles/modales.module.css";
import { CamposForm } from "../Elements";
import { Button } from "../Botones";
import { ActualizarCliente, GetCliente } from "../../services/customer";
import { ALERT_MSJ_USER_EDITED} from '../../constants'
import { handleResponseForm } from "../../utils/handleResponseForm";

/**Modal para editar cliente */
export const ModalEditarClient = ({
  open,
  encabezado,
  handleClose,
  parameter,
}: ModalInterface) => {
  //Control alertas
  const { setAlertState } = useContext(AlertContext);
  //loader
  const [loader, setLoader] = useState(false)
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
    setLoader(true)
    const { data, status } = await ActualizarCliente(form.id, form);
    const { errors } = data;
    //manejo de respuesta 
    handleResponseForm(status,handleClose,setLoader,setAlertState,ALERT_MSJ_USER_EDITED,e,errors)
    
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
        <Button type={"submit"} value="Editar"  loading={loader}/>
      </form>
    </ModalBase>
  );
};

import { Modal } from "@mui/material";
import { useContext,useState } from "react";
import style from "../styles/modales.module.css";
import Button from "./Button";
import CamposForm from "./CamposForm";
import cerrarIcon from "../assets/cerrar.svg";
import {
  CustomerRegister,
  CustomerFormUpdate,
  ExtendsConnectionFom,
  ModalBaseInterface,
  ModalInterface,
  UserUpdateForm,
} from "../types/index";
import RadioButton from "./RadioButton";
import alertOrangeIcon from "../assets/alertaOrange.svg";
import { AnimacionModal } from "../components/AnimacionModal";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  ActualizarCliente,
  CrearCliente,
  EliminarCliente,
  GetCliente,
} from "../services/customer";
import { GetErrorsResponse } from "../utils/GetErrorsResponse";
import { AlertContext } from "../context/AlertContext";
import { extendsConnection } from "../services/extendsConnection";
import { ConfigsContext } from "../context/configurations";
import { ActualizarUser, GetUser } from "../services/user";

/** estrucura principal del modal */
const ModalBase = ({
  children,
  encabezado,
  open,
  handleClose,
}: ModalBaseInterface) => {
  return (
    <Modal open={open} closeAfterTransition onClose={handleClose}>
      <AnimacionModal in={open}>
        <div className={`${style["container-modal"]} `}>
          <div className={style["container-encabezado"]}>
            <p>{encabezado}</p>
            <img onClick={handleClose} src={cerrarIcon} alt="cerrar" />
          </div>
          <div className={style["container-cuerpo"]}>{children}</div>
        </div>
      </AnimacionModal>
    </Modal>
  );
};

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

/**Modal para editar usuario */
export const ModalEditarUser = ({
  open,
  encabezado,
  handleClose,
  parameter,
}: ModalInterface) => {
  //Control alertas
  const { setAlertState } = useContext(AlertContext);
  const [loader, setLoader] = useState(false)
  //Control formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserUpdateForm>({
    //Obtener valores de los campos para el formulario de forma asíncrona
    defaultValues: async () =>
      GetUser(parameter).then((res) => {
        const { id,name,last_name,user,email,} = res.data.user;
        return {  id,name,last_name,user,email,password:'',last_password:''};
      }),
  });

  //Envió de formulario
  const onSubmit: SubmitHandler<UserUpdateForm> = async (form, e) => {
    setLoader(true)
    const { data, status } = await ActualizarUser(form.id, form);
    const { errors } = data;
 
    //respuesta exitosa
    if (status == 200) {
      e?.target.reset();
      setAlertState({
        open: true,
        mensaje: "Usuario editado",
        tipo: "success",
      });
     
    }

    //Errores en los campos
    if (GetErrorsResponse(errors)){
      setLoader(false)
      return setAlertState({
        open: true,
        mensaje: GetErrorsResponse(errors),
        tipo: "error",
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
    setLoader(false)
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
       
        
        <Button type={"submit"} value="Editar" loading={loader}/>
      </form>
    </ModalBase>
  );
};

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

/**Modal para eliminar un cliente */
export const ModalDeleteClient = ({
  open,
  encabezado,
  handleClose,
  parameter,
}: ModalInterface) => {
  //Control alertas
  const { setAlertState } = useContext(AlertContext);

  //Eliminar cliente
  const onClick = async (cliente?: string | number) => {
    const { data, status } = await EliminarCliente(cliente);

    //respuesta exitosa
    if (status == 200) {
      setAlertState({
        open: true,
        mensaje: `Cliente con un id ${data.customerID} eliminado`,
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
      <div className={style["container-eliminar"]}>
        <div>
          <img src={alertOrangeIcon} alt="alerta" />
          <p>Tenga en cuenta que esta accion no se puede deshacer</p>
        </div>
        <Button
          onClick={onClick}
          parameter={parameter}
          value="Eliminar"
          style="buttonRed"
        />
      </div>
    </ModalBase>
  );
};

/**Modal para crear cliente */
export const ModalCrearClient = ({
  open,
  encabezado,
  handleClose,
}: ModalInterface) => {
  //Control alertas
  const { setAlertState } = useContext(AlertContext);
  const {configs}=useContext(ConfigsContext)
  
  //Control formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerRegister>({defaultValues:{amount:configs.amount}});

  //Envió de formulario
  const onSubmit: SubmitHandler<CustomerRegister> = async (form, e) => {
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

        <Button type={"submit"} value="Crear" />
      </form>
    </ModalBase>
  );
};

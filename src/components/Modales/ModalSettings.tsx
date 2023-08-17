import { useContext } from 'react';
import { AlertContext } from '../../context/AlertContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ModalBase } from '.';
import style from "../../styles/modales.module.css";
import {CamposForm} from '../Elements';
import { Button } from '../Botones';
import { ConfigsForm, ModalInterface } from '../../types';
import { GetConfigs, UpdateConfigs } from '../../services/config';
import { ConfigsContext } from '../../context/configurations';

/**Modal para cambiar configuracion dle usuario */
export const ModalSettings = ({
    open,
    encabezado,
    handleClose,
  }: ModalInterface) => {
    
    //Control alertas
    const { setAlertState } = useContext(AlertContext);
    const {configs,setConfigs}=useContext(ConfigsContext)

    //Control formulario
    const { register, handleSubmit,formState:{errors} } = useForm<ConfigsForm>({
      defaultValues:configs
    });
  
    //Envió de formulario
    const onSubmit: SubmitHandler<ConfigsForm> = async (form, e) => {
      const { data, status } = await UpdateConfigs(form);
  
      //respuesta exitosa
      if (status == 200 || status == 201) {
        
        const{data}=await GetConfigs()
        setConfigs(data.configs) 
        handleClose()
        setAlertState({
          open: true,
          mensaje: "Se ha guardado la configuración",
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
          className={style["formConfiguracion"]}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={style['container-seccion']}>
        <CamposForm decoracion={'texto'} element={'$'} errors={errors} inputName='amount' name='Monto mensual' register={register} type='number' min={1} required={true} styleInput='inputSmall'   />
          </div>
          <Button type={"submit"} onSubmit={handleSubmit} value="Guardar" />
        </form>
      </ModalBase>
    );
  };
  
  
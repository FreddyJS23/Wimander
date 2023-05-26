import InputLogin from "./CamposForm";
import { useState } from "react";
import styles from '../styles/login.module.css'
import flechaButton from '../assets/right-arrow.svg'
import Button from "./Button";

interface Props {
  handleClick: () => void;
}

const FormSesion = ({ handleClick }: Props) => {
  const initialState = { usuario: "", password: "" };

  const [form, setForm] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit=()=>{ return }

  return (
    
      <form action="" className={styles['formLoginInicio']}>
        <InputLogin
          handleChange={handleChange}
          value={form.usuario}
          id="usuario"
          name="Usuario"
        type="text"
        />
        <InputLogin
          handleChange={handleChange}
          value={form.password}
          id="password"
          name="Contraseña"
         type="password"
        />
        <div className={styles['container-buttons']}>
         
         <Button type={'submit'} onClick={handleSubmit} value="Iniciar" style="buttonIniciarSesion"     > <img src={flechaButton} alt="icono flecha derecha" /> </Button>
         
          <Button onClick={handleClick} value="Registrar" />
       
        </div>
      </form>
  
  );
};

export default FormSesion;



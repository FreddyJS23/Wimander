import InputLogin from "./CamposForm";
import { useContext, useState } from "react";
import styles from "../styles/login.module.css";
import flechaButton from "../assets/right-arrow.svg";
import Button from "./Button";
import { AuthContext } from "../App";

interface Props {
  handleClick: () => void;
}

const FormSesion = ({ handleClick }: Props) => {
  const initialState = { usuario: "", password: "" };

  const [form, setForm] = useState(initialState);

  const authContext = useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
//logica validacion de usuario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authContext?.handleLogin();
  };

  return (
    <form
      action=""
      className={styles["formLoginInicio"]}
      onSubmit={handleSubmit}
    >
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
      <div className={styles["container-buttons"]}>
        <Button type={"submit"} value="Iniciar" style="buttonIniciarSesion">
          {" "}
          <img src={flechaButton} alt="icono flecha derecha" />{" "}
        </Button>

        <Button onClick={handleClick} value="Registrar" />
      </div>
    </form>
  );
};

export default FormSesion;

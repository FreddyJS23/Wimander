import { RegistroLogin } from "../types";
import CamposForm from "./CamposForm";
import { useState } from "react";
import styles from "../styles/login.module.css";
import Button from "./Button";

export const FormRegistroUsuario = () => {
  const initialState = {
    nombre: "",
    apellido: "",
    correo: "",
    usuario: "",
    password: "",
    password2: "",
  };

  const [form, setForm] = useState<RegistroLogin>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    return;
  };

  return (
    <form action="" className={styles["formLoginRegistro"]}>
      <CamposForm
        type="text"
        value={form.nombre}
        handleChange={handleChange}
        id="nombre"
        name="Nombre"
      />
      <CamposForm
        type="text"
        value={form.apellido}
        handleChange={handleChange}
        id="apellido"
        name="Apellido"
      />
      <CamposForm
        type="text"
        value={form.correo}
        handleChange={handleChange}
        id="correo"
        name="Correo"
      />
      <CamposForm
        type="text"
        value={form.usuario}
        handleChange={handleChange}
        id="usuario"
        name="Usuario"
      />
      <CamposForm
        type="password"
        value={form.password}
        handleChange={handleChange}
        id="password"
        name="Contraseña"
      />
      <CamposForm
        type="password"
        value={form.password2}
        handleChange={handleChange}
        id="password2"
        name="Repetir contraseña"
      />

      <Button onClick={handleSubmit} value="Registrar" type={"submit"} />
    </form>
  );
};

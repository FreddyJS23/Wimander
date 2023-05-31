import FormSesion from "../components/FormSesion";
import { useState } from "react";
import { FormRegistroUsuario } from "../components/FormRegistroUsuario";
import Logo from "../assets/logo.svg";
import styles from "../styles/login.module.css";
import imagePrincipal from "../assets/imagen-login.svg";
import flechaIzquierda from "../assets/arrow-left.svg";
import LoaderSpinner from "../components/LoaderSpinner";

export const Login = () => {
  const [registrar, setRegistrar] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRegistrar(!registrar);
    }, 300);
  };

  return (
    <div className={styles["container-login"]}>
      <div className={styles["login-izquierdo"]}>
        <div className={styles["encabezado-izquierdo"]}>
          <p>Bienvenido a</p>
          <img
            src={Logo}
            alt="logo"
            className={`${styles["icono"]}, ${styles["icono-logo"]}`}
          />
        </div>
        <div className={styles["contenidoPrincipal"]}>
          <img
            className={styles["imagen"]}
            src={imagePrincipal}
            alt="icono imagen"
          />
          <p>LLevar el control de tus clientes nunca fue tan facil</p>
        </div>
        <div className={styles["footerLogin"]}>
          <p>By Freddy & Franyer</p>
        </div>
      </div>
      <div className={styles["login-derecho"]}>
        <div className={styles["encabezado-derecho"]}>
          {!registrar ? (
            <p>Iniciar seccion</p>
          ) : (
            <p>
              {" "}
              <img
                className={styles["flechaIzquierda"]}
                onClick={handleClick}
                src={flechaIzquierda}
                alt="regresar"
              />{" "}
              Registrarse
            </p>
          )}
        </div>

        <div className={styles["container-form"]}>
          {loading ? (
            <LoaderSpinner />
          ) : !registrar ? (
            <FormSesion handleClick={handleClick} />
          ) : (
            <FormRegistroUsuario />
          )}
        </div>
      </div>
    </div>
  );
};

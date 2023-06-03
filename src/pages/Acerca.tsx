import logoAzul from "../assets/logoAzul.svg";
import style from "../styles/acerca.module.css";
import iconoLinkedin from "../assets/linkedin.svg";
import iconoGithub from "../assets/github.svg";

const Acerca = () => {
  return (
    <div className={style["container-acerca"]}>
      <img src={logoAzul} alt="logo" />
      <p className={style["texto-principal"]}>
        Está diseñada para facilitar la gestión de los clientes conectados a tu
        red WiFi. Ofreciendo una solución eficiente para alertarte cuando sea
        necesario desconectar dispositivos no autorizados o no deseados de tu
        red.
      </p>
      <div className={style["texto-footer"]}>
        <b>Colaboradores:</b>
        <div className={style["colaboradores"]}>
          <p >Freddy Solarte</p> <img src={iconoLinkedin} alt="linkedin" /> <img src={iconoGithub} alt="github" />
        </div>
        <div className={style["colaboradores"]}>
          <p >Franyer Sanchez</p> <img src={iconoLinkedin} alt="linkedin" /> <img src={iconoGithub} alt="github" />
        </div>
      </div>
    </div>
  );
};

export default Acerca;

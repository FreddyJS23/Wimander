import logoAzul from "../assets/logoAzul.svg";
import style from "../styles/acerca.module.css";
import iconoLinkedin from "../assets/linkedin.svg";
import iconoGithub from "../assets/github.svg";
import {
  AnimacionContactoContainer,
  AnimacionContactoIcon,
  AnimacionLogo,
} from "../components/Animaciones";
import useDocumentTitle from "../utils/useDocumentTitle";

const Acerca = () => {
  //titulo pagina
  useDocumentTitle("Acerca");
  return (
    <div className={style["container-acerca"]}>
      <AnimacionLogo>
        <img src={logoAzul} alt="logo" />
      </AnimacionLogo>
      <p className={style["texto-principal"]}>
        Está diseñada para facilitar la gestión de los clientes conectados a tu
        red WiFi. Ofreciendo una solución eficiente para alertarte cuando sea
        necesario desconectar dispositivos no autorizados o no deseados de tu
        red.
      </p>
      <div className={style["texto-footer"]}>
        <b>Colaboradores:</b>
        <div className={style["colaboradores"]}>
          <p>Freddy Solarte</p>
          <AnimacionContactoContainer>
            {" "}
            <AnimacionContactoIcon>
             <a href="https://www.linkedin.com/in/freddy-solarte-b86175180" target="_blank"> <img src={iconoLinkedin} alt="linkedin" /></a>
            </AnimacionContactoIcon>{" "}
            <AnimacionContactoIcon>
              {" "}
             <a href="https://github.com/FreddyJS23" target="_blank" rel="noopener noreferrer"> <img src={iconoGithub} alt="github" /></a>
            </AnimacionContactoIcon>{" "}
          </AnimacionContactoContainer>
        </div>
        <div className={style["colaboradores"]}>
          <p>Franyer Sanchez</p>
          <AnimacionContactoContainer>
            {" "}
            <AnimacionContactoIcon>
              <img src={iconoLinkedin} alt="linkedin" />{" "}
            </AnimacionContactoIcon>{" "}
            <AnimacionContactoIcon>
              {" "}
              <img src={iconoGithub} alt="github" />
            </AnimacionContactoIcon>{" "}
          </AnimacionContactoContainer>
        </div>
      </div>
    </div>
  );
};

export default Acerca;

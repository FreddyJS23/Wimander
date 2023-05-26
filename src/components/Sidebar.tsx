import ElementsSidebar from "./ElementsSidebar";
import style from "../styles/sidebar.module.css";
import iconoDasboard from "../assets/dashboard.svg";
import iconoAbout from "../assets/about.svg";

const Sidebar = () => {
  const hanldeClick = () => {
    return;
  };
  return (
    <nav className={style["container-sidebar"]}>
      <div className={style["encabezado"]}>
        <div className={style["container-fotoPerfil"]}>
          <img src="" alt="foto perfil" />
        </div>
        <div className={style["container-usuario"]}>
          <p>Usuario</p>
        </div>
        <div className={style["container-salir"]}>
          Cerrar cesion <img src="" alt="icono salir" />
        </div>
      </div>

      <ul className={style["ListaOpciones"]}>
        <ElementsSidebar name="Dashboard" link="link" style={style["opcion"]}>
          <img src={iconoDasboard} alt="icono Dasboard" />
        </ElementsSidebar>
        <ElementsSidebar name="Acerca" link="link" style={style["opcion"]}>
          <img src={iconoAbout} alt="icono About" />
        </ElementsSidebar>

        <ElementsSidebar
          name="dashboard"
          link="Dashboard"
          style={style["opcion"]}
        ></ElementsSidebar>
      </ul>
    </nav>
  );
};

export default Sidebar;

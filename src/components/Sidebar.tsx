import ElementsSidebar from "./ElementsSidebar";
import style from "../styles/sidebar.module.css";
import iconoDashboard from "../assets/dashboard.svg";
import iconoAbout from "../assets/about.svg";
import BotonLogout from "./BotonCerrarSesion";
import iconoAvatar from "../assets/avatar.svg"
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Sidebar = () => {
  //logout
  const {handleLogout} = useContext(AuthContext);
  
  const hanldeClick = () => {
    handleLogout()
    return;
  };
  return (
    <nav className={style["container-sidebar"]}>
      <div className={style["sidebar"]}>
      <div className={style["encabezado"]}>
        <div className={style["container-fotoPerfil"]}>
          <img src={iconoAvatar} alt="foto perfil" />
        </div>
        <div className={style["container-usuario"]}>
          <p>Usuario</p>
        </div>
      
        <BotonLogout onClick={hanldeClick} />
       
      </div>

      <ul className={style["ListaOpciones"]}>
        <ElementsSidebar name="Dashboard" link="/" style={style["opcion"]}>
          <img src={iconoDashboard} alt="icono Dasboard" />
        </ElementsSidebar>
        <ElementsSidebar name="Acerca" link="acerca" style={style["opcion"]}>
          <img src={iconoAbout} alt="icono About" />
        </ElementsSidebar>

     
      </ul>
      </div>
    </nav>
  );
};

export default Sidebar;

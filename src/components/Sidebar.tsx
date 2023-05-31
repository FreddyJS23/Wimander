import ElementsSidebar from "./ElementsSidebar";
import style from "../styles/sidebar.module.css";
import iconoDasboard from "../assets/dashboard.svg";
import iconoAbout from "../assets/about.svg";
import BotonLogout from "./BotonCerrarSesion";
import iconoAvatar from "../assets/avatar.svg"
import { AuthContext } from "../App";
import { useContext } from "react";

const Sidebar = () => {
  //logout
  const authContext = useContext(AuthContext);
  
  const hanldeClick = () => {
    authContext?.handleLogout()
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
          <img src={iconoDasboard} alt="icono Dasboard" />
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

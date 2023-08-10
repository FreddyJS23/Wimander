import ElementsSidebar from "./ElementsSidebar";
import style from "../styles/sidebar.module.css";
import iconoDashboard from "../assets/dashboard.svg";
import iconoAbout from "../assets/about.svg";
import BotonLogout from "./BotonCerrarSesion";
import iconoAvatar from "../assets/avatar.svg";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import  logo from '../assets/logo.svg'


const Sidebar = ({responsive}:any) => {
  //logout
  const { setUser,initialStateUser } = useContext(AuthContext);
  const navigation = useNavigate();

  const hanldeClick = () => {
    setUser(initialStateUser)
    navigation("/");
    return;
  //logout
  const handleLogout =async () => {
    const {data}=await Logout()
    if(data.status) {  setUser(initialStateUser)
      navigation("/");}    
  };
  return (
    <nav className={`${style["container-sidebar"]} ${responsive ? style['sidebarResponsive'] : ''}  `}>
      <div className={style["sidebar"]}>
        <div className={style["encabezado"]}>
          <div className={style["container-fotoPerfil"]}>
            <img src={iconoAvatar} alt="foto perfil" />
          </div>
          <div className={style["container-usuario"]}>
            <p>Usuario</p>
          </div>

          <BotonLogout onClick={handleLogout} />
        </div>

        <ul className={style["ListaOpciones"]}>
          <ElementsSidebar name="Dashboard" link="/" style={style["opcion"]}>
            <img src={iconoDashboard} alt="icono Dasboard" />
          </ElementsSidebar>
          <ElementsSidebar name="Acerca" link="acerca" style={style["opcion"]}>
            <img src={iconoAbout} alt="icono About" />
          </ElementsSidebar>
        </ul>

        <div className={style["footer"]}>
          <div className={style["container-logo"]}>
            <img src={logo} alt="logo" />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Sidebar;

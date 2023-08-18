import { useState } from "react";
import { Logout } from "../../services/logout";
import { ElementsSidebar } from "../Elements";
import style from "../../styles/sidebar.module.css";
import iconoDashboard from "../../assets/dashboard.svg";
import iconoAbout from "../../assets/about.svg";
import iconoSetting from "../../assets/setting.svg";
import { BotonLogout } from "../Botones";
import iconoAvatar from "../../assets/avatar.svg";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { ModalEditarUser } from "../Modales";
import { ControlModal, SidebarInterface } from "../../types";
import { ButtonSidebar } from "../Botones/ButtonSidebar";
import { ModalSettings } from "../Modales/ModalSettings";
import { useCookies } from "react-cookie";

export const Sidebar = ({ responsive }: SidebarInterface) => {
  const { setUser, initialStateUser, user } = useContext(AuthContext);

  //Control modales
  const initialControModal = { modal: "", paramater: 0, open: false };
  const [controlModal, setControlModal] =
    useState<ControlModal>(initialControModal);
  const { 2: removeCookie } = useCookies();
 
  const onClose = () => {
    setControlModal({ ...controlModal, open: false });
    setTimeout(() => {
      setControlModal(initialControModal);
    }, 500);
  };
  const onClick = (e: React.MouseEvent) =>
    setControlModal({ modal: e.currentTarget.id, open: true });

  const navigation = useNavigate();

  //logout
  const handleLogout = async () => {
    const { data } = await Logout();
    if (data.status) {
      removeCookie("SessionUser");
      setUser(initialStateUser);
      navigation("/");
    }
  };
  return (
    <>
      <nav
        className={`${style["container-sidebar"]} ${
          responsive ? style["sidebarResponsive"] : ""
        }  `}
      >
        <div className={style["sidebar"]}>
          <div className={style["encabezado"]}>
            <div className={style["container-fotoPerfil"]}>
              <img src={iconoAvatar} alt="foto perfil" />
            </div>
            <div className={style["container-usuario"]}>
              <p id="editarUsuario" onClick={onClick}>
                {user?.name}
              </p>
            </div>

            <BotonLogout onClick={handleLogout} />
          </div>

          <ul className={style["ListaOpciones"]}>
            <ElementsSidebar name="Dashboard" link="/" style={style["opcion"]}>
              <img src={iconoDashboard} alt="icono Dasboard" />
            </ElementsSidebar>
            <ElementsSidebar
              name="Acerca"
              link="acerca"
              style={style["opcion"]}
            >
              <img src={iconoAbout} alt="icono About" />
            </ElementsSidebar>
            <ButtonSidebar
              id="configuracion"
              onClick={onClick}
              name="Configuracion"
              style={style["opcion"]}
            >
              <img src={iconoSetting} alt="icono configutacion" />
            </ButtonSidebar>
          </ul>

          <div className={style["footer"]}>
            <div className={style["container-logo"]}>
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </nav>

      {controlModal.modal == "editarUsuario" && (
        <ModalEditarUser
          encabezado="Editar usuario"
          open={controlModal.open}
          handleClose={onClose}
          parameter={user?.id}
        />
      )}
      {controlModal.modal == "configuracion" && (
        <ModalSettings
          encabezado="Configuracion"
          open={controlModal.open}
          handleClose={onClose}
        />
      )}
    </>
  );
};

import { useState } from 'react';
import { Logout } from '../../services/logout';
import {ElementsSidebar} from "../Elements";
import style from "../../styles/sidebar.module.css";
import iconoDashboard from "../../assets/dashboard.svg";
import iconoAbout from "../../assets/about.svg";
import {BotonLogout} from "../Botones";
import iconoAvatar from "../../assets/avatar.svg";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import  logo from '../../assets/logo.svg'
import { ModalEditarUser } from "../Modales";


 
  const { setUser,initialStateUser,user } = useContext(AuthContext);
 const [modalOpen, setModalOpen] = useState(false)
 
 const onClose=()=> setModalOpen(false)
 const onClick=()=> setModalOpen(true)
 
  const navigation = useNavigate();
 
 
  //logout
  const handleLogout =async () => {
    const {data}=await Logout()
    if(data.status) {  setUser(initialStateUser)
      navigation("/");}    
  };
  return (
   <>
    <nav className={`${style["container-sidebar"]} ${responsive ? style['sidebarResponsive'] : ''}  `}>
      <div className={style["sidebar"]}>
        <div className={style["encabezado"]}>
          <div className={style["container-fotoPerfil"]}>
            <img src={iconoAvatar} alt="foto perfil" />
          </div>
          <div className={style["container-usuario"]}>
            <p onClick={onClick}>{user?.name}</p>
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
 {modalOpen &&  <ModalEditarUser encabezado="Editar usuario" open={modalOpen} handleClose={onClose} parameter={user?.id}  />}
   </>
  );
};


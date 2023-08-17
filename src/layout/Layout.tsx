import { Suspense, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/navs/Sidebar";
import style from "../styles/layout.module.css";
import logo from "../assets/logo.svg";
import { PageLoading } from "../components/Loaders";
import { AnimacionesLayout } from "../components/Animaciones";
import { ButtonBurger } from "../components/Botones";
import { Drawer } from "@mui/material";
import { useState } from "react";
import { GetConfigs } from "../services/config";
import { ConfigsContext } from "../context/configurations";
import { ModalSettings } from "../components/Modales/ModalSettings";

const Layout = () => {
  const [sidebarResponsive, setSidebarResponsive] = useState<boolean>(false);
  const [cheked, setCheked] = useState(false);
  //revisar si existen configuraciones inciales
  const [configsInitials, setConfigsInitials] = useState(false);

  //cierre de sidebar responsive
  const handleClick = () => {
    setSidebarResponsive(!sidebarResponsive);
    setCheked(!cheked);
  };
  const handleClose = () => setConfigsInitials(false);
  const { setConfigs } = useContext(ConfigsContext);

  useEffect(() => {
    const request = async () => {
      const { data, status } = await GetConfigs();
      if (status == 200) {
        setConfigs(data.configs);
        setConfigsInitials(false);
      } else setConfigsInitials(true);
    };
    request();
  }, [setConfigs]);

  return configsInitials ? (
    <ModalSettings
      encabezado="Configuracion inicial"
      open={configsInitials}
      handleClose={handleClose}
    />
  ) : (
    <div className={style["container-principal"]}>
      <header>
        <Sidebar />
        {/* nav responsive */}
        <nav className={style["nav-responsive"]}>
          <div className={style["container-buttonBurger"]}>
            <ButtonBurger handleClick={handleClick} cheked={cheked} />
          </div>
        </nav>
        {/* sidebar responsive */}
        <Drawer open={sidebarResponsive} onClose={handleClick}>
          <Sidebar responsive={true} />
        </Drawer>
      </header>
      <main className={style["contenido"]}>
        <img className={style["logo-layout"]} src={logo} alt="logo" />

        {/* loader mientras se cargar los componentes diferidos */}
        <Suspense fallback={<PageLoading />}>
          <AnimacionesLayout>
            <Outlet />
          </AnimacionesLayout>
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;

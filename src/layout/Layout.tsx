import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import style from "../styles/layout.module.css";
import logo from "../assets/logo.svg";
import { PageLoading } from "../components/PageLoading";
import { AnimacionesLayout } from "../components/AnimacionesLayout";
import ButtonBurger from "../components/ButtonBurger";
import { Drawer } from "@mui/material";
import { useState } from "react";

const Layout = () => {
  const [sidebarResponsive, setSidebarResponsive] = useState<boolean>(false);
  const [cheked, setCheked] = useState(false);

  //cierre de sidebar responsive
  const handleClick = () => {
    setSidebarResponsive(!sidebarResponsive);
    setCheked(!cheked);
  };

  return (
    <div className={style["container-principal"]}>
      <Sidebar />

      <main className={style["contenido"]}>
        <img className={style["logo-layout"]} src={logo} alt="logo" />
        {/* contenido responsive */}
        <div className={style["container-buttonBurger"]}>
          <ButtonBurger handleClick={handleClick} cheked={cheked} />
        </div>
        <Drawer open={sidebarResponsive} onClose={handleClick}>
          <Sidebar responsive={true} />
        </Drawer>

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

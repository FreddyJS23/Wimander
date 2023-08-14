import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/navs/Sidebar";
import style from "../styles/layout.module.css";
import logo from "../assets/logo.svg";
import { PageLoading } from "../components/Loaders";
import { AnimacionesLayout } from "../components/Animaciones";
import { ButtonBurger } from "../components/Botones";
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

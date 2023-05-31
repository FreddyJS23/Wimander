import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import style from '../styles/layout.module.css'
import logo from '../assets/logo.svg'
export const Layout = () => {
  


  return (
   
    <div  className={style['container-principal']}>
    <Sidebar /> 
    
    <main className={style['contenido']}>
    <img className={style['logo-layout']} src={logo} alt="logo" />
    <Outlet />
    
  
    </main>


    
    </div>

    
  );
};

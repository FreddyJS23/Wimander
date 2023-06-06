import {Suspense} from 'react'
import {  Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import style from '../styles/layout.module.css'
import logo from '../assets/logo.svg'

import { PageLoading } from '../components/PageLoading'

import { AnimacionesLayout } from '../components/AnimacionesLayout'



 const Layout = () => {
  



  return (
   
    <div  className={style['container-principal']}>
    <Sidebar /> 
   
    <main className={style['contenido']}>
    <img className={style['logo-layout']} src={logo} alt="logo" />
    
   
  
         
 {/* loader mientras se cargar los componentes diferios */}
 <Suspense fallback={ <PageLoading />} > 

 <AnimacionesLayout>

        <Outlet />
 </AnimacionesLayout>


   
        
      
          
     
    
        </Suspense> 
      
  
    </main>


    
    </div>

    
  );
};

export default Layout
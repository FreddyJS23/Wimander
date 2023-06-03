
import { Card, CardContent } from '@mui/material'
import { TarjetasDasboard } from '../components/TarjetasDasboard'
import style from '../styles/dashboard.module.css'
import styleTable from '../styles/tablas.module.css'

import Tabla from '../components/Tabla'

 const Dashboard = () => {
  return (
    <>
  
   <div className={style['container-dashboard']}>

   <div className={style['container-tarjetasDashoboard']}>
      
       <Card >
     
     <CardContent className={style['contenidoTarjeta']}>
     <TarjetasDasboard titulo={'titulo'} contenido={'contenido'} style={style['tituloTarjeta']} />
     </CardContent>
    
       </Card>
      
       <Card >
     
     <CardContent className={style['contenidoTarjeta']}>
     <TarjetasDasboard titulo={'titulo'} contenido={'contenido'} style={style['tituloTarjeta']} />
     </CardContent>
    
       </Card>
      
       <Card >
     
     <CardContent className={style['contenidoTarjeta']}>
     <TarjetasDasboard titulo={'titulo'} contenido={'contenido'} style={style['tituloTarjeta']} />
     </CardContent>
    
       </Card>
      
      
     
       
        {/* <TarjetasDasboard titulo={'titulo'} contenido={'contenido'} style={style['tarjeta-dashboard']} />
        <TarjetasDasboard titulo={'titulo'} contenido={'contenido'} style={style['tarjeta-dashboard']} /> */}
    </div>
   
   
    <div className={styleTable['container-tablaCliente']}>
  
       <Tabla />


    </div>
    



   </div>
    


    </>
  )
}

export default Dashboard

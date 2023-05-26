
import { tarjetaDashboardInterface } from '../types'

interface Props{
   tarjetaDashboard:tarjetaDashboardInterface
}

export const TarjetasDasboard = ({titulo,contenido,style}:Props['tarjetaDashboard']) => {
  return (
    <div className={style}>
        <h2>{titulo}</h2>
        <p>{contenido}</p>
    </div>
  )
}


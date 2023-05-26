
import { TarjetasDasboard } from '../components/TarjetasDasboard'
import style from '../styles/dashboard.module.css'

export const Dashboard = () => {
  return (
    <>
  
   <div className={style['container-dashboard']}>

   <div className={style['container-tarjetasDashoboard']}>
        <TarjetasDasboard titulo={'titulo'} contenido={'contenido'} style={style['tarjeta-dashboard']} />
        <TarjetasDasboard titulo={'titulo'} contenido={'contenido'} style={style['tarjeta-dashboard']} />
        <TarjetasDasboard titulo={'titulo'} contenido={'contenido'} style={style['tarjeta-dashboard']} />
    </div>
   
   
    <div className={style['container-tabla']}>
    <table>
      <thead>
        <th>nombre</th>
        <th>nombre</th>
        <th>nombre</th>
        <th>nombre</th>
        <th>nombre</th>
      </thead>
      <tbody>
      <tr>
        <td>fdffd</td>
        <td>fdffd</td>
        <td>fdffd</td>
        <td>fdffd</td>
        <td>fdffd</td>
      </tr>
      <tr>
        <td>fdffd</td>
        <td>fdffd</td>
        <td>fdffd</td>
        <td>fdffd</td>
        <td>fdffd</td>
      </tr>
      <tr>
        <td>fdffd</td>
        <td>fdffd</td>
        <td>fdffd</td>
        <td>fdffd</td>
        <td>fdffd</td>
      </tr>
      <tr>
        <td>fdffd</td>
        <td>fdffd</td>
        <td>fdffd</td>
        <td>fdffd</td>
        <td>fdffd</td>
      </tr>
      </tbody>
    </table>
    </div>
    



   </div>
    


    </>
  )
}

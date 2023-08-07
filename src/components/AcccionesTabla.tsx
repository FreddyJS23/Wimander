import iconoDelete from "../assets/delete.svg";
import iconoEdit from "../assets/editar.svg";
import iconoCalender from "../assets/calendario.svg";
import style from "../styles/accionesTabla.module.css";
import { AccionesTablaInterface } from "../types";


const AcccionesTabla = ({ handleClick,paramId }: AccionesTablaInterface) => {

  return (
    <div className={style["container-accionesTabla"]}>
      <img
        onClick={(e)=> handleClick(e,paramId)}
        src={iconoDelete}
        alt="Eliminar"
        id="eliminar"
      />
      <img onClick={(e)=> handleClick(e,paramId)} src={iconoEdit} alt="Editar" id="editar" />
      <img
        onClick={(e)=> handleClick(e,paramId)}
        src={iconoCalender}
        alt="Calendario"
        id="calendario"
      />
    </div>
  );
};

export default AcccionesTabla;

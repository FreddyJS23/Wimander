import iconoDelete from "../assets/delete.svg";
import iconoEdit from "../assets/editar.svg";
import iconoCalender from "../assets/calendario.svg";
import style from "../styles/accionesTabla.module.css";
import { AccionesTablaInterface } from "../types";


const AcccionesTabla = ({ handleClick,paramId }: AccionesTablaInterface) => {

  return (
    <div className={style["container-accionesTabla"]}>
      <img
        onClick={handleClick}
        src={iconoDelete}
        alt="Eliminar"
        id="eliminar"
      />
      <img onClick={handleClick} src={iconoEdit} alt="Editar" id="editar" />
      <img
        onClick={handleClick}
        src={iconoCalender}
        alt="Calendario"
        id="calendario"
      />
    </div>
  );
};

export default AcccionesTabla;

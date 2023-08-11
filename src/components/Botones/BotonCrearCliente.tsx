import icono from "../../assets/plus-icon.svg";
import style from "../../styles/botonCrearCliente.module.css";

interface Props {
  onClick: () => void;
}

export const BotonCrearCliente = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className={style["boton"]}>
      <div className={style["container-icono"]}>
        <img src={icono} alt="salir" />
      </div>
      <p className={style["texto"]}>Crear cliente</p>
    </button>
  );
};



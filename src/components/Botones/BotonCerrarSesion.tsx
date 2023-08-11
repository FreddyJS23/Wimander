import icono from "../../assets/salir.svg";
import style from "../../styles/botonLogut.module.css";

interface Props {
  onClick: () => void;
}

export const BotonLogout = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className={style["boton"]}>
      <div className={style["container-icono"]}>
        {" "}
        <img src={icono} alt="salir" />{" "}
      </div>

      <p className={style["texto"]}>Salir</p>
    </button>
  );
};



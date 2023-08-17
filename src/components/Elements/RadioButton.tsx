import style from "../../styles/radioButton.module.css";
import { RadioButtonInterface } from "../../types";

export const RadioButton = ({
  titulo,
  name,
  value,
  register
}: RadioButtonInterface) => {
  return (
    <div className={style["container"]}>
      <label className={style["cl-checkbox"]}>
        <input {...register(name,{required:true})} value={value} type="radio" />
        <span>
          <span className={style["texto"]}>{titulo}</span>
        </span>
      </label>
    </div>
  );
};

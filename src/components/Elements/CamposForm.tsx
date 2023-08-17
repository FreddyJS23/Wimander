import { CamposFormInterface } from "../../types";
import styles from "../../styles/CampoForm.module.css";
import { Tooltip } from "@mui/material";

export const CamposForm = ({
  inputName,
  name,
  styleLabel = "label",
  styleInput = "input",
  type,
  max,
  maxLength,
  min,
  minLength,
  pattern,
  register,
  errors,
  required,
  tip = null,
  element,
  decoracion,
}: CamposFormInterface) => {
  return (
    <>
      <Tooltip
        classes={{
          popper: styles["toolTipError"],
          tooltipPlacementBottom: styles["toolTipError"],
        }}
        title={tip}
        placement="bottom-end"
      >
        <div className={styles["container-campos"]}>
          {decoracion && (
            <div className={styles["decoracion"]}>
              {decoracion == "texto" ? (
                <p>{element}</p>
              ) : (
                <img src={element} alt="icono" />
              )}
            </div>
          )}
          <input
            className={`${styles["input"]} ${styles[styleInput]}  ${
              decoracion && styles["inputWithDecoracion"]
            }`}
            type={type}
            id={inputName}
            {...register(inputName, {
              pattern: pattern,
              required: required,
              maxLength: maxLength,
              minLength: minLength,
              min: min,
              max: max,
            })}
            required={true}
            placeholder=" "
          />
          <label
            className={`${styles["label"]} ${styles[styleLabel]} ${
              errors[inputName] && styles["labelError"]
            } ${decoracion && styles["labelWithDecoracion"]} `}
            htmlFor={inputName}
          >
            {name}
          </label>
        </div>
      </Tooltip>
    </>
  );
};

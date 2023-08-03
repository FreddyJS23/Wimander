import { CamposFormInterface } from "../types/index";
import styles from "../styles/CampoForm.module.css";
import { Tooltip } from "@mui/material";

interface Props {
  camposForm: CamposFormInterface;
}

const CamposForm = ({
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
}: Props["camposForm"]) => {
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
          <input
            className={`${styles["input"]} ${styles[styleInput]}`}
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
            } `}
            htmlFor={inputName}
          >
            {name}
          </label>
        </div>
      </Tooltip>
    </>
  );
};

export default CamposForm;

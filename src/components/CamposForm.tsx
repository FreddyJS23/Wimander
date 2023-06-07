import { CamposFormInterface } from "../types";
import styles from "../styles/CampoForm.module.css";

interface Props {
  camposForm: CamposFormInterface;
}

const CamposForm = ({
  id,
  name,
  styleLabel = "label",
  styleInput = "input",
  type,
  handleChange,
  value,
}: Props["camposForm"]) => {
  return (
    <>
      <div className={styles["container-campos"]}>
        <input
          onChange={handleChange}
          className={`${styles["input"]} ${styles[styleInput]}`}
          type={type}
          name={id}
          id={id}
          value={value}
          required={true}
          placeholder=" "
        />
        <label
          className={`${styles["label"]} ${styles[styleLabel]}`}
          htmlFor={id}
        >
          {name}
        </label>
      </div>
    </>
  );
};

export default CamposForm;

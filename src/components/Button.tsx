import { ButtonInterface } from "../types";
import styles from "../styles/buttons.module.css";

interface Props {
  button: ButtonInterface;
}

const Button = ({
  type = "button",
  style = "button",
  value,
  onClick,
  onSubmit,
  children,
}: Props["button"]) => {
  return (
    <>
      <button
        onClick={onClick}
        onSubmit={onSubmit}
        type={type}
        className={`${styles["button"]} ${styles[style]} `}
      >
        {value} {children}{" "}
      </button>
    </>
  );
};

export default Button;

import { ButtonInterface } from "../types/index";
import styles from "../styles/buttons.module.css";

const Button = ({
  type = "button",
  style = "button",
  value,
  onClick=()=>void{},
  onSubmit,
  children,
  loading,
  parameter,
}: ButtonInterface) => {
  return (
    <>
      <button
        onClick={()=>onClick(parameter) }
        onSubmit={onSubmit}
        type={type}
        className={`${styles["button"]} ${styles[style]} `}
       disabled={loading}
      >
        {value} {children}
      </button>
    </>
  );
};

export default Button;

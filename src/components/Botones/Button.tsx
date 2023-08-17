import { ButtonInterface } from "../../types/index";
import styles from "../../styles/buttons.module.css";
import { CircularProgress } from "@mui/material";

export const Button = ({
  type = "button",
  style = "button",
  value,
  onClick = () => void {},
  onSubmit,
  children,
  loading = false,
  parameter,
}: ButtonInterface) => {
  return (
    <>
      <button
        onClick={() => onClick(parameter)}
        onSubmit={onSubmit}
        type={type}
        className={`${styles["button"]} ${styles[style]} `}
        disabled={loading}
      >
        {loading && (
          <CircularProgress
            sx={{ color: "white" }}
            disableShrink={true}
            size={24}
            thickness={5}
          />
        )}
        {!loading && value} {!loading && children}
      </button>
    </>
  );
};

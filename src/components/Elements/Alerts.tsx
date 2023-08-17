import { Alert, Snackbar } from "@mui/material";
import { AlertsInterface } from "../../types/index";

export const Alerts = ({ open, mensaje, onClose, tipo }: AlertsInterface) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
      <Alert severity={tipo}>{mensaje}</Alert>
    </Snackbar>
  );
};

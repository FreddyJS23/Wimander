import { Alert, Snackbar } from "@mui/material";
import { AlertsInterface } from "../types";

const Alerts = ({ error, mensaje, onClose,errorType }: AlertsInterface) => {
  return (
    <Snackbar open={error} autoHideDuration={3000} onClose={onClose}>
      <Alert severity={errorType}>{mensaje}</Alert>
    </Snackbar>
  );
};

export default Alerts;

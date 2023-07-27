import { Alert, Snackbar } from "@mui/material";
import { Alerts } from "../types";

const Alerts = ({ error, mensaje, onClose,errorType }: Alerts) => {
  return (
    <Snackbar open={error} autoHideDuration={3000} onClose={onClose}>
      <Alert severity={errorType}>{mensaje}</Alert>
    </Snackbar>
  );
};

export default Alerts;

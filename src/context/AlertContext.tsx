import { createContext, useState } from "react";
import { AlertContextInterface, AlertState } from "../types";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const initialAlertState: AlertState = {
  open: false,
  mensaje: "",
  tipo: "error",
};

const initialAlertContext: AlertContextInterface = {
  alertState: initialAlertState,
  setAlertState: () => void {},
  initialAlertState: initialAlertState,
  onClose: () => void {},
};

export const AlertContext =
  createContext<AlertContextInterface>(initialAlertContext);

export const AlertContextProvider = ({ children }: Props) => {
  const [alertState, setAlertState] = useState<AlertState>(initialAlertState);
  const onClose = () => setAlertState({ ...alertState, open: false });

  const alertContext: AlertContextInterface = {
    alertState,
    setAlertState,
    initialAlertState,
    onClose,
  };

  return (
    <AlertContext.Provider value={alertContext}>
      {children}
    </AlertContext.Provider>
  );
};

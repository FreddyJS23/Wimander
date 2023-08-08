import { createContext, useState } from "react";
import { ConfigContextInterface, ConfigState } from "../types";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const initialConfigs: ConfigState = {
  amount: 3,
};

const initialConfigsContext: ConfigContextInterface = {
  configs: initialConfigs,
  setConfigs: () => void {},
};

export const ConfigsContext = createContext<ConfigContextInterface>(
  initialConfigsContext
);

export const ConfigsContextProvider = ({ children }: Props) => {
  const [configs, setConfigs] = useState<ConfigState>(initialConfigs);

  const configsContext: ConfigContextInterface = {
    configs,
    setConfigs,
  };

  return (
    <ConfigsContext.Provider value={configsContext}>
      {children}
    </ConfigsContext.Provider>
  );
};

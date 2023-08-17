import { createContext, useState } from "react";
import { ConfigContextInterface,Configs } from "../types";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const initialConfigs: Configs = {
  amount: 0,
};

const initialConfigsContext: ConfigContextInterface = {
  configs: initialConfigs,
  setConfigs: () => void {},
};

export const ConfigsContext = createContext<ConfigContextInterface>(
  initialConfigsContext
);

export const ConfigsContextProvider = ({ children }: Props) => {
  const [configs, setConfigs] = useState<Configs>(initialConfigs);

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

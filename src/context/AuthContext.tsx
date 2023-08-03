import { createContext, useState } from "react";
import { AuthContextInterface, User } from "../types/index";


const initialContext: AuthContextInterface = {
 initialStateUser:{ id: "",name:"", token: "" },
 setUser:() => void{}
};

interface Props {
  children: JSX.Element | JSX.Element[];
}
/* los contexto se tienen que tipar con lo que se vaya enviar 
en caso de no tener uno inicial se inicia undefined */
//Crear contexto
export const AuthContext = createContext<AuthContextInterface >(initialContext);

AuthContext.displayName = "Context Display Name";
//Crear Provider
const AuthProvider = ({ children }: Props) => {
  //operaciones que se quieren tener en un contexto global
  const initialStateUser = {id: "",name:"", token: "" };
  const [user, setUser] = useState<User>(initialStateUser);

  //Enviar operaciones al provider, debe ir tipadas dichas operaciones a enviar
  const auth: AuthContextInterface = { user,setUser,initialStateUser};

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

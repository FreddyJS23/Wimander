import {  createContext, useState } from "react";
import { AuthContextInterface, User } from "../types";

const initialContext:AuthContextInterface={
    user:{user:'',token:''},
    handleLogin: function (): void {
        throw new Error("Function not implemented.");
    },
    handleLogout: function (): void {
        throw new Error("Function not implemented.");
    }
}


interface Props{
    children:JSX.Element | JSX.Element[]
}
/* los contexto se tienen que tipar con lo que se vaya enviar 
en caso de no tener uno inicial se inicia undefined */
//Crear contexto
 export const AuthContext = createContext<AuthContextInterface>(initialContext);

 AuthContext.displayName="Context Display Name"
//Crear Provider
const AuthProvider = ({ children }:Props) => {
 //operaciones que se quieren tener en un contexto global
  const initialState = { user: "", token: "" };
  const [user, setUser] = useState<User>(initialState);
  
  
  const handleLogin = () => {
    setUser({ ...user, token: "login" });
  };
  
  const handleLogout = () => {
    
    setUser({ ...user, token: "" });
  };
  //Enviar operaciones al provider, debe ir tipadas dichas operaciones a enviar
  const auth: AuthContextInterface = { user, handleLogin, handleLogout };

  return <AuthContext.Provider  value={auth} >{children}</AuthContext.Provider>;
};

export default AuthProvider;




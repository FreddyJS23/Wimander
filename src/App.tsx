import { createContext, useState } from "react";
import { Login } from "./pages/Login.tsx";
import { Routes, Route,useNavigate } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard.tsx";
import { Layout } from "./components/Layout.tsx";
import Acerca from "./pages/Acerca.tsx";
import { LoginContext, User } from "./types";
import ErrorRuta from "./components/ErrorRuta.tsx";

//los contexto se tienen que tipar con lo que se vaya enviar 
//en caso de no tene uno inicial se inicia undefined
const AuthContext = createContext<LoginContext | undefined>(undefined);

function App() {
  
  const initialState = { user: "", token: "" };
  const [user, setUser] = useState<User>(initialState);
const navigate=useNavigate();
  const handleLogin = () => {
    setUser({ ...user, token: "login" });
  };
  const handleLogout = () => {
   
    navigate("/");
     setUser({ ...user, token: "" });
  };

  const login: LoginContext = { user, handleLogin, handleLogout };

  return (
     <AuthContext.Provider value={login}>
    <Routes>
       <Route path="*" element={<ErrorRuta />}/>
        <Route path="/" element={!user.token ? <Login /> :  <Layout /> }>
          <Route index element={<Dashboard />} />
          <Route path="Acerca" element={<Acerca />} />
        
        </Route>
    
    </Routes>
    </AuthContext.Provider>
  );
}

export default App;

export {AuthContext}

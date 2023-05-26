import { useState } from "react";
import { Login } from "./pages/Login.tsx";
import { Routes, Route } from "react-router-dom";
import {Dashboard} from  "./pages/Dashboard.tsx";
import { Layout } from "./components/Layout.tsx";
import Acerca from "./pages/Acerca.tsx";

function App() {
  const initialState = { user: "", token: "3" };

  const [user, setUser] = useState(initialState);

  return (
    <Routes>
      <Route path="/" element={user.token ? <Layout /> : <Login />}>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Acerca" element={<Acerca />} />
      </Route>
    </Routes>
  );
}

export default App;

import {  useContext,lazy } from "react";
import Login from "../pages/Login";
const Layout= lazy(()=> import ("./Layout")  )   

import { AuthContext } from "../context/AuthContext";


const LayoutPrivate = () => {
  const { user } = useContext(AuthContext);




  return (
    <>
      {!user.token ? <Login /> : <Layout /> }
    </>
  );
};

export default LayoutPrivate;

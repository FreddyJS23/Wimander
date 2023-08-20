import { useContext, lazy, useEffect  } from "react";
import Login from "../pages/Login";
import { useCookies } from "react-cookie";
const Layout = lazy(() => import("./Layout"));

import { AuthContext } from "../context/AuthContext";

const LayoutPrivate = () => {
  const { user, setUser } = useContext(AuthContext);
  const { 0: cookie } = useCookies();

  cookie["SessionUser"] && setUser(cookie["SessionUser"]);

  
  return <>{user?.token ? <Layout /> : <Login />}</>;
};

export default LayoutPrivate;

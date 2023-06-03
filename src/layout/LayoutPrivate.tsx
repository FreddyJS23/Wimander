import {  useContext, useEffect, useState } from "react";
import Login from "../pages/Login";
import Layout from "./Layout";
import { AuthContext } from "../context/AuthContext";
import LoaderSpinner from "../components/LoaderSpinner";
import { Backdrop } from "@mui/material";

const LayoutPrivate = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(true);

  useEffect(() => {
    !user.token ? setLogin(true) : setLogin(false);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("loader inacitvo");
    }, 300);
  }, [user]);

  return (
    <>
      {loading ? (
        <Backdrop open={loading}>
          <LoaderSpinner />{" "}
        </Backdrop>
      ) : login ? (
        <Login />
      ) : (
        <Layout />
      )}
    </>
  );
};

export default LayoutPrivate;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
//tipos css dataGrid
import type {} from "@mui/x-data-grid/themeAugmentation";
//idioma de la tabla
import { esES } from "@mui/x-data-grid";

import { createContext, useState } from "react";
import { Login } from "./pages/Login.tsx";
import { Routes, Route,useNavigate } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard.tsx";
import { Layout } from "./components/Layout.tsx";
import Acerca from "./pages/Acerca.tsx";
import { LoginContext, User } from "./types";
import ErrorRuta from "./components/ErrorRuta.tsx";

const AuthContext = createContext<LoginContext | undefined>(undefined);

const themeCard = {
  styleOverrides: {
    root: {
      width: "13.125rem",
      height: "6.25rem",
      boxShadow: "0px 0px 9px 2px rgba(0, 231, 255, 0.63)",
      borderRadius: "13px",
    },
  },
};

const theme = createTheme(
  {
    palette: { primary: { main: "#00e7ff" }, secondary: { main: "#009eff" } },

    components: {
      MuiCard: themeCard,
      MuiFormControlLabel: {
        styleOverrides: {
          label: { fontWeight: "700" },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: { fontWeight: "700" },
          focused:{color:'red'}
        },
      },
      MuiDataGrid: {
        styleOverrides: {
          columnHeaders: { background: "#00e7ff", borderRadius: "10px" },
          iconSeparator: { color: "#009eff" },
          root: { border: "none" },
          columnHeaderTitle: { fontWeight: "700" },
          "cell--textLeft": {
            cursor: "default",
            "&:focus": { outline: "none" },
          },
        },
      },
    },
  },
  esES
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

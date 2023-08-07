import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
//tipos css dataGrid
import type {} from "@mui/x-data-grid/themeAugmentation";
//idioma de la tabla
import { esES } from "@mui/x-data-grid";
import AuthProvider from "./context/AuthContext.tsx";
import { router } from "./routes/index.tsx";
import DisplayLoader from "./components/DisplayLoader.tsx";
import {
  themePalette,
  themeCard,
  themeBackdrop,
  themeDataTable,
  themeLinearProgress,
} from "./utils/themesMui.ts";
import { AlertContextProvider } from "./context/AlertContext.tsx";

const theme = createTheme(
  {
    palette: themePalette,
    components: {
      MuiCard: themeCard,
      MuiLinearProgress: themeLinearProgress,
      MuiBackdrop: themeBackdrop,
      MuiDataGrid: themeDataTable,
    },
  },
  esES
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Suspense fallback={<DisplayLoader />}>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <AlertContextProvider>
        <RouterProvider router={router} />
        </AlertContextProvider>
      </AuthProvider>
    </ThemeProvider>
  </Suspense>
);

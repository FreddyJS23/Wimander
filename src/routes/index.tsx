import { lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LayoutPrivate from "../layout/LayoutPrivate";

//carga diferida de componentes, es decir seran llamados cuando se necesiten
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Acerca = lazy(() => import("../pages/Acerca"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="./" element={<LayoutPrivate />}>
      <Route index element={<Dashboard />} />
      <Route path="Acerca" element={<Acerca />} />
    </Route>
  )
);

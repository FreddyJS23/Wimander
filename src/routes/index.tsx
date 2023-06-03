import {lazy} from 'react'
import { createBrowserRouter } from "react-router-dom";
import LayoutPrivate from "../layout/LayoutPrivate";
//carga diferida de componentes, es decir seran llamados cuando se necesiten
const Dashboard=lazy(()=> import("../pages/Dashboard"))
const Acerca=lazy(()=> import('../pages/Acerca'))


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPrivate />,
    children: [{
      index: true,
      element: <Dashboard />,
    },
    {
      path: "/Acerca",
      element: <Acerca />,
    },
      
    ], 
  },
]);


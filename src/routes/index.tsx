import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import Acerca from "../pages/Acerca";
import LayoutPrivate from "../layout/LayoutPrivate";


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


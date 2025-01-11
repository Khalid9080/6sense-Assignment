import { createBrowserRouter } from "react-router-dom";
import Main_Layout from "../Layout/Main_Layout";
import Home from "../Components/Home";
import Dashboard from "../Components/Dashboard";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main_Layout />,
      children: [
        {
            path: "/",
            element: <Home />,
        },
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>,
        }
      ]
    },
  ]);
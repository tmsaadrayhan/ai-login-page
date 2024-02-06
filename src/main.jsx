import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Pages/Layout/Main";
import Login from "./Pages/Login/Login";
import Start from "./Pages/Start/Start";
import SignUp from "./Pages/SignUp/SignUp";
import Loading from "./Pages/Loading/Loading";
import Welcome from "./Pages/Welcome/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Start></Start>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/loading",
        element: <Loading></Loading>,
      },
    ],
  },
  {
    path: "/welcome",
    element: <Welcome></Welcome>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import {
    createBrowserRouter,
  } from "react-router-dom";
// import UpdateForm from "../components/UpdateForm";
import Home from "../pages/Home";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    // {
    //     path: "/UpdateFormPage",
    //     element: <UpdateForm />,
    //   },
  ]);
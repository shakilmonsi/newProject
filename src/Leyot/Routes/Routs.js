import { createBrowserRouter } from "react-router-dom";
import Appointment from "../../pahes/Appointment/Appointment";
import Home from "../../pahes/Home/Home/Home";
import Login from "../../Shared/Login/Login";
import Main from "../Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "appointment",
        element: <Appointment></Appointment>,
      },
    ],
  },
]);
export default router;

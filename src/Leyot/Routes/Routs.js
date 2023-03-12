import { createBrowserRouter } from "react-router-dom";
import Appointment from "../../pahes/Appointment/Appointment";
import Home from "../../pahes/Home/Home/Home";
import About from "../../Shared/about/About";
import Dashboard from "../../Shared/Dashboard/Dashbord";
import Login from "../../Shared/Login/Login";
import Signup from "../../Shared/Signup/Signup";
import Main from "../Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            {" "}
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;

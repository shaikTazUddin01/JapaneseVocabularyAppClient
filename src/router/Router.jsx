import { createBrowserRouter } from "react-router-dom";

import UserLayout from "../layout/UserLayout";
import Lessons from "../pages/UserView/Lessons";
import Tutorials from "../pages/UserView/Tutorials";
import Login from "../pages/Auth/Login";
import Registration from "../pages/Auth/Registration";
import ProtectedRouter from "./ProtectedRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRouter><UserLayout /></ProtectedRouter>,
    children: [
      {
        path: "",
        element: <Lessons />,
      },
      {
        path: "tutorials",
        element: <Tutorials />,
      },
    ],
  },
  // auth pages
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
]);

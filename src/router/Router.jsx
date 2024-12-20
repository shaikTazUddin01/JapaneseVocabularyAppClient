import { createBrowserRouter } from "react-router-dom";

import UserLayout from "../layout/UserLayout";
import Lessons from "../pages/UserView/Lessons";
import Tutorials from "../pages/UserView/Tutorials";
import Login from "../pages/Auth/Login";
import Registration from "../pages/Auth/Registration";
import ProtectedRouter from "./ProtectedRouter";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/Admin/Dashboard";
import ManageUser from "../pages/Admin/ManageUser";
import CreateLesson from "../pages/Admin/CreateLesson";
import ManageLesson from "../pages/Admin/ManageLesson";
import CreateVocabulary from "../pages/Admin/CreateVocabulary";
import ManageVacabulary from "../pages/Admin/ManageVacabulary";
import VocabularyPage from "../pages/UserView/Vocabulary";
import CreateTutorial from "../pages/Admin/CreateTutorial";
import ManageTutorial from "../pages/Admin/ManageTutorial";
import AdminProtectedRouter from "./AdminProtectedRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRouter>
        <UserLayout />
      </ProtectedRouter>
    ),
    children: [
      {
        path: "",
        element: <Lessons />,
      },
      {
        path: `lesson/:id`,
        element: <VocabularyPage />,
      },
      {
        path: "tutorials",
        element: <Tutorials />,
      },
    ],
  },
  {
    path: "/admin",
    element:<AdminProtectedRouter> <AdminLayout /> </AdminProtectedRouter>,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "manageUser",
        element: <ManageUser />,
      },
      {
        path: "createLesson",
        element: <CreateLesson />,
      },
      {
        path: "manageLesson",
        element: <ManageLesson />,
      },
      {
        path: "createVocabulary",
        element: <CreateVocabulary />,
      },
      {
        path: "manageVocabulary",
        element: <ManageVacabulary />,
      },
      {
        path: "createTutorial",
        element: <CreateTutorial />,
      },
      {
        path: "manageTutorial",
        element: <ManageTutorial />,
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

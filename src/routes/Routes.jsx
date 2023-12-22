import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../layout/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import TaskForm from "../Pages/dashboard/TaskForm";
import Profile from "../Pages/dashboard/Profile";
import Todo from "../Pages/dashboard/ToDo";
import About from "../Pages/About";
import Gallery from "../Pages/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "profiles",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "taskForm",
        element: (
          <PrivateRoutes>
            <TaskForm></TaskForm>
          </PrivateRoutes>
        ),
      },
      {
        path: "todo",
        element: (
          <PrivateRoutes>
            <Todo></Todo>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;

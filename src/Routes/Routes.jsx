import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../Pages/HomeScreen/HomeScreen";
import Profile from "../Pages/Profile/Profile";
import LoginScreen from "../Pages/LoginScreen/LoginScreen";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../Layout/MainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: <HomeScreen></HomeScreen>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginScreen></LoginScreen>,
      },
    ],
  },
]);

export default router;

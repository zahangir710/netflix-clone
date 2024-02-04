import { createBrowserRouter } from "react-router-dom";
import MainLayou from "../Layout/MainLayout/mainLayou";
import HomeScreen from "../Pages/HomeScreen/HomeScreen";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayou></MainLayou>,
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
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;

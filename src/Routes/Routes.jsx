import { createBrowserRouter } from "react-router-dom";
import MainLayou from "../Layout/MainLayout/mainLayou";
import HomeScreen from "../Pages/HomeScreen/HomeScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayou></MainLayou>,
    children: [
      {
        path: "",
        element: <HomeScreen></HomeScreen>,
      },
    ],
  },
]);

export default router;

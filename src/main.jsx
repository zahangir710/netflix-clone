import React from "react";
import ReactDOM from "react-dom/client";
import router from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-screen">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

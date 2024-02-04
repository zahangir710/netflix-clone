import { Outlet } from "react-router-dom";
import "./MainLayout.css";

function MainLayou() {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
}

export default MainLayou;

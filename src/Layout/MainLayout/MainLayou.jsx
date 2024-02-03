import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "./MainLayout.css";

function MainLayou() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default MainLayou;

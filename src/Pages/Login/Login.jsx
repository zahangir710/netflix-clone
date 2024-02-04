import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  // Nvigation after successful login
  // navigate(location?.state ? location.state : "/")
  return <div className="login">This is login</div>;
}

export default Login;

import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [show, setShow] = useState(false);
  const transitionHeader = () => {
    if (window.scrollY > 150) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionHeader);
    return () => window.removeEventListener("scroll", transitionHeader);
  }, []);

  return (
    <nav className={`header ${show && "header-black"}`}>
      <div className="header-content">
        <img
          className="header-logo"
          src="https://cdn.freebiesupply.com/logos/large/2x/netflix-2-logo-png-transparent.png"
          alt="logo"
        />
        <img
          className="header-avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avator"
        />
      </div>
    </nav>
  );
}

export default Header;

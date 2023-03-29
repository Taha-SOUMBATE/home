import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../image/logo.png";
export default function Header() {
  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <header className={fix ? "navbar" : ""}>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <nav className="menu">
        <ul className="menu-list">
          <li className="menu-list-items">
            <NavLink className="menu-list-NavLink " to="/router">
              <span className="text-color ">Home</span>
            </NavLink>
          </li>
          <li className="menu-list-items">
            <NavLink className="menu-list-NavLink" to="/">
              <span className="text-color">Services</span>
            </NavLink>
          </li>
          <li className="menu-list-items">
            <NavLink className="menu-list-NavLink" to="/works">
              <span className="text-color">Works</span>
            </NavLink>
          </li>
          <li className="menu-list-items">
            <NavLink className="menu-list-NavLink" to="/contact2-us">
              <span className="text-color">contact2</span>
            </NavLink>
          </li>
          <li className="menu-list-items">
            <NavLink className="menu-list-NavLink" to="/contact-us">
              <span className="text-color">Contact</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="btn">Hire Me</button>
    </header>
  );
}

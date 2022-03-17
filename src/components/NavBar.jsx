import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active algo" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/user"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashoard
        </NavLink>
      </li>
    </ul>
  );
}

export default NavBar;

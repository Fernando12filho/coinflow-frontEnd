import "./style.css";
import user from "../../images/user.svg";
import Logo from "../../images/Logo.svg";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const { setAuth } = useAuth();

  // TODO: Create component logout so it can be reused
  // TODO: Add on logout to clear local storage
  // TODO: Get user name from backend
  // TODO: Add user name to the header
  
  function logout() {
    setAuth({});
    // Optional: call Flask logout route to clear HttpOnly cookies
    axios.post("/auth/logout", {}, { withCredentials: true });
    localStorage.clear();
  }

  return (
    <div className="header">
      {/* Logo section */}
      <NavLink to="/">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <p>CoinFlow</p>
        </div>
      </NavLink>
      <div className="nav">
        <NavLink
          to="/Newsletter"
        >
          Newsletter
        </NavLink>
        <NavLink
          to="/InvoiceMK"
        >
          Invoice MK
        </NavLink>
        <NavLink
          to="/Forum"
        >
          Forum
        </NavLink>
      </div>
      {/* User info and logout */}
      <div className="username-logout">
        <div className="username">
          <img src={user} alt="User" />
          {/* Display username from userInfo prop */}
          <p></p>
        </div>
        {/* Logout button */}
        <button onClick={logout}>Log Out</button>
      </div>
    </div>
  );
}

export default Header;

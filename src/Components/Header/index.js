import "./style.css";
import userImg from "../../images/user.svg";
import Logo from "../../images/Logo.svg";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const { setAuth, user } = useAuth();

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
          onClick={(e) => e.preventDefault()}
          className="disabled-link"
        >
          Newsletter
        </NavLink>
        <NavLink
          to="/InvoiceMK"
          onClick={(e) => e.preventDefault()}
          className="disabled-link"
        >
          Invoice MK
        </NavLink>
        <NavLink
          to="/Forum"
          onClick={(e) => e.preventDefault()}
          className="disabled-link"
        >
          Forum
        </NavLink>
      </div>
      {/* User info and logout */}
      <div className="username-logout">
        <div className="username">
          <img src={userImg} alt="User" />
          {/* Display username from userInfo prop */}
          {/* <p>{user.username}</p> */}
        </div>
        {/* Logout button */}
        <button onClick={logout}>Log Out</button>
      </div>
    </div>
  );
}

export default Header;

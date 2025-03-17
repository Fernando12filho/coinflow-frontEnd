import { useEffect, useState } from "react";
import "./style.css";
import user from "../../images/user.svg";
import Logo from "../../images/Logo.svg";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import React from "react";



function Header() {
  const { setAuth } = useAuth()
  function logout() {
    setAuth({})
    // Optional: call Flask logout route to clear HttpOnly cookies
    axios.post('/auth/logout', {}, { withCredentials: true });
  }


  return (
    <div className="header">
      {/* Logo section */}
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <p>CoinFlow</p>
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

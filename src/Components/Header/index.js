import React from "react";
import "./style.css";
import user from "../../images/user.svg";
import Logo from "../../images/Logo.svg";
import axios from "../../api/axios";


function Header() {

  function logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  
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

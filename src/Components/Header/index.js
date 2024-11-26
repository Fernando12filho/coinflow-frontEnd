import React from "react";
import "./style.css";
import user from "../../images/user.svg";
import Logo from "../../images/Logo.svg";

function Header({ onLogoutSuccess, userInfo }) {
  async function handleLogout(e) {
    e.preventDefault();
    onLogoutSuccess(); // Call the logout function passed as a prop
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
          <p>{userInfo.user}</p>
        </div>
        {/* Logout button */}
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}

export default Header;

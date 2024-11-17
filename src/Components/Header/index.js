import React from "react";
import "./style.css";
import user from "../../images/user.svg";
import Logo from "../../images/Logo.svg";

function Header({ onLogoutSuccess, userData }) {
  async function handleLogout(e) {
    e.preventDefault();
    onLogoutSuccess();
  }
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <p>CoinFlow</p>
      </div>
      <div className="username-logout">
        <div className="username">
          <img src={user} alt="User" />
          <p>{userData.username}</p>
        </div>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}

export default Header;

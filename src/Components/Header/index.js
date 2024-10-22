import React from "react";
import "./style.css";
import user from "../../images/user.svg";
import Logo from "../../images/Logo.svg";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <p>CoinFlow</p>
      </div>
      <div className="username-logout">
        <div className="username">
          <img src={user} alt="User" />
          <p>username</p>
        </div>
        <button>Log Out</button>
      </div>
    </div>
  );
}

export default Header;

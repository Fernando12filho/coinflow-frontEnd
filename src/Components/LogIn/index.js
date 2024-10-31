import { React, useState } from "react";
import "./style.css";
import logo from "../../images/Logo.svg";

// TODO: Placeholders should disappear  when user clicks it
// TODO: Change color according signIn state
function LogIn() {
  const [signIn, setSignIn] = useState(false);

  
  function registerLogInChanger() {
    setSignIn(!signIn);
  }

  const backgroundClass = signIn ? "signInBackground" : "loginBackground";
  const loginBoxClass = signIn ? "signInBox" : "loginBox";

  return (
    <div className={`background-${backgroundClass}`} id="background">
      <div className={`login-box-${loginBoxClass}`} id="login-box">
        <div className="header">
          <div className="logo-name">
            <img src={logo} alt="CoinFlow" />
            <p>CoinFlow</p>
          </div>
          <button onClick={registerLogInChanger}>{signIn === false ? "Register" : "Log In"}</button>
        </div>
        {signIn === true ? (
          <div className="log">
            <h1>Sign In</h1>
            <input placeholder="Username" type="text" id="username" />
            <input placeholder="Password" type="password" id="password" />
          </div>
        ) : (
          <div className="log">
            <h1>Log In</h1>
            <input placeholder="Username" type="text"  id="username"/>
            <input placeholder="Password" type="password" id="password" />
          </div>
        )}

        <div className="singin"></div>
      </div>
    </div>
  );
}

export default LogIn;

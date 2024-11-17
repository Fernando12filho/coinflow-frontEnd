import { React, useState } from "react";
import "./style.css";
import logo from "../../images/Logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// TODO: Placeholders should disappear  when user clicks it
// TODO: Change color according signIn state

axios.defaults.withCredentials = true

function LogIn({ onLoginSuccess }) {
  const [signIn, setSignIn] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  function registerLogInChanger() {
    setSignIn(!signIn);
  }

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  }


  async function handleSubmitLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post(`http://127.0.0.1:5000/auth/login`, formData);
      const user = response.data; // Assuming the API returns the user data
      onLoginSuccess(user); // Pass user data to App.js
      setFormData({ username: "", password: "" });
      navigate("/index");
    } catch (error) {
      alert("Check username or password");
      console.log(error);
    }
  }

  async function handleSubmitRegister(e) {
    e.preventDefault();
    axios
      .post(`http://127.0.0.1:5000/auth/register`, formData)
      .then((response) => {
        alert("Registration complete")
        registerLogInChanger()
        setFormData({username: "", password: ""});
        setSignIn(false);
        console.log(response);
      })
      .catch((error) => {
        alert("Failed to register")
        console.log(error)
      });

    console.log(signIn);
    console.log(formData);
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
          <button onClick={registerLogInChanger}>
            {signIn === false ? "Register" : "Log In"}
          </button>
        </div>
        {signIn === true ? (
          <form>
            <div className="log">
              <h1>Sign In</h1>
              <input
                placeholder="Username"
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                placeholder="Password"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" onClick={handleSubmitRegister}>
              Sign In
            </button>
          </form>
        ) : (
          <form>
            <div className="log">
              <h1>Log In</h1>
              <input
                placeholder="Username"
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                placeholder="Password"
                type="password"
                id="password"
                value={formData.password}submit-login-signin
                onChange={handleChange}
              />
            </div>
            <button type="submit" id="submit-login-signin" onClick={handleSubmitLogin}>
              Log In
            </button>
          </form>
        )}

        <div className="singin"></div>
      </div>
    </div>
  );
}

export default LogIn;

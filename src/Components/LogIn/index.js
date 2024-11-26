import { React, useState } from "react";
import "./style.css";
import logo from "../../images/Logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Login/Register component
function LogIn({ onLoginSuccess }) {
  const [signIn, setSignIn] = useState(false); // Toggle between login and register
  const [formData, setFormData] = useState({ username: "", password: "" }); // Form state
  const navigate = useNavigate();

  // Toggle between login and register mode
  function registerLogInChanger() {
    setSignIn(!signIn);
  }

  // Handle input changes
  function handleChange(e) {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value }); // Update specific field in form data
  }

  // Submit login form
  async function handleSubmitLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post(`http://127.0.0.1:5000/auth/login`, formData);
      const user = response.data; // Capture user data from the response
      onLoginSuccess(user); // Notify parent of successful login
      setFormData({ username: "", password: "" }); // Clear form
      navigate("/index"); // Redirect to index page
    } catch (error) {
      alert("Check username or password"); // Notify user on error
      console.error(error);
    }
  }

  // Submit register form
  async function handleSubmitRegister(e) {
    e.preventDefault();
    axios
      .post(`http://127.0.0.1:5000/auth/register`, formData)
      .then((response) => {
        alert("Registration complete"); // Notify user on success
        registerLogInChanger(); // Switch to login view
        setFormData({ username: "", password: "" }); // Clear form
      })
      .catch((error) => {
        alert("Failed to register"); // Notify user on failure
        console.error(error);
      });
  }

  const backgroundClass = signIn ? "signInBackground" : "loginBackground";
  const loginBoxClass = signIn ? "signInBox" : "loginBox";

  return (
    <div className={`background-${backgroundClass}`} id="background">
      <div className={`login-box-${loginBoxClass}`} id="login-box">
        <div className="header">
          {/* Logo and toggle button */}
          <div className="logo-name">
            <img src={logo} alt="CoinFlow" />
            <p>CoinFlow</p>
          </div>
          <button onClick={registerLogInChanger}>
            {signIn ? "Log In" : "Register"}
          </button>
        </div>

        {/* Render login or register form based on signIn state */}
        {signIn ? (
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
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" id="submit-login-signin" onClick={handleSubmitLogin}>
              Log In
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default LogIn;
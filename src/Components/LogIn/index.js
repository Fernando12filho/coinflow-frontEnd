import { React, useState, useRef, useEffect } from "react";
import "./style.css";
import logo from "../../images/Logo.svg";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useLocation } from 'react-router-dom'; 

const LOGIN_URL = "/auth/login";
const REGISTER_URL = "/auth/register";

// Login/Register component
function LogIn() {
  const { setAuth } = useAuth(); // Get setAuth function from context
  const [signIn, setSignIn] = useState(false); // Toggle between login and register
  const [formData, setFormData] = useState({ username: "", password: "" }); // Form state
  const userRef = useRef(); // Reference to user input field

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    userRef.current.focus(); // Focus on username field on component mount
  }, []);

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
      const response = await axios.post(LOGIN_URL, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const {access_token} = response.data;
      setAuth( access_token ); // Store access token in context
      navigate(from, { replace: true });
    } catch (error) {
      alert("Check username or password"); // Notify user on error
      console.error(error);
    }
  }

  // Submit register form
  async function handleSubmitRegister(e) {
    e.preventDefault();
    axios
      .post(REGISTER_URL, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
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
                ref={userRef}
              />
              <input
                placeholder="Password"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="button"
              id="submit-login-signin"
              onClick={handleSubmitRegister}
            >
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
                ref={userRef}
              />
              <input
                placeholder="Password"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="button"
              id="submit-login-signin"
              onClick={handleSubmitLogin}
            >
              Log In
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default LogIn;

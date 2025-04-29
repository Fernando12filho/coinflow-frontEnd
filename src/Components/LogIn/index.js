import { React, useState, useRef, useEffect } from "react";
import "./style.css";
import logo from "../../images/Logo.svg";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";

const LOGIN_URL = "/auth/login";
const REGISTER_URL = "/auth/register";

// Login/Register component
function LogIn() {
  const { setAuth, setUser } = useAuth(); // Get setAuth function from context
  const [signIn, setSignIn] = useState(false); // Toggle between login and register
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  }); // Form state
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
      const { access_token } = response.data.access_token;
      const user = response.data.user;
      console.log("Loging user response: ", user);
      setAuth(access_token); // Store access token in context
      setUser(user); // Store user data in context
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
    <>
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
                  placeholder="Email"
                  type="text"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  ref={userRef}
                />
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
      {/* About Section */}
      <div className="fira-bold about-section">
        <h2>An online Bitcoin Tracker and more</h2>

        <div className="about-content ">
          <h2 className="fira-bold">What is Coinflow?</h2>
          <p className="fira-medium">
            Coinflow is your personalized Bitcoin investment tracker. Monitor
            your Bitcoin holdings, generate invoices, and stay updated with
            curated articles — all in one place. Whether you're a new holder or
            a seasoned investor, Coinflow helps you organize and grow your
            Bitcoin journey.
          </p>
        </div>

        <div className="about-content">
          <h2 className="fira-bold">How To Use CoinFlow?</h2>
          <ul className="fira-medium steps-list">
            <li><p>Create an account or log in securely.</p></li>
            <li><p>Add your Bitcoin investments.</p></li>
            <li><p>Track performance over time with detailed charts.</p></li>
            <li><p>Create invoices to get paid in Bitcoin.</p></li>
            <li><p>Read expert articles about Bitcoin strategies.</p></li>
          </ul>
        </div>

        <div className="about-content">
          <h2 className="fira-bold">Current Feautures</h2>
          <ul className="fira-medium features-list">
            <li><p>Bitcoin Investment Tracking</p></li>
            <li><p>Invoice Generator</p></li>
            <li><p>Article Library</p></li>
          </ul>
        </div>

        <div className="about-content">
          <h2 className="fira-bold">Coming Soon</h2>
          <ul className="fira-medium features-list">
            <li className="fira-medium">📈 Advanced Analytics (profit/loss, tax reports)</li>
            <li><p>Multi-currency Support</p></li>
            <li><p>Mobile App Version</p></li>
            <li><p>Self-custody Education & Tools</p></li>
          </ul>
        </div>

        {/* <div className="about-content">
          <h2 className="fira-bold">What is Coinflow?</h2>
          <p className="fira-medium"></p>
        </div>

        <div className="about-content">
          <h2 className="fira-bold">What is Coinflow?</h2>
          <p className="fira-medium"></p>
        </div> */}
      </div>

      {/* Footer Section */}
      <footer className="fira-medium">
        <p>Made with ❤️ for Bitcoiners.</p>
        <p className="fira-light" >© Coinflow 2025. All Rights Reserved.</p>
        <div className="fira-light">Privacy Policy | Terms of Service | Contact</div>
      </footer>
    </>
  );
}

export default LogIn;

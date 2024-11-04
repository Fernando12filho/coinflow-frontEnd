import React, { useState } from "react";
import "./App.css";
import LogIn from "./Components/LogIn";
import Home from "./Components/home";

//const baseURL = "http://127.0.0.1:5000"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Update state to reflect the login status
  };


  const handleLogoutSuccess = () => {
    setIsLoggedIn(false);
  }


  return (
    <div className="App">
      {isLoggedIn ? (
        <Home onLogoutSuccess={handleLogoutSuccess}/> // Show main app page if logged in
      ) : (
        <LogIn onLoginSuccess={handleLoginSuccess}/> // Pass down the callback
      )}
    </div>
  );
}

export default App;

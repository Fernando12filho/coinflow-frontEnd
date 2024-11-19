import React, { useState } from "react";
import "./App.css";
import LogIn from "./Components/LogIn";
import Home from "./Components/home";

//const baseURL = "http://127.0.0.1:5000"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [userData, setUserData] = useState([]);

  const handleLoginSuccess = (data) => {
    setIsLoggedIn(true); // Update state to reflect the login status
    setUserData(data)
  };


  const handleLogoutSuccess = () => {
    setIsLoggedIn(false);
    setUserData(null)
  }


  return (
    <div className="App">
      {isLoggedIn ? (
        <Home userData={userData} onLogoutSuccess={handleLogoutSuccess}/> // Show main app page if logged in
      ) : (
        <LogIn userData={userData} onLoginSuccess={handleLoginSuccess}/> // Pass down the callback
      )}
    </div>
  );
}

export default App;

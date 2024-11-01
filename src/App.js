import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import UserAssetsTransactions from "./Components/UserAssetsTransactions";
import News from "./Components/News";
import LogIn from "./Components/LogIn";
import Home from "./Components/home";

//const baseURL = "http://127.0.0.1:5000"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Update state to reflect the login status
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Home /> // Show main app page if logged in
      ) : (
        <LogIn onLoginSuccess={handleLoginSuccess} /> // Pass down the callback
      )}
    </div>
  );
}

export default App;

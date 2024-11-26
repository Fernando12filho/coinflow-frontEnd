import React, { useState } from "react"; // Import React and useState hook
import "./App.css"; // Styles specific to App
import LogIn from "./Components/LogIn"; // Login component for user authentication
import Home from "./Components/home"; // Home component to display main app after login

function App() {
  // State to track user login status and user-specific data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  // Callback for successful login, sets login state and stores user data
  const handleLoginSuccess = (data) => {
    setIsLoggedIn(true);
    setUserData(data);
  };

  // Callback for logout, resets login state and clears user data
  const handleLogoutSuccess = () => {
    setIsLoggedIn(false);
    setUserData(null);
  };

  return (
    <div className="App">
      {/* Conditionally render based on login state */}
      {isLoggedIn ? (
        // Pass logout callback to Home for user logout functionality
        <Home onLogoutSuccess={handleLogoutSuccess} />
      ) : (
        // Pass login callback to LogIn for handling user authentication
        <LogIn userData={userData} onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;

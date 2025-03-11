import React from "react"; // Import React, useState, and useEffect hooks
import "./App.css"; // Styles specific to App
import LogIn from "./Components/LogIn"; // Login component for user authentication
import Home from "./Components/home"; // Home component to display main app after login

import { Routes, Route } from 'react-router-dom';
import PersistLogin from "../src/Components/PersistLogin";
import Layout from "./Components/Layout";


function App() {
  // State to track user login status and user-specific data
  //const { setAuth } = useContext(AuthContext);
  //const { setAuth } = useContext(AuthContext);
  //const userData = useContext(AuthContext)// Get user data from local storage
  //console.log("User data:", userData); // Log user data

  // Callback for successful login, sets login state and stores user data
  // const handleLoginSuccess = (data) => {
  //   //setIsLoggedIn(true);    
  //   localStorage.setItem("persist", true);
  //   setAuth(data);
  // };

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="login" element={<LogIn /> } /> 
              <Route element={<PersistLogin />} >
                <Route path="/" element={<Home />} />
                {/* <Home userData={userData} onLogoutSuccess={handleLogoutSuccess} /> */}
              </Route>
          </Route>
        </Routes>  
    </div>
  );
}

export default App;

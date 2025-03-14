import React from "react"; // Import React, useState, and useEffect hooks
import "./App.css"; // Styles specific to App
import LogIn from "./Components/LogIn"; // Login component for user authentication
import Home from "./Components/home"; // Home component to display main app after login
import { Routes, Route } from 'react-router-dom';
import PersistLogin from "../src/Components/PersistLogin";
import Layout from "./Components/Layout";
import RequireAuth from "./Components/RequireAuth";


function App() {
  
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} >
            {/* public routes */}
            <Route path="login" element={<LogIn />} />

            {/* logged in routes */}
            <Route element={<PersistLogin />}>
              <Route element={<RequireAuth />}>
                <Route path="/" element={<Home />} />
              </Route>
            </Route>
          </Route>
        </Routes>  
    </div>
  );
}

export default App;

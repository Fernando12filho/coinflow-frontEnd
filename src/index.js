// Import core dependencies and modules
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client"; // For rendering the root React component // Enables client-side routing
import "./index.css"; // Global styles
import App from "./App"; // Root application component
import { AuthProvider } from "./context/AuthProvider"; // Authentication context provider

// Render the root component inside the 'root' DOM element in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* StrictMode enables additional checks and warnings in development */}
    <React.StrictMode>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
        {/* Authentication context provider */}
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>
);

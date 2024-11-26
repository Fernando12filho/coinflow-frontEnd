// Import core dependencies and modules
import React from "react";
import ReactDOM from "react-dom/client"; // For rendering the root React component
import { BrowserRouter } from "react-router-dom"; // Enables client-side routing
import "./index.css"; // Global styles
import App from "./App"; // Root application component

// Render the root component inside the 'root' DOM element in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* StrictMode enables additional checks and warnings in development */}
    <React.StrictMode>
      <App /> {/* Main application component */}
    </React.StrictMode>
  </BrowserRouter>
);
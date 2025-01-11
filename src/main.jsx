import React from "react";
import ReactDOM from "react-dom/client"; // Import the new createRoot API
import App from "./App"; // Import the main app component
import "./index.css"; // Optional: Import global styles

// Use createRoot for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Import the main app component
import "./index.css"; // Optional: Import global styles

// Render the App component with React 17 style
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

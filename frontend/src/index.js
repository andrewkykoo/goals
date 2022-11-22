import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoalsContextProvider } from "./context/goalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoalsContextProvider>
      <App />
    </GoalsContextProvider>
  </React.StrictMode>
);

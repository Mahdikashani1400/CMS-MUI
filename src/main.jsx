import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App"; // main app
import "./index.css"; // main css styles
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <App />
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { AppContainer } from "./App.jsx";
import { Header } from "./Header.jsx";
import "./app.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <AppContainer />
  </React.StrictMode>
);

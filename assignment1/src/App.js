import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import AppRoutes from "./AppRoutes";
import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <Outlet />
    </div>
  );
}

export default App;

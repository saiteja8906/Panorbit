import "./App.css";
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

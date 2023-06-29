import React, { Suspense } from "react";
import Home from "./Home";
import Profile from "./Profile"
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRoutes;

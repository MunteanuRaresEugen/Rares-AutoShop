import "./App.css";
import React from "react";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

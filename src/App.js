import "./App.css";
import "./index.css";
import React from "react";
import { Home } from "./Pages/Home";
import { SignIn } from "./Pages/SignIn";
import { SignUp } from "./Pages/SignUp";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./Pages/Cart";

export const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to="/singin">Login</Link>
      <br />
      <Link to="/signup" style={{ width: "350px" }}>
        Create an account
      </Link>
    </div>
  );
};

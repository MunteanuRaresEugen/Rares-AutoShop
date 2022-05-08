import React from "react";
import { Link } from "react-router-dom";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="leftcomponents">
        <div className="element">About Us</div>
        <div className="element">Contact</div>
      </div>

      <div className="rightcomponents">
        <div className="element">
          <Link to="/signin" style={{ width: "350px" }}>
            Sign In
          </Link>
        </div>
        <div className="element">
          <Link to="/signup" style={{ width: "350px" }}>
            Sign Up
          </Link>
        </div>
        <div className="element">
          <Link to="/wishlist" style={{ width: "350px" }}>
            Wishlist
          </Link>
        </div>
      </div>
    </div>
  );
};

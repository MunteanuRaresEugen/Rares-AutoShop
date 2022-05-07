import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div>About Us</div>
      <div>Contact</div>
      <div>
        <Link to="/signin" style={{ width: "350px" }}>
          Sign In
        </Link>
      </div>
      <div>
        <Link to="/signin" style={{ width: "350px" }}>
          Sign In
        </Link>
      </div>
      <div>Wishlist</div>
    </nav>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { BsBoxArrowRight } from "react-icons/bs";

export const Home = () => {
  return (
    <div>
      <div className="Topbar">
        <div>About Us</div>
        <div>
          <Link to="/signin">
            <BsBoxArrowRight />
            Login
          </Link>
        </div>

        <br />
        <div>
          <Link to="/signup" style={{ width: "350px" }}>
            Create an account
          </Link>
        </div>
        <div>Wishlist</div>
      </div>
      <div className="Topbar">
        <div>Search</div>
        <div>
          <Link to="/" style={{ width: "350px" }}>
            Rares AutoShop
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <BsBoxArrowRight />
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

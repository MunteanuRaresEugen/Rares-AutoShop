import React from "react";
import { Link } from "react-router-dom";

export const Secondbar = () => {
  return (
    <nav className="secondbar">
      <div>All</div>
      <div>Make and Model</div>
      <div>
        <Link to="/" style={{ width: "350px" }}>
          Rares AutoShop
        </Link>
      </div>
      <div>
        <Link to="/cart" style={{ width: "350px" }}>
          Chart
        </Link>
      </div>
    </nav>
  );
};

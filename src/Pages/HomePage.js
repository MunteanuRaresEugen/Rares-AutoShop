import React from "react";
import "../styles/mainpage.css";
import { Topbar } from "../components/Topbar";
import { Secondbar } from "../components/Secondbar";

export const HomePage = () => {
  return (
    <div>
      <Topbar />
      <br />
      <Secondbar />
    </div>
  );
};

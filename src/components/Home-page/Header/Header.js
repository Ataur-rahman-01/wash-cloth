import React from "react";
import HeaderMain from "../HeaderMain/HeaderMain";
import Navbar from "../Navbar/Navbar";
import "./header.css";

const Header = () => {
  return (
    <div className="header-back">
      <Navbar />
      <HeaderMain />
    </div>
  );
};

export default Header;

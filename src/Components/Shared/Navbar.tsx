import React from "react";
import "../../Styles/Navbar.css";

interface Props {}

const Navbar = (props: Props) => {
  return <div className="navbar">
      <a href="#home">HOME</a>
      <a href="#about">ABOUT US</a>
      <a href="#workshops">WORKSHOPS</a>
      <a href="#contact">CONTACT US</a>
      </div>;
};

export default Navbar;

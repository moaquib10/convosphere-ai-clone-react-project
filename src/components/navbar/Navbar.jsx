import React from "react";
import "./Navbar.css";

const Menu = () => (
  <div className="menu">
    <a href="#home">Home</a>
    <a href="#wcs">What is Convosphere.ai?</a>
    <a href="#features">Case Studies</a>
    <a href="#possibility">AI</a>
  </div>
);

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-logo">
          <h2>Convosphere.ai</h2>
        </div>
        <div className="navbar-menu">
          <Menu />
        </div>
        <div className="navbar-menu-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

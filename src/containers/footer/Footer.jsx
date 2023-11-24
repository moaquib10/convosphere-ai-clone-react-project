import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-heading">
        <h1 className="footer-title">
          Do you want to step into the future before others?
        </h1>
      </div>
      <div className="footer-button">
        <p className="button-text">Request Early Access</p>
      </div>
      <div className="footer-links">
        <div className="footer-links-div">
          <h2 className="logo-text">Convosphere.ai</h2>
          <p>&copy; 2023 Convosphere.ai. All rights reserved.</p>
        </div>
        <div className="footer-links-div">
          <h4>COMPANY</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links-div">
          <h4>GET IN TOUCH</h4>
          <p>convosphere2023@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

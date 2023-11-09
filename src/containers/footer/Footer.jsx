import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-heading">
        <h1 className="footer-title">Do you want to step into the future before others?</h1>
      </div>
      <div className="footer-button">
        <p className="button-text">Request Early Access</p>
      </div>
      <div className="footer-links">
        <div className="footer-links-logo">
          <h2>Convosphere.ai</h2>
          <p className="logo-text">&copy; 2023 Convosphere.ai. All rights reserved.</p>
        </div>
        <div className="footer-links-div">
          <h4 className="company-title">Company</h4>
          <p className="footer-link">Terms & Conditions</p>
          <p className="footer-link">Privacy Policy</p>
          <p className="footer-link">Contact</p>
        </div>
        <div className="footer-links-div">
          <h4 className="get-in-touch-title">Get in touch</h4>
          <p className="contact-info">info@payme.net</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

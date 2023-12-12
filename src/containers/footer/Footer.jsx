import React from "react";
import { useSpring, animated } from 'react-spring';
import "./Footer.css";

const Footer = () => {
  const headingAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1000,
  });

  return (
    <div className="footer-wrapper">
      <animated.div style={headingAnimation} className="footer-heading">
        <h1 className="footer-title">
          Elevate Your Experience with Convosphere.ai
        </h1>
      </animated.div>
      <animated.div style={buttonAnimation} className="footer-button" role="button" onClick={() => {}}>
        <p className="button-text">Unlock Early Access</p>
      </animated.div>
      <div className="footer-links">
        <div className="footer-links-div">
          <h4 className="logo-text">Convosphere.ai</h4>
          <p className="footer-text">
            &copy; 2023 Convosphere.ai. All rights reserved.
          </p>
        </div>
        <div className="footer-links-div1">
          <h4 className="logo-text">Twitter</h4>
          <h4 className="logo-text">YouTube</h4>
          <h4 className="logo-text">GitHub</h4>
          <h4 className="logo-text">LinkedIn</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;

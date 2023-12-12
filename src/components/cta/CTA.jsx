import React from 'react';
import { useSpring, animated } from 'react-spring';
import "./CTA.css"

const CTA = () => {
  const contentAnimation = useSpring({
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
    <div className="cs__cta section__margin">
      <animated.div style={contentAnimation} className="cs__cta-content">
        <p className="cta-subtitle">Request Early Access to Get Started</p>
        <h1 className="cta-title">Register today & start exploring the endless possibilities.</h1>
      </animated.div>
      <animated.button style={buttonAnimation} className="cta-button">Get Started</animated.button>
    </div>
  );
}

export default CTA;

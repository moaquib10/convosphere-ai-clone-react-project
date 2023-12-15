import React from "react";
import { useSpring, animated } from "react-spring";
import "./Navbar.css";

const AnimatedMenu = () => {
  const menuAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  return (
    <animated.div style={menuAnimation} className="menu">
      <a href="#home">Home</a>
      <a href="#wcs">What is Convosphere.ai?</a>
      <a href="#features">Case Studies</a>
      <a href="#possibility">AI</a>
    </animated.div>
  );
};

const AnimatedNavbar = () => {
  const logoAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const menuSignAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1000,
  });

  const buttonAnimation = useSpring({
    from: { backgroundColor: "#a8a6a6", transform: "scale(1)" },
    to: async (next, cancel) => {
      await next({ backgroundColor: "#a8a6a6", transform: "scale(1.1)" });
      await next({ backgroundColor: "#a8a6a6", transform: "scale(1)" });
    },
  });

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <animated.div style={logoAnimation} className="navbar-logo">
          <h2>Convosphere.ai</h2>
        </animated.div>
        <animated.div style={menuSignAnimation} className="navbar-menu">
          <AnimatedMenu />
        </animated.div>
        <animated.div style={menuSignAnimation} className="navbar-menu-sign">
          <p>Sign in</p>
          <animated.button style={buttonAnimation} type="button">
            Sign up
          </animated.button>
        </animated.div>
      </div>
    </div>
  );
};

export default AnimatedNavbar;

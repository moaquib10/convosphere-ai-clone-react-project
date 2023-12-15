import React from "react";
import { useSpring, animated } from "react-spring";
import "./Header.css";

const Header = () => {
  const titleAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const textAnimation = useSpring({
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
    <div id="home" className="header-wrapper">
      <div className="header-content">
        <animated.h1 className="header-title" style={titleAnimation}>
          Let's Pioneer the Future of Creativity with Convosphere.ai
        </animated.h1>
        <animated.p className="header-text" style={textAnimation}>
          Convosphere.ai is a revolutionary leap into the future of AI and
          creative interaction. This project has been an exhilarating journey,
          where we've harnessed the power of artificial intelligence to redefine
          the boundaries of innovation. From the project's inception,
          Convosphere.ai has continuously evolved, offering a platform that
          fuses technology and creativity in a seamless manner. It is a
          testament to our dedication to pushing the frontiers of AI-driven
          solutions, offering a unique and engaging user experience that paves
          the way for the future of AI-powered creativity.
        </animated.p>
        <animated.p className="header-text" style={textAnimation}>
          The story of Convosphere.ai is a testament to the ever-evolving
          landscape of AI language models. This project represents an ongoing
          journey into the heart of artificial intelligence, where we've
          embraced advancements in technology to pioneer the next generation of
          creative solutions. Convosphere.ai is not just a project; it's a
          vision that exemplifies our commitment to staying at the forefront of
          AI development. Our platform is where the fusion of creativity and
          technology takes center stage, offering a glimpse into the future of
          AI-driven human-computer interaction, redefining the way we explore
          and harness the potential of artificial intelligence.
        </animated.p>
        <div className="header-content-input">
          <input type="email" placeholder="Your Email Address" />
          <animated.button
            className="header-button"
            type="button"
            style={buttonAnimation}
          >
            Get Started
          </animated.button>
        </div>
      </div>
    </div>
  );
};

export default Header;

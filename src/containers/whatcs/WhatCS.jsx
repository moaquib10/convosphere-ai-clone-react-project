import React from 'react';
import { useSpring, animated } from 'react-spring';
import Feature from '../../components/feature/Feature';
import './WhatCS.css';

const AnimatedHeading = () => {
  const headingAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  return (
    <animated.div style={headingAnimation} className="whatcs-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination.
      </h1>
      <p className="explore-button">Explore the Library</p>
    </animated.div>
  );
};

const AnimatedFeature = () => {
  const featureAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1000,
  });

  return (
    <animated.div style={featureAnimation} className="whatcs-container">
      <Feature
        title="Chatbots"
        text="Simulate human-like conversations using Natural Language Processing (NLP)."
      />
      <Feature
        title="Knowledgebase"
        text="Convosphere.ai's neural network, boasting over 175 billion machine learning parameters, represents a colossal leap in AI capabilities, surpassing the previous benchmark set by Microsoft's Turing NLG model with 10 billion parameters."
      />
      <Feature
        title="Education"
        text="Artificial Intelligence (AI) has the potential to address some of the biggest challenges in education today, innovate teaching and learning practices, and ultimately accelerate the progress."
      />
    </animated.div>
  );
};

const WhatCS = () => (
  <div id="wcs" className="whatcs">
    <div className="whatcs-feature">
      <Feature
        title="What is Convosphere.ai?"
        text="Convosphere.ai represents an ambitious venture into the world of AI and human-computer interaction. This project is a testament to our commitment to shaping the future of AI-driven creative solutions. Convosphere.ai leverages advanced technologies and custom-designed interfaces to explore the boundaries of AI's potential. Through this endeavor, I've had the opportunity to develop innovative systems and redefine the way we interact with artificial intelligence. Convosphere.ai is the embodiment of our vision for the fusion of technology and creativity, offering a unique and engaging user experience."
      />
    </div>
    <AnimatedHeading />
    <AnimatedFeature />
  </div>
);

export default WhatCS;

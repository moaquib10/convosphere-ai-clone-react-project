import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Possibility.css';
import possibilityImage from '../../assets/possibility.jpeg';

const Possibility = () => {
  const imageAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-50px)' },
  });

  const containerAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(50px)' },
  });

  return (
    <div className="cs__possibility section__padding" id='possibility'>
      <animated.div style={imageAnimation} className="cs__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </animated.div>
      <animated.div style={containerAnimation} className="cs__possibility-container">
        <p className="access-link"><a href="/">Request Early Access to Get Started</a></p>
        <h1 className="gradient__text">The possibilities are beyond your imagination.</h1>
        <p className="cs__possibility-description">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      </animated.div>
    </div>
  );
}

export default Possibility;

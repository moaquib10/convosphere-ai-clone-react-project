import React from 'react';
import './Possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className="cs__possibility section__padding" id='possibility'>
      <div className="cs__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="cs__possibility-container">
        <p className="access-link"><a href="/">Request Early Access to Get Started</a></p>
        <h1 className="gradient__text">The possibilities are beyond your imagination.</h1>
        <p className="cs__possibility-description">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      </div>
    </div>
  )
}

export default Possibility;

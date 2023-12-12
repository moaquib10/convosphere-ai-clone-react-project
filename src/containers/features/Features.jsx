import React from "react";
import { useTrail, animated } from "react-spring";
import { Feature } from "../../components";
import "./Features.css";

const Features = () => {
  const featuresData = [
    {
      title: "Improving end distrusts instantly.",
      text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      title: "Become the tended active",
      text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      title: "Message or am nothing",
      text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      title: "Really boy law county",
      text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
  ];

  const trail = useTrail(featuresData.length, {
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(50px)" },
  });

  return (
    <div id="features" className="cs__features section__padding">
      <div className="cs__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into the
          Future Today & Make it Happen.
        </h1>
        <p className="access-link">Request Early Access to Get Started</p>
      </div>
      <div className="cs__features-container">
        <div>
          {trail.map((style, index) => (
            <animated.div key={featuresData[index].title + index} style={style}>
              <Feature
                title={featuresData[index].title}
                text={featuresData[index].text}
              />
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

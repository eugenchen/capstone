import React from "react";
import aboutImg from "../assets/about.jpg";
import "./About.css";

const About = () => {
  return (
    <div id="about-us">
      <div id="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
          Despite the city's diversity, the two brothers recognized the lack of
          Mediterranean cuisine in Chicago, and were inspired to bring the
          flavors of their hometown in Italy to the people of Chicago. The two
          brothers continue to oversee the Little Lemon restaurant, nearly
          thirty years later.
        </p>
        <img src={aboutImg} alt="restaurant owners" width="400" height="300" />
      </div>
    </div>
  );
};

export default About;

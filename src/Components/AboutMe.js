import React from "react";
import myPhoto from "./my-photo2.jpg";

const AboutMe = () => {
  return (
    <div id="about-me-section">
      <p id="my-name">Durdona Djalilova</p>
      <section>
        <img id="my-photo" src={myPhoto} alt="my-photo" />
      </section>
      <p className="text-about-me">
        If anyone told me a few years ago that I would be making my own website,
        I would say: "That's a fairy tale". Welcome to my fairy tale come true!
        Thanks to Pursuit Fellowship Program, I am proud to present myself as a
        Full Stack Web Developer.
      </p>
    </div>
  );
};
export default AboutMe;

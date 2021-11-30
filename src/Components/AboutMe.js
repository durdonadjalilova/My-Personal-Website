import React from "react";
import myPhoto from "./my-photo2.jpg";
import resume from "./myResume.pdf";

const AboutMe = () => {
  return (
    <div id="about-me-section">
      <p id="my-name">Durdona Djalilova</p>
      <div id="my-resume">
        <a href={resume} target="_blank">
          Resume
        </a>
      </div>
      <section>
        <img id="my-photo" src={myPhoto} alt="my-photo" />
      </section>
      <p className="text-about-me">
        If anyone told me a few years ago that one day I would be making my own
        website, I would say: "In my dreams". Welcome to my Dreams Come True!
        Thanks to Pursuit Fellowship Program, I am proud to present myself as a
        Full Stack Web Developer.
      </p>
    </div>
  );
};
export default AboutMe;

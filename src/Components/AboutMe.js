import React from "react";
import myPhoto from "./assets/my-photo2.jpg";
import resume from "./assets/Resume_Durdona_Djalilova_v1.pdf";

const AboutMe = () => {
  return (
    <div id="about-me-section">
      <p id="my-name">Durdona Djalilova</p>
      <div id="my-resume">
        <a href={resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
      <section>
        <img id="my-photo" src={myPhoto} alt="my-pic" />
      </section>
      <p className="text-about-me">
        I am a Full-Stack Software Engineer based in Brooklyn, NY. My passion of
        developing user-friendly apps that create convenience to people has
        driven my transition to software engineering. I strive to build robust
        software applications that directly impact end users.
      </p>
    </div>
  );
};
export default AboutMe;

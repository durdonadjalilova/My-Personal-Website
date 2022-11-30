import React from "react";
import emailIcon from "./assets/email.png";
import linkedinIcon from "./assets/linkedin.png";
import githubIcon from "./assets/github.jpeg";

const Contact = () => {
  return (
    <div className="contact-icons">
      <a href="mailto: durdonadjalilova@pursuit.org" className="contact-link">
        <img src={emailIcon} alt="Email" className="contact-image" />
        <span className="contact-text">Send me an email</span>
      </a>
      <a
        href="https://www.linkedin.com/in/durdona-djalilova-b144a4202/"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        <img src={linkedinIcon} alt="LinkedIn" />
        <span className="contact-text">Connect with me on LinkedIn</span>
      </a>
      <a
        href="https://github.com/durdonadjalilova"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        <img src={githubIcon} alt="Github" />
        <span className="contact-text">View my Github </span>
      </a>
    </div>
  );
};
export default Contact;

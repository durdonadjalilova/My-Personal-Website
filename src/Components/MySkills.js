import React from "react";
import HTMLIcon from "./html1.png";
import CSSIcon from "./css.png";
import JSIcon from "./javascript.png";
import GitIcon from "./git.png";
import NodeJSIcon from "./nodejs.png";
import PostgresIcon from "./postgres.png";
import ReactIcon from "./react.png";
import ReduxIcon from "./redux.png";
import ExpressIcon from "./express.png";

const MySkills = () => {
  return (
    <div className="icons">
      <img src={HTMLIcon} alt="HTML" />
      <img src={CSSIcon} alt="CSS" />
      <img src={JSIcon} alt="JS" />
      <img src={ReactIcon} alt="React" />
      <img src={ExpressIcon} alt="Express" id="express" />
      <img src={GitIcon} alt="Git" />
      <img src={PostgresIcon} alt="Posgres" />
      <img src={NodeJSIcon} alt="NodeJS" />
      <img src={ReduxIcon} alt="Redux" />
    </div>
  );
};

export default MySkills;

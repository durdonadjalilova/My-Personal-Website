import React from "react";
import HTMLIcon from "./assets/html1.png";
import CSSIcon from "./assets/css.png";
import JSIcon from "./assets/javascript.png";
import GitIcon from "./assets/git.png";
import NodeJSIcon from "./assets/nodejs.png";
import PostgresIcon from "./assets/postgres.png";
import ReactIcon from "./assets/react.png";
import ReduxIcon from "./assets/redux.png";
import ExpressIcon from "./assets/express.png";
import PythonIcon from "./assets/python.png";
import DjangoIcon from "./assets/django.png";
import GraphQLIcon from "./assets/graphql.png";

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
      <img src={PythonIcon} alt="Python" />
      <img src={DjangoIcon} alt="Django" />
      <img id="graphql" src={GraphQLIcon} alt="GraphQL" />
    </div>
  );
};

export default MySkills;

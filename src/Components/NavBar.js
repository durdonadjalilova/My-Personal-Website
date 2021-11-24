import { NavLink } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-buttons" id="about-me-button">
        <h4>About Me</h4>
      </NavLink>
      <NavLink to="/projects" className="navbar-buttons" id="projects-button">
        <h4>My Projects</h4>
      </NavLink>
      <NavLink to="/skills" className="navbar-buttons" id="skills-button">
        <h4>My Skills</h4>
      </NavLink>
      <NavLink to="/contact" className="navbar-buttons" id="contact-button">
        <h4>Contact</h4>
      </NavLink>
    </nav>
  );
};

export default NavBar;

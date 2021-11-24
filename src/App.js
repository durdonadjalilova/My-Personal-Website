import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import MyProjects from "./Components/MyProjects";
import MySkills from "./Components/MySkills";
import Contact from "./Components/Contact";
import "./App.css";
import FourOFour from "./Components/FourOFour";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<AboutMe />} />
          <Route exact path="/projects" element={<MyProjects />} />
          <Route exact path="/skills" element={<MySkills />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

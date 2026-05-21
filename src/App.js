import React from "react";
import "./App.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="container">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />

      <footer>© 2026 Your Name — All Rights Reserved</footer>
    </div>
  );
}

export default App;
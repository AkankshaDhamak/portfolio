import React from "react";

function Hero() {
  return (
    <div className="hero">
      <h1>Dhamak Akanksha </h1>
      <h3>Full Stack Developer</h3>

      {/* Resume Button */}
      <a
        href="\AkankshaDhamak_8623026497.pdf"
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </a>

      {/* Contact Button */}
      <a href="#contact" className="btn">
        Contact Me
      </a>
    </div>
  );
}

export default Hero;
import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";    

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact</h2>

      <div className="contact-container">

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p>akankshadhamak@gmail.com</p>
        </div>

        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/akanksha-dhamak-65535b28a" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/AkankshaDhamak" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
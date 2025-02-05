import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./AboutMe.css";

const Home = () => {
  return (
    <section className="about-me-container">
      <aside className="contact-info">
        <h2>Contact Me</h2>
        <p>
          <a href="mailto:sritan.st@gmail.com" className="contact-link">
            <FaEnvelope className="contact-icon" /> Email
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/sritan-talluri-151997209/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaLinkedin className="contact-icon" /> LinkedIn
          </a>
        </p>
      </aside>

      <section className="about-me">
        <h1>Hi, I’m Sritan Talluri, and Welcome To My Portfolio!</h1>
        <p>
          I'm a third-year computer science major at Georgia Tech, with specializations in <strong>Theory</strong> and <strong>Information Internetworks</strong>. 
          I am an aspiring software engineer, set to graduate in December 2025.
        </p>
        <p>
          Through coursework, internships, and projects, I have become proficient in 
          <strong> Scala, Java, C++, Python, SQL</strong>, and more.
        </p>
        <p>
          I enjoy learning and applying my knowledge in new projects. Working with clients in internships and team projects 
          has shown me how much I value making people happy with my work.
        </p>
        <p className="contact"><strong>Feel free to reach out!</strong></p>
      </section>
    </section>
  );
};

export default Home;

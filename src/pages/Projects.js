import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-container">
      <h2>Projects</h2>
      <ul className="project-list">
        <li className="project-item">
          <h3>GoodVoice App</h3>
          <p>
            Deeply worked with a client to develop an application that helps clinicians with speech therapy. 
            It enables clinician-patient interaction, allowing clinicians to assign exercises and monitor results using analytics.
          </p>
          <p>
            <strong>My contribution:</strong> Effectively implemented AWS for backend data analysis, Introduced and implemented C++ code for audio analytics, 
            Utilized FFT algorithms for Jitter & Pitch calculations, Used React Native to create the exercise the exercise screen.
          </p>
          <img src="GV.jpg" alt="GoodVoice App" className="project-image" />
        </li>

        <li className="project-item">
          <h3>Dungeon Game</h3>
          <p>
            Worked with a team to create a single-player dungeon game. There is one character, and he moves around using the arrow keys. He uses a sword to attack enemies and the goal is to kill all of the enemies. Learned a lot about the process of software development with the team.
          </p>
          <p>
            <strong>My contribution:</strong> Effectively implemented the 3 dungeon screens, enemies, and enemy attacks along with player attacks. Utilized Android Studio and Java.
          </p>
          <img src="DG.png" alt="Dungeon Game" className="project-image" />
        </li>
      </ul>
    </section>
  );
};

export default Projects;

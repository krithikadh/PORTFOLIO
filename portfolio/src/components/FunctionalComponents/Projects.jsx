import React from "react";
import "../css/About.css";
import "../css/Profiles.css";
import { FaProjectDiagram } from "react-icons/fa";
function Projects() {
  return (
    <div className="about-container">
      <div className="profiles-container">
        <div className="profiles-flex">
          <a
            href="https://www.linkedin.com/in/krithika-d-h"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            <FaProjectDiagram className="profile-icon" /> Personal Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;

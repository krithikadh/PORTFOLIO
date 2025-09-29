import React from "react";
import "../css/About.css";
import "../css/Profiles.css";
import "../css/Skills.css";
import { FaLinkedin, FaGithub, FaCode, FaLaptopCode } from "react-icons/fa";

function Profiles() {
  return (
    <div className="others-container">
      <div className="profiles-container">
        <div className="profiles-flex">
          <a
            href="https://www.linkedin.com/in/krithika-d-h"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            <FaLinkedin className="profile-icon" /> LinkedIn
          </a>
          <br />
          <a
            href="https://github.com/krithikadh"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            <FaGithub className="profile-icon" /> GitHub
          </a>
          <br />
          <a
            href="https://leetcode.com/u/krithikadh/"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            <FaCode className="profile-icon" /> LeetCode
          </a>
          <br />
          <a
            href="https://www.skillrack.com/faces/resume.xhtml?id=407744&key=a9bc5e609a08256611887e0d46c8605915268db2"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            <FaLaptopCode className="profile-icon" /> SkillRack
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profiles;

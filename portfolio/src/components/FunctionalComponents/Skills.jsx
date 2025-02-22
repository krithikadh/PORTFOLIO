import React from "react";
import "../css/Skills.css";
import "../css/About.css";

function Skills() {
  return (
    <div className="about-container">
      <div className="skills-container">
        <div className="skills-flex">
          <div className="skill-section">
            <h3>LANGUAGES</h3>
            <slist>
              <li>Python</li>
              <li>C</li>
              <li>Java</li>
              <li>MySQL</li>
              <li>MATLAB</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </slist>
          </div>

          <div className="skill-section">
            <h3>TOOLS</h3>
            <slist>
              <li>VS Code</li>
              <li>Jupyter Notebook</li>
              <li>Unix/Linux</li>
              <li>MongoDB</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Figma</li>
              <li>Canva</li>
              <li>Power BI</li>
              <li>Vercel</li>
            </slist>
          </div>

          <div className="skill-section">
            <h3>LIBRARIES</h3>
            <slist>
              <li>NumPy</li>
              <li>Pandas</li>
              <li>Matplotlib</li>
              <li>Seaborn</li>
              <li>Scikit-Learn</li>
              <li>TensorFlow</li>
              <li>React</li>
            </slist>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

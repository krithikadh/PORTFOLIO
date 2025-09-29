import React from "react";
import "../css/About.css";
import "../css/Education.css";

function Education() {
  return (
    <div className="education-container">
      {/* B.Tech */}
      <div className="education-item">
        <div className="education-left">
          <h3>B. Tech Artificial Intelligence & Data Science</h3>
          <p>Nov 2022 - Present</p>
        </div>
        <div className="education-right">
          <h4>St. Joseph's Institute of Technology</h4>
          <ul>
            <li>8.47 CGPA (as of third year)</li>
          </ul>
        </div>
      </div>

      {/* Schooling */}
      <div className="education-item">
        <div className="education-left">
          <h3>Schooling</h3>
          <p>June 2008 - July 2022</p>
        </div>
        <div className="education-right">
          <h4>B V Bhavan's Rajaji Vidyashram</h4>
          <ul>
            <li>89.8% in SSC</li>
            <li>82.2% in HSC</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education;

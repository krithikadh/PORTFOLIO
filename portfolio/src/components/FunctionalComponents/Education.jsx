import React from "react";
import "../css/About.css";
import "../css/Education.css"

function Education() {
  return (
    <div className="about-container">
      <div className="education-container">
        <div className="education-flex">
          <div className="education-section">
            <h3>
              B. Tech Artificial Intelligence & Data Science
              <br />
              Nov 2022 - Present
            </h3>
            <h3>
              <edustyle>St. Joseph's Institute of Technology</edustyle>
            </h3>
            <li>8.40 CGPA (as of five semesters)</li>
          </div>

          <div className="education-section">
            <h3>
              Schooling
              <br />
              June 2008 - July 2022
            </h3>
            <h3>
              <edustyle>B V Bhavan's Rajaji Vidyashram</edustyle>
            </h3>

            <li>89.8% in SSC</li>
            <li>82.2% in HSC</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

import React from "react";
import "../css/Experience.css";

function Experience() {
  return (
    <div className="experience-container">
      {/* Tekcogent Internship */}
      <div className="experience-item">
        <div className="experience-left">
          <h3>Tekcogent Solutions Pvt Ltd</h3>
          <p>21 June 2024 - 05 July 2024</p>
        </div>
        <div className="experience-right">
          <h4>AI Intern</h4>
          <ul>
            <li>15-day online internship</li>
            <li>Primarily worked in Machine Learning domain</li>
            <li>Hands-on experience with Scikit-Learn and TensorFlow</li>
            <li>Developed a mini-project titled "Neural Style Transfer"</li>
          </ul>
        </div>
      </div>

      {/* EY Internship */}
      <div className="experience-item">
        <div className="experience-left">
          <h3>EY GDS India LLP</h3>
          <p>02 June 2025 - 29 August 2025</p>
        </div>
        <div className="experience-right">
          <h4>Intern</h4>
          <ul>
            <li>3-month hybrid internship</li>
            <li>Worked in GenAI domain with knowledge bot enhancement team</li>
            <li>Explored GenAI concepts, architecture, and frameworks like Ollama & LangChain</li>
            <li>Contributed majorly towards frontend & UI development</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;

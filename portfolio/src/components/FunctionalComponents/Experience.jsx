import React from "react";
import "../css/About.css";

function Experience(){
    return (
        <div className="about-container">
          <div>
          <h3>
            AI Intern, Tekcogent Solutions Private Limited<br/>
            21 June 2024 - 05 July 2024
          </h3>
          <p>
            <ul>
                <li>15-day online internship</li>
                <li>Primarily worked in Machine Learning domain</li>
                <li>Gained hands-on experience with Scikit-Learn and TensorFlow</li>
                <li>Developed a mini-project titled "Neural Style Transfer"</li>
            </ul>
          </p>
          </div>

          <div>
          <h3>
            Intern, EY Global Delivery Services India LLP<br/>
            02 June 2025 - 29 August 2025
          </h3>
          <p>
            <ul>
                <li>3-months internship (hybrid)</li>
                <li>Worked in GenAI domain, specifically alongside a knowledge bot enhancement team</li>
                <li>Gained knowledge on GenAI concepts, architecture and frameworks like Ollama and Langchain</li>
                <li>Contributed majorly towards frontend and UI development</li>
            </ul>
          </p>
          </div>

        </div>
        
    );
}

export default Experience
import React from "react";
import "../css/Certifications.css";

function Certifications() {
  const certifications = [
    "LINGUASKILL, CAMBRIDGE UNIVERSITY - Overall B2 with C1 in Listening (2024)",
    "Python Programming Course, SkillRack (Sept 2023)",
    "C Programming Course, SkillRack (Sept 2023)",
    "Java, Spoken Tutorial - IIT Bombay (Jan 2024)",
    "Design and Analysis of Algorithms, NPTEL (Jan 2024 - Mar 2024)",
    "Introduction to MongoDB for Students, MongoDB (July 2024)",
    "Data Structures and Algorithms using Java, Infosys Springboard (July 2024)",
    "SQL, PrepInsta (Sept 2024)",
    "Software Engineering, NPTEL (July 2024 - Oct 2024)",
    "Big Data Computing, NPTEL (Aug 2024 - Oct 2024)",
    "Networking Basics, CISCO (Jan 2025)",
    "HTML, Spoken Tutorial - IIT Bombay (Jan 2025)",
    "CSS (Basic), HackerRank (Mar 2025)",
    "Data Mining, NPTEL (Jan 2025 - Mar 2025)",
    "Generative AI for Beginners, Udemy (Aug 2025)",
    "AZ-900 Azure Fundamentals: Crash Course, Udemy (Aug 2025)",
    "Mastering LLMs with Ollama LangChain CrewAI Hugging Face, Udemy (Aug 2025)"
  ];

  return (
    <div className="certifications-container">
      <ul>
        {certifications.map((item, index) => {
          const [before, after] = item.split(/,(.+)/); // split only at first comma
          return (
            <li key={index}>
              <span className="cert-before">{before},</span>
              <span className="cert-after">{after}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Certifications;

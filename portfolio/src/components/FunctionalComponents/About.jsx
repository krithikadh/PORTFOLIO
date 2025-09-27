import React from "react";
import "../css/About.css";
import profilePic from "../../assets/photo.jpg";
function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
      <div className="about-text">
        <p>
          Hi! I'm a final year B.Tech student specializing in Artificial
          Intelligence & Data Science. Apart from being proficient in
          programming languages like Java, C, Python, HTML, CSS, JavaScript, I'm
          also skilled in using tools like Figma, Git & GitHub. I hold a special
          interest towards Full Stack Web Development and UI/UX Designing and
          intend to work on projects where technology and creativity come
          together. Along with excellent communication skills, adaptability and
          ability to multitask, I'm a quick learner open to pursue new things to
          meet professional requirements.
        </p>
      </div>
    </div>
  );
}

export default About;

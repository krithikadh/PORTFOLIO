import React from "react";
import "../css/Profiles.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div className="about-container">
      <div className="profiles-container">
        <div className="profiles-flex">
          <a target="_blank" rel="noopener noreferrer" className="profile-link">
            <FaEnvelope className="profile-icon" /> dhkrithika1114@gmail.com
          </a>
          <br />
          <a target="_blank" rel="noopener noreferrer" className="profile-link">
            <FaPhone className="profile-icon" /> 7338846109
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

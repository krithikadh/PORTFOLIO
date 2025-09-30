import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/Contact.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f9m4kdw",   // ✅ Your EmailJS service ID
        "template_pvvmiir",  // ✅ Your template ID
        form.current,
        "c-hWvYtMF67tCmpwf"  // ✅ Your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      {/* Contact Info */}
      <div className="profiles-container">
        <div className="profiles-flex">
          <a
            href="mailto:dhkrithika1114@gmail.com"
            className="profile-link"
          >
            <FaEnvelope className="profile-icon" /> dhkrithika1114@gmail.com
          </a>
          <br/>

          <a
            href="tel:7338846109"
            className="profile-link"
          >
            <FaPhone className="profile-icon" /> 7338846109
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h3>Mail me!</h3>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

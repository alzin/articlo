import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./ContactSection.css";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0orlrkc",
        "template_fabncd4",
        form.current,
        "mqYufy-Epq6lV-Wdk",
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
        },
        (error) => {
          alert("An error occurred while sending the email.");
        },
      );
    e.target.reset();
  };

  return (
    <section id="contact-section">
      <div className="contact-wrapper">
        <div className="contact-container">
          <h1 className="contact-headline">Get in Touch</h1>
          <div className="contact-methods">
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="contact-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="contact-input"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="contact-textarea"
                ></textarea>
                <button type="submit" className="contact-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

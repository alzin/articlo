import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section id="contact-section">
      <div className="contact-wrapper">
        <div className="contact-container">
          <h1 className="contact-headline">Get in Touch</h1>
          <div className="contact-methods">
            <div className="contact-form">
              <form>
                <input
                  type="text"
                  placeholder="Name"
                  className="contact-input"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="contact-input"
                />
                <textarea
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

import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section id="contact-section">
      <div className="contact-wrapper">
        <div className="contact-container">
          <h1 className="contact-headline">Get in Touch</h1>
          <p className="contact-subheadline">
            We're available 24/7 and we're always happy to help.
          </p>

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

            <div className="contact-info">
              <p>
                <strong>Email:</strong> ghaithalzein05@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +8190-9362-3261
              </p>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/mohamadghaith.alzin/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamad-ghaith-alzin-884782108/"
                  rel="noreferrer"
                  target="_blank"
                  className="social-icon"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

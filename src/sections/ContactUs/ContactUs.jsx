import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./ContactUs.css";

import { Button } from "reactstrap";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0orlrkc",
        "template_fabncd4",
        form.current,
        "mqYufy-Epq6lV-Wdk"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred while sending the email.");
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact-section">
      <div className="contact-section">
        <div className="contact-image"></div>
        <div className="contact-details">
          <h2>Contact Us</h2>
          <p>Get in touch with us to discuss more...</p>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <Button color="success" size="lg" outline type="submit">
              Send Message 2
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

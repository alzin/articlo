import React from "react";
import "./ContactUs.css";

import { Button } from "reactstrap";

const ContactUs = () => {
  return (
    <section id="contact-section">
      <div className="contact-section">
        <div className="contact-image"></div>
        <div className="contact-details">
          <h2>Contact Us</h2>
          <p>Get in touch with us to discuss more...</p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <Button size="lg" color="primary" outline type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

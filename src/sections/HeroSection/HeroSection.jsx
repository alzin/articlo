import React from "react";
import "./HeroSection.css";

import HeroImage from "../../images/1.png";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-headline">
        Instant Article Generation at Your Fingertips
      </h1>
      <p className="hero-subheadline">
        Create high-quality articles in seconds and boost your productivity.
      </p>
      <img
        src={HeroImage}
        alt="Illustration of service"
        className="hero-image"
      />
      <button className="cta-button">Get Started</button>
    </div>
  );
};

export default HeroSection;

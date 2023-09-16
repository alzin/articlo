import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./HeroSection.css";

import HeroImage from "../../images/1.png";

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate("/auth"); // Navigate to /auth when button is clicked
  };

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
      <button className="cta-button" onClick={handleButtonClick}>
        Get Started
      </button>
      {/* Add onClick handler to the button */}
    </div>
  );
};

export default HeroSection;

import React from "react";
import "./Hero.css";
import { Button } from "reactstrap";

const Hero = ({ handleSignupClick }) => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Welcome to Artículo</h1>
      <p className="hero-description">
        Write, Generate, & edit articles <br /> or blogs with AI
      </p>
      <Button
        className="hero-button"
        color="warning"
        outline
        onClick={handleSignupClick}
      >
        Get Started
      </Button>
    </div>
  );
};

export default Hero;

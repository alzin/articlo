import React from "react";
import "./Hero.css";

import { Button } from 'reactstrap';

const Hero = ({ handleSignupClick }) => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Welcome to Our AI Blogging Platform</h1>
      <p className="hero-description">
        Write, Generate, and Share Blogs with Ease
      </p>
      <Button color="danger" size="lg" onClick={handleSignupClick}>
        Try Now For Free
      </Button>
    </div>
  );
};

export default Hero;

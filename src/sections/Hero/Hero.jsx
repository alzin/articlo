import React from "react";
import "./Hero.css";

import { Button } from "reactstrap";

const Hero = ({ handleSignupClick }) => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Welcome to Our AI Blogging <br /> Platform</h1>
      <p className="hero-description">
        Write, Generate, <br /> & Share Blogs with Ease
      </p>
      <Button className="larger-button" color="danger" onClick={handleSignupClick}>
        TRY NOW
      </Button>
    </div>
  );
};

export default Hero;

import React from "react";
import { useNavigate } from "react-router-dom";

import "./PricingSection.css";

const PricingSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = (event) => {
    navigate("/auth");
  };

  return (
    <section id="pricing-section">
      <div className="pricing-container">
        <h1 className="pricing-heading">Our Plans</h1>
        <div className="pricing-grid">
          <div className="pricing-cards">
            <div className="pricing-card">
              <h2>Basic</h2>
              <p>FREE</p>
              <ul>
                <li>5 Articles</li>
                <li>Email Support</li>
              </ul>
              <button className="pricing-button" onClick={handleButtonClick}>
                Access Now
              </button>
            </div>
            <div className="pricing-card">
              <h2>Pro</h2>
              <p>FREE</p>
              <ul>
                <li>20 Articles</li>
                <li>Priority Support</li>
              </ul>
              <button className="pricing-button" onClick={handleButtonClick}>
                Access Now
              </button>
            </div>
            <div className="pricing-card">
              <h2>Enterprise</h2>
              <p>Custom Pricing</p>
              <ul>
                <li>Unlimited Articles</li>
                <li>24/7 Support</li>
              </ul>
              <a href="#contact-section" className="pricing-button">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

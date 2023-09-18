import React from "react";
import "./PricingSection.css";

const PricingSection = () => {
  return (
    <section id="pricing-section">
      <div className="pricing-container">
        <h1 className="pricing-heading">Pricing</h1>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h2>Basic</h2>
            <p>$10/month</p>
            <ul>
              <li>5 Articles</li>
              <li>Email Support</li>
            </ul>
            <button className="pricing-button">Subscribe</button>
          </div>
          <div className="pricing-card">
            <h2>Pro</h2>
            <p>$30/month</p>
            <ul>
              <li>20 Articles</li>
              <li>Priority Support</li>
            </ul>
            <button className="pricing-button">Subscribe</button>
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
    </section>
  );
};

export default PricingSection;

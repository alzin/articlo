import React from "react";
import "./Pricing.css";

import { Button } from 'reactstrap';

const Pricing = () => {
  return (
    <section id="pricing-section">
      <div className="container-fluid pricing-container">
        <h2 className="pricing-title">Pricing</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3 className="pricing-plan">Basic</h3>
            <ul className="pricing-features">
              <li>
                Access to the core features of the platform, including automated
                text and image generation.
              </li>
              <li>
                Limited monthly usage quota for content generation.
              </li>
              <li>
                Basic customer support.
              </li>
            </ul>
            <Button color="primary" size="lg" outline>Try Now for Free</Button>
          </div>
          <div className="pricing-card">
            <h3 className="pricing-plan">Pro</h3>
            <ul className="pricing-features">
              <li>
                Unlock advanced features and functionalities for enhanced
                content creation.
              </li>
              <li>
                Increased monthly usage quota for content generation.
              </li>
              <li>
                Priority customer support for faster assistance.
              </li>
              <li>
                Access to premium templates and design options.
              </li>
            </ul>
            <Button color="primary" size="lg" outline>Try Now for Free</Button>
          </div>
          <div className="pricing-card">
            <h3 className="pricing-plan">Premium</h3>
            <ul className="pricing-features">
              <li>
                Full access to all platform features and tools, providing the
                ultimate content creation experience.
              </li>
              <li>
                Unlimited monthly usage quota for content generation.
              </li>
              <li>
                Early access to new features and updates.
              </li>
            </ul>
            <Button color="primary" size="lg" outline>Try Now for Free</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

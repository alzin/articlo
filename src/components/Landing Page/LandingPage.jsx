import React from 'react';
import './LandingPage.css'; 

function LandingPage() {
  return (
    <div className="landing-page">
      <h1 className="landing-page-title">Artículo</h1>
      <div className="landing-page-content">
        <div className="landing-page-text">
          <p className="landing-page-examples">Get articles & blogs on any topic</p>
          <ul className="landing-page-examples-list">
            <li>Technology</li>
            <li>Science</li>
            <li>Travel</li>
            <li>Health</li>
          </ul>
        </div>
        <p className="get-started-text">Get Started</p>
        <div className="landing-page-buttons">
          <button className="login-button">Log In</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

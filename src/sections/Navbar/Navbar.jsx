import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Import useHistory
import "./Navbar.css";

function Navbar({ showNav, showLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize history object

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToHome = () => {
    // Create navigateToHome function
    navigate("/"); // Redirect to "/"
  };

  return (
    <section id="home">
      <div className="App">
        <nav className="navbar">
          <h1 className="logo" onClick={navigateToHome}>
            Artículo
          </h1>{" "}
          {/* Add onClick behavior */}
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          {showNav && (
            <ul className={`nav-list ${isOpen ? "active" : ""}`}>
              <li className="nav-item">
                <a href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a href="#features-section">Features</a>
              </li>
              <li className="nav-item">
                <a href="#pricing-section">Pricing</a>
              </li>
              <li className="nav-item">
                <a href="#contact-section">Contact</a>
              </li>
              {showLogout && (
                <li className="nav-item">
                  <button className="logout-button">Logout</button>
                </li>
              )}
            </ul>
          )}
        </nav>
      </div>
    </section>
  );
}

Navbar.propTypes = {
  showNav: PropTypes.bool.isRequired,
  showLogout: PropTypes.bool,
};

export default Navbar;

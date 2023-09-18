import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logout from "../../components/Logout/Logout";

import "./Navbar.css";

function Navbar({ showNav, showLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <section id="home">
      <div className="App">
        <nav className="navbar">
          <h1 className="logo" onClick={navigateToHome}>
            Artículo
          </h1>
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
            </ul>
          )}
          {showLogout && !showNav && <Logout />}
        </nav>
      </div>
    </section>
  );
}

export default Navbar;

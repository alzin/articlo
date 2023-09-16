import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="home">
      <div className="App">
        <nav className="navbar">
          <h1 className="logo">Artículo</h1>
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
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
        </nav>
      </div>
    </section>
  );
}

export default Navbar;

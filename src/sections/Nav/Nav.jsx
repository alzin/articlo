import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "reactstrap";

import "./Nav.css";

const Nav = ({ handleLoginClick, handleSignupClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollTo = (section_id) => {
    const section = document.getElementById(section_id);
    section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <section id="home-section">
      <nav className="nav-container">
        <div className="logo">
          <Link to="/">Articlo</Link>
        </div>
        <input
          type="checkbox"
          id="menu-toggle"
          className="menu-toggle"
          checked={menuOpen}
          onChange={toggleMenu}
        />
        <label htmlFor="menu-toggle" className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Button
            className="remove-radius"
            color="dark"
            size="lg"
            outline
            onClick={() => scrollTo("features-section")}
          >
            Features
          </Button>
          <Button
            className="remove-radius"
            color="dark"
            size="lg"
            outline
            onClick={() => scrollTo("pricing-section")}
          >
            Pricing
          </Button>
          <Button
            className="remove-radius"
            color="dark"
            size="lg"
            outline
            onClick={() => scrollTo("contact-section")}
          >
            Contact Us
          </Button>
          <Button size="lg" color="secondary" onClick={handleLoginClick}>
            Login
          </Button>
          <Button size="lg" color="success" onClick={handleSignupClick}>
            Sign Up
          </Button>
        </div>
      </nav>
    </section>
  );
};

export default Nav;

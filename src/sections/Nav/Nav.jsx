import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from 'reactstrap';

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
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link onClick={() => scrollTo("features-section")}>Features</Link>
          </li>
          <li>
            <Link onClick={() => scrollTo("pricing-section")}>Pricing</Link>
          </li>
          <li>
            <Link onClick={() => scrollTo("contact-section")}>Contact Us</Link>
          </li>
          <li>
            <Button color="secondary" size="sm" outline onClick={handleLoginClick}>
              Login
            </Button>
          </li>
          <li>
            <Button color="success" outline onClick={handleSignupClick}>
              Sign Up
            </Button>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Nav;

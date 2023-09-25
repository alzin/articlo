import React from "react";
import { Link } from "react-router-dom";

import Logout from "../Logout/Logout";

import "./MainBar.css";

function MainBar() {
  return (
    <nav className="navbar">
      <Logout />
      <Link to="/articles" className="my-articles-button">
        My Articles
      </Link>
    </nav>
  );
}

export default MainBar;

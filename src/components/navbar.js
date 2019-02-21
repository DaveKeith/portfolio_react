import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  if (window.location.pathname === "/") {
    return (
      <nav className="header-navbar">
        <Link to="/" className="navbar-active" onClick={props.hideDropdowns}>
          About
        </Link>
        <Link to="/experience" onClick={props.hideDropdowns}>
          Experience
        </Link>
        <div className="click-for-dropdown" onClick={props.dropdown}>
          Projects
        </div>
      </nav>
    );
  } else if (window.location.pathname === "/experience") {
    return (
      <nav className="header-navbar" id="top-of-page">
        <Link to="/" onClick={props.hideDropdowns}>
          About
        </Link>
        <Link
          to="/experience"
          className="navbar-active"
          onClick={props.hideDropdowns}
        >
          Experience
        </Link>
        <div className="click-for-dropdown" onClick={props.dropdown}>
          Projects
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="header-navbar" id="top-of-page">
        <Link to="/" onClick={props.hideDropdowns}>
          About
        </Link>
        <Link to="/experience" onClick={props.hideDropdowns}>
          Experience
        </Link>
        <div
          className="click-for-dropdown navbar-active"
          onClick={props.dropdown}
        >
          Projects
        </div>
      </nav>
    );
  }
};

export default Navbar;

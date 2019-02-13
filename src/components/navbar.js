import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    if (window.location.pathname === "/") {
      return (
        <nav className="header-navbar navbar" id="top-of-page">
          <Link
            to="/"
            className="navbar__active"
            onClick={this.props.hideDropdowns}
          >
            About
          </Link>
          <Link to="/experience" onClick={this.props.hideDropdowns}>
            Experience
          </Link>
          <div className="click-for-dropdown" onClick={this.props.dropdown}>
            Projects
          </div>
        </nav>
      );
    } else if (window.location.pathname === "/experience") {
      return (
        <nav className="header-navbar navbar" id="top-of-page">
          <Link to="/" onClick={this.props.hideDropdowns}>
            About
          </Link>
          <Link
            to="/experience"
            className="navbar__active"
            onClick={this.props.hideDropdowns}
          >
            Experience
          </Link>
          <div className="click-for-dropdown" onClick={this.props.dropdown}>
            Projects
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="header-navbar navbar" id="top-of-page">
          <Link to="/" onClick={this.props.hideDropdowns}>
            About
          </Link>
          <Link to="/experience" onClick={this.props.hideDropdowns}>
            Experience
          </Link>
          <div
            className="click-for-dropdown navbar__active"
            onClick={this.props.dropdown}
          >
            Projects
          </div>
        </nav>
      );
    }
  }
}

export default Navbar;

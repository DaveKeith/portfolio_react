import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.scss";

import About from "./components/about";
import Projects from "./components/projects";
import Experience from "./components/experience";
import GitHubImg from "./imgs/GitHub-Mark-64px.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className="navbar">
            <Link to="/">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/projects">Projects</Link>
          </nav>
        </header>
        <div className="content">
          <Route exact path="/" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/experience" component={Experience} />
        </div>
        <footer>
          <nav>
            <div className="footer-section">
              <h4>Social Networks:</h4>
              <a
                href={
                  "https://www.linkedin.com/in/david-keith-70704989?trk=nav_responsive_tab_profile"
                }
                target="_blank"
              >
                <img
                  title="LinkedIn"
                  alt="LinkedIn"
                  src="https://socialmediawidgets.files.wordpress.com/2014/03/linkedin1.png"
                />
              </a>
              <a href={"https://github.com/DaveKeith"} target="_blank">
                <img src={GitHubImg} alt="GitHub" />
              </a>
            </div>
            <div className="footer-section">
              <h4>Contact Me:</h4>
              <div>
                <span className="contact-type">Email: </span>
                <span className="contact-info"> d.keith78@yahoo.com</span>
              </div>
              <div>
                <span className="contact-type">Phone: </span>
                <span className="contact-info"> 704-737-1621</span>
              </div>
            </div>
          </nav>
        </footer>
      </div>
    );
  }
}

export default App;

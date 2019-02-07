import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.scss";

import About from "./components/about";
import Projects from "./components/projects";
import Experience from "./components/experience";
import ProjectPage from "./components/project-page";
import Data from "./json/data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownElem: "hide",
      projectList: Data.projects
    };
    this.hideAllDropdowns = this.hideAllDropdowns.bind(this);
    this.projectsDropdown = this.projectsDropdown.bind(this);
  }

  hideAllDropdowns() {
    this.setState({
      dropdownElem: "hide"
    });
  }

  delayHideAllDropdowns() {
    setTimeout(this.hideAllDropdowns(), 200);
  }

  projectsDropdown() {
    if (this.state.dropdownElem === "hide") {
      this.setState({
        dropdownElem: "show"
      });
    } else {
      this.hideAllDropdowns();
    }
  }

  getProjectList() {
    return this.state.projectList.map(project => (
      <Link
        to={`/project/${project.projectId}`}
        key={project.projectId}
        target="_self"
      >
        {project.name}
      </Link>
    ));
  }

  render() {
    return (
      <div className="App">
        <header>
          <nav className="header-navbar navbar" id="top-of-page">
            <Link to="/" onClick={this.hideAllDropdowns}>
              About
            </Link>
            <Link to="/experience" onClick={this.hideAllDropdowns}>
              Experience
            </Link>
            <div className="click-for-dropdown" onClick={this.projectsDropdown}>
              Projects
            </div>
          </nav>
        </header>
        <div className={`${this.state.dropdownElem}`}>
          <div className="show__columns">
            <div />
            <div />
            <div className="show__columns--dropdown">
              <Link to="/projects" onClick={this.delayHideAllDropdowns}>
                Projects
              </Link>
              {this.getProjectList()}
            </div>
          </div>
        </div>
        <div className="content" onClick={this.hideAllDropdowns}>
          <Route exact path="/" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/experience" component={Experience} />
          <Route
            path="/project/:projectId"
            render={props => (
              <ProjectPage projectId={props.match.params.projectId} />
            )}
          />
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
              <a href="https://github.com/DaveKeith" target="_blank">
                <img src="../imgs/GitHub-Mark-64px.png" alt="GitHub" />
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

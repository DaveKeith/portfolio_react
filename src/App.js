import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import "./App.scss";

import About from "./components/about";
import Projects from "./components/projects";
import Experience from "./components/experience";
import ProjectPage from "./components/project-page";
import Navbar from "./components/navbar";
import Data from "./json/data.json";

const App = () => {
  const projectList = Data.projects;
  const [dropdownElem, setDropdownElem] = useState("hide");

  const changeDropdownElem = () => {
    if (dropdownElem === "hide") {
      setDropdownElem("show");
    } else {
      setDropdownElem("hide");
    }
  }
  
  const hideAllDropdowns = () => {
    setDropdownElem("hide");
  }
  
  return (
      <div className="App">
        <header>
          <Navbar
            hideDropdowns={hideAllDropdowns}
            dropdown={changeDropdownElem}
          />
        </header>
        <div className={`${dropdownElem}`}>
          <div className="show__columns">
            <div className="faux-column" />
            <div className="faux-column" />
            <div className="show__columns--dropdown">
              <Link to="/projects" onClick={hideAllDropdowns}>
                Projects Home
              </Link>
              {projectList.map(project => (
                <Link
                  to={`/project/${project.projectId}`}
                  key={project.projectId}
                  onClick={hideAllDropdowns}
                >
                  {project.projectName}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="content" onClick={hideAllDropdowns}>
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
                rel="noopener noreferrer"
              >
                <img
                  title="LinkedIn"
                  alt="LinkedIn"
                  src="https://socialmediawidgets.files.wordpress.com/2014/03/linkedin1.png"
                />
              </a>
              <a
                href="https://github.com/DaveKeith"
                target="_blank"
                rel="noopener noreferrer"
              >
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

export default App;

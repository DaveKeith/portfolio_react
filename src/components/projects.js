import React, { Component, Fragment } from "react";
import ProjectElemData from "../json/project-element.json";
import ProjectElement from "./project-element";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diversey: ProjectElemData.diversey,
      github: ProjectElemData.github
    };
  }

  render() {
    return (
      <Fragment>
        <h1>Projects</h1>
        <div className="projects">
          <div className="projects__intro projects__section">
            I have several work examples from my tenure at Diversey (spun off
            from Sealed Air in 2017) but I also have several examples of my work
            on GitHub as well.
          </div>
          <div className="projects__diversey projects__section">
            <h2>Diversey Projects</h2>
            <div className="projects__description">
              During late 2016 and intermittently throughout 2017, I was the
              sole developer for{" "}
              <a href="http://diverseydigital.com/natools/" target="_blank">
                NaTools
              </a>
              , which was a source for product reference for both Diversey
              employees and for customers. These projects all utilized a similar
              tool-set consisting of HTML, CSS, Javascript, PHP, and use a
              Google Sheets API as a database to allow product specialists with
              no software development background to be able to input changes on
              the website. Here are a few sites that I created from scratch
              while working there:
            </div>
            <div className="projects__section--examples">
              {this.state.diversey.map(project => (
                <ProjectElement
                  key={project.projectId}
                  id={project.projectId}
                  name={project.name}
                  description={project.description}
                />
              ))}
            </div>
          </div>
          <div className="projects__github projects__section">
            <h2>GitHub Projects</h2>
            <div className="projects__description">
              Here are a few of my projects from GitHub, ranging from Ruby on
              Rails projects I've created at The Iron Yard in 2016 to projects
              I've created in the current year:
            </div>
            <div className="projects__section--example-list">
              {this.state.github.map(project => (
                <ProjectElement
                  key={project.projectId}
                  id={project.projectId}
                  name={project.name}
                  description={project.description}
                />
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Projects;

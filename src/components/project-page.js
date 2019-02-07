import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import ProjectPageData from "../json/project-page.json";

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ProjectPageData.projects.find(project => {
        return project.projectId == this.props.projectId;
      })
    };
  }

  topUrls(obj) {
    if (obj.githubUrl && obj.deploymentUrl) {
      return (
        <div className="image-div__links-container">
          <div className="image-div__header-link">
            <span>GitHub URL:</span>
            <a href={obj.githubUrl}>{obj.githubUrl}</a>
          </div>
          <div className="image-div__header-link">
            <span>Deployment URL:</span>
            <a href={obj.deploymentUrl}>{obj.deploymentUrl}</a>
          </div>
        </div>
      );
    } else if (obj.githubUrl) {
      return (
        <Fragment>
          <div className="image-div__header-link">
            <a href={obj.githubUrl}>{obj.githubUrl}</a>
          </div>
        </Fragment>
      );
    }
  }

  secUrls(image) {
    if (image.url) {
      return (
        <Fragment>
          <div className="image-div__section">
            <a href={image.url} target="_blank">
              {image.url}
            </a>
          </div>
          <div className="image-div__section">
            <img src={image.img} />
          </div>
        </Fragment>
      );
    } else {
      return (
        <div className="image-div__section">
          <img src={image.img} />
        </div>
      );
    }
  }

  render() {
    return (
      <Fragment>
        <h1>{this.state.data.projectName}</h1>
        {this.topUrls(this.state.data)}
        <div id="image-grid">
          {this.state.data.project.map(image => (
            <Link to={image.img} target="_self" className="image-div">
              <div className="image-div__section">
                <div className="image-div__section--name">{image.name}</div>
              </div>
              {this.secUrls(image)}
            </Link>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default ProjectPage;

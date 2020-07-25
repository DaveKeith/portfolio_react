import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Data from "../json/data.json";

const topUrls = obj => {
  if (obj.githubUrl && obj.deploymentUrl) {
    return (
      <div className="project-description__links-container">
        <div className="project-description__header-link">
          <span>GitHub URL:</span>
          <a href={obj.githubUrl} target="_blank" rel="noopener noreferrer">
            {obj.githubUrl}
          </a>
        </div>
        <div className="project-description__header-link">
          <span>Deployment URL:</span>
          <a href={obj.deploymentUrl} target="_blank" rel="noopener noreferrer">
            {obj.deploymentUrl}
          </a>
        </div>
      </div>
    );
  } else if (obj.githubUrl) {
    return (
      <div className="project-description__links-container">
        <div className="project-description__header-link">
          <span>GitHub URL:</span>
          <a href={obj.githubUrl} target="_blank" rel="noopener noreferrer">
            {obj.githubUrl}
          </a>
        </div>
      </div>
    );
  }
};

const secUrls = image => {
  if (image.url) {
    return (
      <Fragment>
        <div className="image-div__section">
          <a href={image.url} target="_blank" rel="noopener noreferrer">
            {image.url}
          </a>
        </div>
        <div className="image-div__section">
          <img src={image.img} alt={image.img} />
        </div>
      </Fragment>
    );
  } else {
    return (
      <div className="image-div__section">
        <img src={image.img} alt={image.img} />
      </div>
    );
  }
};

const ProjectPage = props => {
  const data = Data.projects.find(project => {
    // eslint-disable-next-line
    return project.projectId == props.projectId;
  });

  return (
    <Fragment>
      <h1>{data.projectName}</h1>
      <div className="project-description">
        <p>{data.description}</p>
        {topUrls(data)}
      </div>
      <div id="image-grid">
        {data.project.map(image => (
          <Link
            to={image.img}
            target="_blank"
            rel="noopener noreferrer"
            className={`image-div ${data.projectName}`}
          >
            <div className="image-div__section">
              <div className="image-div__section--name">{image.name}</div>
            </div>
            {secUrls(image)}
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default ProjectPage;

import React from "react";
import { Link } from "react-router-dom";

const ProjectElement = props => {
  return (
    <Link to={`/project/${props.id}`} className="projects__link" target="_top">
      <div className="projects__link--details">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};

export default ProjectElement;

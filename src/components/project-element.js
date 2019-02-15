import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectElement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Link
        to={`/project/${this.props.id}`}
        className="projects__link"
        target="_top"
      >
        <div className="projects__link--details">
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
        </div>
      </Link>
    );
  }
}

export default ProjectElement;

import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import DaveKeith from "../imgs/davekeithpic.jpg";

const About = () => {
  return (
    <Fragment>
      <h1>About</h1>
      <div className="about">
        <div className="about__me">
          <h2>About Me</h2>
          <img src={DaveKeith} className="about__me--pic1" alt="davekeith1" />
          <span>
            Hi, I'm Dave Keith (I go by David as well but davidkeith wasn't
            available as a github account when I signed up). I'm a software
            developer with experience in a wide array of technologies,
            accustomed to working in a wide array of work environments.
          </span>
        </div>
        <div className="about__the-site">
          <h2>About This Site</h2>
          <div className="about__the-site--info">
            The main purpose of this site is to say some things about myself and
            give a more in depth overview of my projects and other experience.
            Here's a list of technologies I used for this site:
            <ul>
              <li>
                ReactJS - This is a single page application, using React routing
                functionality and generates HTML by means of JS-based
                components. Runs a server on GitHub Pages utilizing the
                dependency, "gh-pages".
              </li>
              <li>
                SCSS - Using the "node-sass" dependency we can utilize SASS
                functionality such as nested statements, variables, and imports
                in order to make the stylesheets more readable.
              </li>
              <li>
                JSON - Using JSON input to fill state properties in a React
                application is a very important skill, so I thought I'd go ahead
                and include an example on this site (in the Projects page).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;

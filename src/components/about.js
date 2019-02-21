import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import DaveKeith from "../imgs/davekeithpic.jpg";

const picPage = () => {
  window.open(DaveKeith, "_blank");
};

const About = () => {
  return (
    <Fragment>
      <h1>About</h1>
      <div className="about">
        <div className="about__me">
          <h2>About Me</h2>
          <div className="about__me--pic1" onClick={picPage} />
          <span>
            Hi, I'm Dave Keith (I go by David as well but I've noticed that
            David Keith taken as a profile name much more often). I'm a software
            developer with experience in a wide array of technologies,
            accustomed to working in a wide array of work environments. On top
            of that, I'm very ambitious and willing to learn new technologies,
            and I believe my resume could speak to that (see my{" "}
            <Link to="/experience" target="_top">
              EXPERIENCE
            </Link>{" "}
            page).
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
                components. As the URL indicates, Heroku has allowed us to
                deploy this React application and function as intended.
              </li>
              <li>
                SCSS - Using the "node-sass" dependency we can utilize SASS
                functionality such as nested statements, variables, and imports
                in order to make the stylesheets more readable. Additionally,
                mobile devices represent the majority of users for many
                different websites, so being able to create a responsive site
                that can function on a variety of screens is extremely
                important. This site works on desktop, mobile, and even for very
                large screens used for presentations. Browser compatibility has
                been taken into consideration as well.
              </li>
              <li>
                JSON - Using JSON input to fill state properties in a React
                application and provide more automated functionality to the site
                is a very important skill, so I thought I'd go ahead and include
                an example on this site (under the{" "}
                <Link to="/projects" target="_top">
                  PROJECTS
                </Link>{" "}
                pages).
              </li>
            </ul>
            <h5>GitHub URL: </h5>
            <a href="https://github.com/DaveKeith/portfolio_react">
              https://github.com/DaveKeith/portfolio_react
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;

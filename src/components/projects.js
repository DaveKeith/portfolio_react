import React, { Component, Fragment } from "react";

const Projects = () => {
  return (
    <Fragment>
      <h1>Projects</h1>
      <div className="projects">
        <div className="projects__intro projects__section">
          I have several work examples from my tenure at Diversey (spun off from
          Sealed Air in 2017) but I also have several examples of my work on
          GitHub as well.
        </div>
        <div className="projects__diversey projects__section">
          <h2>Diversey Projects</h2>
          <div className="projects__description">
            During late 2016 and intermittently throughout 2017, I was the sole
            developer for{" "}
            <a href="http://diverseydigital.com/natools/" target="_blank">
              NaTools
            </a>
            , which was a source for product reference for both Diversey
            employees and for customers. Here are a few sites that I created
            from scratch while working there:
          </div>
          <div className="projects__diversey--examples">
            <div>
              <a
                href="http://www.diverseydigital.com/natools/productselector/"
                target="_blank"
              >
                Product Selector
              </a>
            </div>
            <div>
              <a
                href="http://www.diverseydigital.com/natools/dilutioncalculator/"
                target="_blank"
              >
                Dilution Calculator
              </a>
            </div>
            <div>
              <a
                href="http://www.diverseydigital.com/natools/FloorCareSolutions"
                target="_blank"
              >
                Floor Care Solutions
              </a>
            </div>
          </div>
        </div>
        <div className="projects__github projects__section">
          <h2>GitHub Projects</h2>
          <div className="projects__description">
            Here are a few of my projects from GitHub, ranging from Ruby on
            Rails projects I've created at The Iron Yard in 2016 to projects
            I've created in the current year:
          </div>
          <div className="projects__github--example-list">
            <div className="projects__github--example">
              <a href="https://github.com/insidethepark/RB" target="_blank">
                Inside the Park
              </a>
              <div>
                A Ruby on Rails application that allows a user to create an
                itinerary and fill it with events (baseball games) extracted
                from an API. The user could choose a day and an event from that
                day, which would allow the application to show the next day’s
                events, continuing until the user stops adding events. The user
                will then be able to view their itinerary with all the details
                related to the events scheduled for each day.
              </div>
            </div>
            <div className="projects__github--example">
              <a
                href="https://github.com/ttsdobc-dseb-proj01/recipe-list"
                target="_blank"
              >
                The Spoon
              </a>
              <div>
                A Java Spring-Boot application that allows users to share
                recipes. It allows users to create recipes, taking into account
                the ingredients and steps needed to create the recipe.
                Additionally, the user can browse a list of recipes select one,
                and read, update, or delete.
              </div>
            </div>
            <div className="projects__github--example">
              <a href="https://github.com/workoutApp" target="_blank">
                Workout App
              </a>
              <div>
                A MEAN stack (MongoDB, ExpressJS, AngularIO, NodeJS) application
                that allows a user to create a workout schedule, and then read,
                update, or delete workouts. A workout is scheduled for a
                particular day and includes a set of exercises.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;

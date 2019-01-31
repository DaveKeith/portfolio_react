import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <Fragment>
      <h1>Experience</h1>
      <div className="experience">
        <div className="experience__intro">
          The "About" page was for some more personal detail. Here on the
          "Experience" page, we can get some more in depth descriptions about my
          professional experience and the organizations that I became a part of
          and shaped who I am over the course of my adult life. A more stylish,
          more in depth version of my paper resume so to speak.
        </div>
        <nav className="experience__navbar navbar">
          <a href="#tts">Tech Talent South</a>
          <a href="#diversey">Diversey</a>
          <a href="#tiy">The Iron Yard</a>
          <a href="#uncc">UNCC</a>
          <a href="#navy">Navy</a>
          <a href="#edu">Before 2010</a>
        </nav>
        <div id="tts" className="experience__place">
          <h4>Tech Talent South (2018-2019)</h4>
          <div className="experience__place--info">
            <div className="experience__place--name">
              Tech Talent Select - DevOps
            </div>
            <ul>
              <li>
                Sponsored by <a href="https://www.cognizant.com">Cognizant</a>,
                one of the largest technogy consulting companies in the world
              </li>
              <li>
                An immersive software development environment, 8-5
                Monday-Friday, a full-time commitment to learning
              </li>
              <li>
                Learned technologies such as Java, Spring-Boot, MEAN stack,
                Shell, Powershell, Groovy, Jenkins, and many more.
              </li>
            </ul>
            <div className="experience__place--name">
              Javascript Applications
            </div>
            <ul>
              <li>
                Learned high demand Javascript skills such as ES2015 and React
                to add to the skills I possessed beforehand.
              </li>
            </ul>
          </div>
        </div>
        <div id="diversey" className="experience__place">
          <h4>Diversey (2016-2017)</h4>
          <div className="experience__place--info">
            <ul>
              <li>
                Sole developer on a team responsible for the training/reference
                site,{" "}
                <a href="http://www.diverseydigital.com/natools/">NaTools</a>.
                Responsible not only for being a technology expert but also for
                explaining technical concepts to non-technical team-members.
              </li>
              <li>
                Worked several contracts with the organization, worked with the
                team to deliver new web-pages and critical updates to the site
                (see Projects page for a few of them)
              </li>
            </ul>
            <div className="experience__place--name">
              First Contract (back when Diversey was part of Sealed Air)
            </div>
            <ul>
              <li>
                A 3 month contract through AccruePartners, extended to 4 months
                following the news of the spin-off 1 month into the position
              </li>
              <li>
                Learned PHP and Javascript with very little experience (only one
                JS project in college and it was a basic project)
              </li>
              <li>
                Created numberous databases using the Google-Sheets API,
                allowing the information on web-sites to be updated without the
                need for a software developer
              </li>
            </ul>
            <div className="experience__place--name">
              Later Contracts (transition to Diversey)
            </div>
            <ul>
              <li>Many small contracts throughout 2017</li>
              <li>
                Created several new sites within the timeframe of days/weeks as
                well as numerous other updates.
              </li>
              <li>
                Transitioned everything on the site from Sealed Air to Diversey
                such from Logos, text content, urls, and databases
              </li>
            </ul>
          </div>
        </div>
        <div id="tiy" className="experience__place">
          <h4>The Iron Yard (2016)</h4>
          <div className="experience__place--info">
            <div className="experience__place--name">
              Ruby on Rails in Downtown Atlanta
            </div>
            <ul>
              <li>
                An immersive software development environment, 9-5
                Monday-Friday, a full time commitment to learning
              </li>
              <li>
                Introduced to Ruby on Rails, GitHub, front-end development,
                APIs, JSON, Atom, Postman, and many other technologies
              </li>
            </ul>
          </div>
        </div>
        <div id="uncc" className="experience__place">
          <h4>UNCC (2014-2015)</h4>
          <div className="experience__place--info">
            <div className="experience__place--name">
              Majored in Computer Science
            </div>
            <ul>
              <li>
                Introduced to programming, learning core concepts such as object
                oriented programming, relational databases, and how an agile
                environment is supposed to work
              </li>
              <li>Realized that I wanted to become a software developer.</li>
            </ul>
          </div>
        </div>
        <div id="navy" className="experience__place">
          <h4>US Navy (2010-2014)</h4>
          <div className="experience__place--info">
            <div className="experience__place--name">
              Information Systems Technician (IT)
            </div>
            <ul>
              <li>
                Responsible not only for computer hardware, software, and
                networking, but also for radio operations, cryptography,
                compiling and routing messages, and all other duties required of
                a US Navy Sailor
              </li>
            </ul>
            <div className="experience__place--name">Sea Duty</div>
            <ul>
              <li>
                Served aboard the USS Underwood (FFG36, a frigate), deployed
                throughout the Caribean and to the Pacific Coast of South
                America
              </li>
              <li>
                Served aboard the USS Gettysburg (CG64, a guided missile
                cruiser), deployed to the Persian Gulf as part of a carrier
                group
              </li>
            </ul>
          </div>
        </div>
        <div id="edu" className="experience__place">
          <h4>Before 2010</h4>
          <div className="experience__place--info">
            <div className="experience__place--name">College</div>
            <ul>
              <li>
                Graduated from Belmont Abbey College with a BA in Economics
              </li>
              <li>Attended NC State University</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Experience;

import React from 'react'
import Layout from '../components/layout'
import '../../public/static/css/resume.css'

const ResumePage = () => (
  <Layout>
    <div className="ResumePage">
      <button>Print Resume</button>
      <div>
        <h1>Sutthirath Sean Vilaysane</h1>
        <h5>Full-Stack Developer</h5>
        <h5>{/* Contact Info? */}</h5>
        <h3>Skills {'&'} Expertise</h3>
        <div>
          <ul>
            <li className="skills">HTML</li>
            <li className="skills">Materialize CSS</li>
            <li className="skills">Javascript</li>
            <li className="skills">Express JS</li>
            <li className="skills">React</li>
            <li className="skills">CSS </li>
            <li className="skills">Bootstrap</li>
            <li className="skills">jQuery</li>
            <li className="skills">Python</li>
            <li className="skills">GitHub</li>
            <li className="skills">PureCSS</li>
            <li className="skills">Moment JS</li>
            <li className="skills">Node JS</li>
            <li className="skills">Django</li>
            <li className="skills">Bash</li>
          </ul>
        </div>
        <h3>Projects</h3>
        <div>
          <p>
            <strong>Seattle Transit</strong> | Nov 2018 - Present
          </p>
          <p>
            Seattle Transit is a full-stack application built with the
            collaboration of Henry Hong and Christopher Tack. This application
            is developed with Node.js, Express.js and EJS. My role in the
            project was more frontend. I took charge of the user interface and
            experience as well as the mapbox api integration.
          </p>
        </div>
        <div>
          <p>
            <strong>Sound Transit Hub</strong> | Oct 2018 - Present
          </p>
          <p>
            Sound Transit Hub is a full-stack application. This application is
            developed with Python and the Django framework. The database
            management system used for this app is with Postgres. Some other
            libraries or frameworks utilized are jQuery and materialized css for
            ease of development. This application is currently deployed on
            heroku. This is a Seattle based "review" application for people who
            would like to know local transit information and share their
            personal experiences.
          </p>
        </div>
        <div>
          <p>
            <strong>Bug Invaders</strong> | Sep 2018 - Present
          </p>
          <p>
            Bug Invaders is a web application game. Developed with vanilla
            Javascript to hone my DOM manipulation skills. This is a basic
            defender and wave type game. Utilizing a setInterval game loop for
            the gameplay to create new enemies on the DOM and increase the
            speed.
          </p>
        </div>
        <h3>Professional Experience</h3>
        <div>
          <p>
            <strong>Office Administrator</strong> | Columbia Hospitality |
            Seattle, WA | Mar. 2018 - Aug. 2018
          </p>
          <p>
            Run daily reports and update meeting schedules. Liaison between
            client and meet planner. Prep meeting rooms and ensure client’s
            needs are meet. In charge of creating and designing signage.
          </p>
        </div>
        <div>
          <p>
            <strong>Lead Front Office Agent</strong> | Hotel FIVE | Seattle, WA
            | Mar. 2016 - Jan. 2018
          </p>
          <p>
            Performed as the Manager’s personal “tech guy” by assisting with all
            tech inquiries such as networking connectivity, OPERA
            troubleshooting, and other general issues. Mentored new agents and
            ensure the success of their accomplishments. Developed new or
            improve operational procedures and policies to better satisfy
            company regulations while giving the absolute premium experience for
            our guests. Maintained the safety of all personnel on the property
            by preventative quality checks and enforced surveillance.
          </p>
        </div>
        <div>
          <p>
            <strong>Front Office Agent</strong> | Hyatt Regency Orlando
            International Airport | Orlando, FL | May 2015 - Oct. 2015
          </p>
          <p>
            Responsible for checking guests in and out of the property with
            expertise. Delivered authentic hospitality and guest service by
            exceeding customer satisfaction. Utilized employee empowerment by
            investigating concerns and resolving issues. Assembled a plethora of
            knowledge of the property and area that can rival a concierge.
            Increased the department revenue by up-selling rooms with creative
            suggestion.
          </p>
        </div>
        <h3>Education</h3>
        <div>
          <p>
            Web Development Immersive | General Assembly | Graduating Dec. 2018
            | Seattle, WA
          </p>
        </div>
        <div>
          <p>
            B.S. Hospitality Management | University of Central Florida |
            Graduated Dec. 2015 | Orlando, FL
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default ResumePage

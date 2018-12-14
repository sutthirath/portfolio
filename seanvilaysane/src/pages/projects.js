import React from 'react'
import Layout from '../components/layout'
import '../../public/static/css/projects.css'
import seattle_transit_icon from '../images/seattle_transit_icon.png'
import yocal_logo from '../images/yocal_logo.png'

const ProjectsPage = () => (
  <Layout>
    {/* Bug Invaders Section */}
    <section className="project-section section-hero">
      <h2 className="BugInvaders">BUG INVADERS</h2>
    </section>
    <section className="project-section section-info">
      <div>
        <img
          src="https://media.giphy.com/media/1kTOfry9f5sxuYM3Fa/giphy.gif"
          width={`${900}em`}
          height={`${200}em`}
        />
      </div>
      <div className="details">
        <h4>"Addictive" "Fun" "Cool Game"</h4>
        <p>
          Lightweight web browser game that is built with intuiutive javascript.
          No extra libraries or frameworks invovled. Delivering a simple but
          enjoyable experience.
        </p>
        <a href="https://github.com/sutthirath/BugInvaders" target="_blank">
          <button>Source Code</button>
        </a>
        <a href="https://sutthirath.github.io/BugInvaders/" target="_blank">
          <button>Play Game</button>
        </a>
      </div>
    </section>
    <hr />
    {/* Seattle Transit Section */}
    <section className="project-section section-hero">
      <img src={seattle_transit_icon} width={`${400}em`} height={`${400}em`} />
    </section>
    <section className="project-section section-info">
      <div className="details">
        <h4>Simple and Easy to Use Public Transit App.</h4>
        <p>
          An interactive public transit app for the Seattle, WA area. Created
          with the OneBusAway API but designed with the collaboration of Sean
          Vilaysane, Henry Hong, and Chris Tack. Easy to navigate interface with
          a beautiful visualization of local transit data.
        </p>
        <a href="https://github.com/sutthirath/SeattleTransit" target="_blank">
          <button>Source Code</button>
        </a>
        <a href="https://nameless-harbor-37613.herokuapp.com/" target="_blank">
          <button>View App</button>
        </a>
      </div>
      <div>
        <img
          src="https://media.giphy.com/media/1yjq2rnc7GHwuuG46n/giphy.gif"
          width={`${1200}em`}
          height={`${200}em`}
        />
      </div>
    </section>
    <hr />
    {/* Yocal Section */}
    <section className="project-section section-hero">
      <img src={yocal_logo} width={`${400}em`} height={`${400}em`} />
    </section>
    <section className="project-section section-info">
      <div className="details">
        <h4>Simple and Easy to Use Public Transit App.</h4>
        <p>
          An interactive public transit app for the Seattle, WA area. Created
          with the OneBusAway API but designed with the collaboration of Sean
          Vilaysane, Henry Hong, and Chris Tack. Easy to navigate interface with
          a beautiful visualization of local transit data.
        </p>
        <a href="https://github.com/sutthirath/SeattleTransit" target="_blank">
          <button>Source Code</button>
        </a>
        <a href="https://nameless-harbor-37613.herokuapp.com/" target="_blank">
          <button>View App</button>
        </a>
      </div>
      <div>
        <img
          src="https://media.giphy.com/media/1yjq2rnc7GHwuuG46n/giphy.gif"
          width={`${1200}em`}
          height={`${200}em`}
        />
      </div>
    </section>
  </Layout>
)

export default ProjectsPage

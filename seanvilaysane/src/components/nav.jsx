import React from 'react'
import { Link } from 'gatsby'
import '../../public/static/css/nav.css'

const Nav = () => (
  <nav className="Nav">
    <ul>
      <Link to="/">
        <li>WELCOME</li>
      </Link>
      <Link to="/projects">
        <li>PROJECTS</li>
      </Link>
      <Link to="/resume">
        <li>RESUME</li>
      </Link>
      <Link to="/contact">
        <li>CONTACT</li>
      </Link>
    </ul>
  </nav>
)

export default Nav

import React from 'react'
import { Link } from 'gatsby'
import '../../public/static/css/nav.css'

const Nav = () => (
  <nav className="Nav">
    <ul>
      <Link to="/">
        <li>Welcome</li>
      </Link>
      <Link to="/projects">
        <li>Projects</li>
      </Link>
      <Link to="/resume">
        <li>Resume</li>
      </Link>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
    </ul>
  </nav>
)

export default Nav

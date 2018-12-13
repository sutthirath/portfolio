import { Link } from 'gatsby'
import React from 'react'
import Nav from './nav'
import '../../public/static/css/header.css'

const Header = () => (
  <div className="Header">
    <Link to="/">
      <h1 className="logo">SSV</h1>
    </Link>

    <Nav />
  </div>
)

export default Header

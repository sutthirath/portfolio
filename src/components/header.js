import { Link } from 'gatsby'
import React from 'react'
import Nav from './nav'
import '../../public/static/css/header.css'
import logo from '../images/sean_flash.jpg'

const Header = () => (
  <div className="Header">
    <Link to="/">
      <img className="logo" src={logo} />
    </Link>
    <Nav />
  </div>
)

export default Header

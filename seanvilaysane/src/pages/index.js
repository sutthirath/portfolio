import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/footer'
import '../../public/static/css/index.css'

const IndexPage = () => (
  <div className="IndexPage">
    <Layout />
    <div className="site-content">
      <div className="wrapper">
        <div className="card-container">
          <section className="card card-left about1">
            <p>
              Welcome to my portfolio site, my name's Sutthirath Sean Vilaysane
              and I'm a full stack developer.
            </p>
          </section>
          <section className="card card-right about2">
            <p>
              Creative, is what my peers would describe me. I like to think
              outside the box and create new circles.
            </p>
          </section>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default IndexPage

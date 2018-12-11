import React from 'react'
import Layout from '../components/layout'
import '../../public/static/css/contact.css'
import { Map } from '../components/map'

const ContactPage = () => (
  <Layout>
    <div className="ContactPage">
      <div className="contact-links">
        <a href="https://github.com/sutthirath" target="_blank">
          <button className="contact-btn">Github</button>
        </a>
        <a href="https://www.linkedin.com/in/seanvilaysane/" target="_blank">
          <button className="contact-btn">LinkedIn</button>
        </a>
        <a href="mailto:seanvilaysane@gmail.com" target="_top">
          <button className="contact-btn">Email</button>
        </a>
      </div>
      <section>
        <div className="contact-form">
          <form className="contact-formarea" method="POST">
            <label htmlFor="name">
              Name:
              <input className="contact-input" type="text" name="name" />
            </label>
            <label htmlFor="company">
              Company:
              <input className="contact-input" type="text" name="company" />
            </label>
            <label htmlFor="email">
              Email:
              <input className="contact-input" type="email" name="email" />
            </label>
            <label htmlFor="phone">
              Phone:
              <input className="contact-input" type="tel" name="phone" />
            </label>
            <textarea
              className="contact-textarea"
              placeholder="send me a message"
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="map">
          <Map />
        </div>
      </section>
    </div>
  </Layout>
)

export default ContactPage

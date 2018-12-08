import React from 'react'
import Layout from '../components/layout'
import '../../public/static/css/contact.css'

const ContactPage = () => (
  <Layout>
    <div className="ContactPage">
      <div className="contact-links">
        <button className="contact-btn">Github</button>
        <button className="contact-btn">LinkedIn</button>
        <button className="contact-btn">Google</button>
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
          <h3>Map Area</h3>
        </div>
      </section>
    </div>
  </Layout>
)

export default ContactPage

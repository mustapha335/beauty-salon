import React from 'react'
import '../../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__right">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXR5JTIwc2Fsb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="footer__img"
        />
      </div>
      <div className="footer__left">
        <div>
          <h1 className="footer__left-header">Address</h1>
          <span>
            4905 Daylene Drive <br />
            Ann Arbor
            <br />
            Michigan
            <br />
          </span>
        </div>

        <div>
          <h1 className="footer__left-header">Phone Number</h1>
          <span>734-622-2954</span>
        </div>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import '../../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <h1 className="navbar__header">Kloe</h1>
        <h3 className="navbar__header">Cosmetics</h3>
      </div>

      <div className="navbar__menu-links">
        <span className="navbar__menuitem">HOME</span>
        <span className="navbar__menuitem">Price List</span>
        <span className="navbar__menuitem">Reviews</span>
      </div>
    </div>
  )
}

export default Navbar

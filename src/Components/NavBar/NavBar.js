import React, { useState } from 'react';
import './NavBar.scss';
import hamburger from '../../assets/hamburger.svg';

const NavBar = ({toggleMenu, isMenuDisplayed}) => {
  const visibility = isMenuDisplayed ? 'nav-opaque' : 'nav';
  const spanActive = isMenuDisplayed ? 'span-active' : 'span-inactive';

  return (
    <nav className={visibility}>
      <h1 className="main-title">ERIC O'NEILL</h1>
      <div className="link-container" onClick={() => { toggleMenu() }}>
        
          <span className={spanActive} id="nav-icon1"></span>
          <span className={spanActive} id="nav-icon2"></span>
          <span className={spanActive} id="nav-icon3"></span>
        
        {/* <img src={hamburger} onClick={() => { toggleMenu() }} className="burger"/> */}
        <a href="#home" className="nav-link">Home</a>
        <a href="#skills" className="nav-link">Skills/GitHub</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  )
}

export default NavBar;
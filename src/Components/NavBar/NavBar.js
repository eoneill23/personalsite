import React from 'react';
import './NavBar.scss';

const NavBar = ({toggleMenu, isMenuDisplayed}) => {
  const containerActive = isMenuDisplayed ? 'link-container2' : 'link-container-active2';

  return (
    <nav className="nav">
      <h1 className="main-title">ERIC O'NEILL</h1>
      <div className="link-container" onClick={() => { toggleMenu() }}>
        <div className={containerActive} id="link-container2">
            <span className="span-burger" id="nav-icon1"></span>
            <span className="span-burger" id="nav-icon2"></span>
            <span className="span-burger" id="nav-icon3"></span>
          </div>
        <a href="#home" className="nav-link">Home</a>
        <a href="#skills" className="nav-link">Skills/GitHub</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  )
}

export default NavBar;
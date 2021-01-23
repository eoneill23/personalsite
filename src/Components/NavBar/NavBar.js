import React from 'react';
import './NavBar.scss';

function NavBar() {

  return (
    <nav className="nav">
      <h1 className="main-title">ERIC O'NEILL</h1>
      <div className="link-container">
        <a href="#home" className="nav-link">Home</a>
        <a href="#skills-github" className="nav-link">Skills/GitHub</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  )
}

export default NavBar;
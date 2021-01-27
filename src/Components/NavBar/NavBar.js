import React, { useState } from 'react';
import './NavBar.scss';
import hamburger from '../../assets/hamburger.svg';

const NavBar = ({toggleMenu}) => {
  return (
    <nav className="nav">
      <h1 className="main-title">ERIC O'NEILL</h1>
      <div className="link-container">
        <img src={hamburger} onClick={() => { toggleMenu() }} className="burger"/>
        <a href="#home" className="nav-link">Home</a>
        <a href="#skills" className="nav-link">Skills/GitHub</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  )
}

export default NavBar;
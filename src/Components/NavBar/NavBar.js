import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return (
    <nav className="nav">
      <h1 className="main-title">ERIC O'NEILL</h1>
      <div className="link-container">
        <NavLink to='/' className="nav-link">Home</NavLink>
        <NavLink to='/about' className="nav-link">About</NavLink>
        <NavLink to='/contact' className="nav-link">Contact</NavLink>
      </div>
    </nav>
  )
}

export default NavBar;
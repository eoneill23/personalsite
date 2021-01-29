import React from 'react';
import './Hamburger.scss';

const HamburgerMenu = ({toggleMenu, isMenuDisplayed}) => {
  let visibility; 
  if(isMenuDisplayed) {
    document.body.classList.add('stop-scroll');
    visibility = 'burger-menu-show';
  } else {
    document.body.classList.remove('stop-scroll');
    visibility = 'burger-menu-hide';
  }

  return (
    <nav
      className={visibility} 
      onClick={() => {toggleMenu()}}
      >
      <section className="burger-nav-link-container">
        <a href="#home" className="burger-nav-link">Home</a>
        <a href="#skills" className="burger-nav-link">Skills/GitHub</a>
        <a href="#contact" className="burger-nav-link">Contact</a>
      </section>
    </nav>
  )
}

export default HamburgerMenu;
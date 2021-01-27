import React from 'react';
import './Hamburger.scss';

const HamburgerMenu = ({toggleMenu, isMenuDisplayed}) => {
  // const visibility = isMenuDisplayed ? 'burger-menu-hide' : 'burger-menu-show';
  const visibility = isMenuDisplayed ? 'burger-menu-show' : 'burger-menu-hide'

  return (
    <nav
      className={visibility} 
      onClick={() => {toggleMenu()}}
      >
      TEST
    </nav>
  )
}

export default HamburgerMenu;
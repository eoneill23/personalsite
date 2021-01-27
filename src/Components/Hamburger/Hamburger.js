import React from 'react';
import './Hamburger.scss';

const HamburgerMenu = ({toggleMenu}) => {

  return (
    <nav className="burger-menu" onClick={toggleMenu}>
      TEST
    </nav>
  )
}

export default HamburgerMenu;
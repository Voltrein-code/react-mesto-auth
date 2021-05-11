import React from 'react';
import logo from '../blocks/header/images/header__logo.svg';
import HeaderMenu from './HeaderMenu';

function Header(props) {

  return (
    <header className="header">
      <a href="." target="_top">
        <img src={logo} className="header__logo" alt="Логотип" />
      </a>

      <HeaderMenu
        userData={props.userData}
        onSignOut={props.onSignOut}
      />
    </header>
  )
}

export default Header;
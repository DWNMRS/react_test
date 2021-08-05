import React from 'react';
import Style from'../Header/Header.module.css'
import Logo from './img/skull.svg'

const Header = () => {
  return <header className={Style.header}>
    <img src={Logo} className="header_logo" alt="logo"/>
  </header>
}

export default Header;
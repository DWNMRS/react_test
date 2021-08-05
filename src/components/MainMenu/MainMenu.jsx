import React from 'react';
import Style from './MainMenu.module.css'
import { NavLink } from 'react-router-dom'


const MainMenu = () => {
  return (
    <nav className={Style.nav}>
      <div>
        <div className={Style.item}>
          <NavLink to="/profile" activeClassName={Style.active}>Profile</NavLink>
        </div>
        <div className={Style.item}>
          <NavLink to="/dialogs" activeClassName={Style.active}>Dialogs</NavLink>
        </div>
        <div className={Style.item}>
          <NavLink to="/news" activeClassName={Style.active} >News</NavLink>
        </div>
        <div className={Style.item}>
          <NavLink to="/music" activeClassName={Style.active} >Music</NavLink>
        </div>
        <div className={Style.item}>
          <NavLink to="/setting" activeClassName={Style.active} >Settings</NavLink>
        </div>
      </div>
    </nav>
  )
}


export default MainMenu;


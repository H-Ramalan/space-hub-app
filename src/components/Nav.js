import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './SpaceLogo';
import './styles/Nav.css';

const Nav = () => (
  <div>
    <div className="nav-container">
      <nav className="nav-bar">
        <div className="nav header">
          <Logo />
          <h1>Space Travellers&apos;s Hub</h1>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/Missions">Missions</NavLink>
          </li>
          <li>
            <NavLink to="/MyProfile">My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Nav;

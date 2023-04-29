import React from 'react'
import { NavLink } from 'react-router-dom';

const AppRouting = () => (
  <div className="demo-menu">
    <NavLink
      to="/"
      className="demo-menu-link"
    >
      Home
    </NavLink>
    
    <NavLink
      to="/demo-route"
      className="demo-menu-link"
    >
      Demo route
    </NavLink>
  </div>
);

export default AppRouting;

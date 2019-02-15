import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navBar">
      <div>
        <h1>Refugee</h1>
      </div>
      <div className="navLinks">
        <NavLink to="/">
          <h2>Home</h2>
        </NavLink>
        <NavLink to="/stories">
          <h2>Stories</h2>
        </NavLink>
        <NavLink to="/submit_story">
          <h2>Submit Your Story</h2>
        </NavLink>
        <NavLink to="/login">
          <h2>Admin Log-In</h2>
        </NavLink>
      </div>
    </div>
  )
}

export default Navigation;
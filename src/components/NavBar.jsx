import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css'; 

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink className="nav-link"to="/">Home</NavLink>
      <NavLink className="nav-link" to="/about">About</NavLink>
      <NavLink className="nav-link" to="/login">Login</NavLink>
    </nav>
  );
}

export default NavBar;

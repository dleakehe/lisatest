import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Ensign Logo
      </div>

      <div className="navbar-title">
        LISA
      </div>

      <div className="navbar-links">
        <button className="nav-button">Home</button>
        <button className="nav-button">Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;
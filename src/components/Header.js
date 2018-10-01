// Import dependencies
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Blacklisted Wallet Checker</Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/about">About</Link>
          </div>
        </div>
      </nav>
    </div>
  )
};

export default Header;

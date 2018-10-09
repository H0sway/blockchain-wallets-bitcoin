// Import dependencies
import React from 'react';

// Bootstrap components
import { Nav, NavItem, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="Header">
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>Blacklisted Wallet Checker</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    </div>
  )
};

export default Header;

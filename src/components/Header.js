// Import dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Bootstrap components
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <div className="Header">
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>Blacklisted Wallet Checker</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/">
              <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem>
                About
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
};

export default Header;

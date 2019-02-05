// Import dependencies
import React from 'react';

// Bootstrap components
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <div className="Header">
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>BitBak: The Bitcoin Wallet Background Check</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/">
              <NavItem>
                Wallet Checker
              </NavItem>
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

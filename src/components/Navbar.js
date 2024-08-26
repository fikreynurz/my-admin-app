import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LogoutButton from './LogoutButton';

function CustomNavbar({ loggedInUser }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Admin Page</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#profile">{loggedInUser}</Nav.Link>
        <LogoutButton />
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;

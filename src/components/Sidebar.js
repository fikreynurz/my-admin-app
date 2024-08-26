import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/users" className="nav-link">Users</Link>
          </li>
          <li className="nav-item">
            <Link to="/casts" className="nav-link">Casts</Link>
          </li>
          <li className="nav-item">
            <Link to="/films" className="nav-link">Films</Link>
          </li>
          <li className="nav-item">
            <Link to="/genres" className="nav-link">Genres</Link>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

export default Sidebar;

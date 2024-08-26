import React from 'react';
import CustomNavbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import UserTable from '../components/UserTable';
import { Container, Row, Col } from 'react-bootstrap';

function AdminPage() {
  const loggedInUser = localStorage.getItem('role');

  return (
    <>
      <CustomNavbar loggedInUser={loggedInUser} />
      <Container fluid>
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10}>
            <UserTable />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminPage;

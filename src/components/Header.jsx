import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <>
      <Navbar bg='dark' variant='dark' collapseOnSelect expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              Learning Portal <i className="fa-solid fa-house"></i>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0 d-flex"
              style={{ maxHeight: '100px', alignItems: 'center' }}
              navbarScroll>

              <LinkContainer to='/enroll'>
                <Nav.Link>Enroll</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/learning'>
                <Nav.Link>My Learning</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/profile'>
                <Nav.Link>Profile</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/contact'>
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/signup'>
                <Nav.Link>
                  <Button variant='success' className="btn-block">Signup</Button>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login">
                <Nav.Link>
                  <Button variant='success' className="btn-block">Login</Button>
                </Nav.Link>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

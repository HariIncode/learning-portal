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
            {/* Apply justify-content-between to space gp1 and gp2 evenly */}
            <Nav className="w-100 d-flex justify-content-between align-items-center"
              navbarScroll>
              
              {/* First group of links */}
              <div className='d-flex'>
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
              </div>

              {/* Second group of buttons */}
              <div className='d-flex'>
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
              </div>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

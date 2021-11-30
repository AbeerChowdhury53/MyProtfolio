import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavegationBar.css'

const NavegationBar = () => {
    return (
        <div className='nvabar'>
            <Navbar className='nvabar-clr' expand="lg">
                <Container  className='nvabar-clr' >
                    {/* <Navbar.Brand className='text-white' href="#home">Shahebul Alam</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse  id="basic-navbar-nav">
                        <Nav  className="me-auto">
                        <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
                            {/* <Nav.Link className='text-white' href="#home">Home</Nav.Link> */}
                            <Nav.Link className='text-white' href="#project">Project</Nav.Link>
                            <Nav.Link className='text-white' href="#aboutme">About Me</Nav.Link>
                            <Nav.Link className='text-white' href="#contact">Contact Me</Nav.Link>
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavegationBar;
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'; // Import if you're using React Router
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/stylefol/style.css';

function CustomNavbar() {
    return (
        <Navbar className="custom-navbar" expand="md" variant="dark">
            <Container>
                {/* <Navbar.Brand href="index.html"> */}
                <Navbar.Brand as={Link} to="/">
                    Furni<span>.</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarsFurni" />
                <Navbar.Collapse id="navbarsFurni">
                    <Nav className="custom-navbar-nav ms-auto mb-2 mb-md-0">
                        <LinkContainer as={Link} to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer as={Link} to="/Profile">
                            <Nav.Link>Profile</Nav.Link>
                        </LinkContainer>
                        <LinkContainer as={Link} to="/myaccount">
                            <Nav.Link>My account</Nav.Link>
                        </LinkContainer>
                        <LinkContainer as={Link} to="/plan">
                            <Nav.Link>Pricing</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/blog.html">
                            <Nav.Link>Blog</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact.html">
                            <Nav.Link>Contact us</Nav.Link>
                        </LinkContainer>

                        <NavDropdown title="Dropdown" id="nav-dropdown">
                            {/* Use 'as={Link}' in NavDropdown.Item to integrate React Router Link */}
                            <NavDropdown.Item as={Link} to="/create">Login</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/userreg">Regis</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Register">Teachers</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/UpdateCredentials">Dashboard</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Register">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav className="custom-navbar-cta ms-5">
                        <NavDropdown
                            title={<i className="fas fa-user"></i>}
                            id="user-nav-dropdown"
                            align="end" // Aligns the dropdown menu to the right
                        >
                            {/* Dropdown items */}
                            <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/help">Help</NavDropdown.Item>
                        </NavDropdown>

                        <LinkContainer to="/cart.html">
                            <Nav.Link>
                                <i className="fas fa-shopping-cart"></i> {/* Font Awesome cart icon */}
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;

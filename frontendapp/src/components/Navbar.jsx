import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function NavDropdownExample() {
    return (
        <Nav variant="pills">
            <Nav.Item>
                {/* Use 'as={Link}' to integrate React Router Link */}
                <Nav.Link as={Link} to="/Profile">
                    BRIGHT MINDS
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/about">
                    NavLink 2 content
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                {/* Disabled items do not need routing */}
                <Nav.Link disabled>
                    NavLink 3 content
                </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Dropdown" id="nav-dropdown">
                {/* Use 'as={Link}' in NavDropdown.Item to integrate React Router Link */}
                <NavDropdown.Item as={Link} to="/create">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/skill">Courses</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Register">Teachers</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/UpdateCredentials">Separated link</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
}

export default NavDropdownExample;

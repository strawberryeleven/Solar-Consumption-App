import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import alertIcon from '../icons-pictures/alert.png';

interface User {
  name: string;
  profilePicture: string;
}

interface NavbarProps {
  logo: string;
  user: User;
}

const CustomNavbar: React.FC<NavbarProps> = ({ logo, user }) => {
  const navigate = useNavigate(); // Hook to get navigate function

  const handleUserLogout = () => {
    console.log('User logged out');
    // Perform any logout actions here, like clearing local storage or state
    // localStorage.removeItem('userToken'); // Example: Clear user token from storage
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <Navbar expand="lg" bg="light" style={{ paddingLeft: '60px', paddingRight: '60px' }}>
      
      <Navbar.Brand as={Link} to="/">
        <img src={logo} alt="Logo" style={{ width: '50px' }} />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">

        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/" active={window.location.pathname === '/'}>Home</Nav.Link>
          <Nav.Link as={Link} to="/savings" active={window.location.pathname === '/savings'}>Savings</Nav.Link>
          <Nav.Link as={Link} to="/readings" active={window.location.pathname === '/readings'}>Readings</Nav.Link>
          <Nav.Link as={Link} to="/settings" active={window.location.pathname === '/settings'}>Settings</Nav.Link>
        </Nav>

        <div className="d-flex align-items-center">
          <span className="me-3"><img src={alertIcon} alt="Alert Icon" style={{ width: '30px', height: '30px' }} /></span>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <img src={user.profilePicture} alt="Profile Icon" style={{ width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer' }} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={handleUserLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

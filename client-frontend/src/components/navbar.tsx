import React from 'react';
import { Navbar, Dropdown } from 'react-bootstrap';
import alertIcon from '../icons-pictures/alert.png';

interface MenuItem {
  label: string;
  url: string;
}

interface User {
  name: string;
  profilePicture: string;
}

interface NavbarProps {
  activeSection: string;
  logo: string;
  menuItems: MenuItem[];
  user: User;
}

const CustomNavbar: React.FC<NavbarProps> = ({ activeSection, logo, menuItems, user }) => {
  const handleMenuClick = (url: string) => {
    console.log('Menu item clicked:', url);
    // You can perform any additional actions here
  };

  const handleUserLogout = () => {
    console.log('User logged out');
    // You can perform any logout actions here
  };

  return (
    <Navbar expand="lg" bg="light" style={{ paddingLeft: '60px', paddingRight: '60px' }}>
      <Navbar.Brand href="#"><img src={logo} alt="Logo" style={{ width: '50px' }} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          {menuItems.map((item, index) => (
            <li key={index} className={`nav-item ${activeSection === item.label.toLowerCase() ? 'active' : ''}`} style={{ marginRight: '20px' }}>
              <a className="nav-link" href="#" onClick={() => handleMenuClick(item.url)}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="d-flex align-items-center">
          <span className="me-3"><img src={alertIcon} alt="Alert Icon" style={{ width: '30px', height: '30px' }} /></span>
          <div className="dropdown">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <img src={user.profilePicture} alt="Profile Icon" style={{ width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer' }} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleUserLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

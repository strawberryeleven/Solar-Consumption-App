import React from 'react';
import logo from '../icons-pictures/logo.png';
import profilePicture from '../icons-pictures/profile.jpeg';
import CustomNavbar from '../components/navbar';

const SettingsConfigPage = () => {
  const menuItems = [
    { label: 'Overview', url: '#' },
    { label: 'Bill Estimation', url: '#' },
    { label: 'Settings', url: '#' }
  ];

  const user = {
    name: 'John Doe',
    profilePicture: profilePicture
  };

  return (
    <div>
      <CustomNavbar
        activeSection={'Settings'}
        logo={logo}
        menuItems={menuItems}
        user={user}
      />




    </div>
  );
};

export default SettingsConfigPage;

import React from 'react';
import CustomNavbar from '../components/navbar';
import { Container } from 'react-bootstrap';
import profilePicture from '../icons-pictures/profile.jpeg'; // Ensure this path is correct

const SavingsPage: React.FC = () => {
  return (
    <>
      <CustomNavbar logo="path_to_logo.png" user={{ name: 'John Doe', profilePicture: profilePicture }} />
      <Container className="mt-4">
        <h1>Savings</h1>
        <p>This is the Savings page where we will display various savings data and analytics.</p>
      </Container>
    </>
  );
};

export default SavingsPage;

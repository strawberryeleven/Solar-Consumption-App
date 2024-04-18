import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/login-signUp-Page'; // Correct import statement

function App() {
  return (
    <div className="App">
      <LoginPage /> {/* Use PascalCase for component names */}
    </div>
  );
}

export default App; 

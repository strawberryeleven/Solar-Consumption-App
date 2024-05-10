import React from 'react';
import SettingsPage from './pages/settings-configuration-page';
import HomeScreen from './pages/HomePage';
import LoginPage from './pages/login-signUp-Page';
import ReadingsPage from './pages/ReadingsPage';
import SavingsPage from './pages/SavingsPage';

import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/readings" element={<ReadingsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/savings" element={<SavingsPage />} />
      {/* Redirect user to HomePage if route does not exist, using Navigate in v6 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

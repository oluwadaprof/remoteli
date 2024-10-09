import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Token from "./components/token";
import WelcomePage from './pages/welcome-page';
import Dashboard from './pages/dashboard';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/token" element={<Token />} />
        <Route path="/authenticated" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

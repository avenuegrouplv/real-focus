/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import UAECompanyPage from './pages/UAECompanyPage.tsx';
import ResidencePage from './pages/ResidencePage.tsx';
import CitizenshipPage from './pages/CitizenshipPage.tsx';
import ContactPage from './pages/ContactPage.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/uznemums-aae" element={<UAECompanyPage />} />
        <Route path="/uzturesanas-atlaujas" element={<ResidencePage />} />
        <Route path="/pilsoniba" element={<CitizenshipPage />} />
        <Route path="/par-mums" element={<AboutPage />} />
        <Route path="/kontakti" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;


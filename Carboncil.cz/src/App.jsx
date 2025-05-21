// src/ProtectedApp.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductPageWrapper from './pages/ProductPageWrapper';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';

const ProtectedApp = () => (
  <>
    <NavBar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/o-nas" element={<AboutPage />} />
      <Route path="/uhlie" element={<ProductPageWrapper />} />
      <Route path="/kontakt" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    <CookieConsent />
  </>
);

export default ProtectedApp;

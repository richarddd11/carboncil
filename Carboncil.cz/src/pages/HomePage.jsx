// src/pages/HomePage.jsx
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import HeroDesktop from '../components/HeroDesktop';
import HeroMobile from '../components/HeroMobile';
import ProductSection from '../components/ProductSection';
import FamilySection from '../components/FamilySection';
import AboutUs from '../components/AboutUs';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

const HomePage = () => {
  // true quand ≤ 767px → mobile
  const isMobile = useMediaQuery({ maxWidth: 550 });

  return (
    <>
      {isMobile ? <HeroMobile /> : <HeroDesktop />}

      <ProductSection showDetailButton />
      <FamilySection />
      <AboutUs />
      <FaqSection />
    </>
  );
};

export default HomePage;

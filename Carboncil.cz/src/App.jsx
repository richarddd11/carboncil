import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import ProductSection from './Components/ProductSection'
import FamilySection from './Components/FamilySection'
import AboutUs from './Components/AboutUs'
import FaqSection from './Components/FaqSection'
import Footer from './Components/Footer'

function App() {

  return (
    <div>
      <NavBar />
      <HeroSection />
      <ProductSection />
      <FamilySection />
      <AboutUs />
      <FaqSection />
      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import AboutBrandSection from '../components/AboutBrandSection'
import StorySection from '../components/StorySection'
import GrillBecauseFun from '../components/GrillBecauseFun'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <div className='aboutPage'>
      <AboutBrandSection />
      <StorySection />
      <GrillBecauseFun />
      <Footer />
    </div>
  )
}

export default AboutPage
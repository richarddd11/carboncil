import React from 'react'
import NavBar from '../components/NavBar'
import ProductSection from '../components/ProductSection'
import CharcoalInfoSection from '../components/CharcoalSection'
import BiolihSection from '../components/BiolihSection'
import CharcoalVariantsSection from '../components/CharcoalVariantsSection'
import FaqSection from '../components/FaqSection';
import Coal from '../components/Coal'
import CarboncilUsage from '../components/CarboncilUsage'

const ProductPage = () => {
  return (
    <div className='mt-25 productPage'>
      
      <ProductSection showDetailButton={true} showHeading={false} useLinks={true} />
     <CharcoalInfoSection />
     <CarboncilUsage />
     <Coal />
     <BiolihSection />
     <CharcoalVariantsSection />
     <FaqSection customClass="w-[96%]" noTopRadius={true} />
    </div>
  )
}

export default ProductPage
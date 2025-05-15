import React from 'react'
import ContactHeroForm from '../components/ContactHeroForm'
import ContactInfo from '../components/ContactInfo'

const ContactPage = () => {
  return (
    <div className='contactPage'>
      <ContactHeroForm />
      <ContactInfo />
    </div>
  )
}

export default ContactPage
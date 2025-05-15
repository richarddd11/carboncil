import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="relative m-5 bg-black text-white overflow-visible rounded-[40px] px-6 lg:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 pt-10 relative">
        <div className="hidden lg:block relative z-20 -mt-40 lg:-mt-56">
          <img
            src="Coal7.png"
            alt="Burning charcoal"
            className="w-full max-w-3xl h-[800px] object-cover rounded-[30px] relative z-20"
          />
        </div>

        <div className="space-y-8 contactInfo lg:pl-16 mb-25 relative z-20">
          <div className="space-y-2">
            <p className="text-lg font-semibold">{t('contact_company_name')}</p>
            <p className="text-lg text-[#CCCCCC]">{t('contact_company_id')}</p>
            <p className="text-lg text-[#CCCCCC]">{t('contact_company_address')}</p>
          </div>
          <div className="space-y-2 mt-18">
            <p className="text-2xl font-semibold text-[#A40C0B]">{t('contact_hours_title')}</p>
            <p className="text-2xl text-[#A40C0B]">{t('contact_hours')} <span className="font-bold">{t('contact_hours_time')}</span></p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">{t('contact_collab_title')}</h2>
            <p className="text-lg">{t('contact_collab_desc')}</p>
          </div>
        </div>

        <div className="absolute z-30 left-0 w-full h-[2px] bg-red-700" style={{ top: '80%' }} />
      </div>

      <footer className="bg-black contactFooter text-white rounded-b-[40px] overflow-hidden px-6 lg:px-0">
        <div className="max-w-7xl mx-auto py-10">
          <nav className="flex justify-end gap-13 text-sm mb-6 mr-5">
            <Link to="/" className="hover:text-gray-400 transition">{t('footer_nav_home')}</Link>
            <Link to="/o-nas" className="hover:text-gray-400 transition">{t('footer_nav_about')}</Link>
            <Link to="/uhlie" className="hover:text-gray-400 transition">{t('footer_nav_products')}</Link>
            <Link to="/kontakt" className="hover:text-gray-400 transition">{t('footer_nav_contact')}</Link>
          </nav>

          <div className="flex justify-center mb-6">
            <img src="HeroLogo.png" alt="Carboncil Logo" className="h-8" />
          </div>

          <p className="text-right text-sm mr-5 text-gray-400">Copyright © 2025 Carboncil</p>
        </div>
      </footer>
    </section>
  );
};

export default ContactInfo;
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="hero bg-white mt-10 px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT - Textová časť */}
        <div>
          <h1 className="text-4xl w-full max-[768px]:text-center md:text-[47px] font-bold text-black leading-tight">
            {t('hero_title')}<br />
            <span className="text-[#A40C0B] redSpan font-extrabold">{t('hero_subtitle')}</span>
          </h1>

          <p className="text-[#696969] mt-6 w-full max-[768px]:mx-auto">
            {t('hero_desc')}
          </p>

          {/* Buttons */}
          <div className="flex max-[768px]:justify-center gap-4 mt-8">
          <a
  href="https://www.chutespanelska.cz/grilovaci-uhli/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-black text-white px-10 py-3 rounded-full flex items-center gap-2 transform transition-transform duration-200 hover:scale-105 cursor-pointer"
>
  {t('product_detail')} <span><img src="Arrow.png" alt="" /></span>
</a>
            <Link to="/kontakt" className="underline px-6 py-3 rounded-full hover:text-[#A40C0B] transition">
              {t('nav_contact')}
            </Link>
          </div>

          {/* Benefity */}
          <div className="benefits mt-20 grid grid-cols-3 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <img src="Tree.png" alt="Icon tree" className="h-11 mb-7" />
              <p className="text-sm font-medium">{t('hero_benefit_1')}</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="smoke.png" alt="Icon smoke" className="h-11 mb-7" />
              <p className="text-sm font-medium">{t('hero_benefit_2')}</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="balcony.png" alt="Icon balcony" className="h-11 mb-7" />
              <p className="text-sm font-medium">{t('hero_benefit_3')}</p>
            </div>
          </div>
        </div>

        {/* RIGHT - Obrázok uhlia + značky */}
        <div className="relative w-full max-w-[550px] mx-auto">
          <img
            src="MaskGroup.png"
            alt="Charcoal"
            className="w-full clip-arrow object-cover rounded-2xl"
          />

          {/* Červený štítok */}
          <div className="absolute top-0 h-2/9 w-133/550 left-0 bg-red-700 text-white font-semibold py-10 rounded-xl shadow-md">
            <img className='w-110/125 absolute left-1/12 top-48/125' src="HeroLogo.png" alt="Hero logo" />
          </div>

          {/* Čierna šípka */}
          <div className="absolute bottom-0 right-0 h-2/9 w-133/550 bg-black text-white text-xl p-3 rounded-xl shadow-md flex items-center justify-center">
          <a
    href="https://www.chutespanelska.cz/grilovaci-uhli/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="Arrow1.png" alt="Arrow" className="w-16" />
  </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

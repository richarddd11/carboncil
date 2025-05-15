import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroMobile = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="md:hidden heroMobile hero bg-white px-6 py-5 mt-20">
      {/* Nadpis */}
      <h1 className="text-3xl font-bold text-black leading-tight">
        {t('hero_title')}<br />
        <span className="text-[#A40C0B] font-extrabold">{t('hero_subtitle')}</span>
      </h1>

      {/* Podnadpis */}
      <p className="text-[#696969] mt-4">
        {t('hero_desc')}
      </p>

      {/* Obrázok uhlí s tlačidlami vo vyrezanom otvore */}
      <div className="relative w-full mt-8">
        <img
          src="LavaMobile.png"
          alt="Charcoal"
          className="w-full object-cover rounded-2xl"
        />

        {/* Tlačidlá vo vyrezanom otvore obrázka */}
        <div className="buttons absolute top-2 left-0 flex items-center p-1">
        <a
  href="https://www.chutespanelska.cz/grilovaci-uhli/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center  bg-black text-white rounded-full h-8 text-sm leading-none hover:scale-105 transition-transform duration-200 cursor-pointer"
>
  {t('product_detail')}
  <img src="Arrow.png" alt="" className="w-4 h-4 inline-block" />
</a>
  <Link to="/kontakt" className="underline  py-3 rounded-full hover:text-[#A40C0B] transition">
    {t('nav_contact')}
  </Link>
</div>

        {/* Čierna šípka */}
        <div className="absolute bottom-0 right-0 h-2/12 w-95/550 bg-black text-white text-xl p-3 rounded-xl shadow-md flex items-center justify-center">
        <a
    href="https://www.chutespanelska.cz/grilovaci-uhli/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="Arrow1.png" alt="Arrow" className="w-16" />
  </a>
        </div>
      </div>

      {/* Benefity */}
      <div className="grid grid-cols-3 gap-4 text-center pt-12 mb-10">
        <div className="flex flex-col items-center">
          <img src="smoke.png" alt="Smokeless" className="h-8 mb-5" />
          <p className="text-sm font-medium">{t('hero_benefit_2')}</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="Tree.png" alt="Natural" className="h-8 mb-5" />
          <p className="text-sm font-medium">{t('hero_benefit_1')}</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="balcony.png" alt="Balcony Friendly" className="h-8 mb-5" />
          <p className="text-sm font-medium">{t('hero_benefit_3')}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroMobile;

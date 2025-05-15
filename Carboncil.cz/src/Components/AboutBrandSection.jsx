import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutBrandSection = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-[1520px] aboutBrand mx-auto px-6 py-20 space-y-32">
      {/* Horný blok */}
      <div className="grid md:grid-cols-2 gap-15 items-center">
        {/* Obrázok */}
        <div className="rounded-[30px] overflow-hidden max-w-lg mx-auto">
          <img
            src="Dalibor.png"
            alt="Man with charcoal"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text */}
        <div className="space-y-6 max-w-2xl mx-auto">
          <p className="text-[#A40C0B] text-base md:text-lg font-bold">{t('aboutbrand_about')}</p>
          <p className="text-lg font-medium text-[#696969]">{t('aboutbrand_subtitle')}</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#A40C0B] leading-snug">
            {t('aboutbrand_title')}
          </h2>
          <p className="text-[#696969] text-xl max-w-md font-medium leading-relaxed">
            {t('aboutbrand_desc')}
          </p>
        </div>
      </div>

      {/* Spodný blok */}
      <div className="grid md:grid-cols-2 gap-18 items-center">
        {/* Text */}
        <div className="space-y-6 max-w-md mx-auto">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#A40C0B]">
            {t('aboutbrand_believe_title')}
          </h3>
          <p className="text-[#696969] font-medium text-lg leading-relaxed">
            {t('aboutbrand_believe_desc')}
          </p>
        </div>

        {/* Obrázok */}
        <div className="rounded-[30px] overflow-hidden max-w-lg mx-auto">
          <img
            src="Coal5.png"
            alt="Glowing charcoal"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutBrandSection;

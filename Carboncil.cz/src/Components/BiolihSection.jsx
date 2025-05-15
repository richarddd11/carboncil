import React from 'react';
import { useTranslation } from 'react-i18next';

const BiolihSection = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 space-y-28 relative z-0">
      {/* 1. Sekcia: uhlie + biolih */}
      <div className="grid  md:grid-cols-2 items-center gap-12">
        {/* Image left */}
        <div className="flex justify-center">
          <img
            src="Biolih1.png"
            alt="Charcoal"
            className="max-w-full h-auto object-contain"
          />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-[#A40C0B] mb-4">{t('biolih_title')}</h2>
          <p className="text-[#696969] font-medium text-lg leading-relaxed">
            {t('biolih_desc')}
          </p>
        </div>
      </div>

      {/* 2. Sekcia: uhlí které dává smysl + uhlie na bielom pozadí */}
      <div className="relative z-10 mb-10 grid md:grid-cols-2 items-center gap-12">
        <div>
          <h2 className="text-3xl font-extrabold text-[#A40C0B] mb-4">{t('makesense_title')}</h2>
          <p className="text-[#696969] font-medium text-lg leading-relaxed mb-4">
            {t('makesense_desc_1')}
          </p>
          <p className="text-[#696969] font-medium text-lg leading-relaxed">
            {t('makesense_desc_2')}
          </p>
        </div>
      </div>

    </section>
  );
};

export default BiolihSection;

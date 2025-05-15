import React from 'react';
import { useTranslation } from 'react-i18next';

const Coal = () => {
  const { t } = useTranslation();

  return (
    <section className="mt-10 coal px-7">
      <div className="w-full">
        {/* Desktop verzia obrázka */}
        <img
          src="Coal4.png"
          alt="Coal"
          className="w-full max-w-none object-cover rounded-2xl hidden sm:block"
        />

        {/* Mobilná verzia obrázka */}
        <img
          src="Coal4bg.png"
          alt="Coal mobile"
          className="w-full coal-img max-w-none object-cover rounded-2xl sm:hidden"
        />
      </div>

      <div className="benefits max-w-4xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center">
          <img src="Tree.png" alt="Tree icon" className="h-13 mb-2" />
          <p className="text-base font-medium">{t('coal_benefit_1')}</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="smoke.png" alt="Smoke-free icon" className="h-13 mb-2" />
          <p className="text-base font-medium">{t('coal_benefit_2')}</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="balcony.png" alt="Balcony-friendly icon" className="h-13 mb-2" />
          <p className="text-base font-medium">{t('coal_benefit_3')}</p>
        </div>
      </div>
    </section>
  );
};

export default Coal;

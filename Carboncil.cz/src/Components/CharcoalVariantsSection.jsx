import React from 'react';
import { useTranslation } from 'react-i18next';

const CharcoalVariantsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-[96%] mx-auto bg-black text-white rounded-t-[40px] relative overflow-visible">
      <div className="relative w-full">
        <picture>
          <source media="(max-width: 768px)" srcSet="familyMobil.png" />
          <img
            src="Family1.png"
            alt="Family grilling"
            className="w-full h-[400px] md:h-auto max-h-[500px] object-cover aspect-[21/9] rounded-[35px] z-10 relative"
          />
        </picture>

        <div className="hidden md:block absolute z-30 top-[-280px] right-2/8 translate-x-1/2 w-[320px] md:w-[400px] lg:w-[460px]">
          <img
            src="CoalBg.png"
            alt="Background circle"
            className="w-full h-auto object-contain"
          />
          <img
            src="carboncilCoal.png"
            alt="Charcoal packaging"
            className="absolute top-1/2 left-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-20 grid md:grid-cols-2 gap-30">
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-2xl font-bold">{t('charcoal_variants_1_title')}</h3>
            <p className="text-[#9e9c9c] font-medium text-lg leading-relaxed max-w-md">
              {t('charcoal_variants_1_desc')}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-3">
            <img
              src="carboncil.png"
              alt="Carboncil 1.5kg"
              className="w-[313px] h-auto object-contain"
            />
            <img
              src="L.png"
              alt="Size L"
              className="w-[50px] h-auto object-contain"
            />
          </div>

          <div className="flex flex-col items-center justify-center space-y-3 order-4 md:order-none">
            <img
              src="topQuality.png"
              alt="Top Quality 10kg"
              className="w-[313px] h-auto object-contain"
            />
            <img
              src="XXL.png"
              alt="Size XXL"
              className="w-[200px] h-auto object-contain"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-2xl font-bold">{t('charcoal_variants_2_title')}</h3>
            <p className="text-[#9e9c9c] font-medium text-lg leading-relaxed max-w-md">
              {t('charcoal_variants_2_desc')}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 w-full h-[483px] gap-0">
          <div className="w-full h-full overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
            <img
              src="Family2.png"
              alt="Left grill"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none">
            <img
              src="Family3.png"
              alt="Right grill"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharcoalVariantsSection;
import React from 'react';
import { useTranslation } from 'react-i18next';

const FamilySection = () => {
  const { t } = useTranslation();

  return (
    <section className='family mt-20 mx-8 md:mx-5'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16 items-center">
        <div>
          <img src="Family.png" alt="Family grilling" className="rounded-xl w-full object-cover" />
        </div>

        <div>
          <h2 className="text-[35px] md:text-4xl font-bold text-[#A40C0B] mb-2 md:mb-4">
            {t('family_title')}
          </h2>

          <p className="text-[#696969] w-[95%] md:w-full text-lg font-medium leading-7 md:leading-relaxed">
            {t('family_desc')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FamilySection;

import React from 'react';
import { useTranslation } from 'react-i18next';

const CarboncilUsage = () => {
  const { t } = useTranslation();

  return (
    <section
      id="carboncil-usage"
      className="flex flex-col md:flex-row items-center justify-center px-6 py-12"
    >
      {/* Image */}
      <div className="md:w-1/3 mb-8 md:mb-0">
        <img
          src="glowing-charcoal.png"
          alt={t('carboncil_usage.image_alt')}
          className="w-full h-auto rounded-2xl"
        />
      </div>

      {/* Text content */}
      <div className="w-full md:w-1/2 max-w-3xl text-left md:pl-12 space-y-6">
        <h2 className="text-3xl font-extrabold text-[#A40C0B]">
          {t('carboncil_usage.title')}
        </h2>
        <div className="space-y-4 text-gray-600">
          <p>
            <strong>{t('carboncil_usage.storage_title')}</strong>{' '}
            {t('carboncil_usage.storage_text')}
          </p>
          <p>
            <strong>{t('carboncil_usage.use_title')}</strong>{' '}
            {t('carboncil_usage.use_text')}
          </p>
          <p>
            <strong>{t('carboncil_usage.closed_grill_title')}</strong>{' '}
            {t('carboncil_usage.closed_grill_text')}
          </p>
          <p>
            <strong>{t('carboncil_usage.safety_title')}</strong>{' '}
            {t('carboncil_usage.safety_text')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CarboncilUsage;


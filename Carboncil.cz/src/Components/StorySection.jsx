import React from 'react';
import { useTranslation } from 'react-i18next';

const StorySection = () => {
  const { t } = useTranslation();

  return (
    <section className="mx-4 story bg-black text-white pb-45 rounded-2xl overflow-hidden">
      {/* HEADER BANNER */}
      <div className="relative w-full h-72 sm:h-96">
        <img
          src="charcoalBg.png"
          alt="Charcoal background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <p
            className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-thin qoute"
            style={{ opacity: 0.44 }}
          >
            {t('story_quote')}
          </p>
        </div>
      </div>

      {/* STORY GRID */}
      <div className="max-w-6xl mx-auto px-6 py-16 mt-5 space-y-16">
        {/* First row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-35 items-center">
          <div className="space-y-6">
            <p className="text-xl font-medium leading-relaxed">
              {t('story_start')}
            </p>
            <p className="text-xl font-medium leading-relaxed">
              {t('story_problem')}
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="smoke1.png"
              alt="Grill with smoke"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-35 items-center">
          <div className="space-y-6 order-1 md:order-2">
            <p className="text-xl font-medium leading-relaxed">
              {t('story_solution')}
            </p>
            <p className="text-xl font-medium leading-relaxed">
              {t('story_found')}
            </p>
            <p className="text-xl font-medium leading-relaxed">
              {t('story_innovation')}
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
            <img
              src="man.png"
              alt="Forest in Venezuela"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

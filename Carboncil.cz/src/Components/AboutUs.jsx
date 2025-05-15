import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="relative mx-auto my-12 px-6 max-w-[1324px]">
      <div className="relative w-full">
        <picture>
          <source media="(max-width:600px)" srcSet="AboutMob.png" />
          <img
            src="Subtract.png"
            alt="About background"
            className="w-full h-auto rounded-xl object-cover"
          />
        </picture>

        {/* Tabka „O nás“ */}
        <div
          className="absolute font-bold text-[#A40C0B] about-us"
          style={{ top: '4%', left: '1%' }}
        >
          {t('about_title')}
        </div>

        {/* Textový blok */}
        <div
          className="absolute text-black text-div"
          style={{ top: '17%', left: '5%', right: '5%' }}
        >
          <p className="mb-7 text-2xl about-text about1 leading-relaxed">
            {t('about_desc_1')}
          </p>
          <p className="text-2xl about-text leading-relaxed">
            {t('about_desc_2')}
          </p>
        </div>

        {/* Tlačidlo */}
        <div
          className="absolute about-btn"
          style={{ bottom: '0%', right: '0%', width: '5%', height: '16%' }}
        >
          <button onClick={() => navigate('/o-nas')}
            className="w-full h-full bg-black flex items-center justify-center rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105"
            aria-label="More about us"
          >
            <img src="Arrow1.png" alt=">" className="w-10 h-10" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
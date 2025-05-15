import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const GrillBecauseFun = () => {
  const [showCoalImage, setShowCoalImage] = useState(
    () => window.innerWidth > 1145
  );

  const { t } = useTranslation();

  useEffect(() => {
    const onResize = () => {
      setShowCoalImage(window.innerWidth > 1145);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section className="bg-white relative overflow-visible">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 grill-div md:grid-cols-2 gap-12">
          {/* Text vystředěný nahoru */}
          <div className="flex items-center mb-20">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#A40C0B]">
                {t('grillbecausefun_title')}
              </h2>
              <p className="text-[#696969] text-lg font-medium leading-relaxed">
                {t('grillbecausefun_desc')}
              </p>
            </div>
          </div>

          {/* Wrapper obrázku – pouze nad 1145px */}
          {showCoalImage && (
            <div className="relative h-[552px] overflow-visible">
              <img
                src="Coal6.png"
                alt="Falling charcoal"
                className="absolute top-0 right-0 w-[800px] max-w-none object-contain -mt-58"
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default GrillBecauseFun;

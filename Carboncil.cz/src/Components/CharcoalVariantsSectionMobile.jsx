import React from 'react';

const CharcoalVariantsSectionMobile = () => {
  return (
    <section className="w-full bg-black text-white">
      {/* Horní obrázek rodiny */}
      <picture>
        <source media="(max-width: 768px)" srcSet="familyMobil.png" />
        <img
          src="Family1.png"
          alt="Rodina pri grilovaní"
          className="w-full h-auto object-cover"
        />
      </picture>

      {/* První varianta: obrázek vlevo, text vpravo */}
      <div className="grid grid-cols-2 gap-4 items-center px-6 py-8">
        {/* Obrázek */}
        <div className="flex justify-center">
          <img
            src="carboncil.png"
            alt="Carboncil 1,5kg"
            className="w-40 h-auto object-contain"
          />
        </div>
        {/* Text */}
        <div className="flex flex-col space-y-2">
          {/* Ikona nad nadpisom */}
          <div className="flex">
            <img src="L.png" alt="L" className="w-6 h-auto" />
          </div>
          <h3 className="text-xl font-bold">Carboncil 1,5kg</h3>
          <p className="text-[#9e9c9c] text-sm leading-relaxed">
            Ideální pro menší gril nebo rychlé grilování s rodinou. Rozhoří se za
            pár minut, bez kouře a bez chemie. Praktické balení, které se hodí
            na každý výlet.
          </p>
        </div>
      </div>

      {/* Prostřední family obrázek (obyčajný img) */}
      <img
        src="Family3.png"
        alt="Rodina pri grilovaní 2"
        className="w-full h-auto object-cover"
      />

      {/* Druhá varianta: text vlevo, obrázek vpravo */}
      <div className="grid grid-cols-2 gap-4 items-center px-6 py-8">
        {/* Text */}
        <div className="flex flex-col space-y-2">
          {/* Ikona nad nadpisom */}
          <div className="flex">
            <img src="XXL.png" alt="XXL" className="w-21 h-auto" />
          </div>
          <h3 className="text-lg font-bold">Top Quality 15 kg</h3>
          <p className="text-[#9e9c9c] text-sm leading-relaxed ">
            Velké balení pro náročné grilování nebo profesionální použití.
            Výdrž, výkon a pohodlí při manipulaci – vše, co potřebujete pro pořádný
            grilovací zážitek bez starostí.
          </p>
        </div>
        {/* Obrázek */}
        <div className="flex justify-center">
          <img
            src="carbonito.png"
            alt="Top Quality 15kg"
            className="w-40 h-auto object-contain"
          />
        </div>
      </div>

      {/* Spodní dvojice obrázků (obyčajné img) */}
      <div >
        <div className="overflow-hidden">
          <img
            src="Family2.png"
            alt="Ľavý gril"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CharcoalVariantsSectionMobile;
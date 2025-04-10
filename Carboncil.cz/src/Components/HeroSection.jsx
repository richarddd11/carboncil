import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero bg-white px-6 py-16 md:py-24">

        
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT - Textová časť */}
        <div>
          <h1 className="text-4xl w-full md:text-5xl font-bold text-black leading-tight">
            Revoluční uhlí z Venezuely.<br />
            <span className="text-[#A40C0B] redSpan">Rožhaví se za 60 sekund.</span>
          </h1>

          <p className="text-[#696969] mt-6 max-w-md">
            Už žádné složité zapalování, špinavé ruce a dým, který vám kazí chuť
            k jídlu. Carboncil je 100% přírodní grilovací uhlí, ať už na zahradě,
            balkoně nebo v profesionální kuchyni.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-black text-white px-10 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
              Produkty <span className="text-xs">↗</span>
            </button>
            <a href='#' className="underline px-6 py-3 rounded-full hover:bg-gray-100 transition">
              Kontakt
            </a>
          </div>

          {/* Benefity */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className='w-1/2'>
              <img src="/Tree.png" alt="Ikona strom" className="mx-auto h-8 mb-2" />
              <p className="text-sm font-medium">100 % přírodní</p>
            </div>
            <div className='w-1/2'>
              <img src="/smoke.png" alt="Ikona bez kouře" className="mx-auto h-8 mb-2" />
              <p className="text-sm font-medium">Bez kouře, bez zápachu</p>
            </div>
            <div className='w-30'>
              <img src="/balcony.png" alt="Ikona balkón" className="mx-auto h-8 mb-2" />
              <p className="text-sm font-medium">Vhodné i na balkonové grily</p>
            </div>
          </div>
        </div>

        {/* RIGHT - Obrázok uhlia + značky */}
        <div className="relative w-full max-w-[550px] mx-auto">
          <img
            src="/MaskGroup.png"
            alt="Uhlie"
            className="w-full clip-arrow object-cover rounded-2xl"
          />

          {/* Červený štítok */}
          <div className="absolute top-0 h-2/9 w-133/550 left-0 bg-red-700 text-white font-semibold  py-10  rounded-xl shadow-md">
            <img className='w-110/125 absolute left-1/12 top-48/125' src="/HeroLogo.png" alt="" />
          </div>

          {/* Čierna šípka */}
          <div className="absolute bottom-0 right-0 h-2/9 w-133/550  pl-9 bg-black text-white text-xl p-3 rounded-xl shadow-md">
            <a href='#' className='absolute left-55/125 bottom-45/125'>↗</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

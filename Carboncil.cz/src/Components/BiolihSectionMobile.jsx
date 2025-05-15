import React from 'react';

const BiolihSection = () => {
  return (
    <section className="max-w-6xl biolih mx-auto px-6 pt-24 space-y-28 relative z-0">
      {/* 1. Sekcia: uhlie + biolih */}
      <div className="grid  md:grid-cols-2 items-center gap-12">
        {/* Text vľavo */}
        <div className="flex justify-center">
          <img
            src="Biolih1.png"
            alt="Uhlie"
            className="max-w-full h-auto object-contain"
          />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-[#A40C0B] mb-4">Biolih</h2>
          <p className="text-[#696969] font-medium text-lg leading-relaxed">
            Unikátní samozápalný efekt umožňuje impregnace biolihu, který pochází z obnovitelných přírodních zdrojů. Nezanechává zápach, neuvolňuje škodlivé látky a zaručuje maximální pohodlí při zapalování. Díky tomu je Carboncil nejen efektivní, ale také bezpečný pro vaši rodinu i přírodu.
          </p>
        </div>

        {/* Obrázok vpravo */}
      </div>

      {/* 2. Sekcia: uhlí které dává smysl + uhlie na bielom pozadí */}
      <div className="relative z-10 mb-10 grid md:grid-cols-2 items-center gap-12">

      <div className="flex justify-center">
          <img
            src="carboncilCoal.png"
            alt="Uhlie"
            className="max-w-full h-auto object-contain"
          />
        </div>
        {/* Text vľavo */}
        <div>
          <h2 className="text-3xl font-extrabold text-[#A40C0B] mb-4">Uhlí, které dává smysl</h2>
          <p className="text-[#696969] font-medium text-lg leading-relaxed mb-4">
            Pokud hledáš způsob, jak si užít skvělé jídlo, přírodu a zároveň přispět k udržitelnějšímu světu, Carboncil je uhlí, které spojuje všechny tyto hodnoty v jednom balení.
          </p>
          <p className="text-[#696969] font-medium text-lg leading-relaxed">
            Carboncil rozsvítí tvé grilování novým způsobem, s respektem k přírodě, s jednoduchostí a bez kompromisů. Vyzkoušej rozdíl, který dává smysl.
          </p>
        </div>

        

      </div>

    </section>
  );
};

export default BiolihSection;

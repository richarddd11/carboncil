import React, { useState } from 'react'

const FaqSection = () => {

    const faqData = [
        {
          id: 1,
          question: 'Proč zrovna z Venezuely?',
          answer:
            'Venezuela má jedinečné podmienky, kde vzniká drevo s vysokou hustotou. Uhlie je tak mimoriadne výhrevné a čisto prírodné.',
          bgImage: "/FaqBg.png", // každý FAQ item má inú fotku
        },
        {
          id: 2,
          question: 'Hoří Carboncil příliš rychle?',
          answer:
            'Naopak. I když se rozžhaví rychle, jeho výdrž je dlouhá a žár stabilní. To znamená, že si užijete dlouhé grilování bez nutnosti přikládání.',
          bgImage: "/FaqBg.png",
        },
        {
          id: 3,
          question: 'Kde si mohu Carboncil koupit?',
          answer:
            'Carboncil je dostupný v našem e-shopu a také v síti vybraných specializovaných prodejen.',
          bgImage: "/FaqBg.png",
        },
        {
          id: 4,
          question: 'Můžu používat Carboncil na balkoně?',
          answer:
            'Díky minimální kouřivosti je Carboncil ideální i do menších prostor, včetně balkonů. Přesto vždy dodržujte bezpečnostní předpisy.',
          bgImage: "/FaqBg.png",
        },
      ];

      const [openFaqId, setOpenFaqId] = useState(null);

      const toggleFaq = (id) => {
        setOpenFaqId((prev) => (prev === id ? null : id))
      }

  return (
    <section className="faq py-15 mx-auto max-w-410 text-white bg-black rounded-t-3xl" >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Ľavý stĺpec: FAQ položky */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openFaqId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-lg p-4 relative bg-no-repeat bg-cover bg-center"
                style={{
                  backgroundImage: isOpen
                    ? `url('/openFaqBg.png')` // Otvorený stav - červená fotka
                    : `url('${item.bgImage}')`   // Zatvorený stav - pôvodná fotka
                }}
              >
                  {/* Otázka */}
                  <span className={`text-xl ${isOpen ? 'text-white' : 'text-black'}`}>
                    {item.question}
                  </span>
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex justify-between items-center text-left font-semibold text-lg md:text-xl"
                >

                  {/* Ikona +/-, ktorá má vždy čierne pozadie a biely text */}
                  <span className="text-white w-8 h-9 text-2xl font-thin flex items-center justify-center rounded absolute right-5/110 top-1/250 mt-2">
                    {isOpen ? '-' : '+'}
                  </span>
                </button>

                {/* Odpoveď sa zobrazí, len ak je isOpen === true */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-lg md:text-lg leading-relaxed text-white">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

            <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Prečo je Carboncil revolučné uhlie?
            </h2>
            <p className="mb-6 text-base md:text-lg text-[#696969] leading-relaxed">
            Carboncil je unikátní uhlí vyrobené z čisté biomasy, bez jakýchkoli chemikálií, bez zápachu a bez kouře.
          </p>

          <p className="mb-6 text-base md:text-lg text-[#696969] leading-relaxed">
          Díky speciálnímu procesu karbonizace dosahuje výjimečných vlastností, které ho staví vysoko nad klasické dřevěné uhlí
          </p>
          <button className="bg-[#A40C0B] w-1/2 hover:bg-red-700 transition text-white font-semibold  py-3 rounded-full text-base md:text-lg">
            Carboncil ↗
          </button>
            </div>
        </div>

        <div className='h-[2px] w-[80%] mx-auto bg-[#A40C0B] rounded-lg mt-20'></div>
    </section>
  )
}

export default FaqSection
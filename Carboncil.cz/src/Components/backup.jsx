// src/components/FaqSection.jsx
import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const FaqSection = ({ customClass = "w-[98%]", noTopRadius = false }) => {
  const navigate = useNavigate();
  const [openFaqId, setOpenFaqId] = useState(null);

  const faqData = [
    {
      id: 1,
      question: 'Proč zrovna z Venezuely?',
      answer:
        'Venezuela má jedinečné podmínky, kdy vzniká dřevo s vysokou hustotou. Uhlí je tak mimořádně topné a čistě přírodní.',
      bgImage: "FaqBg.png",
    },
    {
      id: 2,
      question: 'Hoří Carboncil příliš rychle?',
      answer:
        'Naopak. I když se rozžhaví rychle, jeho výdrž je dlouhá a žár stabilní. To znamená, že si užijete dlouhé grilování bez nutnosti přikládání.',
      bgImage: "FaqBg.png",
    },
    {
      id: 3,
      question: 'Kde si mohu Carboncil koupit?',
      answer:
        'Carboncil je dostupný v našem e-shopu a v síti vybraných prodejen. Distribuční síť se pravidelně rozšiřuje pro lepší dostupnost.',
      bgImage: "FaqBg.png",
    },
    {
      id: 4,
      question: 'Můžu používat Carboncil na balkoně?',
      answer:
        'Díky minimální kouřivosti je Carboncil ideální i do menších prostor, včetně balkonů. Přesto vždy dodržujte bezpečnostní předpisy.',
      bgImage: "FaqBg.png",
    },
  ];

  const toggleFaq = id => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  return (
    <section className={`faq py-10 mb-5 mx-auto ${customClass} text-white bg-black ${noTopRadius ? 'rounded-b-3xl' : 'rounded-4xl'}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 min-[1135px]:grid-cols-2 gap-12">
        <div className="container space-y-4 lg:w-full md:w-[70%] mx-5 md:mx-auto">
          {faqData.map(item => {
            const isOpen = openFaqId === item.id;
            return (
              <div
                key={item.id}
                className={`faq rounded-lg p-4 relative bg-no-repeat bg-cover bg-center ${isOpen ? 'pt-13 open-faq' : 'closed-faq'}`}
                style={{
                  backgroundImage: isOpen
                    ? `url('openFaqBg.png')`
                    : `url('${item.bgImage}')`
                }}
              >
                <span className={`text-xl ${isOpen ? 'text-white ques-open' : 'text-black ques-closed'}`}>
                  {item.question}
                </span>

                <button
                  onClick={() => toggleFaq(item.id)}
                  className={`
                    absolute
                    ${isOpen ? 'faq-toggle-open' : 'faq-toggle-closed'}
                    w-10 h-10
                    flex items-center justify-center
                    bg-transparent p-0 rounded-none
                    transition-transform hover:scale-105
                  `}
                >
                  {isOpen
                    ? <FaTimes className="text-white text-2xl" />
                    : <FaPlus  className="text-white text-2xl" />
                  }
                </button>

                <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                  <p className="text-lg md:text-lg text-white answer">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text flex flex-col justify-center mx-5">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Prečo je Carboncil revolučné uhlie?
          </h2>
          <p className="mb-6 text-base md:text-lg text-[#696969] leading-relaxed">
            Carboncil je unikátní uhlí vyrobené z čisté biomasy, bez jakýchkoli chemikálií, bez zápachu a bez kouře.
          </p>
          <p className="mb-6 text-base md:text-lg text-[#696969] leading-relaxed">
            Díky speciálnímu procesu karbonizace dosahuje výjimečných vlastností, které ho staví vysoko nad klasické dřevěné uhlí.
          </p>
          <button
            onClick={() => navigate('/uhlie')}
            className="flex items-center justify-center bg-[#A40C0B] w-1/2 footerBtn hover:bg-red-700 transition text-white font-semibold py-3 rounded-full text-base md:text-lg"
          >
            Carboncil <span><img src="Arrow.png" alt="Arrow" /></span>
          </button>
        </div>
      </div>

      <div className="h-[2px] w-[95%] mx-auto bg-[#A40C0B] rounded-lg mt-20"></div>

      <footer className="relative px-5 2xl:max-w-410 mb-10 pt-20 mx-auto bg-black rounded-b-4xl">
        <div className="fot flex flex-col justify-between md:flex-row py-4 px-2 text-sm md:text-base">
          <p className="mb-2 text-center text-white">Uhlí, které griluje chytře.</p>
          <nav className="flex justify-center items-end float-right text-right text-sm md:text-base gap-10 mb-5 sm:mb-0">
            <Link to="/" className="hover:text-[#A40C0B] transition">Domov</Link>
            <Link to="/o-nas" className="hover:text-[#A40C0B] transition">O nás</Link>
            <Link to="/uhlie" className="hover:text-[#A40C0B] transition">Uhlie</Link>
            <Link to="/kontakt" className="hover:text-[#A40C0B] transition">Kontakt</Link>
          </nav>
        </div>
        <div className="flex flex-row justify-between">
          <img className="pl-2" src="HeroLogo.png" alt="Logo" />
          <p className="text-gray-400">© 2025 Carboncil</p>
        </div>
      </footer>
    </section>
  );
};

export default FaqSection;

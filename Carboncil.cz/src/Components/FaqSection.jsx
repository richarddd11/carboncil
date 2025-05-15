import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FaqSection = ({ customClass = "w-[98%]", noTopRadius = false }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [openFaqId, setOpenFaqId] = useState(null);

  const faqData = [
    {
      id: 1,
      question: t('faq_question_1'),
      answer: t('faq_answer_1'),
      bgImage: "FaqBg.png",
    },
    {
      id: 2,
      question: t('faq_question_2'),
      answer: t('faq_answer_2'),
      bgImage: "FaqBg.png",
    },
    {
      id: 3,
      question: t('faq_question_3'),
      answer: t('faq_answer_3'),
      bgImage: "FaqBg.png",
    },
    {
      id: 4,
      question: t('faq_question_4'),
      answer: t('faq_answer_4'),
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
                className={`faq rounded-lg p-4 relative bg-no-repeat bg-cover bg-center ${
                  isOpen ? 'pt-13 open-faq' : 'closed-faq'
                }`}
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
                  className={`absolute ${isOpen ? 'faq-toggle-open' : 'faq-toggle-closed'} w-10 h-10 flex items-center justify-center p-0`}
                  aria-label={isOpen ? 'Close question' : 'Open question'}
                >
                  {isOpen
                    ? <FaTimes className="text-white text-2xl" />
                    : <FaPlus className="text-white text-2xl" />}
                </button>

                <div className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                  }`}
                >
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
            {t('faq_title')}
          </h2>
          <p className="mb-6 text-base md:text-lg text-[#9e9c9c] leading-relaxed">
            {t('faq_desc_1')}
          </p>
          <p className="mb-6 text-base md:text-lg text-[#9e9c9c] leading-relaxed">
            {t('faq_desc_2')}
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
          <p className="mb-2 text-center text-white">{t('footer_slogan')}</p>
          <nav className="flex justify-center items-end float-right text-right text-sm md:text-base gap-10 mb-5 sm:mb-0">
            <Link to="/" className="hover:text-[#A40C0B] transition">{t('nav_home')}</Link>
            <Link to="/o-nas" className="hover:text-[#A40C0B] transition">{t('nav_about')}</Link>
            <Link to="/uhlie" className="hover:text-[#A40C0B] transition">{t('nav_products')}</Link>
            <Link to="/kontakt" className="hover:text-[#A40C0B] transition">{t('nav_contact')}</Link>
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

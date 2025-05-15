import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'cs', flag: 'cz' },
  { code: 'es', flag: 'es' },
  { code: 'de', flag: 'de' },
  { code: 'en', flag: 'gb' },
  { code: 'pl', flag: 'pl' },
  { code: 'sk', flag: 'sk' },
  { code: 'hr', flag: 'hr' }
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const dropdownRef = useRef(null);

  const linkClass = ({ isActive }) =>
    `text-base font-medium transition ${
      isActive ? 'text-[#A40C0B]' : 'text-black'
    }`;

  const contactClass = ({ isActive }) =>
    `text-base font-medium px-6 py-2 rounded-full transition flex items-center justify-center ${
      isActive
        ? 'bg-[#A40C0B] text-white'
        : 'bg-black text-white hover:bg-[#A40C0B]'
    }`;

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) ||
    languages.find((lang) => lang.code === 'cs');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 bg-white z-50 w-full">
      <div className="nav shadow-md w-full max-w-8xl mx-auto flex items-center justify-between px-6 py-6">
        <NavLink to="/" className="flex-shrink-0">
          <img src="Logo.png" alt="Carboncil" className="h-7" />
        </NavLink>

        <nav className="hidden min-[799px]:flex gap-10">
          <NavLink to="/" end className={linkClass}>
            {t('nav_home')}
          </NavLink>
          <NavLink to="/o-nas" className={linkClass}>
            {t('nav_about')}
          </NavLink>
          <NavLink to="/uhlie" className={linkClass}>
            {t('nav_products')}
          </NavLink>
          {i18n.language === 'cs' || i18n.language === 'sk' ? (
    <a
      href="https://www.chutespanelska.cz/grilovaci-uhli/"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setIsOpen(false)}
      className="text-base font-medium text-black transition hover:text-[#A40C0B]"
    >
      E-shop
    </a>
  ) : null}
        </nav>

        <div className="flex items-center gap-6 relative">
          <button onClick={() => setIsOpen(!isOpen)} className="min-[799px]:hidden p-2 focus:outline-none">
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>

          {/* Language Selector */}
          <div className="relative z-50" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-10 h-7 rounded overflow-hidden border border-gray-300 bg-white"
            >
              <img
                src={`https://flagcdn.com/w40/${currentLanguage.flag}.png`}
                srcSet={`https://flagcdn.com/w40/${currentLanguage.flag}.png 1x, https://flagcdn.com/w80/${currentLanguage.flag}.png 2x`}
                alt={currentLanguage.code}
                className="w-full h-full object-cover"
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow-md z-50">
                {languages.map(({ code, flag }) => (
                  <button
                    key={code}
                    onClick={() => {
                      console.log('Changing to:', code);
                      i18n.changeLanguage(code).then(() => {
                        setDropdownOpen(false);
                        setIsOpen(false);
                        setTimeout(() => window.location.reload(), 100);
                      });
                    }}
                    className={`w-full px-2 py-2 hover:bg-gray-100 flex items-center ${
                      i18n.language === code ? 'bg-gray-200' : ''
                    }`}
                  >
                    <img
                      src={`https://flagcdn.com/w40/${flag}.png`}
                      srcSet={`https://flagcdn.com/w40/${flag}.png 1x, https://flagcdn.com/w80/${flag}.png 2x`}
                      alt={code}
                      className="w-5 h-3 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/kontakt" className={contactClass}>
            {t('nav_contact')}
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute z-40 top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 transition-all duration-300 transform overflow-hidden min-[799px]:hidden ${
          isOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
        }`}
      >
        <nav className="flex flex-col gap-6">
          <NavLink to="/" end onClick={() => setIsOpen(false)} className={linkClass}>
            {t('nav_home')}
          </NavLink>
          <NavLink to="/o-nas" onClick={() => setIsOpen(false)} className={linkClass}>
            {t('nav_about')}
          </NavLink>
          <NavLink to="/uhlie" onClick={() => setIsOpen(false)} className={linkClass}>
            {t('nav_products')}
          </NavLink>
          {i18n.language === 'cs' || i18n.language === 'sk' ? (
    <a
      href="https://www.chutespanelska.cz/grilovaci-uhli/"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setIsOpen(false)}
      className="text-base font-medium text-black transition hover:text-[#A40C0B]"
    >
      E-shop
    </a>
  ) : null}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

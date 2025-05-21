import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const CookieConsent = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (accepted) => {
    localStorage.setItem('cookie_consent', accepted ? 'accepted' : 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 w-full bg-black text-white px-6 py-4 z-50 flex flex-col md:flex-row items-center justify-between shadow-lg">
      <p className="mb-2 md:mb-0 text-sm">
        {t('cookie.message')}{' '}
        <a href="/cookies" className="underline hover:text-gray-300">{t('cookie.more_info')}</a>.
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => handleConsent(true)}
          className="bg-[#A40C0B] hover:bg-red-700 text-white px-4 py-2 rounded text-sm"
        >
          {t('cookie.accept')}
        </button>
        <button
          onClick={() => handleConsent(false)}
          className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded text-sm"
        >
          {t('cookie.reject')}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;

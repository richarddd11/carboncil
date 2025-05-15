import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactHeroForm = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    const { id, value } = e.target;
    setForm(f => ({ ...f, [id]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus('success');
      setForm({ name: '', email: '', phone: '', product: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="max-w-7xl contactHero mx-auto px-6 py-20 mt-8 grid grid-cols-1 md:grid-cols-2 gap-54">
      <div className="space-y-7 md:space-y-10">
        <h1 className="text-5xl font-bold text-[#A40C0B]">{t('contact_title')}</h1>
        <p className="text-lg text-[#696969]">{t('contact_question')}</p>
        <p className="text-2xl font-bold text-[#A40C0B]">{t('contact_write_call')}</p>
        <p className="text-lg text-[#696969]">{t('contact_reply')}</p>
        <div className="flex flex-col gap-4">
          <a href="tel:+421915633064" className="w-60 inline-flex text-lg justify-start items-center gap-3 bg-[#A40C0B] text-white rounded-full py-1 hover:bg-red-800 transition">
            <span className="bg-white rounded-full w-[42px] h-[42px] flex items-center justify-center ml-1">
              <img src="Mobile.png" alt="Telefon" className="w-5 h-5" />
            </span>
            {t('contact_phone')}
          </a>
          <a href="mailto:info@carboncil.cz" className="w-60 inline-flex text-lg justify-start items-center gap-3 bg-[#A40C0B] text-white rounded-full py-1 hover:bg-red-800 transition">
            <span className="bg-white rounded-full w-[42px] h-[42px] flex items-center justify-center ml-1">
              <img src="Mail.png" alt="Email" className="w-[22px] h-[18px]" />
            </span>
            {t('contact_email')}
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-3">
          <label htmlFor="name" className="block text-sm">{t('form_name_label')}</label>
          <input id="name" type="text" value={form.name} onChange={handleChange} className="w-full h-12 bg-[#F7F7F7] rounded-md px-6" required />
        </div>

        <div className="space-y-3">
          <label htmlFor="email" className="block text-sm">{t('form_email_label')}</label>
          <input id="email" type="email" value={form.email} onChange={handleChange} className="w-full h-12 bg-[#F7F7F7] rounded-md px-6" required />
        </div>

        <div className="space-y-3">
          <label htmlFor="phone" className="block text-sm">{t('form_phone_label')}</label>
          <input id="phone" type="tel" value={form.phone} onChange={handleChange} className="w-full h-12 bg-[#F7F7F7] rounded-md px-6" />
        </div>

        <div className="space-y-3">
          <label htmlFor="product" className="block text-sm">{t('form_product_label')}</label>
          <select id="product" value={form.product} onChange={handleChange} className="w-full h-12 bg-[#F7F7F7] rounded-md px-6">
            <option value="">{t('form_product_placeholder')}</option>
            <option>{t('form_product_option_1')}</option>
            <option>{t('form_product_option_2')}</option>
          </select>
        </div>

        <div className="space-y-3">
          <label htmlFor="message" className="block text-sm">{t('form_message_label')}</label>
          <textarea id="message" rows={4} value={form.message} onChange={handleChange} className="w-full bg-[#F7F7F7] rounded-md px-6 py-3" />
        </div>

        <button type="submit" disabled={status === 'sending'} className="w-full h-12 bg-[#A40C0B] text-white font-semibold rounded-md hover:bg-red-800 transition">
          {status === 'sending' ? t('form_sending') : t('form_submit')}
        </button>

        {status === 'success' && <p className="text-[#A40C0B]">{t('form_success')}</p>}
        {status === 'error' && <p className="text-red-500">{t('form_error')}</p>}
      </form>
    </section>
  );
};

export default ContactHeroForm;
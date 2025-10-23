import emailjs from '@emailjs/browser';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../contexts/translationContext';
import { SITE_DATA } from '../configs/data/site';

export default function Contact() {
  const { t, lang } = useTranslation();
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '', fading: false });

  useEffect(() => {
    const key = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '').trim();
    console.log('EMAILJS ENV', {
      SERVICE: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      TEMPLATE_EN: import.meta.env.VITE_EMAILJS_TEMPLATE_EN_ID,
      TEMPLATE_ES: import.meta.env.VITE_EMAILJS_TEMPLATE_ES_ID,
      PUBLIC_KEY_PRESENT: !!key,
      CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL
    });
    if (key) {
      try {
        emailjs.init(key);
        console.log('emailjs.init OK');
      } catch (err) {
        console.warn('emailjs.init failed', err);
      }
    } else {
      console.warn('No EmailJS public key found in env');
    }
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const getTemplateId = () =>
    lang === 'es'
      ? import.meta.env.VITE_EMAILJS_TEMPLATE_ES_ID
      : import.meta.env.VITE_EMAILJS_TEMPLATE_EN_ID;

  const clearStatusAfter = (ms = 5000) => {
    setTimeout(() => {
      setStatus(prev => ({ ...prev, fading: true }));
      setTimeout(() => setStatus({ type: '', message: '', fading: false }), 500);
    }, ms);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const name = (formData.get('user_name') || '').toString().trim();
    const email = (formData.get('user_email') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    if (!name || !email || !message) {
      setStatus({ type: 'error', message: t.contact.form.emptyFields || 'Please fill all fields.', fading: false });
      clearStatusAfter();
      return;
    }

    if (!validateEmail(email)) {
      setStatus({ type: 'error', message: t.contact.form.invalidEmail || 'Please enter a valid email address.', fading: false });
      clearStatusAfter();
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = getTemplateId();
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS config missing', { serviceId, templateId, publicKeyPresent: !!publicKey });
      setStatus({ type: 'error', message: 'Email service is not configured. Check .env.local', fading: false });
      return;
    }

    setIsSending(true);
    setStatus({ type: '', message: '' });

    try {
      // sendForm will read inputs in the <form> (names must match template variables)
      const resp = await emailjs.sendForm(serviceId, templateId, form, publicKey);
      console.debug('EmailJS send success', resp);
      setStatus({ type: 'success', message: t.contact.form.success || "Message sent! I'll get back to you soon.", fading: false });
      clearStatusAfter();
      form.reset();
    } catch (error) {
      // try to extract useful message
      console.error('EmailJS send failed (full):', error);
      const detailed = (error && (error.text || error.message)) ? (error.text || error.message) : null;
      const userMessage = detailed || t.contact.form.error || 'There was an error. Please try again later.';
      setStatus({ type: 'error', message: userMessage, fading: false });
      clearStatusAfter();
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="flex py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">{t.contact.message}</h2>

        {status.message && (
          <div
            role="alert"
            className={`mb-6 p-4 rounded-lg relative transition-all duration-500 ease-in-out
              ${status.fading ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}
              ${status.type === 'success'
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}
          >
            {status.message}
          </div>
        )}

        <form ref={formRef} onSubmit={sendEmail} className="mt-8 space-y-4">
          <input
            name="user_name"
            type="text"
            placeholder={t.contact.form.name}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />

          <input
            name="user_email"
            type="email"
            placeholder={t.contact.form.email}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />

          <textarea
            name="message"
            rows="5"
            placeholder={t.contact.form.message}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />

          {/* hidden field so template can use contact_email as recipient or display */}
          <input type="hidden" name="contact_email" value={SITE_DATA?.email || ''} />

          <button
            type="submit"
            disabled={isSending}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-lg transition-colors duration-300"
          >
            {isSending ? (t.contact.form.sending || 'Sending...') : (t.contact.form.buttonText || 'Send Message')}
          </button>
        </form>
      </div>
    </section>
  );
}
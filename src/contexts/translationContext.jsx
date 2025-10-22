/* eslint-disable react-refresh/only-export-components */
// src/contexts/TranslationContext.jsx
import { createContext, useState, useEffect, useContext } from 'react';
import es from '../configs/lang/es';
import en from '../configs/lang/en';

const translations = { es, en };

// Crea el Contexto
const TranslationContext = createContext();

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

// Proveedor del contexto
export const TranslationProvider = ({ children }) => {
  const [ lang, setLang ] = useState('en'); // Fallback

  useEffect(() => {
    const saved = localStorage.getItem('language');
    const browserLang = navigator.language || navigator.userLanguage;

    const detect = () => {
      if (saved && [ 'es', 'en' ].includes(saved)) return saved;
      if (browserLang.startsWith('es')) return 'es';
      return 'en';
    };

    const detected = detect();
    setLang(detected);
    document.documentElement.lang = detected;
  }, []);

  const switchLanguage = (newLang) => {
    if (translations[newLang]) {
      setLang(newLang);
      localStorage.setItem('language', newLang);
      document.documentElement.lang = newLang;
    }
  };

  // Traducciones actuales
  const t = translations[lang];

  return (
    <TranslationContext.Provider value={{ t, lang, switchLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

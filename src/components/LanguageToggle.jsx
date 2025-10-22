// src/components/LanguageToggle.jsx
import { useTranslation } from '../contexts/translationContext';

const LanguageToggle = () => {
  const { lang, switchLanguage } = useTranslation();

  return (
    <div className="flex items-center space-x-1 bg-gray-200 dark:bg-gray-800 p-1 rounded-full text-sm font-medium">
      {/* Español */}
      <button
        type="button"
        onClick={() => lang !== 'es' && switchLanguage('es')}
        className={`
          flex items-center justify-center w-8 h-8 rounded-full 
          transition-all duration-300 focus:outline-none
          cursor-pointer
          ${lang === 'es'
      ? 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 ring-1 ring-blue-400 shadow-md scale-105'
      : 'text-gray-700 dark:text-gray-300 hover:bg-white/70 hover:text-blue-600 dark:hover:text-blue-600'
    }
        `}
        role="radio"
        aria-checked={lang === 'es'}
        aria-label="Spanish"
      >
        <span className="text-sm">ES</span>
      </button>

      {/* Inglés */}
      <button
        type="button"
        onClick={() => lang !== 'en' && switchLanguage('en')}
        className={`
          flex items-center justify-center w-8 h-8 rounded-full 
          transition-all duration-300 focus:outline-none
          cursor-pointer
          ${lang === 'en'
      ? 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 ring-1 ring-blue-400 shadow-md scale-105'
      : 'text-gray-700 dark:text-gray-300 hover:bg-white/70 hover:text-blue-600 dark:hover:text-blue-600'
    }
        `}
        role="radio"
        aria-checked={lang === 'en'}
        aria-label="English"
      >
        <span className="text-sm">EN</span>
      </button>
    </div>
  );
};

export default LanguageToggle;

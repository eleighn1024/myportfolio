// src/hooks/useTheme.js
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [ darkMode, setDarkMode ] = useState(true);

  useEffect(() => {

    const saved = localStorage.getItem('darkMode');

    const initial = saved ? JSON.parse(saved) : true;

    setDarkMode(initial);

    if (initial) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;

      localStorage.setItem('darkMode', JSON.stringify(next));

      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      return next;
    });
  };

  return { darkMode, toggleDarkMode };
};

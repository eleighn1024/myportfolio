// src/components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  //console.log('[ThemeToggle] Dark Mode:', darkMode);

  return (
    <div className="flex items-center space-x-1
               bg-gray-200 dark:bg-gray-800 p-1 rounded-full
               text-xs font-medium">
      {/* Light Theme */}
      {/*console.log('[ThemeToggleX] Dark Mode:', darkMode)*/}
      <span
        className={`
          rounded-full p-1.5 *:size-7
          ${!darkMode
      ? 'bg-white ring-1 ring-blue-400 shadow-sm'
      : 'hover:bg-white/90 hover:text-blue-600'
    }
          sm:p-0 
          cursor-pointer 
          text-gray-800 dark:text-white
        `}
        onClick={() => darkMode && toggleDarkMode()}
        role="radio"
        aria-checked={!darkMode}
        aria-label="Light theme"
        tabIndex="0"
      >
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor">
          <circle cx="14" cy="14" r="3.5" />
          <path d="M14 8.5V6.5" strokeLinecap="round" />
          <path d="M17.889 10.111L19.303 8.697" strokeLinecap="round" />
          <path d="M19.5 14H21.5" strokeLinecap="round" />
          <path d="M17.889 17.888L19.303 19.302" strokeLinecap="round" />
          <path d="M14 21.5V19.5" strokeLinecap="round" />
          <path d="M8.697 19.303L10.111 17.889" strokeLinecap="round" />
          <path d="M6.5 14H8.5" strokeLinecap="round" />
          <path d="M8.697 8.697L10.111 10.111" strokeLinecap="round" />
        </svg>
      </span>

      {/* Dark Theme */}
      <span
        className={`
          rounded-full p-1.5 *:size-7 
          ${darkMode
      ? 'bg-gray-700 ring-1 ring-blue-600 shadow-sm inset-ring-white/10'
      : 'hover:bg-white/90 hover:text-blue-400'
    }
          sm:p-0
          cursor-pointer
          text-gray-800 dark:text-white
        `}
        onClick={() => !darkMode && toggleDarkMode()}
        role="radio"
        aria-checked={darkMode}
        aria-label="Dark theme"
        tabIndex="0"
      >
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor">
          <path d="M10.5 9.999C10.5 14.14 13.858 17.499 18 17.499C19.033 17.499 20.018 17.29 20.913 16.912C19.776 19.607 17.109 21.499 14 21.499C9.858 21.499 6.5 18.141 6.5 13.999C6.5 10.89 8.392 8.223 11.087 7.086C10.709 7.982 10.5 8.966 10.5 9.999Z" strokeLinejoin="round" />
          <path d="M16.356 6.507L16.5 5.5L16.644 6.507C16.707 6.947 17.053 7.293 17.493 7.356L18.5 7.5L17.493 7.644C17.053 7.707 16.707 8.053 16.644 8.492L16.5 9.5L16.356 8.492C16.293 8.052 15.948 7.707 15.508 7.644L14.5 7.5L15.508 7.356C15.948 7.293 16.293 6.947 16.356 6.507Z" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20.356 11.507L20.5 10.5L20.644 11.507C20.707 11.947 21.053 12.293 21.493 12.356L22.5 12.5L21.493 12.644C21.053 12.707 20.707 13.053 20.644 13.492L20.5 14.5L20.356 13.492C20.293 13.052 19.948 12.707 19.508 12.644L18.5 12.5L19.508 12.356C19.948 12.293 20.293 11.947 20.356 11.507Z" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
};

export default React.memo(ThemeToggle);

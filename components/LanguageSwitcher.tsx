import React, { useState, useContext, useRef, useEffect } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { ChevronDownIcon } from './Icons';

const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'uz', name: 'UZ' },
    { code: 'ru', name: 'RU' },
  ];

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-full px-3 py-2 border border-transparent text-sm font-medium rounded-md text-eco-gray-dark dark:text-eco-gray-light bg-eco-gray-light dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-eco-gray-dark focus:ring-eco-green"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {language.toUpperCase()}
        <ChevronDownIcon className={`w-5 h-5 ml-1 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white dark:bg-eco-gray-dark ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1" role="none">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="w-full text-left block px-4 py-2 text-sm text-eco-gray-dark dark:text-eco-gray-light hover:bg-eco-gray-light dark:hover:bg-gray-700"
                role="menuitem"
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { translations, TranslationSet } from '../translations';

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
  translations: Record<string, TranslationSet>;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  translations: translations,
});

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedLang = window.localStorage.getItem('language');
      if (storedLang && translations[storedLang]) {
        return storedLang;
      }
    }
    return 'en'; // Default language
  });

  useEffect(() => {
    window.localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    translations,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

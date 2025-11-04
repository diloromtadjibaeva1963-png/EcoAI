import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <footer className="bg-eco-green-dark dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg italic text-eco-green-light">
          “{translations[language].footerQuote}”
        </p>
        <p className="mt-8 text-center text-base text-gray-300 dark:text-gray-400">
          &copy; {new Date().getFullYear()} EcoAI. {translations[language].footerRights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
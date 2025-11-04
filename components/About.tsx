import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-extrabold text-eco-green-dark dark:text-eco-green-light sm:text-4xl">
            {translations[language].aboutTitle}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-eco-gray dark:text-gray-300">
            {translations[language].aboutText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
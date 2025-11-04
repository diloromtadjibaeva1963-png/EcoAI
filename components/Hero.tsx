import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { ChevronDownIcon } from './Icons';

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const targetId = href.substring(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const headerOffset = 80; // Accommodate for sticky header
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

const Hero: React.FC = () => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-eco-gray-light dark:bg-gray-800">
      <div className="text-center p-4 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-extrabold text-eco-green-dark dark:text-eco-green-light tracking-tight">
          EcoAI
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-eco-gray dark:text-gray-300">
          {translations[language].heroSlogan}
        </p>
        <a 
          href="#about"
          onClick={(e) => handleSmoothScroll(e, '#about')}
          className="mt-8 inline-block bg-eco-green text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-eco-green-dark transition-all duration-300 transform hover:scale-105"
        >
          {translations[language].heroButton}
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} aria-label="Scroll to about section">
          <ChevronDownIcon className="w-8 h-8 text-eco-green dark:text-eco-green-light animate-bounce-subtle" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
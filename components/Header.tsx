import React, { useState, useContext } from 'react';
import { LeafIcon } from './Icons';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import { LanguageContext } from '../contexts/LanguageContext';

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const targetId = href.substring(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const headerOffset = 80; // Accommodate for sticky header (h-16 is 64px)
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={(e) => {
      handleSmoothScroll(e, href);
      if (onClick) {
        onClick();
      }
    }}
    className="text-eco-gray-dark dark:text-eco-gray-light hover:text-eco-green dark:hover:text-eco-green-light transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, translations } = useContext(LanguageContext);

  const navLinks = [
    { href: '#about', label: translations[language].navAbout },
    { href: '#how-it-works', label: translations[language].navHowItWorks },
    { href: '#results', label: translations[language].navResults },
    { href: '#contact', label: translations[language].navContact },
  ];

  return (
    <header className="bg-white/80 dark:bg-eco-gray-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="flex-shrink-0 flex items-center gap-2">
              <LeafIcon className="h-8 w-8 text-eco-green" />
              <span className="text-2xl font-bold text-eco-green-dark dark:text-eco-green-light">EcoAI</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
              ))}
              <div className="flex items-center space-x-2">
                <ThemeSwitcher />
                <LanguageSwitcher />
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden items-center space-x-2">
             <ThemeSwitcher />
             <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white dark:bg-eco-gray-dark inline-flex items-center justify-center p-2 rounded-md text-eco-gray dark:text-eco-gray-light hover:text-eco-green-dark dark:hover:text-eco-green-light hover:bg-eco-gray-light dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-eco-gray-dark focus:ring-eco-green"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
               <NavLink key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
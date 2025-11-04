import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Results from './components/Results';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-white dark:bg-eco-gray-dark text-eco-gray-dark dark:text-eco-gray-light font-sans">
        <Header />
        <main>
          <Hero />
          <About />
          <HowItWorks />
          <Results />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
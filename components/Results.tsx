import React, { useState, useEffect, useRef, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const CountUp: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const useOnScreen = (ref: React.RefObject<HTMLElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};

const ResultStat: React.FC<{ value: number; label: string; delay: string; }> = ({ value, label, delay }) => (
  <div className="text-center p-6 bg-white dark:bg-eco-gray-dark rounded-lg shadow-md animate-fade-in-up" style={{ animationDelay: delay }}>
    <p className="text-5xl font-bold text-eco-green dark:text-eco-green-light">
      <CountUp end={value} suffix="%" />
    </p>
    <p className="mt-2 text-lg font-medium text-eco-gray-dark dark:text-eco-gray-light">{label}</p>
  </div>
);

const Results: React.FC = () => {
  const { language, translations } = useContext(LanguageContext);

  const stats = [
    { value: 70, label: translations[language].resultsStat1, delay: '0.2s' },
    { value: 55, label: translations[language].resultsStat2, delay: '0.4s' },
    { value: 80, label: translations[language].resultsStat3, delay: '0.6s' },
  ];

  return (
    <section id="results" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-eco-green-dark dark:text-eco-green-light sm:text-4xl">
            {translations[language].resultsTitle}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-eco-gray dark:text-gray-300">
            {translations[language].resultsSubtitle}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map(stat => (
            <ResultStat key={stat.label} value={stat.value} label={stat.label} delay={stat.delay} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
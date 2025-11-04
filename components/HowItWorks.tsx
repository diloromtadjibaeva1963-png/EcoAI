import React, { useContext } from 'react';
import { CameraIcon, BrainIcon, LocationIcon, MapIcon, ChevronRightIcon } from './Icons';
import { LanguageContext } from '../contexts/LanguageContext';

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-eco-gray-dark rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-eco-green text-white">
        {icon}
      </div>
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-eco-green-dark dark:text-eco-green-light">{title}</h3>
      <p className="mt-2 text-base text-eco-gray dark:text-gray-300">{description}</p>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  const { language, translations } = useContext(LanguageContext);

  const steps = [
    {
      icon: <CameraIcon className="h-8 w-8" />,
      title: translations[language].howItWorksStep1Title,
      description: translations[language].howItWorksStep1Text,
    },
    {
      icon: <BrainIcon className="h-8 w-8" />,
      title: translations[language].howItWorksStep2Title,
      description: translations[language].howItWorksStep2Text,
    },
    {
      icon: <LocationIcon className="h-8 w-8" />,
      title: translations[language].howItWorksStep3Title,
      description: translations[language].howItWorksStep3Text,
    },
    {
      icon: <MapIcon className="h-8 w-8" />,
      title: translations[language].howItWorksStep4Title,
      description: translations[language].howItWorksStep4Text,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-eco-gray-light dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-eco-green-dark dark:text-eco-green-light sm:text-4xl">
            {translations[language].howItWorksTitle}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-eco-gray dark:text-gray-300">
            {translations[language].howItWorksSubtitle}
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 items-start">
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-center justify-center relative animate-fade-in-up" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                <StepCard icon={step.icon} title={step.title} description={step.description} />
                {index < steps.length - 1 && (
                   <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 text-eco-gray-light dark:text-gray-700">
                      <ChevronRightIcon className="h-8 w-8 text-eco-gray/50 dark:text-eco-gray/30" />
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
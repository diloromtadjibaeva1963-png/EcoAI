import React, { useContext } from 'react';
import { TwitterIcon, LinkedinIcon, GithubIcon, MailIcon } from './Icons';
import { LanguageContext } from '../contexts/LanguageContext';

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-eco-gray dark:text-gray-400 hover:text-eco-green dark:hover:text-eco-green-light transition-colors duration-300"
  >
    {icon}
  </a>
);

const Contact: React.FC = () => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section id="contact" className="py-20 sm:py-32 bg-eco-gray-light dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-eco-green-dark dark:text-eco-green-light sm:text-4xl">
            {translations[language].contactTitle}
          </h2>
          <p className="mt-4 text-lg text-eco-gray dark:text-gray-300">
            {translations[language].contactSubtitle}
          </p>

          <div className="mt-8">
            <a href="mailto:contact@ecoai.com" className="inline-flex items-center gap-3 text-lg font-medium text-eco-green-dark dark:text-eco-green-light hover:underline">
              <MailIcon className="h-6 w-6" />
              <span>contact@ecoai.com</span>
            </a>
          </div>

          <div className="mt-12">
             <p className="text-base text-eco-gray dark:text-gray-300">Follow us on social media</p>
             <div className="mt-4 flex justify-center space-x-6">
                <SocialLink href="https://twitter.com" icon={<TwitterIcon className="h-8 w-8" />} label="Twitter" />
                <SocialLink href="https://linkedin.com" icon={<LinkedinIcon className="h-8 w-8" />} label="LinkedIn" />
                <SocialLink href="https://github.com" icon={<GithubIcon className="h-8 w-8" />} label="GitHub" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
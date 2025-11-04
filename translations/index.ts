
export interface TranslationSet {
  // Navigation
  navAbout: string;
  navHowItWorks: string;
  navResults: string;
  navContact: string;

  // Hero Section
  heroSlogan: string;
  heroButton: string;
  
  // About Section
  aboutTitle: string;
  aboutText: string;

  // How It Works Section
  howItWorksTitle: string;
  howItWorksSubtitle: string;
  howItWorksStep1Title: string;
  howItWorksStep1Text: string;
  howItWorksStep2Title: string;
  howItWorksStep2Text: string;
  howItWorksStep3Title: string;
  howItWorksStep3Text: string;
  howItWorksStep4Title: string;
  howItWorksStep4Text: string;
  
  // Results Section
  resultsTitle: string;
  resultsSubtitle: string;
  resultsStat1: string;
  resultsStat2: string;
  resultsStat3: string;
  
  // Contact Section
  contactTitle: string;
  contactSubtitle: string;

  // Footer
  footerQuote: string;
  footerRights: string;
}

type Translations = {
  [key: string]: TranslationSet;
};

export const translations: Translations = {
  en: {
    navAbout: 'About',
    navHowItWorks: 'How It Works',
    navResults: 'Results',
    navContact: 'Contact',
    heroSlogan: 'Technology for a cleaner planet.',
    heroButton: 'Discover More',
    aboutTitle: 'Harnessing AI for Environmental Good',
    aboutText: 'EcoAI leverages cutting-edge artificial intelligence to identify, categorize, and map environmental waste with unprecedented speed and accuracy. Our system helps communities, organizations, and individuals to take targeted action, transforming data into a powerful tool for restoring our planet\'s natural beauty.',
    howItWorksTitle: 'A Simple, Powerful Process',
    howItWorksSubtitle: 'Follow these four easy steps to contribute to a cleaner world.',
    howItWorksStep1Title: '1. Take a photo',
    howItWorksStep1Text: 'Simply snap a picture of litter you find using your smartphone.',
    howItWorksStep2Title: '2. AI detects waste',
    howItWorksStep2Text: 'Our intelligent system analyzes the image to identify and classify the type of trash.',
    howItWorksStep3Title: '3. GPS finds location',
    howItWorksStep3Text: 'We automatically tag the photo with precise GPS coordinates.',
    howItWorksStep4Title: '4. Submit Information',
    howItWorksStep4Text: 'The submitted information can be viewed by local authorities, environmental agencies, and volunteers.',
    resultsTitle: 'Measurable Impact',
    resultsSubtitle: 'Our technology delivers tangible results for a cleaner environment.',
    resultsStat1: 'Faster Detection',
    resultsStat2: 'More Eco-Awareness',
    resultsStat3: 'Digitalization',
    contactTitle: 'Get In Touch',
    contactSubtitle: 'Have questions or want to partner with us? We’d love to hear from you. Reach out via email or connect on social media.',
    footerQuote: 'Protecting the environment is our duty.',
    footerRights: 'All rights reserved.',
  },
  uz: {
    navAbout: 'Haqida',
    navHowItWorks: 'Qanday ishlaydi',
    navResults: 'Natijalar',
    navContact: 'Aloqa',
    heroSlogan: 'Toza sayyora uchun texnologiya.',
    heroButton: 'Ko\'proq bilish',
    aboutTitle: 'Atrof-muhit uchun sun\'iy intellekt',
    aboutText: 'EcoAI eng zamonaviy sun\'iy intellektdan foydalanib, atrof-muhitdagi chiqindilarni misli ko\'rilmagan tezlik va aniqlik bilan aniqlaydi, tasniflaydi va xaritaga tushiradi. Tizimimiz jamoalar, tashkilotlar va shaxslarga maqsadli harakatlar qilishga yordam beradi, ma\'lumotlarni sayyoramizning tabiiy go\'zalligini tiklash uchun kuchli vositaga aylantiradi.',
    howItWorksTitle: 'Oddiy va kuchli jarayon',
    howItWorksSubtitle: 'Toza dunyoga hissa qo\'shish uchun ushbu to\'rt oson qadamni bajaring.',
    howItWorksStep1Title: '1. Rasmga oling',
    howItWorksStep1Text: 'Smartfoningiz yordamida topgan axlatni suratga oling.',
    howItWorksStep2Title: '2. AI chiqindini aniqlaydi',
    howItWorksStep2Text: 'Aqlli tizimimiz chiqindi turini aniqlash va tasniflash uchun rasmni tahlil qiladi.',
    howItWorksStep3Title: '3. GPS joylashuvni topadi',
    howItWorksStep3Text: 'Biz rasmni avtomatik ravishda aniq GPS koordinatalari bilan belgilaymiz.',
    howItWorksStep4Title: '4. Ma\'lumotni yuborish',
    howItWorksStep4Text: 'Yuborilgan ma\'lumotlarni hokimlik, ekologiya boshqarmasi va volontyorlar ko\'ra oladi.',
    resultsTitle: 'O\'lchanadigan ta\'sir',
    resultsSubtitle: 'Bizning texnologiyamiz toza atrof-muhit uchun sezilarli natijalarni beradi.',
    resultsStat1: 'Tezroq aniqlash',
    resultsStat2: 'Eko-xabardorlik',
    resultsStat3: 'Raqamlashtirish',
    contactTitle: 'Biz bilan bog\'laning',
    contactSubtitle: 'Savollaringiz bormi yoki biz bilan hamkorlik qilmoqchimisiz? Biz sizdan eshitishni istardik. Elektron pochta orqali bog\'laning yoki ijtimoiy tarmoqlarda biz bilan aloqa qiling.',
    footerQuote: 'Atrof-muhitni asrash — bizning burchimiz.',
    footerRights: 'Barcha huquqlar himoyalangan.',
  },
  ru: {
    navAbout: 'О нас',
    navHowItWorks: 'Как это работает',
    navResults: 'Результаты',
    navContact: 'Контакты',
    heroSlogan: 'Технология для более чистой планеты.',
    heroButton: 'Узнать больше',
    aboutTitle: 'ИИ на службе экологии',
    aboutText: 'EcoAI использует передовой искусственный интеллект для выявления, классификации и нанесения на карту отходов в окружающей среде с беспрецедентной скоростью и точностью. Наша система помогает сообществам, организациям и отдельным лицам предпринимать целенаправленные действия, превращая данные в мощный инструмент для восстановления природной красоты нашей планеты.',
    howItWorksTitle: 'Простой и мощный процесс',
    howItWorksSubtitle: 'Следуйте этим четырем простым шагам, чтобы внести свой вклад в более чистый мир.',
    howItWorksStep1Title: '1. Сделайте фото',
    howItWorksStep1Text: 'Просто сфотографируйте мусор, который вы нашли, с помощью своего смартфона.',
    howItWorksStep2Title: '2. ИИ обнаруживает отходы',
    howItWorksStep2Text: 'Наша интеллектуальная система анализирует изображение для идентификации и классификации типа мусора.',
    howItWorksStep3Title: '3. GPS находит местоположение',
    howItWorksStep3Text: 'Мы автоматически отмечаем фотографию точными GPS-координатами.',
    howItWorksStep4Title: '4. Отправить информацию',
    howItWorksStep4Text: 'Отправленную информацию могут просматривать местные власти, экологические ведомства и волонтеры.',
    resultsTitle: 'Измеримое воздействие',
    resultsSubtitle: 'Наша технология обеспечивает ощутимые результаты для более чистой окружающей среды.',
    resultsStat1: 'Быстрое обнаружение',
    resultsStat2: 'Эко-осведомленность',
    resultsStat3: 'Цифровизация',
    contactTitle: 'Свяжитесь с нами',
    contactSubtitle: 'Есть вопросы или хотите стать нашим партнером? Мы будем рады вас выслушать. Свяжитесь с нами по электронной почте или в социальных сетях.',
    footerQuote: 'Защита окружающей среды — наш долг.',
    footerRights: 'Все права защищены.',
  }
};
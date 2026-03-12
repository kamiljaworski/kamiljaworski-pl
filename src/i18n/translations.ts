export type Lang = 'en' | 'pl';

export const defaultLang: Lang = 'en';

export const translations = {
  en: {
    // Meta
    meta: {
      title: 'Kamil Jaworski - .NET Software Engineer',
      description:
        'Kamil Jaworski is a Software Engineer specialising in .NET, C#, cloud architecture and distributed systems. Based in Częstochowa, Poland.',
      keywords:
        '.NET developer, .NET software engineer, C#, ASP.NET Core, ASP.NET MVC, Entity Framework, MassTransit, xUnit, Angular, TypeScript, JavaScript, microservices, CQRS, event-driven architecture, REST API, AWS, Microsoft Azure, Docker, Terraform, SQL Server, MongoDB, Redis, Częstochowa, Poland, backend developer, cloud architecture, distributed systems',
      ogTitle: 'Kamil Jaworski - .NET Software Engineer',
      ogDescription:
        'Software Engineer specialising in .NET, cloud architecture and distributed systems.',
    },

    // Nav
    nav: {
      about: 'About',
      experience: 'Experience',
      certificates: 'Certificates',
      skills: 'Skills',
      contact: 'Contact',
    },

    // Hero
    hero: {
      name: 'Kamil Jaworski',
      title: '.NET Software Engineer',
      tagline:
        'I build reliable, scalable backend systems with .NET and cloud technologies.',
    },

    // Language toggle
    lang: {
      switchTo: 'PL',
      switchToHref: '/pl/',
      switchLabel: 'Switch to Polish',
    },

    // About
    about: {
      heading: 'About',
      body: [
        "I'm a Software Engineer with 7 years of professional experience, specialising in backend development with .NET and C#. I enjoy designing and building distributed, cloud-native systems - from microservices to event-driven architectures. On the frontend side I have practical experience with Angular and TypeScript.",
        'Over the course of my career I have worked on large-scale platforms in the travel and e-commerce industries, contributed to cloud migrations on both Azure and AWS and at one point led a team of 8 engineers while remaining hands-on as a developer. I care deeply about code quality, testability and building systems that are both reliable and maintainable.',
        "When I'm not at the keyboard, I'm usually exploring new technologies, tinkering with side projects or enjoying the outdoors.",
      ],
    },

    // Experience
    experience: {
      heading: 'Experience',
      present: 'Present',
      entries: [
        {
          company: 'Software Mind',
          location: 'Kraków / Remote',
          role: 'Software Engineer',
          start: 'Oct 2022',
          end: 'Present',
          bullets: [
            'Working on a large-scale travel booking platform used by thousands of agents across 6 countries, consisting of 100+ microservices in a hybrid on-premises and AWS environment',
            'Developed and maintained distributed microservices; refactored legacy on-prem services into cloud-native services deployed on AWS',
            'Implemented asynchronous messaging with MassTransit and AWS SQS/SNS',
            'Designed and built an event-driven email delivery platform: scheduling, templating, dispatching, tracking integrations and analytics processing',
            'Built a centralised asset storage and retrieval service integrated with multiple distributed services',
            'Wrote comprehensive unit and integration tests including full integration testing with LocalStack and Docker',
          ],
          tags: [
            '.NET 8',
            '.NET Framework 4.8',
            'C#',
            'MongoDB',
            'SQL Server',
            'Redis',
            'Docker',
            'AWS SQS/SNS',
            'AWS ECS',
            'AWS S3',
            'AWS Lambda',
            'EventBridge',
            'Terraform',
            'MassTransit',
            'CQRS',
            'xUnit',
            'Angular',
            'TypeScript',
          ],
        },
        {
          company: 'Software Mind',
          location: 'Remote',
          role: 'Software Engineer',
          start: 'Aug 2022',
          end: 'Sep 2022',
          bullets: [
            'Joined to support the migration of on-premise services to Microsoft Azure for a financial company',
            'Developed Azure Functions to support new cloud-based features and implemented API endpoints using serverless architecture',
            'Supported feature flag mechanisms and adapted legacy components to cloud-native patterns',
          ],
          tags: ['.NET', 'C#', 'Azure Functions', 'Microsoft Azure'],
        },
        {
          company: 'Onex Group',
          location: 'Częstochowa / Hybrid',
          role: 'Senior .NET Developer',
          start: 'Oct 2021',
          end: 'Jul 2022',
          bullets: [
            'Contributed to the development and maintenance of one of the largest Student Information Systems in Poland serving approximately 40 universities',
            'Delivered new features across a WinForms desktop application, WebForms student portal and WCF backend services',
            'Refactored legacy code, optimised database queries and improved overall platform performance and stability',
          ],
          tags: [
            '.NET Framework',
            'C#',
            'WinForms',
            'DevExpress',
            'WebForms',
            'Telerik',
            'WCF',
            'MS SQL Server',
          ],
        },
        {
          company: 'Onex Group',
          location: 'Częstochowa / Hybrid',
          role: '.NET Developer & Team Leader',
          start: 'Jan 2021',
          end: 'Sep 2021',
          bullets: [
            'Promoted to Team Leader for a microservices-based e-commerce platform operating in 5 European markets, leading a Scrum team of 8 engineers',
            'Led and facilitated all Scrum ceremonies; managed and prioritised the product backlog with the Product Team',
            'Coordinated the successful production launch of the new platform, resolving critical issues and overseeing data migrations',
            'Continued active backend development on payment, order and integration services',
          ],
          tags: [
            '.NET 5',
            'ASP.NET',
            'REST API',
            'Entity Framework',
            'MS SQL Server',
            'Azure Service Bus',
            'Azure Functions',
            'Azure App Service',
          ],
        },
        {
          company: 'Onex Group',
          location: 'Częstochowa',
          role: '.NET Developer',
          start: 'Jan 2020',
          end: 'Dec 2020',
          bullets: [
            'Contributed to building a new microservices-based e-commerce platform from scratch to replace a legacy system operating in 5 European markets',
            'Designed and implemented microservices for search, orders, and payments - including integrations with PayPal and PayU (BLIK one-click payments)',
            'Implemented asynchronous communication between services using Azure Service Bus',
            'Supported cloud deployment and architecture on Microsoft Azure',
          ],
          tags: [
            '.NET 5',
            'ASP.NET',
            'REST API',
            'Entity Framework',
            'MS SQL Server',
            'Azure Service Bus',
            'Azure Functions',
            'Azure App Service',
            'Angular',
            'JavaScript',
          ],
        },
        {
          company: 'Onex Group',
          location: 'Częstochowa',
          role: '.NET Developer',
          start: 'Jul 2019',
          end: 'Dec 2019',
          bullets: [
            'Worked on a back-office system supporting an e-commerce platform selling software and hardware products',
            'Developed new features (orders, product catalogue, pricing, invoicing) and maintained existing modules',
            'Investigated and resolved production issues; implemented and consumed REST APIs for system integrations',
          ],
          tags: [
            '.NET Framework 4.8',
            'ASP.NET MVC',
            'C#',
            'MS SQL Server',
            'Entity Framework',
            'REST API',
            'JavaScript',
            'jQuery',
          ],
        },
      ],
    },

    // Certificates
    certificates: {
      heading: 'Certificates',
      items: [
        {
          name: 'AWS Certified Cloud Practitioner',
          issuer: 'Amazon Web Services (AWS)',
          issued: 'Nov 2023',
          expires: 'Nov 2026',
          url: 'https://credly.com/badges/ba05fab3-b9cf-40ee-a160-c7b80b8f59e7/linked_in_profile',
        },
        {
          name: 'Professional Scrum Master I (PSM I)',
          issuer: 'Scrum.org',
          issued: 'Jun 2021',
          expires: null,
          url: 'https://scrum.org/certificates/670780',
        },
        {
          name: 'First Certificate in English (FCE B2)',
          issuer: 'Cambridge University Press & Assessment',
          issued: 'Jan 2024',
          expires: null,
          url: null,
        },
      ],
      verify: 'Verify',
    },

    // Skills
    skills: {
      heading: 'Skills',
      groups: [
        {
          label: 'Languages',
          tags: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'jQuery'],
        },
        {
          label: 'Frameworks & Libraries',
          tags: [
            '.NET 8',
            'ASP.NET Core',
            'ASP.NET MVC',
            'Entity Framework',
            'MassTransit',
            'xUnit',
            'Moq',
            'NSubstitute',
            'Angular',
          ],
        },
        {
          label: 'Cloud & Infrastructure',
          tags: [
            'AWS',
            'Microsoft Azure',
            'Docker',
            'Terraform',
            'Azure Service Bus',
            'AWS SQS/SNS',
            'LocalStack',
          ],
        },
        {
          label: 'Databases',
          tags: ['SQL Server', 'MongoDB', 'Redis'],
        },
        {
          label: 'Methodologies & Tools',
          tags: ['Microservices', 'CQRS', 'Event-driven architecture', 'REST API', 'Scrum', 'Git', 'Jira'],
        },
        {
          label: 'IDEs & Dev Tools',
          tags: ['JetBrains Rider', 'Visual Studio', 'Visual Studio Code', 'Cursor', 'SQL Server Management Studio'],
        },
        {
          label: 'AI Tools',
          tags: ['Claude', 'GitHub Copilot', 'OpenAI Codex', 'Cursor AI'],
        },
      ],
    },

    // Contact
    contact: {
      heading: 'Contact',
      intro: 'Have a question or want to work together? Feel free to reach out.',
      namePlaceholder: 'Your name',
      nameLabel: 'Name',
      emailPlaceholder: 'your@email.com',
      emailLabel: 'Email',
      subjectPlaceholder: 'Subject (optional)',
      subjectLabel: 'Subject',
      messagePlaceholder: 'Your message...',
      messageLabel: 'Message',
      submit: 'Send message',
      sending: 'Sending...',
      successTitle: 'Message sent!',
      successBody: "Thanks for reaching out. I'll get back to you as soon as possible.",
      errorTitle: 'Something went wrong.',
      errorBody: 'Please try again or send an email directly to kontakt@kamiljaworski.pl.',
    },
  },

  pl: {
    // Meta
    meta: {
      title: 'Kamil Jaworski – .NET Software Engineer',
      description:
        'Kamil Jaworski to inżynier oprogramowania specjalizujący się w .NET, C#, architekturze chmurowej i systemach rozproszonych. Częstochowa, Polska.',
      keywords:
        'programista .NET, inżynier oprogramowania .NET, C#, ASP.NET Core, ASP.NET MVC, Entity Framework, MassTransit, Angular, TypeScript, mikroserwisy, CQRS, architektura zdarzeniowa, REST API, AWS, Microsoft Azure, Docker, Terraform, SQL Server, MongoDB, Redis, Częstochowa, Polska, backend developer, architektura chmurowa, systemy rozproszone',
      ogTitle: 'Kamil Jaworski – .NET Software Engineer',
      ogDescription:
        'Specjalizuję się w .NET, architekturze chmurowej i systemach rozproszonych.',
    },

    // Nav
    nav: {
      about: 'O mnie',
      experience: 'Doświadczenie',
      certificates: 'Certyfikaty',
      skills: 'Umiejętności',
      contact: 'Kontakt',
    },

    // Hero
    hero: {
      name: 'Kamil Jaworski',
      title: '.NET Software Engineer',
      tagline:
        'Buduję skalowalne systemy backendowe z wykorzystaniem .NET i technologii chmurowych.',
    },

    // Language toggle
    lang: {
      switchTo: 'EN',
      switchToHref: '/en/',
      switchLabel: 'Switch to English',
    },

    // About
    about: {
      heading: 'O mnie',
      body: [
        'Jestem inżynierem oprogramowania z 7-letnim doświadczeniem zawodowym, specjalizującym się w programowaniu backendowym z użyciem .NET i C#. Pasjonuje mnie projektowanie i budowanie rozproszonych systemów chmurowych - od mikroserwisów po architektury sterowane zdarzeniami. Mam również praktyczne doświadczenie w tworzeniu frontendu w Angular i TypeScript.',
        'W swojej karierze pracowałem nad platformami na dużą skalę w branży turystycznej i e-commerce, uczestniczyłem w migracjach do chmury (Azure i AWS) oraz przez pewien czas prowadziłem 8-osobowy zespół, będąc jednocześnie aktywnym developerem. Zależy mi na jakości kodu, testowalności i budowaniu systemów, które są zarówno niezawodne, jak i łatwe w utrzymaniu.',
        'Poza pracą zazwyczaj eksploruję nowe technologie, rozwijam projekty poboczne lub odpoczywam na świeżym powietrzu.',
      ],
    },

    // Experience
    experience: {
      heading: 'Doświadczenie',
      present: 'Obecnie',
      entries: [
        {
          company: 'Software Mind',
          location: 'Kraków / Zdalnie',
          role: 'Software Engineer',
          start: 'Paź 2022',
          end: 'Obecnie',
          bullets: [
            'Praca nad platformą z branży turystycznej używaną przez tysiące agentów w 6 krajach, składającą się z ponad 100 mikroserwisów w środowisku hybrydowym (on-premises i AWS)',
            'Rozwijanie i utrzymanie rozproszonych mikroserwisów; refaktoryzacja serwisów legacy do serwisów chmurowych wdrożonych na AWS',
            'Implementacja asynchronicznej komunikacji z MassTransit i AWS SQS/SNS',
            'Zaprojektowanie i zbudowanie platformy do dostarczania e-maili sterowanej zdarzeniami: planowanie wysyłki, tworzenie szablonów, wysyłka, integracje z systemami śledzenia i analityka',
            'Zbudowanie centralnego serwisu do przechowywania i pobierania zasobów zintegrowanego z wieloma wewnętrznymi usługami',
            'Pisanie kompleksowych testów jednostkowych i integracyjnych, w tym pełnych testów integracyjnych z LocalStack i Docker',
          ],
          tags: [
            '.NET 8',
            '.NET Framework 4.8',
            'C#',
            'MongoDB',
            'SQL Server',
            'Redis',
            'Docker',
            'AWS SQS/SNS',
            'AWS ECS',
            'AWS S3',
            'AWS Lambda',
            'EventBridge',
            'Terraform',
            'MassTransit',
            'CQRS',
            'xUnit',
            'Angular',
            'TypeScript',
          ],
        },
        {
          company: 'Software Mind',
          location: 'Zdalnie',
          role: 'Software Engineer',
          start: 'Sie 2022',
          end: 'Wrz 2022',
          bullets: [
            'Wsparcie migracji serwisów on-premise do Microsoft Azure dla firmy z sektora finansowego',
            'Tworzenie Azure Functions wspierających nowe funkcje chmurowe oraz implementacja endpointów API z użyciem architektury serverless',
            'Wsparcie mechanizmów feature flag i adaptacja komponentów legacy do wzorców chmurowych',
          ],
          tags: ['.NET', 'C#', 'Azure Functions', 'Microsoft Azure'],
        },
        {
          company: 'Onex Group',
          location: 'Częstochowa / Hybrydowo',
          role: 'Senior .NET Developer',
          start: 'Paź 2021',
          end: 'Lip 2022',
          bullets: [
            'Udział w rozwoju i utrzymaniu jednego z największych systemów dziekanatowych w Polsce, obsługującego ok. 40 uczelni',
            'Dostarczanie nowych funkcjonalności w aplikacji desktopowej WinForms, portalu studenckim WebForms oraz serwisach backendowych WCF',
            'Refaktoryzacja kodu legacy, optymalizacja zapytań do baz danych i poprawa wydajności platformy',
          ],
          tags: [
            '.NET Framework',
            'C#',
            'WinForms',
            'DevExpress',
            'WebForms',
            'Telerik',
            'WCF',
            'MS SQL Server',
          ],
        },
        {
          company: 'Onex Group',
          location: 'Częstochowa / Hybrydowo',
          role: '.NET Developer & Team Leader',
          start: 'Sty 2021',
          end: 'Wrz 2021',
          bullets: [
            'Team Leader zespołu odpowiedzialnego za platformę e-commerce opartą na mikroserwisach, działającą na 5 rynkach europejskich; kierowanie 8-osobowym zespołem przy jednoczesnym aktywnym udziale w developmencie',
            'Prowadzenie ceremonii Scrum; zarządzanie i priorytetyzacja backlogu produktu we współpracy z zespołem produktowym',
            'Koordynacja udanego wdrożenia produkcyjnego platformy - rozwiązywanie krytycznych problemów i nadzorowanie migracji danych',
            'Aktywny udział w rozwoju backendowym serwisów płatności, zamówień i integracji',
          ],
          tags: [
            '.NET 5',
            'ASP.NET',
            'REST API',
            'Entity Framework',
            'MS SQL Server',
            'Azure Service Bus',
            'Azure Functions',
            'Azure App Service',
          ],
        },
        {
          company: 'Onex Group',
          location: 'Częstochowa',
          role: '.NET Developer',
          start: 'Sty 2020',
          end: 'Gru 2020',
          bullets: [
            'Udział w budowaniu od podstaw platformy e-commerce opartej na mikroserwisach, działającej na 5 rynkach europejskich',
            'Zaprojektowanie i implementacja mikroserwisów do wyszukiwania, zamówień i płatności - w tym integracje z PayPal i PayU (płatności BLIK one-click)',
            'Implementacja asynchronicznej komunikacji między serwisami z Azure Service Bus',
          ],
          tags: [
            '.NET 5',
            'ASP.NET',
            'REST API',
            'Entity Framework',
            'MS SQL Server',
            'Azure Service Bus',
            'Azure Functions',
            'Azure App Service',
            'Angular',
            'JavaScript',
          ],
        },
        {
          company: 'Onex Group',
          location: 'Częstochowa',
          role: '.NET Developer',
          start: 'Lip 2019',
          end: 'Gru 2019',
          bullets: [
            'Praca nad systemem back-office obsługującym platformę e-commerce sprzedającą oprogramowanie i sprzęt',
            'Tworzenie nowych funkcjonalności (zamówienia, katalog produktów, cennik, fakturowanie) i utrzymanie istniejących modułów',
            'Analiza i rozwiązywanie problemów produkcyjnych; implementacja i konsumpcja REST API',
          ],
          tags: [
            '.NET Framework 4.8',
            'ASP.NET MVC',
            'C#',
            'MS SQL Server',
            'Entity Framework',
            'REST API',
            'JavaScript',
            'jQuery',
          ],
        },
      ],
    },

    // Certificates
    certificates: {
      heading: 'Certyfikaty',
      items: [
        {
          name: 'AWS Certified Cloud Practitioner',
          issuer: 'Amazon Web Services (AWS)',
          issued: 'Lis 2023',
          expires: 'Lis 2026',
          url: 'https://credly.com/badges/ba05fab3-b9cf-40ee-a160-c7b80b8f59e7/linked_in_profile',
        },
        {
          name: 'Professional Scrum Master I (PSM I)',
          issuer: 'Scrum.org',
          issued: 'Cze 2021',
          expires: null,
          url: 'https://scrum.org/certificates/670780',
        },
        {
          name: 'First Certificate in English (FCE B2)',
          issuer: 'Cambridge University Press & Assessment',
          issued: 'Sty 2024',
          expires: null,
          url: null,
        },
      ],
      verify: 'Sprawdź',
    },

    // Skills
    skills: {
      heading: 'Umiejętności',
      groups: [
        {
          label: 'Języki',
          tags: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'jQuery'],
        },
        {
          label: 'Frameworki i biblioteki',
          tags: [
            '.NET 8',
            'ASP.NET Core',
            'ASP.NET MVC',
            'Entity Framework',
            'MassTransit',
            'xUnit',
            'Moq',
            'NSubstitute',
            'Angular',
          ],
        },
        {
          label: 'Chmura i infrastruktura',
          tags: [
            'AWS',
            'Microsoft Azure',
            'Docker',
            'Terraform',
            'Azure Service Bus',
            'AWS SQS/SNS',
            'LocalStack',
          ],
        },
        {
          label: 'Bazy danych',
          tags: ['SQL Server', 'MongoDB', 'Redis'],
        },
        {
          label: 'Metodyki i narzędzia',
          tags: ['Mikroserwisy', 'CQRS', 'Architektura zdarzeniowa', 'REST API', 'Scrum', 'Git', 'Jira'],
        },
        {
          label: 'IDE i narzędzia deweloperskie',
          tags: ['JetBrains Rider', 'Visual Studio', 'Visual Studio Code', 'Cursor', 'SQL Server Management Studio'],
        },
        {
          label: 'Narzędzia AI',
          tags: ['Claude', 'GitHub Copilot', 'OpenAI Codex', 'Cursor AI'],
        },
      ],
    },

    // Contact
    contact: {
      heading: 'Kontakt',
      intro: 'Masz pytanie lub chcesz porozmawiać o współpracy? Napisz do mnie.',
      namePlaceholder: 'Twoje imię',
      nameLabel: 'Imię i nazwisko',
      emailPlaceholder: 'twoj@email.com',
      emailLabel: 'Email',
      subjectPlaceholder: 'Temat (opcjonalnie)',
      subjectLabel: 'Temat',
      messagePlaceholder: 'Twoja wiadomość...',
      messageLabel: 'Wiadomość',
      submit: 'Wyślij wiadomość',
      sending: 'Wysyłanie...',
      successTitle: 'Wiadomość wysłana!',
      successBody: 'Dziękuję za kontakt. Odpiszę najszybciej jak to możliwe.',
      errorTitle: 'Coś poszło nie tak.',
      errorBody: 'Spróbuj ponownie lub wyślij email bezpośrednio na kontakt@kamiljaworski.pl.',
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];

export const translations = {
  en: {
    hero: {
      status: "Available for opportunities",
      greeting: "Hello, I'm Faisal 👋",
      description: "A self-taught software engineer from Saudi Arabia, specialized in building robust desktop and web applications.",
      codingSince: "Coding since 2019."
    },
    flagship: {
      title: "Flagship Product",
      productionReady: "Production Ready",
      category: "Shop Management System",
      viewWebsite: "View Website",
      proprietarySource: "Proprietary Source"
    },
    projects: {
      title: "Selected Projects",
      visit: "Visit",
      code: "Code",
      problem: "Problem:",
      solution: "Solution:",
      viewDetails: "View details",
      howItWorks: "How it works",
      benefits: "Benefits",
      moreComing: "More Coming Soon",
      moreDescription: "New projects currently in development.",
      // Projects Page specific
      pageTitle: "My Projects",
      pageDescription: "A collection of SaaS products, developer tools, and game mechanics.",
      filters: {
        all: "All",
        apps: "Apps",
        gameDev: "Game Dev",
        libraries: "Libraries"
      },
      play: "Play"
    },
    about: {
      title: "About Me",
      location: "Saudi Arabia 🇸🇦",
      codingSince: "Coding Since 2019",
      role: "Self-Taught Developer",
      intro: "Hi, I'm Faisal Almutairi, a self-taught software engineer passionate about building elegant solutions to real-world problems. I started my coding journey in 2019 and have since specialized in creating robust desktop applications, web platforms, and game development tools.",
      philosophy: "My approach combines technical precision with user-centered design. Whether it's a SaaS platform like khabeer or Unity tools for game developers, I focus on creating software that's both powerful and intuitive.",
      github: "GitHub",
      getInTouch: "Get in Touch",
      skillsTitle: "Skills & Technologies",
      timelineTitle: "Journey Timeline",
      philosophyTitle: "Development Philosophy",
      ctaTitle: "Let's Build Something Together",
      ctaDescription: "I'm currently open to freelance opportunities and collaborations. Whether you need a custom desktop app, web platform, or game development tool, let's discuss how we can work together.",
      contactMe: "Contact Me",
      viewProjects: "View Projects",
      categories: {
        frontend: "Frontend",
        backend: "Backend & Database",
        gameDev: "Game Development",
        tools: "Tools & Others"
      },
      values: {
        quality: {
          title: "Code Quality First",
          desc: "I believe in writing clean, maintainable code that's built to last. Every project is an opportunity to learn and improve."
        },
        user: {
          title: "User-Centered Design",
          desc: "Technology should serve people. I focus on creating intuitive experiences that solve real problems."
        },
        learning: {
          title: "Continuous Learning",
          desc: "The tech landscape evolves rapidly. I stay curious and embrace new tools and methodologies to deliver better solutions."
        }
      },
      timeline: {
        y2019: {
          title: "Started Coding Journey",
          desc: "Began self-teaching programming with C# and Unity game development."
        },
        y2020: {
          title: "Unity Game Development",
          desc: "Built Seukweeo platformer game and created multiple Unity tools including Procedural ADS and recoil systems."
        },
        y2022: {
          title: "Desktop Applications",
          desc: "Developed Passwordy (password manager) using C# and .NET, focusing on security and data management."
        },
        y2023: {
          title: "Web & Full-Stack",
          desc: "Transitioned to React, TypeScript, and Electron. Built web applications (DevLocker) and published React components to NPM."
        },
        y2024: {
          title: "khabeer & Production Apps",
          desc: "Launched khabeer shop management system with offline-first architecture, Firebase sync, and professional features."
        }
      }
    },
    notFound: {
      title: "Page Not Found",
      message: "But we found your semicolon. ;",
      goHome: "Go Back Home"
    },
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact"
    },
    footer: {
      quote: "Coding is not just about solving problems; it is about building the digital foundation for a future limited only by our imagination.",
      sitemap: "Sitemap",
      contact: "Contact",
      builtWith: "Built with TS + React",
      location: "Mecca, Saudi Arabia",
      rights: "Faisal.Dev"
    },
    projectsData: {
      reparo: {
        description: "A professional-grade Shop Management System engineered for mobile phone repair experts.",
        longDescription: "khabeer moves repair shops away from messy paper notebooks into a digital environment. It combines POS, Repair Tracking, and Inventory Management into one offline-first application.",
        features: [
          "Offline-First (Works without Wi-Fi)",
          "WhatsApp Automated Messages",
          "Inventory & Part Tracking",
          "Smart Ticketing System"
        ]
      },
      devlocker: {
        summary: "Local-first developer code snippet manager.",
        problem: "Developers often lose reusable code across files, notes, and scattered projects.",
        solution: "A single Local workspace to store, organize, and quickly search code snippets.",
        highlights: [
          "Local-first storage",
          "Monaco-powered syntax highlighting",
          "Fast local search"
        ],
        description: "A developer-focused code snippet and project organizer to keep your local workflow clean.",
        howItWorks: [
          "Snippets are stored locally on the device",
          "Code editor powered by Monaco",
          "State managed efficiently for fast access"
        ],
        benefits: [
          "No dependency on cloud services",
          "Instant access to snippets",
          "Clean and focused developer UI"
        ]
      },
      passwordy: {
        summary: "Secure offline password manager.",
        problem: "Cloud-based password managers increase exposure and reduce user control.",
        solution: "A fully offline password vault encrypted locally using AES-256.",
        highlights: [
          "AES-256 encryption",
          "Fully offline storage",
          "Auto-lock protection"
        ],
        description: "A secure, offline password manager built to store credentials safely on your local machine.",
        howItWorks: [
          "Creates an encrypted vault file on the PC",
          "Master password encrypts and decrypts data",
          "Vault remains encrypted when locked"
        ],
        benefits: [
          "Maximum privacy",
          "No internet required",
          "Lightweight and secure"
        ]
      },
      easyshot: {
        summary: "Fast screenshot and OCR tool.",
        problem: "Most screenshot tools are slow, bloated, or lack OCR functionality.",
        solution: "A lightweight capture tool with built-in OCR powered by Tesseract.",
        highlights: [
          "Two-click screenshots",
          "Image-to-text OCR",
          "Instant editing"
        ],
        description: "offline password manager app that helps you keep your accounts safe and secure.",
        howItWorks: [
          "User selects screen area",
          "Screenshot is captured instantly",
          "OCR extracts text using Tesseract"
        ],
        benefits: [
          "Faster workflows",
          "Accurate text extraction",
          "Minimal UI"
        ]
      },
      seukweeo: {
        summary: "Procedural 2D platformer.",
        problem: "Static level design limits replayability in platformer games.",
        solution: "Procedural generation creates unique levels on every run.",
        highlights: [
          "Procedural levels",
          "Custom physics",
          "Built in 7 days"
        ],
        description: "A complete 2D platformer game developed in one week. Features custom physics and level design.",
        howItWorks: [
          "Levels generated at runtime",
          "Physics tuned for responsive movement",
          "Difficulty scales dynamically"
        ],
        benefits: [
          "High replay value",
          "Skill-based gameplay",
          "Fast-paced progression"
        ]
      },
      "procedural-ads": {
        description: "A mathematical approach to Aim Down Sights (ADS) in FPS games for smoother weapon handling."
      },
      "recoil-system": {
        description: "A lightweight, customizable recoil pattern system for Unity shooters."
      },
      "text-loop": {
        description: "A React component for smooth text looping animations, published for the community."
      }
    }
  },
  ar: {
    hero: {
      status: "متاح للفرص الوظيفية",
      greeting: "مرحباً، أنا فيصل 👋",
      description: "مهندس برمجيات  من المملكة العربية السعودية، متخصص في بناء تطبيقات سطح المكتب والويب القوية.",
      codingSince: "مبرمج منذ 2019."
    },
    flagship: {
      title: "المنتج الرئيسي",
      productionReady: "جاهز للإنتاج",
      category: "نظام إدارة المتاجر",
      viewWebsite: "زيارة الموقع",
      proprietarySource: "مصدر خاص"
    },
    projects: {
      title: "مشاريع مختارة",
      visit: "زيارة",
      code: "كود",
      problem: "المشكلة:",
      solution: "الحل:",
      viewDetails: "عرض التفاصيل",
      howItWorks: "كيف يعمل",
      benefits: "الفوائد",
      moreComing: "المزيد قادم قريباً",
      moreDescription: "مشاريع جديدة قيد التطوير حالياً.",
      // Projects Page specific
      pageTitle: "مشاريعي",
      pageDescription: "مجموعة من منتجات SaaS، أدوات المطورين، وآليات الألعاب.",
      filters: {
        all: "الكل",
        apps: "تطبيقات",
        gameDev: "تطوير ألعاب",
        libraries: "مكتبات"
      },
      play: "العب"
    },
    about: {
      title: "عنّي",
      location: "المملكة العربية السعودية 🇸🇦",
      codingSince: "أكتب كود منذ 2019",
      role: "مطور مستقل",
      intro: "مرحباً، أنا فيصل المطيري، مهندس برمجيات  شغوف ببناء حلول أنيقة لمشاكل العالم الحقيقي. بدأت رحلتي في البرمجة عام 2019 ومنذ ذلك الحين تخصصت في إنشاء تطبيقات سطح مكتب قوية، ومنصات ويب، وأدوات تطوير ألعاب.",
      philosophy: "نهجي يجمع بين الدقة التقنية والتصميم الذي يركز على المستخدم. سواء كانت منصة SaaS مثل khabeer أو أدوات Unity لمطوري الألعاب، أركز على إنشاء برمجيات قوية وسهلة الاستخدام في آن واحد.",
      github: "GitHub",
      getInTouch: "تواصل معي",
      skillsTitle: "المهارات والتقنيات",
      timelineTitle: "رحلتي",
      philosophyTitle: "فلسفة التطوير",
      ctaTitle: "لنبدأ العمل معاً",
      ctaDescription: "أنا متاح حالياً للعمل الحر والتعاون. سواء كنت بحاجة إلى تطبيق سطح مكتب مخصص، منصة ويب، أو أداة تطوير ألعاب، لنناقش كيف يمكننا العمل معاً.",
      contactMe: "تواصل معي",
      viewProjects: "شاهد المشاريع",
      categories: {
        frontend: "الواجهة الأمامية",
        backend: "الخلفية وقواعد البيانات",
        gameDev: "تطوير الألعاب",
        tools: "أدوات وأخرى"
      },
      values: {
        quality: {
          title: "جودة الكود أولاً",
          desc: "أؤمن بكتابة كود نظيف وقابل للصيانة ومبني ليدوم. كل مشروع هو فرصة للتعلم والتحسين."
        },
        user: {
          title: "تصميم يركز على المستخدم",
          desc: "يجب أن تخدم التكنولوجيا الناس. أركز على خلق تجارب بديهية تحل مشاكل حقيقية."
        },
        learning: {
          title: "التعلم المستمر",
          desc: "تتطور التقنية بسرعة. أبقى فضولياً وأتبنى أدوات ومنهجيات جديدة لتقديم حلول أفضل."
        }
      },
      timeline: {
        y2019: {
          title: "بداية الرحلة",
          desc: "بدأت تعلم البرمجة ذاتياً باستخدام C# وتطوير الألعاب بمحرك Unity."
        },
        y2020: {
          title: "تطوير الألعاب بـ Unity",
          desc: "بنيت لعبة المنصات Seukweeo وأنشأت عدة أدوات لـ Unity بما في ذلك أنظمة Aim Down Sights والارتداد."
        },
        y2022: {
          title: "تطبيقات سطح المكتب",
          desc: "طورت Passwordy (مدير كلمات مرور) باستخدام C# و .NET، مع التركيز على الأمان وإدارة البيانات."
        },
        y2023: {
          title: "الويب (Full-Stack)",
          desc: "انتقلت إلى React و TypeScript و Electron. بنيت تطبيقات ويب (DevLocker) ونشرت مكونات React على NPM."
        },
        y2024: {
          title: "khabeer وتطبيقات الإنتاج",
          desc: "أطلقت نظام khabeer لإدارة المتاجر مع بنية Offline-First ومزامنة Firebase وميزات احترافية."
        }
      }
    },
    notFound: {
      title: "الصفحة غير موجودة",
      message: "لكننا وجدنا الفاصلة المنقوطة الخاصة بك. ;",
      goHome: "العودة للرئيسية"
    },
    nav: {
      home: "الرئيسية",
      projects: "المشاريع",
      about: "عني",
      contact: "تواصل معي"
    },
    footer: {
      quote: "البرمجة ليست مجرد حل للمشكلات؛ بل هي بناء الأساس الرقمي لمستقبل لا يحده إلا خيالنا.",
      sitemap: "خريطة الموقع",
      contact: "تواصل معي",
      builtWith: "مبني بـ TS + React",
      location: "مكة المكرمة، المملكة العربية السعودية",
      rights: "Faisal.Dev"
    },
    projectsData: {
      reparo: {
        description: "نظام إدارة متاجر احترافي مصمم لخبراء إصلاح الهواتف المحمولة.",
        longDescription: "ينقل خبير محلات الصيانة من الدفاتر الورقية الفوضوية إلى بيئة رقمية منظمة. يجمع بين نقاط البيع، تتبع الإصلاحات، وإدارة المخزون في تطبيق واحد يعمل دون اتصال بالإنترنت.",
        features: [
          "يعمل دون إنترنت (Offline-First)",
          "رسائل واتساب تلقائية",
          "تتبع المخزون وقطع الغيار",
          "نظام تذاكر ذكي"
        ]
      },
      devlocker: {
        summary: "مدير اكواد برمجية للمطورين يعمل محلياً.",
        problem: "غالباً ما يفقد المطورون الأكواد القابلة لإعادة الاستخدام بين الملفات والملاحظات والمشاريع المتناثرة.",
        solution: "مساحة عمل محلية واحدة لتخزين وتنظيم والبحث بسرعة في الاكواد البرمجية.",
        highlights: [
          "تخزين محلي أولاً",
          "تلوين اكواد بدعم من Monaco",
          "بحث محلي سريع"
        ],
        description: "منظم اكواد برمجية ومشاريع يركز على المطورين للحفاظ على نظافة سير عملك المحلي.",
        howItWorks: [
          "يتم تخزين الاكواد محلياً على الجهاز",
          "محرر الأكواد مدعوم بمحرك Monaco",
          "يتم إدارة الحالة بكفاءة للوصول السريع"
        ],
        benefits: [
          "لا يعتمد على الخدمات السحابية",
          "وصول فوري للقصاصات",
          "واجهة مستخدم بسيطة"
        ]
      },
      passwordy: {
        summary: "مدير كلمات مرور آمن يعمل دون اتصال.",
        problem: "مديرو كلمات المرور المستندة إلى السحابة تزيد من المخاطر وتقلل من تحكم المستخدم.",
        solution: "خزنة كلمات مرور غير متصلة بالإنترنت بالكامل ومشفرة محلياً باستخدام AES-256.",
        highlights: [
          "تشفير AES-256",
          "تخزين غير متصل بالكامل",
          "حماية القفل التلقائي"
        ],
        description: "مدير كلمات مرور آمن وغير متصل بالإنترنت مصمم لتخزين بيانات الاعتماد بأمان على جهازك المحلي.",
        howItWorks: [
          "ينشئ ملف خزنة مشفر على الكمبيوتر",
          "كلمة المرور الرئيسية تشفر وتفك تشفير البيانات",
          "تظل الخزنة مشفرة عند القفل"
        ],
        benefits: [
          "خصوصية قصوى",
          "لا يتطلب إنترنت",
          "خفيف وآمن"
        ]
      },
      easyshot: {
        summary: "أداة لقطة شاشة سريعة مع استخراج النصوص (OCR).",
        problem: "معظم أدوات لقطة الشاشة بطيئة، معقدة، أو تفتقر إلى وظيفة استخراج النصوص.",
        solution: "أداة التقاط خفيفة مع OCR مدمج مدعوم بـ Tesseract.",
        highlights: [
          "لقطات شاشة بنقرتين",
          "استخراج النصوص من الصور (OCR)",
          "تعديل فوري"
        ],
        description: "تتيح لك هذه الأداة التقاط لقطات شاشة سريعة وسهلة مع استخراج النصوص (OCR).",
        howItWorks: [
          "يحدد المستخدم منطقة الشاشة",
          "يتم التقاط لقطة الشاشة فوراً",
          "يقوم OCR باستخراج النص باستخدام Tesseract"
        ],
        benefits: [
          "سير عمل أسرع",
          "استخراج دقيق للنص",
          "واجهة مستخدم بسيطة"
        ]
      },
      seukweeo: {
        summary: "لعبة منصات ثنائية الأبعاد إجرائية التوليد.",
        problem: "تصميم المستويات الثابت يحد من إمكانية إعادة اللعب في ألعاب المنصات.",
        solution: "التوليد الإجرائي ينشئ مستويات فريدة في كل مرة تشغيل.",
        highlights: [
          "مستويات إجرائية",
          "فيزياء مخصصة",
          "بنيت في 7 أيام"
        ],
        description: "لعبة منصات ثنائية الأبعاد كاملة تم تطويرها في أسبوع واحد. تتميز بفيزياء وتصميم مستويات مخصصين.",
        howItWorks: [
          "يتم توليد المستويات عند التشغيل",
          "تم ضبط الفيزياء لحركة استجابة سريعة",
          "تتدرج الصعوبة بشكل ديناميكي"
        ],
        benefits: [
          "قيمة إعادة لعب عالية",
          "لعب يعتمد على المهارة",
          "تقدم سريع الوتيرة"
        ]
      },
      "procedural-ads": {
        description: "نهج رياضي لـ Aim Down Sights (ADS) في ألعاب التصويب من منظور الشخص الأول للحصول على تعامل أكثر سلاسة مع السلاح."
      },
      "recoil-system": {
        description: "نظام نمط ارتداد خفيف وقابل للتخصيص لألعاب التصويب في Unity."
      },
      "text-loop": {
        description: "مكون React لرسوم متحركة سلسة لتكرار النص، تم نشره للمجتمع."
      }
    }
  }
};

export type Language = 'en' | 'ar';
export type TranslationKey = keyof typeof translations.en;

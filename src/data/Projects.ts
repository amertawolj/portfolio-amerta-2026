export type Project = {
  id: string;
  title: string;
  description: string;
  category: "uiux" | "graphic" | "other";
  thumbnail: string;
  year: string;
  images: string[];
  tools: string[];
  role: string;
  prototypeUrl?: string;
  prototypeUrl2?: string;
  projectUrl?: string;
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Panenin",
    description:
      "Panenin is a B2B mobile app designed to empower local farmers by digitalizing the agricultural supply chain. As my first-ever UI/UX project built with my friends (Azza, Naomi, Melvin, and Gifta), it holds a special place in my journey. Though far from perfect and filled with areas to improve, creating this app with my team taught me the core principles of empathy-driven design and how technology can be used to solve real-world social issues.",
    category: "uiux",
    thumbnail: "/projects/project-1/1.png",
    year: "2025",
    images: [
      "/projects/project-1/1.png",
      "/projects/project-1/15.png",
      "/projects/project-1/17.png",
      "/projects/project-1/18.png",
      "/projects/project-1/19.png",
      "/projects/project-1/20.png",
      "/projects/project-1/21.png",
    ],
    tools: ["Figma", "Very First Project:3"],
    role: "UI/UX Designer",
    prototypeUrl: "https://www.figma.com/proto/zkbd2ADxcV4EZCZqqKzCrF/PANENin?node-id=407-347&t=a2HSXBjCr54Koz4e-1",
  },

  {
    id: "project-2",
    title: "TrailIn",
    description:
      "Driven by user research and the alarming rate of hiking accidents in Indonesia, TrailIn is a UI/UX conceptual mobile app dedicated to making mountain tourism safer and more accessible. Whether you are a first-time hiker or an experienced adventurer, TrailIn serves as your ultimate digital companion. The platform offers centralized trail information (including local cultural insights), an integrated booking system for tickets and local guides, an active community hub, and a lifesaver feature: offline maps with real-time group tracking to ensure no hiker gets left behind. Developed alongside my friends, Azza and Melvin, this project successfully won 1st Place and Best Presentation at the 2025 SEVENT National UI/UX Competition hosted by Telkom University Purwokerto.",
    category: "uiux",
    thumbnail: "/thumbnails/trailin.png",
    year: "2025",
    images: [
      "/projects/project-2/1.png",
      "/projects/project-2/2.png",
      "/projects/project-2/3.png",
      "/projects/project-2/4.png",
      "/projects/project-2/5.png",
      "/projects/project-2/6.png",
      "/projects/project-2/7.png",
      "/projects/project-2/8.png",
      "/projects/project-2/9.png",
      "/projects/project-2/10.png",
      "/projects/project-2/11.png",
    ],
    tools: ["Figma", "Figjam", "Indonesia Tourism"],
    role: "UX Researcher, UI Designer, Mobile",
    prototypeUrl: "https://www.figma.com/proto/B19QvUGLKnlmQnMfWlUChB/UI-UX---TrailIn?node-id=1-3&t=pe7l0RWkHFKclKf5-1",
  },

  {
    id: "project-3",
    title: "PilahIn",
    description:
      "Inspired by the critical waste management crisis in Indonesia, Pilahin is a gamified mobile app designed to turn waste segregation into a rewarding habit. Backed by user research, the app utilizes AI technology to help users identify and sort trash effortlessly. It features routine and large-scale waste pick-up services, a local TPS locator, and an upcycling community hub. To drive behavioral change, Pilahin rewards users with coins for every eco-friendly activity, redeemable for household essentials like electricity tokens and food vouchers. Designed in collaboration with my friends, Azza and Melvin, this project proudly achieved 4th Place at the 2026 National UI/UX Competition by Prog{r}amming SISO Prasetiya Mulya University.",
    category: "uiux",
    thumbnail: "/thumbnails/pilahin.png",
    year: "2026",
    images: [
      "/projects/project-3/1.png",
      "/projects/project-3/2.png",
      "/projects/project-3/3.png",
      "/projects/project-3/4.png",
      "/projects/project-3/5.png",
      "/projects/project-3/6.png",
      "/projects/project-3/7.png",
      "/projects/project-3/8.png",
      "/projects/project-3/9.png",
      "/projects/project-3/10.png",
      "/projects/project-3/11.png",
      "/projects/project-3/12.png",
      "/projects/project-3/13.png",
    ],
    tools: ["Figma", "FigJam"],
    role: "UX Researcher, UI Designer, Mobile, Sustainability",
    prototypeUrl: "https://www.figma.com/proto/58hqQney7NyWrSf0hKZlnR/UI-UX---PilahIn?node-id=1-2&t=PT8t3DwHqKfAtDc6-1",
  },

  {
    id: "project-4",
    title: "TitipIn",
    description:
      "Driven by user research on campus lifestyle challenges, TitipIn is a mobile app concept that digitizes food ordering and peer-to-peer delivery within the university ecosystem. Designed to tackle students' limited break times and the unpredictable schedules of local food stalls, TitipIn allows students to act as personal shoppers (jastip) for their peers. By centralizing menu information and operating hours, the app not only saves students time but also empowers local UMKM around campus by boosting their visibility and sales. Designed in collaboration with my friends, Nisa and Ziza, this project successfully won 2nd Place at National UI/UX Competition Dies Natalis HMIF Universitas Majalengka 2026.",
    category: "uiux",
    thumbnail: "/thumbnails/titipin.png",
    year: "2026",
    images: [
      "/projects/project-4/1.png",
      "/projects/project-4/2.png",
      "/projects/project-4/3.png",
      "/projects/project-4/4.png",
      "/projects/project-4/5.png",
      "/projects/project-4/6.png",
      "/projects/project-4/7.png",
      "/projects/project-4/8.png",
      "/projects/project-4/9.png",
      "/projects/project-4/10.png",
      "/projects/project-4/11.png",
      "/projects/project-4/12.png",
    ],
    tools: ["Figma", "FigJam"],
    role: "UI Designer, Mobile, UMKM Empowerment",
    prototypeUrl: "https://www.figma.com/design/7oZmRwqo3iFgluxTTGRrYH/UI-UX---Unma?node-id=5-34&t=TsLCqelYfFEZpwoD-1",
  },

  {
    id: "project-5",
    title: "Universitas Ciputra Web Redesign",
    description:
      "Created for the Inspirathink National UI/UX Competition, this project is a complete revamp of Universitas Ciputra’s official website. Alongside my team, Nisa and Ziza, we analyzed the existing platform, pinpointed its current usability flaws, and conducted targeted user research to gather valuable user insights. Transforming these insights into design solutions, we successfully redesigned the website to be more intuitive, user-friendly, and visually engaging. Our collaborative effort proudly achieved 1st Place at the 2026 Inspirathink National UI/UX Competition by Universitas Ciputra.",
    category: "uiux",
    thumbnail: "/thumbnails/uco.png",
    year: "2026",
    images: [
      "/projects/project-5/1.png",
      "/projects/project-5/2.png",
      "/projects/project-5/3.png",
      "/projects/project-5/4.png",
      "/projects/project-5/5.png",
      "/projects/project-5/6.png",
      "/projects/project-5/7.png",
      "/projects/project-5/8.png",
      "/projects/project-5/9.png",
      "/projects/project-5/10.png",
      "/projects/project-5/11.png",
      "/projects/project-5/12.png",
    ],
    tools: ["Figma", "FigJam"],
    role: "UX Researcher, UI Designer, Mobile, Web",
    prototypeUrl: "https://www.figma.com/design/7lPVte6UCPPDIIGMFWODjM/UI-UX---UC-Web?node-id=1-3&t=AJBwoIGfUK1qSWuo-1",
    prototypeUrl2: "https://www.figma.com/proto/7lPVte6UCPPDIIGMFWODjM/UI-UX---UC-Web?node-id=25-2&t=AJBwoIGfUK1qSWuo-1",
  },

  {
    id: "project-6",
    title: "LockIn",
    description:
      "In an era where doomscrolling and brainrot have significantly shortened the younger generation's attention span, LockIn steps in as an AI-powered solution. Built upon extensive user research, LockIn is a mobile app designed to help youngsters study effectively by turning heavy study materials into bite-sized summaries, flashcards, quizzes, and visuals. The app features an AI Mentor that adapts to the user daily energy levels and utilizes a unique gacha system to make choosing daily study topics fun and unpredictable. Co-designed with Azza and Melvin, this innovative concept made it as a National Finalist at UGM 2026 Find IT! National UX Competition.",
    category: "uiux",
    thumbnail: "/thumbnails/lockin.png",
    year: "2026",
    images: [
      "/projects/project-6/1.png",
      "/projects/project-6/2.png",
      "/projects/project-6/3.png",
      "/projects/project-6/4.png",
      "/projects/project-6/5.png",
      "/projects/project-6/6.png",
      "/projects/project-6/7.png",
      "/projects/project-6/8.png",
      "/projects/project-6/9.png",
      "/projects/project-6/10.png",
      "/projects/project-6/11.png",
      "/projects/project-6/12.png",
      "/projects/project-6/13.png",
    ],
    tools: ["Figma", "FigJam"],
    role: "UX Researcher, UI Designer, Mobile, AI Powered App",
    prototypeUrl: "https://www.figma.com/proto/mYLXq5XkafQPf0z8EGy5X7/UI-UX---LockIn?node-id=0-1&t=RL9rxIGqwIglfT1r-1",
  },

  {
    id: "project-8",
    title: "My Design in AIESEC in Bandung",
    description: "Series of event posters for an indie music festival.",
    category: "graphic",
    thumbnail: "/thumbnails/placeholder.jpg",
    year: "2024-2025",
    images: ["/projects/project-4/1.jpg"],
    tools: ["Photoshop", "Illustrator"],
    role: "Graphic Designer",
  },

  {
    id: "project-9",
    title: "My Design in HMIF ITB",
    description: "Series of event posters for an indie music festival.",
    category: "graphic",
    thumbnail: "/thumbnails/placeholder.jpg",
    year: "2025-2026",
    images: ["/projects/project-4/1.jpg"],
    tools: ["Photoshop", "Illustrator"],
    role: "Graphic Designer",
  },

  {
    id: "project-10",
    title: "My Design in IMPACT ITB 2025",
    description: "Series of event posters for an indie music festival.",
    category: "graphic",
    thumbnail: "/thumbnails/placeholder.jpg",
    year: "2025",
    images: ["/projects/project-4/1.jpg"],
    tools: ["Photoshop", "Illustrator"],
    role: "Graphic Designer",
  },

  {
    id: "project-11",
    title: "Panenin Mobile App",
    description: "Very first mobile app project i've done with my friends for college assignment.",
    category: "other",
    thumbnail: "/projects/project-1/1.png",
    year: "2025",
    images: ["/projects/project-1/1.png"],
    tools: ["Flutter"],
    role: "Full Stack Dev",
    projectUrl: "https://github.com/amertawolj/prd-panenin.git",
  },

  {
    id: "project-12",
    title: "Plugndd Front End Web",
    description: "Front end website for PLUGNN Brand's DNA i've done with my teamgit .",
    category: "other",
    thumbnail: "/thumbnails/plugndd.png",
    year: "2026",
    images: ["/thumbnails/plugndd.png"],
    tools: ["NextJS"],
    role: "Front End Dev",
    projectUrl: "https://plugndd.com/dna",
  },

  {
    id: "project-13",
    title: "SIMP (Sistem Informasi Monitoring Produksi) Desktop App",
    description: "Desktop application for DRPL college assignment i've done with my friends.",
    category: "other",
    thumbnail: "/thumbnails/simp.png",
    year: "2026",
    images: ["/thumbnails/simp.png"],
    tools: ["Java"],
    role: "Develop File Export Feature",
    projectUrl: "https://github.com/meleppz/IF2050-2026-K02-G07-SIMP.git",
  },
];

export const profile = {
  name: "Wa Ode Amerta Lambelu Jamaluddin",
  role: "UI/UX Designer",
  place: "Earth (Bandung)",
  bio: "I'm a second-year student majoring in Information System and Technology at ITB. I'm passionate about how fast technology evolves and how it can bring positive impact through innovation. Currently, I'm developing my skills in UI/UX design and software engineering, aiming to create user-centered and visually engaging digital experiences.",
  photo: "/about/photo.png",
  email: "hello@amerta.design",
  linkedin: "www.linkedin.com/in/wa-ode-amerta-lambelu-jamaluddin",
  instagram: "https://instagram.com/waodeamertalj",
  tools: [
    { name: "Figma", icon: "/icons/figma.png" },
    { name: "Next.js", icon: "/icons/next.png" },
    { name: "Canva", icon: "/icons/canva.png" },
    { name: "Git", icon: "/icons/git.png" },
  ],
};

export type Award = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  certificate: string;
};

export const awards: Award[] = [
  {
    id: "award-1",
    title: "1st Place National UI/UX Competition",
    issuer: "Telkom University Purwokerto",
    year: "2025",
    certificate: "/certificates/award-1.jfif",
  },
  {
    id: "award-2",
    title: "4th Place National UI/UX Competition",
    issuer: "Prog{r}amming SISO Prasetiya Mulya University",
    year: "2026",
    certificate: "/certificates/award-2.jfif",
  },
  {
    id: "award-3",
    title: "1st Place National Web Redesign Competition",
    issuer: "Inspirathink, Universitas Ciputra",
    year: "2026",
    certificate: "/certificates/award-3.jfif",
  },
  {
    id: "award-4",
    title: "2nd Place National UI/UX Competition",
    issuer: "Dies Natalis HMIF Universitas Majalengka",
    year: "2026",
    certificate: "/certificates/award-4.jfif",
  },
  {
    id: "award-5",
    title: "Finalist National UX Competition",
    issuer: "Find IT! UGM",
    year: "2026",
    certificate: "/certificates/award-5.png",
  },
];
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
  pitchdeckUrl?: string;
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Panenin",
    description:
      "Panenin is a B2B mobile app designed to empower local farmers by digitalizing the agricultural supply chain. As my first-ever UI/UX project, it holds a special place in my journey. Though far from perfect and filled with areas to improve, creating this app with my team taught me the core principles of empathy-driven design and how technology can be used to solve real-world social issues.",
    category: "uiux",
    thumbnail: "/thumbnails/placeholder.jpg",
    year: "2025",
    images: [
      "/projects/project-1/1.jpg",
      "/projects/project-1/2.jpg",
      "/projects/project-1/3.jpg",
    ],
    tools: ["Figma", "Very First Project:3"],
    role: "UI/UX Designer",
    prototypeUrl: "https://figma.com",
  },

  {
    id: "project-2",
    title: "TrailIn",
    description:
      "Driven by user research and the alarming rate of hiking accidents in Indonesia, TrailIn is a UI/UX conceptual mobile app dedicated to making mountain tourism safer and more accessible. Whether you are a first-time hiker or an experienced adventurer, TrailIn serves as your ultimate digital companion. The platform offers centralized trail information (including local cultural insights), an integrated booking system for tickets and local guides, an active community hub, and a lifesaver feature: offline maps with real-time group tracking to ensure no hiker gets left behind. Developed alongside my friends, Azza and Melvin, this project successfully won 1st Place and Best Presentation at the 2025 SEVENT National UI/UX Competition hosted by Telkom University Purwokerto.",
    category: "uiux",
    thumbnail: "/thumbnails/placeholder.jpg",
    year: "2025",
    images: [
      "/projects/project-2/1.jpg",
      "/projects/project-2/2.jpg",
    ],
    tools: ["Figma", "Indonesi Tourism"],
    role: "UX Researcher, UI Designer",
    prototypeUrl: "https://figma.com",
    pitchdeckUrl: "https://figma.com",
  },

  {
    id: "project-3",
    title: "PilahIn",
    description:
      "Inspired by the critical waste management crisis in Indonesia, Pilahin is a gamified mobile app designed to turn waste segregation into a rewarding habit. Backed by user research, the app utilizes AI technology to help users identify and sort trash effortlessly. It features routine and large-scale waste pick-up services, a local TPS locator, and an upcycling community hub. To drive behavioral change, Pilahin rewards users with coins for every eco-friendly activity, redeemable for household essentials like electricity tokens and food vouchers. Designed in collaboration with my friends, Azza and Melvin, this project proudly achieved 4th Place at the 2026 National UI/UX Competition by Prog{r}amming SISO Prasetiya Mulya University.",
    category: "uiux",
    thumbnail: "/thumbnails/placeholder.jpg",
    year: "2026",
    images: [
      "/projects/project-2/1.jpg",
      "/projects/project-2/2.jpg",
    ],
    tools: ["Figma", "FigJam"],
    role: "UX Researcher, UI Designer",
    prototypeUrl: "https://figma.com",
    pitchdeckUrl: "https://figma.com",
  },

  {
    id: "project-4",
    title: "TitipIn",
    description:
      "Driven by user research on campus lifestyle challenges, TitipIn is a mobile app concept that digitizes food ordering and peer-to-peer delivery within the university ecosystem. Designed to tackle students' limited break times and the unpredictable schedules of local food stalls, TitipIn allows students to act as personal shoppers (jastip) for their peers. By centralizing menu information and operating hours, the app not only saves students time but also empowers local UMKM around campus by boosting their visibility and sales. Designed in collaboration with my friends, Nisa and Ziza, this project successfully won 2nd Place at National UI/UX Competition Dies Natalis HMIF Universitas Majalengka 2026.",
    category: "uiux",
    thumbnail: "/thumbnails/placeholder.jpg",
    year: "2026",
    images: [
      "/projects/project-2/1.jpg",
      "/projects/project-2/2.jpg",
    ],
    tools: ["Figma", "FigJam"],
    role: "UI Designer",
    prototypeUrl: "https://figma.com",
    pitchdeckUrl: "https://figma.com",
  },

  {
    id: "project-5",
    title: "Universitas Ciputra Web Redesign",
    description:
      "Created for the Inspirathink National UI/UX Competition, this project is a complete revamp of Universitas Ciputra’s official website. Alongside my team, Nisa and Ziza, we analyzed the existing platform, pinpointed its current usability flaws, and conducted targeted user research to gather valuable user insights. Transforming these insights into design solutions, we successfully redesigned the website to be more intuitive, user-friendly, and visually engaging. Our collaborative effort proudly achieved 1st Place at the 2026 Inspirathink National UI/UX Competition by Universitas Ciputra.",
    category: "uiux",
    thumbnail: "/thumbnails/placeholder.jpg",
    year: "2026",
    images: [
      "/projects/project-2/1.jpg",
      "/projects/project-2/2.jpg",
    ],
    tools: ["Figma", "FigJam"],
    role: "UX Researcher, UI Designer",
    prototypeUrl: "https://figma.com",
    pitchdeckUrl: "https://figma.com",
  },

  {
    id: "project-6",
    title: "LockIn",
    description:
      "In an era where doomscrolling and brainrot have significantly shortened the younger generation's attention span, LockIn steps in as an AI-powered solution. Built upon extensive user research, LockIn is a mobile app designed to help youngsters study effectively by turning heavy study materials into bite-sized summaries, flashcards, quizzes, and visuals. The app features an AI Mentor that adapts to the user daily energy levels and utilizes a unique gacha system to make choosing daily study topics fun and unpredictable. Co-designed with Azza and Melvin, this innovative concept made it as a National Finalist at UGM 2026 Find IT! National UX Competition.",
    category: "uiux",
    thumbnail: "/thumbnails/placeholder.jpg",
    year: "2026",
    images: [
      "/projects/project-2/1.jpg",
      "/projects/project-2/2.jpg",
    ],
    tools: ["Figma", "FigJam"],
    role: "UX Researcher, UI Designer",
    prototypeUrl: "https://figma.com",
    pitchdeckUrl: "https://figma.com",
  },

  {
    id: "project-7",
    title: "Sistem Informasi Manajemen Produksi",
    description:
      "Developed as a Software Engineering foundational project, SIMP is a desktop-based production monitoring system designed for modern enterprise environments. The project focuses on creating a clean UI/UX that streamlines complex corporate data into actionable insights. The application features an interactive data visualization dashboard, centralized product catalogs, structured production input forms, and automated reporting functionality with instant export options to PDF and XLSX formats.",
    category: "uiux",
    thumbnail: "/thumbnails/placeholder.jpg",
    year: "2026",
    images: [
      "/projects/project-2/1.jpg",
      "/projects/project-2/2.jpg",
    ],
    tools: ["Figma", "FigJam"],
    role: "UX Researcher, UI Designer",
    prototypeUrl: "https://figma.com",
    pitchdeckUrl: "https://figma.com",
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
    year: "2025",
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
    description: "Collection of digital illustrations made for fun.",
    category: "other",
    thumbnail: "/thumbnails/placeholder.jpg",
    year: "2023",
    images: ["/projects/project-5/1.jpg"],
    tools: ["Procreate", "Illustrator"],
    role: "Illustrator",
  },

  {
    id: "project-12",
    title: "Plugndd Front End Web Developer",
    description: "Collection of digital illustrations made for fun.",
    category: "other",
    thumbnail: "/thumbnails/placeholder.jpg",
    year: "2023",
    images: ["/projects/project-5/1.jpg"],
    tools: ["Procreate", "Illustrator"],
    role: "Illustrator",
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
  ],
};
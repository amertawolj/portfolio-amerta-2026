export type Project = {
  id: string;
  title: string;
  description: string;
  category: "uiux" | "graphic" | "other";
  thumbnail: string;
  year: string;
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Mobile Banking App",
    description: "Redesign of a mobile banking application focused on simplicity and accessibility.",
    category: "uiux",
    thumbnail: "/thumbnails/placeholder.jpg",
    year: "2025",
  },
  {
    id: "project-2",
    title: "E-Commerce Dashboard",
    description: "Admin dashboard UI for managing products, orders, and analytics.",
    category: "uiux",
    thumbnail: "/thumbnails/placeholder.jpg",
    year: "2025",
  },
  {
    id: "project-3",
    title: "Brand Identity — Kopi Nusantara",
    description: "Full brand identity design including logo, color palette, and brand guidelines.",
    category: "graphic",
    thumbnail: "/thumbnails/placeholder.jpg",
    year: "2024",
  },
  {
    id: "project-4",
    title: "Poster Series — Music Festival",
    description: "Series of event posters for an indie music festival.",
    category: "graphic",
    thumbnail: "/thumbnails/placeholder.jpg",
    year: "2024",
  },
  {
    id: "project-5",
    title: "Personal Illustration Pack",
    description: "Collection of digital illustrations made for fun.",
    category: "other",
    thumbnail: "/thumbnails/placeholder.jpg",
    year: "2023",
  },
];

export const profile = {
  name: "Wa Ode Amerta Lambelu Jamaluddin",
  role: "UI/UX Designer",
  place: "Earth (Bandung)",
  bio: "I'm a second-year student majoring in Information System and Technology at ITB. I'm passionate about how fast technology evolves and how it can bring positive impact through innovation. Currently, I'm developing my skills in UI/UX design and software engineering, aiming to create user-centered and visually engaging digital experiences.",
  photo: "/about/photo.png",
  email: "waodeamerta1@gmail.com",
  linkedin: "www.linkedin.com/in/wa-ode-amerta-lambelu-jamaluddin",
  instagram: "https://instagram.com/waodeamertalj",
  tools: [
    { name: "Figma", icon: "/icons/figma.png" },
    { name: "Next.js", icon: "/icons/next.png" },
    { name: "Canva", icon: "/icons/canva.png" },
  ],
};
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'frontend' | 'fullstack' | 'mobile' | 'backend';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product catalog, shopping cart, and payment processing.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    category: "fullstack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    techStack: ["React", "TypeScript", "Socket.io", "Express"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    category: "fullstack"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    techStack: ["React", "Tailwind CSS", "OpenWeather API"],
    githubUrl: "https://github.com/Sricharanredd/weather-dev",
    liveUrl: "https://weather-dev-ten.vercel.app/",
    category: "frontend"
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "A comprehensive social media management tool with analytics, post scheduling, and multi-platform integration.",
    image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600",
    techStack: ["Next.js", "PostgreSQL", "Prisma", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    category: "fullstack"
  },
  {
    id: 5,
    title: "Fitness Tracker App",
    description: "A mobile-first fitness tracking application with workout plans, progress tracking, and social features.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
    techStack: ["React Native", "Firebase", "Redux"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    category: "mobile"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with smooth animations and dark mode toggle built with React and Framer Motion.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    techStack: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/Sricharanredd/Portfolio-",
    liveUrl: "https://web-portfolio-charan.vercel.app/",
    category: "frontend"
  }
];

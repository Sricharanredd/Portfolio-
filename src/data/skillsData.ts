export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 90, icon: "📘" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "JavaScript", level: 95, icon: "📜" },
      { name: "HTML/CSS", level: 98, icon: "🌐" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 88, icon: "🟢" },
      { name: "Express.js", level: 85, icon: "🚂" },
      { name: "Python", level: 80, icon: "🐍" },
      { name: "MongoDB", level: 78, icon: "🍃" },
      { name: "REST APIs", level: 85, icon: "🔗" },
      { name: "Firebase", level: 75, icon: "🔥" }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 90, icon: "📋" },
      { name: "Figma", level: 85, icon: "🎨" },
      { name: "VSCode", level: 95, icon: "💻" },
      { name: "Postman", level: 80, icon: "📮" },
      { name: "Webpack", level: 75, icon: "📦" },
      { name: "Jest", level: 70, icon: "🧪" }
    ]
  }
];
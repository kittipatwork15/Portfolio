import type { SkillGroup } from "@/types";
export const skillGroups: SkillGroup[] = [
  { title: "Programming Languages", icon: "code", skills: [{ name: "C#", level: "Basic" }, { name: "Python", level: "Basic" }, { name: "HTML & CSS", level: "Basic" }] },
  { title: "Frameworks & Libraries", icon: "layers", skills: [{ name: "Next.js", level: "Basic" }, { name: "React", level: "Basic" }, { name: "Tailwind CSS", level: "Basic" }, { name: ".NET MAUI", level: "Basic" }, { name: "CommunityToolkit.Mvvm", level: "Basic" }] },
  { title: "Database", icon: "database", skills: [ { name: "SQLite", level: "Basic" }, { name: "MySQL", level: "Basic" }] },
  { title: "Tools & Technologies", icon: "tools", skills: [{ name: "Git & GitHub", level: "Basic" }, { name: "Visual Studio", level: "Basic" }, { name: "VS Code", level: "Basic" }, { name: "Figma", level: "Basic" }, { name: "Node-RED", level: "Basic" }, { name: "Arduino", level: "Basic" }, { name: "ESP32", level: "Basic" }] },
];

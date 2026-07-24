"use client";

import { Code2, Database, Layers3, Wrench } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { useLanguage } from "./LanguageProvider";
import SectionHeading from "./SectionHeading";

const icons = { code: Code2, layers: Layers3, database: Database, tools: Wrench };
const thaiGroupTitles: Record<string, string> = {
  "Programming Languages": "ภาษาโปรแกรม",
  "Frameworks & Libraries": "เฟรมเวิร์กและไลบรารี",
  Database: "ฐานข้อมูล",
  "Tools & Technologies": "เครื่องมือและเทคโนโลยี",
};

export default function Skills() {
  const { isThai } = useLanguage();
  return <section id="skills" className="section alt"><div className="container"><SectionHeading title={isThai ? "ทักษะด้านเทคนิค" : "Technical Skills"} description={isThai ? "ภาษา เครื่องมือ และเทคโนโลยีที่ผมใช้ในการพัฒนาโปรเจกต์" : "Languages, tools, and technologies I use to develop projects."} /><div className="skill-grid">{skillGroups.map((group) => { const Icon = icons[group.icon]; return <article className="skill-card" key={group.title}><div className="skill-title"><Icon /><h3>{isThai ? thaiGroupTitles[group.title] : group.title}</h3></div><div className="skill-list">{group.skills.map((skill) => <span key={skill.name}>{skill.name}<small>{isThai ? "พื้นฐาน" : skill.level}</small></span>)}</div></article>; })}</div></div></section>;
}

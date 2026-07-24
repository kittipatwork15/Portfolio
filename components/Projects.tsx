"use client";

import { projects } from "@/data/projects";
import { useLanguage } from "./LanguageProvider";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { isThai } = useLanguage();
  return <section id="projects" className="section"><div className="container"><SectionHeading title={isThai ? "ผลงาน" : "Projects"} description={isThai ? "โปรเจกต์จากการเรียนรู้และการลงมือสร้างจริง แต่ละชิ้นช่วยให้ผมพัฒนาเป็นนักพัฒนาที่ดีขึ้น" : "Projects built through learning and hands-on practice, each helping me become a better developer."} /><div className="project-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div></div></section>;
}

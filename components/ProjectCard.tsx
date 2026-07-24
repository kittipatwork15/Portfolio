"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/types";
import { useLanguage } from "./LanguageProvider";
import ProjectGallery from "./ProjectGallery";
import ProjectModal from "./ProjectModal";
import ProjectVideoGallery from "./ProjectVideoGallery";

export default function ProjectCard({ project }: { project: Project }) {
  const { isThai } = useLanguage();
  const [showDetails, setShowDetails] = useState(false);
  const mediaClass = project.images
    ? "has-gallery"
    : project.videos || project.video
      ? "has-video"
      : "";

  return (
    <article className="project-card">
      <div className={`project-image ${mediaClass}`}>
        {project.images ? (
          <ProjectGallery images={project.images} title={project.title} />
        ) : project.videos ? (
          <ProjectVideoGallery videos={project.videos} title={project.title} />
        ) : project.video ? (
          <video
            className="project-video"
            controls
            preload="metadata"
            playsInline
            aria-label={`${isThai ? "วิดีโอตัวอย่างโครงการ" : "Project video"} ${project.title}`}
          >
            <source src={project.video} type="video/mp4" />
            {isThai ? "เบราว์เซอร์ของคุณไม่รองรับวิดีโอ" : "Your browser does not support video."}
          </video>
        ) : (
          <Image
            src={project.image}
            alt={`${isThai ? "ภาพตัวอย่างโครงการ" : "Project preview"} ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
        <span>{project.category} App</span>
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{isThai ? project.description : project.descriptionEn}</p>
        <small><strong>{isThai ? "หน้าที่:" : "My role:"}</strong> {isThai ? project.role : project.roleEn}</small>
        <div className="tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        <button type="button" className="project-view-button" onClick={() => setShowDetails(true)}>
          {isThai ? "ดูโปรเจกต์" : "View Project"} <ExternalLink size={16} />
        </button>
      </div>
      <ProjectModal project={showDetails ? project : null} onClose={() => setShowDetails(false)} />
    </article>
  );
}

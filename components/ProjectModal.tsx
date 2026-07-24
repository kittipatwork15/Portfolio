"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/types";
import { useLanguage } from "./LanguageProvider";
import ProjectGallery from "./ProjectGallery";
import ProjectVideoGallery from "./ProjectVideoGallery";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { isThai } = useLanguage();

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`${isThai ? "รายละเอียดโครงการ" : "Project details"} ${project.title}`} onClick={onClose}>
      <div className="modal project-detail-modal" onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={onClose} aria-label={isThai ? "ปิดรายละเอียดโครงการ" : "Close project details"}><X /></button>

        <div className={`project-modal-media ${project.images ? "has-gallery" : project.videos ? "has-video" : ""}`}>
          {project.images ? (
            <ProjectGallery images={project.images} title={project.title} />
          ) : project.videos ? (
            <ProjectVideoGallery videos={project.videos} title={project.title} />
          ) : project.video ? (
            <video controls preload="metadata" playsInline aria-label={`${isThai ? "วิดีโอโครงการ" : "Project video"} ${project.title}`}>
              <source src={project.video} type="video/mp4" />
              {isThai ? "เบราว์เซอร์ของคุณไม่รองรับวิดีโอ" : "Your browser does not support video."}
            </video>
          ) : (
            <Image src={project.image} alt={`${isThai ? "ภาพโครงการ" : "Project image"} ${project.title}`} fill sizes="90vw" />
          )}
        </div>

        <div className="project-modal-content">
          <span className="project-modal-category">{project.category} App</span>
          <h2>{project.title}</h2>
          <p>{isThai ? project.description : project.descriptionEn}</p>
          <div className="project-modal-role"><strong>{isThai ? "หน้าที่รับผิดชอบ" : "My role"}</strong><span>{isThai ? project.role : project.roleEn}</span></div>
          <div className="tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

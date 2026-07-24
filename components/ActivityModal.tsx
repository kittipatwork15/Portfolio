"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "./LanguageProvider";
import ProjectGallery from "./ProjectGallery";

interface ActivityModalProps {
  isOpen: boolean;
  title: string;
  category: string;
  description: string;
  role: string;
  images: string[];
  tags: string[];
  onClose: () => void;
}

export default function ActivityModal({
  isOpen,
  title,
  category,
  description,
  role,
  images,
  tags,
  onClose,
}: ActivityModalProps) {
  const { isThai } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`${isThai ? "รายละเอียดกิจกรรม" : "Activity details"} ${title}`}
      onClick={onClose}
    >
      <div
        className="modal project-detail-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={
            isThai ? "ปิดรายละเอียดกิจกรรม" : "Close activity details"
          }
        >
          <X />
        </button>

        <div className="project-modal-media has-gallery">
          <ProjectGallery images={images} title={title} />
        </div>

        <div className="project-modal-content">
          <span className="project-modal-category">{category}</span>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="project-modal-role">
            <strong>{isThai ? "หน้าที่รับผิดชอบ" : "My role"}</strong>
            <span>{role}</span>
          </div>
          <div className="tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

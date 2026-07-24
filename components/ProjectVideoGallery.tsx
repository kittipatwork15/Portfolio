"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

interface ProjectVideoGalleryProps {
  videos: string[];
  title: string;
}

export default function ProjectVideoGallery({
  videos,
  title,
}: ProjectVideoGalleryProps) {
  const { isThai } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToVideo = (index: number) => {
    setCurrentIndex(Math.min(Math.max(index, 0), videos.length - 1));
  };

  return (
    <div className="project-video-gallery">
      <video
        key={videos[currentIndex]}
        className="project-video project-video-slide"
        controls
        preload="metadata"
        playsInline
        aria-label={`${isThai ? "วิดีโอโปรเจกต์" : "Project video"} ${title} ${currentIndex + 1}`}
      >
        <source src={videos[currentIndex]} type="video/mp4" />
        {isThai
          ? "เบราว์เซอร์ของคุณไม่รองรับวิดีโอ"
          : "Your browser does not support video."}
      </video>

      {videos.length > 1 && (
        <>
          <button
            type="button"
            className="project-gallery-arrow previous"
            onClick={() => goToVideo(currentIndex - 1)}
            disabled={currentIndex === 0}
            aria-label={isThai ? "วิดีโอก่อนหน้า" : "Previous video"}
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="project-gallery-arrow next"
            onClick={() => goToVideo(currentIndex + 1)}
            disabled={currentIndex === videos.length - 1}
            aria-label={isThai ? "วิดีโอถัดไป" : "Next video"}
          >
            <ChevronRight />
          </button>
          <div
            className="project-gallery-dots"
            role="group"
            aria-label={isThai ? "เลือกวิดีโอ" : "Select video"}
          >
            {videos.map((video, index) => (
              <button
                type="button"
                key={video}
                className={currentIndex === index ? "active" : ""}
                onClick={() => goToVideo(index)}
                aria-label={`${isThai ? "วิดีโอที่" : "Video"} ${index + 1}`}
                aria-current={currentIndex === index ? "true" : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

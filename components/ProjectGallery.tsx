"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const { isThai } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const directionRef = useRef<1 | -1>(1);
  const pausedRef = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || images.length < 2) return;

    const interval = window.setInterval(() => {
      if (pausedRef.current) return;
      setCurrentIndex((current) => {
        let next = current + directionRef.current;
        if (next >= images.length) {
          directionRef.current = -1;
          next = current - 1;
        } else if (next < 0) {
          directionRef.current = 1;
          next = current + 1;
        }
        return next;
      });
    }, 4200);

    return () => window.clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(Math.max(index, 0), images.length - 1));
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (distance < -45) goToSlide(currentIndex + 1);
    if (distance > 45) goToSlide(currentIndex - 1);
    touchStartX.current = null;
  };

  return (
    <div
      className="project-gallery standard"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
      onTouchStart={(event) => { pausedRef.current = true; handleTouchStart(event); }}
      onTouchEnd={(event) => { handleTouchEnd(event); pausedRef.current = false; }}
    >
      <div
        className="project-gallery-track"
        style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <div className={`project-slide ${currentIndex === index ? "active" : ""}`} key={image}>
            <Image
              src={image}
              alt={`${isThai ? "ภาพหน้าจอ" : "Screenshot"} ${title} ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="project-gallery-arrow previous"
        onClick={() => goToSlide(currentIndex - 1)}
        disabled={currentIndex === 0}
        aria-label={isThai ? "รูปก่อนหน้า" : "Previous image"}
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        className="project-gallery-arrow next"
        onClick={() => goToSlide(currentIndex + 1)}
        disabled={currentIndex === images.length - 1}
        aria-label={isThai ? "รูปถัดไป" : "Next image"}
      >
        <ChevronRight />
      </button>

      <div className="project-gallery-dots" role="group" aria-label={isThai ? "เลือกรูปภาพ" : "Select image"}>
        {images.map((image, index) => (
          <button
            type="button"
            key={image}
            className={currentIndex === index ? "active" : ""}
            onClick={() => goToSlide(index)}
            aria-label={`${isThai ? "รูปที่" : "Image"} ${index + 1}`}
            aria-current={currentIndex === index ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}

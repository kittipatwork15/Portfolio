"use client";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { personal } from "@/data/personal";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { isThai } = useLanguage();
  const displayName = isThai ? personal.nameTh : personal.name;

  return (
    <section id="home" className="hero section">
      <div className="glow" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="intro">
            {isThai ? "สวัสดีครับ ผมชื่อ" : "Hello, my name is"}
          </p>
          <h1>{displayName}</h1>
          <p className="role">{personal.role}</p>
          <p className="lead">
            {isThai
              ? "ปัจจุบันศึกษาอยู่ชั้นปีที่ 3 ที่มหาวิทยาลัยกรุงเทพ คณะเทคโนโลยีสารสนเทศและนวัตกรรม สาขาวิทยาการคอมพิวเตอร์ และมีความสนใจด้าน Frontend และ Tester"
              : "I am currently a third-year Computer Science student in the School of Information Technology and Innovation at Bangkok University, with an interest in Frontend Development and Software Testing."}
          </p>
          <div className="hero-actions">
            <a className="button" href="#projects">
              {isThai ? "ดูผลงาน" : "View Projects"}{" "}
              <ArrowDownRight size={18} />
            </a>
            <a className="button secondary" href="#contact">
              {isThai ? "ติดต่อฉัน" : "Contact Me"}
            </a>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="code-orbit orbit-one">TS</div>
          <div className="code-orbit orbit-two">C#</div>
          <div className="avatar-card">
            <div className="avatar profile-photo">
              <Image
                src="/images/profile-img-3001.jpg"
                alt={`${isThai ? "รูปโปรไฟล์ของ" : "Profile photo of"} ${displayName}`}
                fill
                priority
                sizes="(max-width: 620px) 90vw, 330px"
              />
            </div>
            <div className="avatar-caption" />
          </div>
        </div>
      </div>
    </section>
  );
}

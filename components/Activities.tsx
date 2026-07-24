"use client";

import { ExternalLink } from "lucide-react";
import { useState } from "react";
import ActivityModal from "./ActivityModal";
import { useLanguage } from "./LanguageProvider";
import ProjectGallery from "./ProjectGallery";
import SectionHeading from "./SectionHeading";

interface ActivityCard {
  id: string;
  title: string;
  categoryTh: string;
  categoryEn: string;
  descriptionTh: string;
  descriptionEn: string;
  roleTh: string;
  roleEn: string;
  images: string[];
  tags: string[];
}

const activityCards: ActivityCard[] = [
  {
    id: "it-empowering-day",
    title: "IT Empowering Day 2026",
    categoryTh: "กิจกรรมมหาวิทยาลัย",
    categoryEn: "University Activity",
    descriptionTh:
      "กิจกรรมของมหาวิทยาลัยที่ทีม 65 กรัมของผมได้รับคัดเลือกให้นำโปรเจกต์ไปจัดแสดงภายในงาน และเป็น 1 ใน 10 ทีมที่ได้ขึ้นนำเสนอผลงาน (Pitching) บนเวทีต่อคณะกรรมการจาก AWS, KBTG และ BorntoDev เพื่อชิงรางวัล",
    descriptionEn:
      "A university event where my team, 65 Gram, was selected to showcase our project and became one of 10 teams invited to pitch on stage before judges from AWS, KBTG, and BorntoDev.",
    roleTh: "ผู้ช่วยนักพัฒนาหลักและผู้ทดสอบโปรเจกต์",
    roleEn: "Assistant Developer and Project Tester",
    images: [
      "/images/Activity/IT.png",
      "/images/Activity/65.png",
      "/images/Activity/Iti.png",
      "/images/Activity/IMG_2789.png",
    ],
    tags: [
      "65 Gram",
      "Project Showcase",
      "Top 10 Pitching",
      "AWS",
      "KBTG",
      "BorntoDev",
    ],
  },
  {
    id: "cyber-fortress",
    title: "BU Cyber Fortress Challenge & Career Expo",
    categoryTh: "กิจกรรม Cybersecurity",
    categoryEn: "Cybersecurity Activity",
    descriptionTh:
      "เข้าร่วมงาน BU Cyber Fortress Challenge & Career Expo ซึ่งรวบรวมการแข่งขัน Cybersecurity Hackathon รอบชิงชนะเลิศ การบรรยาย Cyber Talk เวิร์กช็อปด้าน Digital Forensics และ Career Expo จากองค์กรในอุตสาหกรรม Cybersecurity",
    descriptionEn:
      "Participated in the BU Cyber Fortress Challenge & Career Expo, featuring the Cybersecurity Hackathon final round, cyber talks, a digital forensics workshop, and a career expo with organizations from the cybersecurity industry.",
    roleTh: "ผู้เข้าร่วมกิจกรรมและเรียนรู้เกี่ยวกับสายงาน Cybersecurity",
    roleEn: "Event participant exploring cybersecurity knowledge and career paths",
    images: [
      "/images/Activity/Cyber.png",
      "/images/Activity/Cyber2.png",
      "/images/Activity/cyber3.png",
    ],
    tags: [
      "Cybersecurity",
      "Cyber Talk",
      "Digital Forensics",
      "Career Expo",
    ],
  },
];

export default function Activities() {
  const { isThai } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedActivity =
    activityCards.find((activity) => activity.id === selectedId) ?? null;

  return (
    <section id="activities" className="section">
      <div className="container">
        <SectionHeading
          title={isThai ? "กิจกรรม" : "Activities"}
          description={
            isThai
              ? "ภาพกิจกรรมและผลงานที่ได้เข้าร่วม"
              : "Activities and events I have participated in."
          }
        />

        <div className="activity-grid">
          {activityCards.map((activity) => (
            <article
              className="project-card activity-project-card"
              key={activity.id}
            >
              <div className="project-image has-gallery">
                <ProjectGallery
                  images={activity.images}
                  title={activity.title}
                />
                <span>
                  {isThai ? activity.categoryTh : activity.categoryEn}
                </span>
              </div>

              <div className="project-body">
                <h3>{activity.title}</h3>
                <p>
                  {isThai
                    ? activity.descriptionTh
                    : activity.descriptionEn}
                </p>
                <small>
                  <strong>{isThai ? "หน้าที่:" : "My role:"}</strong>{" "}
                  {isThai ? activity.roleTh : activity.roleEn}
                </small>
                <div className="tags">
                  {activity.tags.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <button
                  type="button"
                  className="project-view-button"
                  onClick={() => setSelectedId(activity.id)}
                >
                  {isThai ? "ดูกิจกรรม" : "View Activity"}{" "}
                  <ExternalLink size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {selectedActivity && (
          <ActivityModal
            isOpen
            title={selectedActivity.title}
            category={
              isThai
                ? selectedActivity.categoryTh
                : selectedActivity.categoryEn
            }
            description={
              isThai
                ? selectedActivity.descriptionTh
                : selectedActivity.descriptionEn
            }
            role={
              isThai
                ? selectedActivity.roleTh
                : selectedActivity.roleEn
            }
            images={selectedActivity.images}
            tags={selectedActivity.tags}
            onClose={() => setSelectedId(null)}
          />
        )}
      </div>
    </section>
  );
}

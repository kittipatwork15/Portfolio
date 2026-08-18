"use client";

import { Braces, CalendarDays, GraduationCap, UserRound } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { isThai } = useLanguage();

  return (
    <section id="about" className="section alt about-section">
      <div className="container">
        <SectionHeading
          title={isThai ? "เกี่ยวกับฉัน" : "About Me"}
          description={isThai ? "ข้อมูลส่วนตัวและเส้นทางการศึกษาของผม" : "My personal information and education journey."}
        />

        <div className="about-grid">
          <div className="tech-graphic">
            <div className="graphic-window">
              <div className="graphic-top"><i /><i /><i /></div>
              <div className="graphic-code">
                <span>const</span> developer = &#123;<br />
                &nbsp;&nbsp;name: <b>&quot;Kittipat&quot;</b>,<br />
                &nbsp;&nbsp;nickname: <b>&quot;Mon&quot;</b>,<br />
                &nbsp;&nbsp;focus: <b>&quot;Frontend&quot;</b>,<br />
                &nbsp;&nbsp;mindset: <b>&quot;Keep learning&quot;</b><br />
                &#125;;
              </div>
              <Braces size={54} />
            </div>
          </div>

          <div className="about-details">
            <div className="about-personal-grid">
              <article>
                <UserRound />
                <div>
                  <span>{isThai ? "ชื่อ–นามสกุล" : "Full Name"}</span>
                  <strong>{isThai ? "กิตตพัฒน์ สุริยันต์ (ม่อน)" : "Kittipat Suriyan (Mon)"}</strong>
                </div>
              </article>
              <article className="birth-date">
                <CalendarDays />
                <div>
                  <span>{isThai ? "วัน / เดือน / ปีเกิด" : "Date of Birth"}</span>
                  <strong>{isThai ? "17 ธันวาคม 2547" : "17 December 2004"}</strong>
                </div>
              </article>
            </div>

            <div className="about-education">
              <div className="education-heading">
                <GraduationCap />
                <h3>{isThai ? "การศึกษา" : "Education"}</h3>
              </div>

              <article className="education-item">
                <time>2020 – 2023</time>
                <div>
                  <h4>{isThai ? "โรงเรียนธรรมศาสตร์คลองหลวงวิทยาคม" : "Thammasat Khlongluang Wittayakom School"}</h4>
                  <p>GPA 3.42</p>
                </div>
              </article>

              <article className="education-item current">
                <time>{isThai ? "2023 – ปัจจุบัน" : "2023 – Present"}</time>
                <div>
                  <h4>{isThai ? "มหาวิทยาลัยกรุงเทพ" : "Bangkok University"}</h4>
                  <p>GPA 3.43</p>
                </div>
              </article>
            </div>

            <p className="about-summary">
              {isThai
                ? "ปัจจุบันศึกษาอยู่ชั้นปีที่ 4 ที่คณะเทคโนโลยีสารสนเทศและนวัตกรรม สาขาวิทยาการคอมพิวเตอร์ ซึ่งผมได้มีความสนใจในสายนี้เลยเลือกที่จะเข้าเรียนในสาขานี้ เนื่องจากมีความสนใจเกี่ยวกับคอมพิวเตอร์อยู่แล้ว และสนใจการพัฒนา Frontend Web Application การทดสอบซอฟต์แวร์ในสายงาน Tester รวมถึง Cybersecurity โดยต้องพูดตรง ๆ ว่าผมใช้ AI เป็นเครื่องมือช่วยในการทำงานเป็นส่วนใหญ่ สิ่งที่ผมคาดหวังคือการเติบโตเป็นผู้ที่สามารถสร้างผลิตภัณฑ์คุณภาพและทำงานร่วมกับผู้อื่นได้ดี"
                : "I am currently a fourth-year Computer Science student in the School of Information Technology and Innovation. I chose this field because I have always been interested in computers. I am particularly interested in frontend web application development, software testing, and cybersecurity. To be transparent, I use AI as a primary tool to support my work. I hope to grow into someone who can create quality products and collaborate effectively with others."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Project } from "@/types";

const mobileAppImages = Array.from({ length: 18 }, (_, index) => `/images/Project/Mobile/${index + 1}.png`);
const zenithImages = Array.from({ length: 10 }, (_, index) => `/images/Project/Zenith/${index + 1}.png`);

const zenithDetails = [
  {
    title: "ระบบจองล่วงหน้าและ Walk-in",
    titleEn: "Advance Booking and Walk-in",
    description: "รองรับการจองเครื่องล่วงหน้าและการเข้าใช้งานแบบ Walk-in สามารถตรวจสอบช่วงเวลาว่าง ตารางเรียน รายการจองซ้ำ และสถานะเครื่องได้โดยอัตโนมัติ พร้อมระบบยกเลิกการจองและจัดการกรณีไม่มาใช้งานตามเวลา",
    descriptionEn: "Supports advance computer reservations and walk-in access with automatic checks for availability, class schedules, duplicate bookings, and device status, including booking cancellation and no-show handling.",
  },
  {
    title: "Tracking Agent สำหรับ Windows",
    titleEn: "Tracking Agent for Windows",
    description: "มี Tracking Agent สำหรับระบบปฏิบัติการ Windows เพื่อยืนยันตัวตนก่อนเข้าใช้งานเครื่อง ติดตามสถานะแบบเรียลไทม์ รวมถึงรับคำสั่งและควบคุมการทำงานของเครื่องผ่านระบบเว็บไซต์",
    descriptionEn: "Provides a Windows Tracking Agent for identity verification before device access, real-time status monitoring, and receiving commands or controlling computers through the web platform.",
  },
  {
    title: "ระบบบริหารจัดการจากส่วนกลาง",
    titleEn: "Centralized Administration",
    description: "บริหารข้อมูลสมาชิกและกำหนดสิทธิ์ตาม Role จัดการห้อง Lab เครื่องคอมพิวเตอร์ อุปกรณ์ ตารางเรียน และการแจ้งเตือน รวมถึงการระงับหรือ Block เครื่องที่ไม่ต้องการให้ใช้งาน",
    descriptionEn: "Centralizes member data, role-based permissions, labs, computers, equipment, class schedules, and alerts, including the ability to suspend or block devices from use.",
  },
];

const fishyDetails = [
  {
    title: "เนื้อหาใหม่จาก AI ในทุกเกม",
    titleEn: "Fresh AI-generated Content for Every Game",
    description: "ใช้ GPT-4o mini สำหรับสร้างคำถาม พร้อมกระบวนการตรวจสอบเนื้อหาและสร้างภาพประกอบให้สอดคล้องกับแต่ละรอบ",
    descriptionEn: "Uses GPT-4o mini to generate questions, validate content, and create illustrations that match each round.",
  },
  {
    title: "ระบบจัดการกติกาอัตโนมัติ",
    titleEn: "Automated Game-rule Management",
    description: "สุ่มและแจกบทบาทลับให้ผู้เล่น ควบคุมลำดับการเล่น และคำนวณคะแนนเมื่อจบรอบโดยอัตโนมัติ",
    descriptionEn: "Randomly assigns secret roles, controls the turn order, and automatically calculates scores at the end of each round.",
  },
  {
    title: "บันทึกข้อมูลภายในอุปกรณ์",
    titleEn: "On-device Data Storage",
    description: "จัดเก็บประวัติการเล่น รายละเอียดของแต่ละเกม คะแนนสะสม และตารางจัดอันดับด้วยฐานข้อมูล SQLite",
    descriptionEn: "Stores game history, match details, accumulated scores, and rankings locally using SQLite.",
  },
];

export const projects: Project[] = [
  { id: 6, title: "Zenith Smart Lab Management System", description: "แพลตฟอร์มบริหารห้องปฏิบัติการแบบครบวงจร สำหรับจัดการผู้ใช้งาน ห้องเรียน ห้องปฏิบัติการ เครื่องคอมพิวเตอร์ ตารางเรียน และการจองอุปกรณ์ เชื่อมต่อกับ Tracking Agent บน Windows เพื่อยืนยันตัวตน ติดตามสถานะ และควบคุมเครื่องจากศูนย์กลาง รองรับการใช้งานระดับองค์กรและเครื่องคอมพิวเตอร์จำนวนมาก", descriptionEn: "An end-to-end smart laboratory management platform for managing users, classrooms, labs, computers, class schedules, and equipment reservations. It connects to a Windows Tracking Agent for identity verification, device monitoring, and centralized control, and is designed for enterprise use and large computer fleets.", details: zenithDetails, role: "Frontend Developer and Software Tester", roleEn: "Frontend Developer and Software Tester", category: "Web", technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "C#", ".NET"], image: "/images/Project/Zenith/1.png", images: zenithImages },
  { id: 1, title: "Fishy App", description: "Fishy Game คือเกมปาร์ตี้ซ่อนบทบาทที่ทดสอบไหวพริบ การโกหก และการจับผิด ภายในเกมผู้เล่นจะถูกสุ่มให้รับบทเป็น Hunter, Blue Fish หรือ Red Fish โดยแต่ละบทบาทมีเป้าหมายแตกต่างกัน ผู้ชนะจะตัดสินจากการสรุปและคำนวณคะแนนเมื่อจบเกม", descriptionEn: "Fishy Game is a hidden-role party game that tests quick thinking, deception, and deduction. Players are randomly assigned as the Hunter, Blue Fish, or Red Fish, with different objectives for each role. The winner is determined from the final score calculation.", details: fishyDetails, role: "Frontend Developer", roleEn: "Frontend Developer", category: "Mobile", technologies: ["C#", ".NET MAUI", "XAML", "SQLite", "OpenAI API"], image: "/images/Project/Mobile/1.png", images: mobileAppImages },
  { id: 2, title: "AI Tutor", description: "โปรเจกต์รายวิชา CS460 ที่สอนตามระดับความรู้จริงของผู้เรียน ผู้ใช้สามารถเลือกวิชาหรือเพิ่มวิชาเอง แนบไฟล์เอกสารประกอบการเรียน และพิมพ์คำถาม จากนั้น Gemini จะวิเคราะห์คำตอบเพื่อประเมินระดับความรู้ของผู้เรียน ระบบจะอธิบายเนื้อหาให้เหมาะกับระดับนั้น พร้อมสร้างแบบฝึกหัดที่สอดคล้องกับความสามารถของผู้เรียน", descriptionEn: "A CS460 course project that teaches according to each learner's actual knowledge level. Users can select or create a subject, attach learning documents, and submit questions. Gemini analyzes their answers to assess proficiency, then explains the material at the appropriate level and generates exercises suited to the learner's ability.", role: "Frontend Developer", roleEn: "Frontend Developer", category: "Web", technologies: ["React", "Vite", "Tailwind CSS", "React Router", "Axios", "Gemini API"], image: "/projects/notes.svg", video: "/videos/202607210123.mp4", github: "https://github.com/kittipatwork15", demo: "https://project-h50pr.vercel.app/" },
  { id: 4, title: "ESP32 Weight-to-Count System", description: "โปรเจกต์ IoT สำหรับรับค่าน้ำหนักและแปลงผลลัพธ์เป็นจำนวนชิ้น โดยใช้ ESP32 ประมวลผลข้อมูลและแสดงผลผ่าน Dashboard", descriptionEn: "An IoT project that reads weight measurements and converts them into an item count using an ESP32, with the results displayed on a dashboard.", role: "พัฒนาระบบ IoT เชื่อมต่อ ESP32 ทดสอบการแปลงค่าน้ำหนักเป็นจำนวน และตรวจสอบผลลัพธ์บน Dashboard", roleEn: "Developed the ESP32-based IoT system, tested the weight-to-count conversion, and verified the dashboard results.", category: "IoT", technologies: ["ESP32", "Arduino", "Node-RED"], image: "/projects/flood.svg", videos: ["/videos/iot-dashboard.mp4", "/videos/iot-demo.mp4"] },
  { id: 5, title: "Banker’s Algorithm Simulator", description: "โปรเจกต์รายวิชา CS422: Operating System เป็นโปรแกรม GUI สำหรับจำลองการทำงานของ Banker’s Algorithm เพื่อช่วยให้เข้าใจการจัดสรรทรัพยากรและการหลีกเลี่ยง Deadlock ผู้ใช้สามารถกำหนดจำนวน Process และ Resource Types พร้อมกรอกค่า Allocation, Max และ Available จากนั้นระบบจะคำนวณ Need Matrix, Work, Finish Status และ Safe Sequence พร้อมแจ้งว่าระบบอยู่ในสถานะ Safe หรือ Unsafe", descriptionEn: "A CS422 Operating System course project that provides a GUI simulation of Banker’s Algorithm for understanding resource allocation and deadlock avoidance. Users can define processes and resource types, enter Allocation, Max, and Available values, and calculate the Need Matrix, Work, Finish Status, and Safe Sequence to determine whether the system is in a safe or unsafe state.", role: "ช่วยออกแบบ UI เชื่อม Prototype และจัดทำสไลด์นำเสนอ", roleEn: "Assisted with UI design, connected the prototype, and prepared the presentation slides.", category: "Web", technologies: ["Banker’s Algorithm", "Operating System", "GUI", "Prototype"], image: "/projects/notes.svg", video: "/videos/Banker1.mp4" },
];

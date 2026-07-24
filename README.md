# Kittipat Portfolio

เว็บไซต์ Portfolio หน้าเดียวสำหรับนักศึกษาสาย Software Development สร้างด้วย Next.js App Router, TypeScript, Tailwind CSS และ Lucide React

## เริ่มใช้งาน

```bash
npm install
npm run dev
```

เปิด `http://localhost:3000` และใช้คำสั่ง `npm run build` เพื่อตรวจ production build

## จุดที่ควรแก้ไขก่อนนำไปใช้จริง

- ชื่อ อีเมล เบอร์โทร ที่อยู่ และ Social URL: `data/personal.ts`
- ข้อความแนะนำตัว: `components/Hero.tsx` และ `components/About.tsx`
- ผลงาน: `data/projects.ts` และภาพใน `public/projects/`
- ทักษะ กิจกรรม ใบรับรอง และประสบการณ์: ไฟล์ที่ตรงกันใน `data/`
- Resume: แทนที่ `public/resume-placeholder.txt` ด้วย PDF และแก้ลิงก์ใน `components/Navbar.tsx`
- ภาพโปรไฟล์: ปัจจุบันเป็น avatar แบบกราฟิกใน `components/Hero.tsx`; สามารถเปลี่ยนเป็น `next/image` ได้
- Contact form: เป็น UI จำลองพร้อม validation ให้เชื่อม EmailJS, Resend หรือ API route ก่อนใช้งานจริง

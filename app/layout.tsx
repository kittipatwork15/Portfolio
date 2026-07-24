import type { Metadata } from "next";
import LanguageProvider from "@/components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kittipat Suriyan | Frontend Developer and Tester Portfolio",
  description: "Bilingual frontend developer and software tester portfolio featuring projects, skills, activities, and certifications.",
  keywords: ["Frontend Developer", "Software Tester", "Portfolio", "Next.js", "TypeScript"],
  openGraph: {
    title: "Kittipat Suriyan | Frontend Developer and Tester",
    description: "Frontend development, software testing, projects, technical skills, activities, and certifications.",
    type: "website",
    locale: "th_TH",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body><LanguageProvider>{children}</LanguageProvider></body></html>;
}

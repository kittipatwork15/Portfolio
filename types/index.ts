export type ProjectCategory = "Web" | "Mobile" | "AI" | "IoT";
export interface ProjectDetail { title: string; titleEn: string; description: string; descriptionEn: string; }
export interface Project { id: number; title: string; description: string; descriptionEn: string; details?: ProjectDetail[]; role: string; roleEn: string; category: ProjectCategory; technologies: string[]; image: string; images?: string[]; video?: string; videos?: string[]; github?: string; demo?: string; }
export interface Skill { name: string; level: "Basic"; }
export interface SkillGroup { title: string; icon: "code" | "layers" | "database" | "tools"; skills: Skill[]; }
export interface Activity { title: string; titleEn: string; type: string; typeEn: string; date: string; dateEn: string; location: string; locationEn: string; role: string; roleEn: string; description: string; descriptionEn: string; award?: string; awardEn?: string; }
export interface Certification { title: string; issuer: string; date: string; dateEn: string; credentialId?: string; image: string; color: string; }
export interface Experience { role: string; organization: string; period: string; type: string; responsibilities: string[]; achievements: string[]; technologies: string[]; }

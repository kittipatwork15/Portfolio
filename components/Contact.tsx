"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { personal } from "@/data/personal";
import { useLanguage } from "./LanguageProvider";
import SectionHeading from "./SectionHeading";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

export default function Contact() {
  const { isThai } = useLanguage();
  return <section id="contact" className="section contact-section"><div className="container"><SectionHeading title={isThai ? "ติดต่อ" : "Contact"} description="" /><div className="contact-grid single"><div className="contact-info"><div className="contact-list"><a href={`mailto:${personal.email}`}><Mail /><span><small>{isThai ? "อีเมล" : "Email"}</small>{personal.email}</span></a><a href={`tel:${personal.phone.replace(/\s/g, "")}`}><Phone /><span><small>{isThai ? "โทรศัพท์" : "Phone"}</small>{personal.phone}</span></a><div><MapPin /><span><small>{isThai ? "ที่อยู่" : "Location"}</small>{isThai ? personal.location : personal.locationEn}</span></div></div><div className="socials contact-socials"><a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a><a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a><a href={`mailto:${personal.email}`} aria-label="Email"><Mail /></a></div></div></div></div></section>;
}

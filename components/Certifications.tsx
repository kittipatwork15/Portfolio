"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { certifications } from "@/data/certifications";
import type { Certification } from "@/types";
import CertificateModal from "./CertificateModal";
import { useLanguage } from "./LanguageProvider";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  const [selected, setSelected] = useState<Certification | null>(null);
  const { isThai } = useLanguage();
  return (
    <section id="certifications" className="section alt">
      <div className="container">
        <SectionHeading title={isThai ? "ประกาศนียบัตร" : "Certifications"} description={isThai ? "ประกาศนียบัตรจากการเรียนรู้และพัฒนาทักษะด้าน AI, Governance และ Cybersecurity" : "Certificates earned through learning and developing skills in AI, governance, and cybersecurity."} />
        <div className="cert-grid">
          {certifications.map((certificate) => (
            <article key={certificate.title}>
              <div className="cert-art certificate-image" style={{ "--cert-color": certificate.color } as React.CSSProperties}>
                <Image src={certificate.image} alt={`${isThai ? "ประกาศนียบัตร" : "Certificate"} ${certificate.title}`} fill sizes="(max-width: 620px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
              <div className="cert-info">
                <h3>{certificate.title}</h3>
                <p>{certificate.issuer}</p>
                <small>{isThai ? certificate.date : certificate.dateEn}{certificate.credentialId ? ` · ${certificate.credentialId}` : ""}</small>
                <button type="button" onClick={() => setSelected(certificate)}>{isThai ? "ดูประกาศนียบัตร" : "View Certificate"} <ExternalLink size={16} /></button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <CertificateModal certificate={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

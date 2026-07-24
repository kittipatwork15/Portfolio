"use client";

import Image from "next/image";
import { X } from "lucide-react";
import type { Certification } from "@/types";
import { useLanguage } from "./LanguageProvider";

interface CertificateModalProps { certificate: Certification | null; onClose: () => void; }

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  const { isThai } = useLanguage();
  if (!certificate) return null;
  return <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`${isThai ? "ใบรับรอง" : "Certificate"} ${certificate.title}`} onClick={onClose}><div className="modal certificate-modal" onClick={(event) => event.stopPropagation()}><button type="button" onClick={onClose} aria-label={isThai ? "ปิดหน้าต่างใบรับรอง" : "Close certificate"}><X /></button><div className="certificate-preview-image"><Image src={certificate.image} alt={`${isThai ? "ใบรับรอง" : "Certificate"} ${certificate.title}`} fill sizes="90vw" /></div><div className="certificate-modal-info"><h3>{certificate.title}</h3><p>{certificate.issuer} · {isThai ? certificate.date : certificate.dateEn}</p>{certificate.credentialId && <small>Credential ID: {certificate.credentialId}</small>}</div></div></div>;
}

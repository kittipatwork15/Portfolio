interface Props { eyebrow?: string; title: string; description: string; align?: "left" | "center"; }
export default function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  return <div className={`section-heading ${align === "center" ? "center" : ""}`}>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2><p>{description}</p></div>;
}

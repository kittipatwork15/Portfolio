import type { ProjectCategory } from "@/types";
export type Filter = "All" | ProjectCategory;
export default function ProjectFilter({ selected, onSelect }: { selected: Filter; onSelect: (value: Filter) => void }) { return <div className="filters" role="group" aria-label="กรองผลงาน">{(["All", "Web", "Mobile", "AI", "IoT"] as Filter[]).map((filter) => <button key={filter} className={selected === filter ? "active" : ""} onClick={() => onSelect(filter)}>{filter}</button>)}</div>; }

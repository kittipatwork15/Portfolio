"use client";

import { personal } from "@/data/personal";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { isThai } = useLanguage();

  return (
    <footer>
      <div className="container copyright">
        © {new Date().getFullYear()} {personal.name}.{" "}
        {isThai ? "สงวนลิขสิทธิ์" : "All rights reserved."}
      </div>
    </footer>
  );
}

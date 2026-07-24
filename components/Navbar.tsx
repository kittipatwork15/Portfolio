"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { useLanguage } from "./LanguageProvider";

type Theme = "light" | "dark";
const themeChangeEvent = "portfolio-theme-change";

function subscribeToTheme(callback: () => void) {
  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
  window.addEventListener("storage", callback);
  window.addEventListener(themeChangeEvent, callback);
  colorScheme.addEventListener("change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(themeChangeEvent, callback);
    colorScheme.removeEventListener("change", callback);
  };
}

function getThemeSnapshot(): Theme {
  const savedTheme = window.localStorage.getItem("portfolio-theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

const links = [
  { th: "หน้าแรก", en: "Home", href: "#home" },
  { th: "เกี่ยวกับ", en: "About", href: "#about" },
  { th: "ผลงาน", en: "Projects", href: "#projects" },
  { th: "ทักษะ", en: "Skills", href: "#skills" },
  { th: "กิจกรรม", en: "Activities", href: "#activities" },
  { th: "ประกาศนียบัตร", en: "Certifications", href: "#certifications" },
  { th: "ติดต่อ", en: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { language, setLanguage, isThai } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
    window.dispatchEvent(new Event(themeChangeEvent));
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const current = links
        .map((link) => link.href.slice(1))
        .findLast((id) => {
          const element = document.getElementById(id);
          return element
            ? element.getBoundingClientRect().top <= 140
            : false;
        });

      if (current) setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <nav
          className={open ? "nav-links open" : "nav-links"}
          aria-label={isThai ? "เมนูหลัก" : "Main menu"}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href.slice(1) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {isThai ? link.th : link.en}
            </a>
          ))}
          <div
            className="language-switch"
            role="group"
            aria-label={isThai ? "เลือกภาษา" : "Select language"}
          >
            <button
              type="button"
              className={language === "th" ? "active" : ""}
              onClick={() => setLanguage("th")}
              aria-pressed={language === "th"}
            >
              TH
            </button>
            <button
              type="button"
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? isThai
                  ? "เปลี่ยนเป็นโหมดมืด"
                  : "Switch to dark mode"
                : isThai
                  ? "เปลี่ยนเป็นโหมดสว่าง"
                  : "Switch to light mode"
            }
            title={
              theme === "light"
                ? isThai
                  ? "โหมดมืด"
                  : "Dark mode"
                : isThai
                  ? "โหมดสว่าง"
                  : "Light mode"
            }
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
          <a
            className="button small"
            href="/resume-placeholder.txt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={
            open
              ? isThai
                ? "ปิดเมนู"
                : "Close menu"
              : isThai
                ? "เปิดเมนู"
                : "Open menu"
          }
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState("light");

  // Effect to set the theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header className="site-header py-4 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <nav className="flex items-center gap-2">
          <MenuLink href="/" label="Home" />
           <MenuLink href="/projects" label="Projects" />
          <MenuLink href="/contact-me" label="Contact" />
          <MenuLink href="/about-me" label="About" />
        </nav>
        <button
          onClick={toggleTheme}
          className="theme-toggle ml-4 flex items-center gap-2 px-4 py-2 rounded-full font-bold shadow-sm"
          aria-label="Toggle theme"
        >
          <span className="inline-block w-5 h-5">
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="5" /><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07-1.41-1.41M6.34 6.34 4.93 4.93m12.02 0-1.41 1.41M6.34 17.66l-1.41 1.41" /></svg>
            )}
          </span>
          <span>{theme === "dark" ? "Dark" : "Light"}</span>
          <span className={`inline-block w-10 h-6 rounded-full border transition-colors duration-200 ${theme === "dark" ? "bg-[var(--primary)] border-[var(--primary)]" : "bg-[var(--border)] border-[var(--border)]"}`}>
            <span className={`block w-5 h-5 rounded-full shadow transform transition-transform duration-200 ${theme === "dark" ? "bg-[var(--background)] translate-x-4" : "bg-white translate-x-0.5"}`}></span>
          </span>
        </button>
      </div>
    </header>
  );
}

function MenuLink({ href, label }) {
  return (
    <Link href={href} className="menu-link">
      {label}
    </Link>
  );
}

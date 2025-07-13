"use client";
import React, { useState, useEffect } from "react";

const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

export default function Header() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.getAttribute("data-theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
    return "dark";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "var(--header-bg)", borderBottom: "1px solid var(--border)", height: 72, transition: "background 0.3s, border-color 0.3s" }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center" style={{ height: 72 }}>
        {/* Logo */}
        <a href="#home" className="flex items-center relative group" style={{ height: 72 }}>
          <span className="relative flex items-center justify-center rounded-full border group-hover:scale-110"
            style={{
              width: 36,
              height: 36,
              background: "var(--logo-bg)",
              borderColor: "var(--logo-border)",
              borderWidth: "1px",
              color: "var(--logo-text)",
              fontFamily: "Inter, system-ui, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              letterSpacing: "0.12em",
              textAlign: "center",
              lineHeight: "36px",
              boxShadow: "0 2px 8px var(--logo-shadow)",
              padding: 0,
              margin: 0,
              userSelect: "none",
              transition: "transform 0.8s cubic-bezier(.4,0,.2,1), background 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s",
            }}
          >
            AB
          </span>
        </a>
        {/* Nav Items */}
        <div className="flex-1 flex justify-center">
          <ul className="hidden md:flex gap-4">
            {navItems.map((item) => (
              <li key={item} className="flex items-center" style={{ height: 72 }}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="uppercase font-medium px-2 py-1 rounded transition-colors duration-150"
                  style={{
                    color: "var(--nav-link)",
                    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    background: "none",
                    borderRadius: 6,
                    textDecoration: "none",
                    transition: "color 0.15s cubic-bezier(0.4,0,0.2,1)",
                  }}
                  onMouseEnter={e => e.target.style.color = "var(--nav-link-hover)"}
                  onMouseLeave={e => e.target.style.color = "var(--nav-link)"}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden ml-2 text-2xl" style={{ color: "var(--nav-link)" }}>☰</div>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="ml-3 flex items-center justify-center w-9 h-9 rounded-full border border-transparent bg-transparent hover:bg-[var(--button-hover-bg)] transition-colors duration-200 focus:outline-none"
          style={{
            boxShadow: "0 1px 4px 0 var(--logo-shadow)",
            color: "var(--nav-link)",
          }}
        >
          {theme === "dark" ? (
            // Moon icon
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--nav-link)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" /></svg>
          ) : (
            // Sun icon
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--nav-link)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07-1.41-1.41M6.34 6.34 4.93 4.93m12.02 0-1.41 1.41M6.34 17.66l-1.41 1.41" /></svg>
          )}
        </button>
      </div>
    </header>
  );
}

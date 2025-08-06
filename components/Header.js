import { useEffect, useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Read stored preference or system preference
    const stored = localStorage.getItem("theme");
    if (stored) {
      setIsDark(stored === "dark");
      if (stored === "dark") document.documentElement.classList.add("dark");
    } else {
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
      if (prefersDark) document.documentElement.classList.add("dark");
    }
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    if (next) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <header className="w-full max-w-5xl mx-auto flex items-center justify-between py-6 px-4">
      <div className="flex items-center gap-3">
        <img src="/wizexremit-icon.svg" alt="Wizex Remit" className="h-10 w-10 rounded-md" />
        <div>
          <div className="text-lg font-semibold text-secondary dark:text-white">Wizex <span className="text-sm font-medium text-gray-500 dark:text-gray-300">Remit</span></div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 hover:opacity-90 transition"
        >
          <span className="text-sm">{isDark ? "Dark" : "Light"}</span>
          <div className="w-9 h-5 rounded-full flex items-center p-0.5" style={{ background: isDark ? "#4C1D95" : "#E6E6E6" }}>
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${isDark ? "translate-x-4" : "translate-x-0"}`}></div>
          </div>
        </button>
      </div>
    </header>
  );
}

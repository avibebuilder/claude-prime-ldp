"use client";

import { useState, useEffect } from "react";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const pastHero = scrollY > viewportHeight * 0.8;
      const nearBottom = scrollY + viewportHeight > docHeight - viewportHeight;
      setVisible(pastHero && !nearBottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(
      "bash <(curl -fsSL https://raw.githubusercontent.com/avibebuilder/claude-prime/main/install.sh)"
    );
  };

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        onClick={handleCopy}
        className="glass-primary flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium text-terminal-gold hover:text-terminal-white hover:bg-terminal-gold/20 transition-all duration-200"
        style={{
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.6), 0 0 1px rgba(227,179,65,0.5), 0 0 20px rgba(227,179,65,0.1)",
          borderColor: "rgba(227,179,65,0.2)",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
        </svg>
        Copy Install Command
      </button>
    </div>
  );
}

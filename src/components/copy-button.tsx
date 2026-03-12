"use client";

import { useState } from "react";

export function CopyButton({
  text,
  className = "",
  children,
}: {
  text: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`group transition-all duration-200 ${className}`}
      title="Copy to clipboard"
    >
      {children ?? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
        >
          {copied ? (
            <path d="M20 6L9 17l-5-5" />
          ) : (
            <>
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
            </>
          )}
        </svg>
      )}
    </button>
  );
}

export function CopyInstallButton() {
  const [copied, setCopied] = useState(false);
  const installCmd =
    "bash <(curl -fsSL https://raw.githubusercontent.com/avibebuilder/claude-prime/main/install.sh)";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-terminal-gold text-terminal-bg font-bold text-[15px] hover:brightness-110 hover:shadow-[0_0_40px_rgba(227,179,65,0.4)] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto"
      style={{
        boxShadow: "0 0 30px rgba(227,179,65,0.35), 0 0 80px rgba(227,179,65,0.15), inset 0 1px 0 rgba(255,255,255,0.25)",
        animation: "cta-pulse 3s ease-in-out infinite",
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {copied ? (
          <path d="M20 6L9 17l-5-5" />
        ) : (
          <>
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </>
        )}
      </svg>
      {copied ? "Copied!" : "Copy Install Command"}
    </button>
  );
}

"use client";

import { useState, useEffect } from "react";

const commands = [
  "/cook Add authentication with magic links",
  "/ask How does the payment module work?",
  "/discuss Should we use Redis or Memcached?",
  "/cook Build a REST API for user profiles",
  "/review-code Check the auth middleware",
  "/fix The checkout flow is broken on mobile",
  "/test Run the integration test suite",
  "/cook Migrate from REST to GraphQL",
];

export function TypingCursor() {
  const [text, setText] = useState("");
  const [cmdIndex, setCmdIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"waiting" | "typing" | "holding" | "deleting">("waiting");

  useEffect(() => {
    const cmd = commands[cmdIndex];

    if (phase === "waiting") {
      const t = setTimeout(() => setPhase("typing"), 2000);
      return () => clearTimeout(t);
    }

    if (phase === "typing") {
      if (charIndex < cmd.length) {
        const speed = 40 + Math.random() * 40;
        const t = setTimeout(() => {
          setText(cmd.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, speed);
        return () => clearTimeout(t);
      }
      setPhase("holding");
    }

    if (phase === "holding") {
      const t = setTimeout(() => setPhase("deleting"), 3000);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setCharIndex((c) => c - 1);
          setText(cmd.slice(0, charIndex - 1));
        }, 20);
        return () => clearTimeout(t);
      }
      setCmdIndex((i) => (i + 1) % commands.length);
      setPhase("waiting");
    }
  }, [phase, charIndex, cmdIndex]);

  return (
    <span>
      <span className="text-terminal-white/70">{text}</span>
      <span
        className="inline-block w-[9px] h-[17px] bg-terminal-gold/90 ml-0.5 align-middle"
        style={{
          animation: "blink 1.06s step-end infinite",
          borderRadius: "var(--radius-inner)",
        }}
      />
    </span>
  );
}

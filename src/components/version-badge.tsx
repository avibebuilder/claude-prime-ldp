"use client";

import { useEffect, useState } from "react";

export function VersionBadge() {
  const [version, setVersion] = useState("v1.0.0");

  useEffect(() => {
    fetch("https://api.github.com/repos/avibebuilder/claude-prime/releases/latest")
      .then((r) => r.json())
      .then((data) => {
        if (data.tag_name) setVersion(data.tag_name);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="mb-10 px-4 py-1.5 rounded-full glass-tertiary text-terminal-gold/80 text-xs tracking-widest uppercase border border-terminal-gold/15">
      Open Source &middot;{" "}
      <span className="text-terminal-gold font-medium">{version}</span>
    </div>
  );
}

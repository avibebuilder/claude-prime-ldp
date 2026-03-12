import {
  TerminalWindow,
  TerminalLine,
  TerminalOutput,
  TerminalComment,
  TerminalGap,
  Cmd,
  Flag,
  Str,
} from "./terminal-window";
import { VersionBadge } from "./version-badge";
import { CopyInstallButton } from "./copy-button";
import { GitHubStars } from "./github-stars";
import { Mascot } from "./mascot";
import { TypingCursor } from "./typing-cursor";
import { TerminalCopyButton } from "./terminal-copy-button";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-5 md:px-4 pt-20 pb-16 md:pt-44 md:pb-24">
      <VersionBadge />

      {/* Main heading — glow ONLY on title */}
      <h1 className="text-center mb-5 max-w-4xl">
        <span
          className="block text-5xl md:text-8xl font-bold text-glow-gold mb-4 tracking-tight"
          style={{
            background: "linear-gradient(90deg, #e3b341 0%, #e3b341 35%, #f0d060 50%, #e3b341 65%, #e3b341 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shimmer 8s linear infinite",
          }}
        >
          Claude Prime
        </span>
        <span className="block text-[22px] md:text-2xl text-terminal-white font-semibold leading-relaxed">
          Supercharge Claude Code in one command.
        </span>
      </h1>
      <p className="text-center text-base md:text-lg text-terminal-text max-w-lg leading-[1.7] mb-8">
        Skills, agents, hooks, memory &mdash; all configured for{" "}
        <span className="text-terminal-gold font-medium">your</span> project.
      </p>

      {/* Primary CTAs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto max-w-md sm:max-w-none">
        <CopyInstallButton />
        <GitHubStars />
      </div>

      {/* Hero terminal — subtle vertical bob, no 3D perspective */}
      <div
        className="w-full max-w-[700px] mt-14"
        style={{ animation: "float 6s ease-in-out infinite" }}
      >
        <div className="relative">
          {/* Asymmetric hero glow — stronger for premium feel */}
          <div
            className="absolute -inset-12 rounded-2xl blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 700px 400px at 55% 30%, rgba(227,179,65,0.18) 0%, rgba(227,179,65,0.04) 50%, transparent 70%)",
            }}
          />
          <div className="relative">
            {/* CRT scanline overlay — signature visual */}
            <div
              className="absolute inset-0 pointer-events-none z-10 rounded-lg opacity-[0.04]"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(227,179,65,0.2) 2px, rgba(227,179,65,0.2) 4px)",
              }}
            />
          <TerminalWindow title="~/my-project — zsh" tier="hero">
            <div className="flex gap-6 md:gap-8">
              {/* Terminal content */}
              <div className="text-[15px] md:text-[15px] flex-1 min-w-0">
                <TerminalComment>Install Claude Prime</TerminalComment>
                <div className="flex items-center gap-2" style={{ animation: "fadeInUp 0.4s ease 200ms both" }}>
                  <span className="text-terminal-gold shrink-0 select-none">$</span>
                  <span className="whitespace-nowrap">
                    <Cmd>bash</Cmd> <Flag>&lt;(</Flag><Cmd>curl</Cmd> <Flag>-fsSL</Flag>{" "}
                    <Str>https://raw.githubusercontent.com/.../install.sh</Str><Flag>)</Flag>
                  </span>
                  <TerminalCopyButton text="bash <(curl -fsSL https://raw.githubusercontent.com/avibebuilder/claude-prime/main/install.sh)" />
                </div>

                <TerminalGap />

                <TerminalComment>Prime your project</TerminalComment>
                <TerminalLine delay={400}>
                  <Cmd>claude</Cmd>
                </TerminalLine>
                <TerminalLine prompt=">" delay={600}>
                  <Cmd>/optimus-prime</Cmd>
                </TerminalLine>

                <TerminalGap />

                <TerminalOutput delay={800}>
                  <span className="text-terminal-gold">✓</span>{" "}
                  <span className="text-terminal-text/90">
                    Analyzed project structure
                  </span>
                </TerminalOutput>
                <TerminalOutput delay={900}>
                  <span className="text-terminal-gold">✓</span>{" "}
                  <span className="text-terminal-text/90">
                    Skills matched to your stack
                  </span>
                </TerminalOutput>
                <TerminalOutput delay={1000}>
                  <span className="text-terminal-gold">✓</span>{" "}
                  <span className="text-terminal-text/90">
                    Generated rules &amp; memory systems
                  </span>
                </TerminalOutput>
                <TerminalOutput delay={1100}>
                  <span className="text-terminal-gold">✓</span>{" "}
                  <span className="text-terminal-text/90">Created</span>{" "}
                  <Str>CLAUDE.md</Str>{" "}
                  <span className="text-terminal-text/90">entry point</span>
                </TerminalOutput>

                <TerminalGap />

                <TerminalOutput
                  delay={1200}
                  className="text-terminal-gold font-medium"
                >
                  Ready. Skills loaded, rules configured.
                </TerminalOutput>

                <TerminalGap size="sm" />

                <div
                  className="flex gap-2 py-[1px]"
                  style={{ animation: "fadeInUp 0.4s ease 1400ms both" }}
                >
                  <span className="text-terminal-gold">$</span>
                  <TypingCursor />
                </div>
              </div>

              {/* Mascot — right side identity mark */}
              <div className="hidden pt-8 pr-10 md:flex shrink-0 items-center select-none">
                <Mascot className="w-32 h-auto text-terminal-yellow/75" />
              </div>
            </div>
          </TerminalWindow>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="mt-10 text-terminal-gold/50"
        style={{ animation: "float 2s ease-in-out infinite" }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto"
        >
          <path d="M7 10l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}

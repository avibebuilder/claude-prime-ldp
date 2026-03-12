export function Footer() {
  return (
    <footer className="relative py-16 px-5 md:px-4">
      {/* Top border glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-terminal-gold/20 to-transparent" />

      <div className="max-w-3xl mx-auto">
        <div className="text-terminal-dim/70 text-[12px] mb-6 font-mono tracking-wider">
          <span className="text-terminal-gold/40">$</span> exit 0
        </div>

        <div className="flex flex-col items-center gap-6 text-terminal-text/80 text-[14px]">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-terminal-gold font-medium">
              claude-prime
            </span>
            <span className="text-terminal-border">|</span>
            <span>MIT License</span>
            <span className="text-terminal-border">|</span>
            <span>
              by{" "}
              <a
                href="https://github.com/avibebuilder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-gold/80 hover:text-terminal-gold transition-colors duration-200"
              >
                A Vibe Builder
              </a>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <a
              href="https://github.com/avibebuilder/claude-prime"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-text/70 hover:text-terminal-gold transition-colors duration-200 py-3 px-4"
            >
              GitHub
            </a>
            <a
              href="https://github.com/avibebuilder/claude-prime/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-text/70 hover:text-terminal-gold transition-colors duration-200 py-3 px-4"
            >
              Contributing
            </a>
            <a
              href="https://github.com/avibebuilder/claude-prime/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-text/70 hover:text-terminal-gold transition-colors duration-200 py-3 px-4"
            >
              License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

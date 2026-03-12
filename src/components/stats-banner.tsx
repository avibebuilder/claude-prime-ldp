import { Fn, Str, Kw } from "./terminal-window";
import { Mascot } from "./mascot";

export function StatsBanner() {
  return (
    <div className="relative py-12 md:py-20 px-5 md:px-4 overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(227,179,65,0.04) 0%, rgba(227,179,65,0.02) 50%, rgba(227,179,65,0.04) 100%)",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-terminal-gold/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-terminal-gold/20 to-transparent" />

      <div className="relative max-w-2xl mx-auto">
        {/* neofetch terminal — elevated tier */}
        <div className="glass-hero overflow-hidden" style={{ borderColor: "rgba(227,179,65,0.12)" }}>
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/6 bg-gradient-to-b from-white/3 to-transparent">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#e05252] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
              <div className="w-3 h-3 rounded-full bg-[#dea527] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
              <div className="w-3 h-3 rounded-full bg-[#24b038] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
            </div>
            <span className="text-terminal-dim text-[12px] ml-2 tracking-wider">
              neofetch — zsh
            </span>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              {/* SVG mascot — matches banner.svg exactly */}
              <div className="shrink-0 select-none flex flex-col items-center">
                <Mascot className="w-28 md:w-32 h-auto text-terminal-gold" />
                <span className="text-terminal-gold text-[11px] tracking-wider mt-1 font-mono opacity-70">
                  claude-prime
                </span>
              </div>

              {/* System info — unique stats, not feature list */}
              <div className="text-[15px] leading-[1.8] flex-1 min-w-0">
                <div>
                  <span className="text-terminal-dim">user</span>
                  <span className="text-terminal-white">@</span>
                  <span className="text-terminal-dim">project</span>
                </div>
                <div className="text-terminal-border mb-1">──────────────</div>
                <div>
                  <Fn>OS</Fn>
                  <span className="text-terminal-dim">: </span>
                  <span className="text-terminal-text/90">Claude Code + Prime</span>
                </div>
                <div>
                  <Fn>Setup</Fn>
                  <span className="text-terminal-dim">: </span>
                  <span className="text-terminal-text/90">&lt; 30 seconds</span>
                </div>
                <div>
                  <Kw>Detection</Kw>
                  <span className="text-terminal-dim">: </span>
                  <span className="text-terminal-text/90">package.json, Cargo.toml, go.mod...</span>
                </div>
                <div>
                  <Str>Output</Str>
                  <span className="text-terminal-dim">: </span>
                  <span className="text-terminal-text/90">CLAUDE.md + rules + memory</span>
                </div>
                <div>
                  <Str>Config</Str>
                  <span className="text-terminal-dim">: </span>
                  <span className="text-terminal-text/90">Zero manual setup required</span>
                </div>
                <div>
                  <Fn>License</Fn>
                  <span className="text-terminal-dim">: </span>
                  <span className="text-terminal-text/90">MIT — fully open source</span>
                </div>

                {/* Color palette blocks */}
                <div className="mt-3 flex gap-1">
                  <div className="w-4 h-4 bg-terminal-gold" style={{ borderRadius: "var(--radius-inner)" }} />
                  <div className="w-4 h-4 bg-terminal-cyan" style={{ borderRadius: "var(--radius-inner)" }} />
                  <div className="w-4 h-4 bg-terminal-purple" style={{ borderRadius: "var(--radius-inner)" }} />
                  <div className="w-4 h-4 bg-terminal-yellow" style={{ borderRadius: "var(--radius-inner)" }} />
                  <div className="w-4 h-4 bg-terminal-orange" style={{ borderRadius: "var(--radius-inner)" }} />
                  <div className="w-4 h-4 bg-terminal-pink" style={{ borderRadius: "var(--radius-inner)" }} />
                  <div className="w-4 h-4 bg-terminal-red" style={{ borderRadius: "var(--radius-inner)" }} />
                  <div className="w-4 h-4 bg-terminal-white" style={{ borderRadius: "var(--radius-inner)" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

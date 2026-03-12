import { Fn } from "./terminal-window";

const features = [
  {
    icon: ">>",
    name: "Skills",
    desc: "matched to your framework, language & toolchain",
    color: "text-terminal-gold",
  },
  {
    icon: "[]",
    name: "Rules",
    desc: "auto-attached guardrails based on your file paths",
    color: "text-terminal-cyan",
  },
  {
    icon: "::",
    name: "Memory",
    desc: "persists across sessions — learns from your codebase",
    color: "text-terminal-purple",
  },
  {
    icon: "&&",
    name: "Agents",
    desc: "specialized workers for research, debugging, testing — on demand",
    color: "text-terminal-yellow",
  },
  {
    icon: "~/",
    name: "Workflows",
    desc: "research, build, test, fix — adapted to how you work",
    color: "text-terminal-orange",
  },
];

export function FeaturesGrid() {
  return (
    <div
      className="glass-primary overflow-hidden"
      style={{ borderColor: "rgba(227,179,65,0.15)" }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/6 bg-gradient-to-b from-white/4 to-transparent">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#e05252] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
          <div className="w-3 h-3 rounded-full bg-[#dea527] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
          <div className="w-3 h-3 rounded-full bg-[#24b038] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
        </div>
        <span className="text-terminal-dim text-[12px] ml-2 tracking-wider">
          claude-prime --status
        </span>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 text-[15px] md:text-base leading-[1.8]">
        <div className="text-terminal-gold font-bold text-base mb-5 tracking-wide text-phosphor">
          What Gets Configured
        </div>

        <div className="space-y-3.5">
          {features.map((f) => (
            <div key={f.name} className="flex items-start gap-3 p-3.5 rounded-md bg-white/3 border border-white/5">
              <span className={`${f.color} text-[14px] shrink-0 mt-0.5 w-6 text-center font-bold`}>{f.icon}</span>
              <div>
                <Fn>{f.name}</Fn>
                <span className="text-terminal-text ml-2">
                  {f.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-white/6">
          <span className="text-terminal-dim/80 text-sm italic">
            Everything is auto-detected and configured — zero manual setup.
          </span>
        </div>
      </div>
    </div>
  );
}

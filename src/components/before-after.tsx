const beforeItems = [
  "Generic responses, no project context",
  "Forgets patterns between sessions",
  "You configure everything manually",
];

const afterItems = [
  "Knows your stack, patterns, conventions",
  "Persistent memory across sessions",
  "One command sets up everything",
];

export function BeforeAfter() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {/* Before — recessed, muted, clearly "bad" */}
      <div className="p-5 md:p-6 rounded-lg bg-terminal-red/5 border border-dashed border-terminal-red/20">
        <div className="text-terminal-red/80 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-terminal-red/50" />
          Without Claude Prime
        </div>
        <div className="space-y-2.5">
          {beforeItems.map((text) => (
            <div key={text} className="flex items-start gap-2.5 leading-relaxed">
              <span className="text-terminal-red/50 shrink-0 mt-0.5">✗</span>
              <span className="text-terminal-text/85 text-[15px] md:text-base">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* After — elevated, glass-hero with strong green glow */}
      <div
        className="glass-hero p-5 md:p-6 transition-all duration-300 relative"
        style={{
          borderColor: "rgba(227,179,65,0.3)",
          boxShadow: "0 0 40px rgba(227,179,65,0.10), 0 0 80px rgba(227,179,65,0.04), inset 0 1px 0 rgba(227,179,65,0.1)",
        }}
      >
        <div className="relative">
          <div className="text-terminal-gold text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2 text-phosphor">
            <span className="inline-block w-2 h-2 rounded-full bg-terminal-gold shadow-[0_0_10px_rgba(227,179,65,0.6)]" />
            With Claude Prime
          </div>
          <div className="space-y-2.5">
            {afterItems.map((text) => (
              <div key={text} className="flex items-start gap-2.5 leading-relaxed">
                <span className="text-terminal-gold shrink-0 mt-0.5 font-bold">✓</span>
                <span className="text-terminal-text/90 text-[15px] md:text-base">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TerminalWindow({
  title = "terminal",
  children,
  className = "",
  tier = "secondary",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
  tier?: "hero" | "primary" | "secondary";
}) {
  const glassMap = {
    hero: "glass-hero",
    primary: "glass-primary",
    secondary: "glass-secondary",
  };
  const glassClass = glassMap[tier];

  return (
    <div
      className={`${glassClass} overflow-hidden transition-shadow duration-500 ${className}`}
    >
      {/* Title bar — desaturated traffic lights */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/6 bg-gradient-to-b from-white/3 to-transparent">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#e05252] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
          <div className="w-3 h-3 rounded-full bg-[#dea527] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
          <div className="w-3 h-3 rounded-full bg-[#24b038] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
        </div>
        <span className="text-terminal-dim text-[12px] ml-2 tracking-wider">
          {title}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 text-[15px] leading-[1.7] overflow-x-auto">
        {children}
      </div>
    </div>
  );
}

export function TerminalLine({
  prompt = "$",
  children,
  delay,
}: {
  prompt?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <div
      className="flex gap-2 py-[1px]"
      style={delay ? { animation: `fadeInUp 0.4s ease ${delay}ms both` } : {}}
    >
      <span className="text-terminal-gold shrink-0 select-none">{prompt}</span>
      <span>{children}</span>
    </div>
  );
}

export function TerminalOutput({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`text-terminal-dim pl-4 py-[1px] ${className}`}
      style={delay ? { animation: `fadeInUp 0.4s ease ${delay}ms both` } : {}}
    >
      {children}
    </div>
  );
}

export function TerminalComment({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-terminal-dim/80 italic py-[1px]">
      <span className="text-terminal-dim/60">#</span> {children}
    </div>
  );
}

export function TerminalGap({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const heights = { sm: "h-1", md: "h-3", lg: "h-5" };
  return <div className={heights[size]} />;
}

export function Cursor() {
  return (
    <span
      className="inline-block w-[9px] h-[17px] bg-terminal-gold/90 ml-0.5 align-middle"
      style={{
        animation: "blink 1.06s step-end infinite",
        borderRadius: "var(--radius-inner)",
      }}
    />
  );
}

/* Syntax highlighting helpers */
export function Cmd({ children }: { children: React.ReactNode }) {
  return <span className="text-terminal-white font-medium">{children}</span>;
}

export function Flag({ children }: { children: React.ReactNode }) {
  return <span className="text-terminal-yellow">{children}</span>;
}

export function Str({ children }: { children: React.ReactNode }) {
  return <span className="text-terminal-cyan">{children}</span>;
}

export function Kw({ children }: { children: React.ReactNode }) {
  return <span className="text-terminal-purple">{children}</span>;
}

export function Fn({ children }: { children: React.ReactNode }) {
  return <span className="text-terminal-gold">{children}</span>;
}

export function Num({ children }: { children: React.ReactNode }) {
  return <span className="text-terminal-orange">{children}</span>;
}

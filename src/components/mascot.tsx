export function Mascot({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="-14 -4 178 125"
      className={className}
      aria-label="Claude Prime mascot"
      role="img"
    >
      {/* Body (crown, face, torso, legs) */}
      <text
        fontFamily="'JetBrains Mono', 'SF Mono', 'Fira Code', Menlo, monospace"
        xmlSpace="preserve"
      >
        {/* Crown - 3 prongs */}
        <tspan x="27" dy="0" fontSize="11" fill="currentColor" opacity="0.7">
          {" █   ▄█▄   █"}
        </tspan>
        <tspan x="27" dy="12" fontSize="11" fill="currentColor" opacity="0.7">
          {" █▄ ▄███▄ ▄█"}
        </tspan>
        <tspan x="30" dy="11" fontSize="11" fill="currentColor" opacity="0.75">
          {"████████████"}
        </tspan>
        {/* Face - eyes via half-block chars */}
        <tspan x="0" dy="24" fontSize="26" fill="currentColor" opacity="0.8">
          {" ▐▛███▜▌"}
        </tspan>
        {/* Torso */}
        <tspan x="8" dy="26" fontSize="26" fill="currentColor" opacity="0.8">
          {" ██████"}
        </tspan>
        {/* Legs */}
        <tspan x="22" dy="20" fontSize="16" fill="currentColor" opacity="0.6">
          {" ▄█    █▄"}
        </tspan>
      </text>

      {/* Left flexing arm */}
      <text
        fontFamily="'JetBrains Mono', 'SF Mono', 'Fira Code', Menlo, monospace"
        fontSize="18"
        xmlSpace="preserve"
      >
        <tspan x="-10" dy="41" fill="currentColor" opacity="0.7">
          {"█"}
        </tspan>
        <tspan x="-10" dy="18" fill="currentColor" opacity="0.75">
          {"▀██"}
        </tspan>
      </text>

      {/* Right flexing arm */}
      <text
        fontFamily="'JetBrains Mono', 'SF Mono', 'Fira Code', Menlo, monospace"
        fontSize="18"
        xmlSpace="preserve"
      >
        <tspan x="140" dy="41" fill="currentColor" opacity="0.7">
          {"█"}
        </tspan>
        <tspan x="118" dy="18" fill="currentColor" opacity="0.75">
          {"██▀"}
        </tspan>
      </text>
    </svg>
  );
}

import {
  TerminalWindow,
  TerminalLine,
  Cmd,
  Flag,
  Str,
} from "./terminal-window";
import { GitHubStars } from "./github-stars";
import { CopyInstallButton, CopyButton } from "./copy-button";
import { FadeIn } from "./fade-in";
import { Mascot } from "./mascot";

const steps = [
  { number: "01", title: "Install" },
  { number: "02", title: "Prime" },
  { number: "03", title: "Build" },
];

const copyTexts = [
  'bash <(curl -fsSL https://raw.githubusercontent.com/avibebuilder/claude-prime/main/install.sh)',
  '/optimus-prime',
  '/cook Add authentication with magic links',
];

export function GetStartedSection() {
  return (
    <section className="relative py-20 md:py-28 px-5 md:px-4">
      {/* Subtle background band for section distinction */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(227,179,65,0.02) 20%, rgba(227,179,65,0.03) 50%, rgba(227,179,65,0.02) 80%, transparent 100%)",
        }}
      />
      <div className="relative max-w-3xl mx-auto">
        {/* Section header */}
        <FadeIn className="mb-14">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-terminal-gold/50 text-sm tracking-wider font-medium text-phosphor">
              {"// "}get started
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-terminal-gold/15 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-terminal-white">
            Three Steps. That&apos;s It.
          </h2>
        </FadeIn>

        {/* Steps — terminal pipeline */}
        <div className="space-y-10">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 100}>
              <div className="relative border-l-2 border-terminal-gold/25 pl-6 ml-3">
                {/* Glowing dot on the border line */}
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-terminal-gold shadow-[0_0_10px_rgba(227,179,65,0.6)]" />

                <h3 className="text-lg font-bold mb-3 flex items-baseline gap-3">
                  <span className="text-terminal-gold/50 text-sm font-mono font-bold">[{step.number}]</span>
                  <span className="text-terminal-gold text-phosphor">{step.title}</span>
                </h3>
                <div className="min-w-0 relative group">
                  {i === 0 && (
                    <TerminalWindow title="install — zsh">
                      <TerminalLine>
                        <Cmd>bash</Cmd> <Flag>&lt;(</Flag>
                        <Cmd>curl</Cmd> <Flag>-fsSL</Flag>{" "}
                        <Str>
                          https://raw.githubusercontent.com/.../install.sh
                        </Str>
                        <Flag>)</Flag>
                      </TerminalLine>
                    </TerminalWindow>
                  )}
                  {i === 1 && (
                    <TerminalWindow title="prime — zsh">
                      <TerminalLine>
                        <Cmd>claude</Cmd>
                      </TerminalLine>
                      <TerminalLine prompt=">">
                        <Cmd>/optimus-prime</Cmd>
                      </TerminalLine>
                    </TerminalWindow>
                  )}
                  {i === 2 && (
                    <TerminalWindow title="build — zsh">
                      <TerminalLine>
                        <Cmd>/cook</Cmd>{" "}
                        <span className="text-terminal-text/70">
                          Add authentication with magic links
                        </span>
                      </TerminalLine>
                    </TerminalWindow>
                  )}
                  <CopyButton
                    text={copyTexts[i]}
                    className="absolute top-1.5 right-1.5 text-terminal-dim/50 hover:text-terminal-gold transition-opacity duration-200 p-1.5 rounded hover:bg-white/6"
                  />
                </div>
              </div>
          </FadeIn>
          ))}
        </div>
      </div>

      {/* CRESCENDO CTA — emotional peak */}
      <FadeIn className="mt-16 md:mt-24 pt-16 md:pt-24 pb-12 md:pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Radial glow — green to match palette */}
            <div
              className="absolute -inset-24 rounded-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(227,179,65,0.12) 0%, rgba(227,179,65,0.05) 40%, transparent 70%)",
              }}
            />

            {/* Glass container — hero tier for max elevation */}
            <div
              className="relative glass-hero p-8 md:p-14 text-center"
              style={{
                borderColor: "rgba(227,179,65,0.20)",
                boxShadow: "0 28px 90px rgba(0, 0, 0, 0.75), 0 0 1px rgba(227, 179, 65, 0.6), 0 0 60px rgba(227, 179, 65, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.2)"
              }}
            >
              <Mascot className="w-12 md:w-14 h-auto text-terminal-gold mx-auto mb-5" />
              <h3 className="text-3xl md:text-4xl font-bold text-terminal-white mb-4">
                Ready to{" "}
                <span className="text-terminal-gold text-glow-gold whitespace-nowrap">
                  supercharge
                </span>
                <br className="hidden md:block" />
                {" "}your&nbsp;Claude&nbsp;Code?
              </h3>
              <p className="text-terminal-text/90 text-[15px] md:text-base mb-10 max-w-lg mx-auto">
                One command. 30 seconds. Everything configured.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CopyInstallButton />
                <GitHubStars />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

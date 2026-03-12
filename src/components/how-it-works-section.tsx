import { BeforeAfter } from "./before-after";
import { FeaturesGrid } from "./features-grid";
import { FadeIn } from "./fade-in";

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <FadeIn className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-terminal-gold/50 text-sm tracking-wider font-medium text-phosphor">
              {"// "}how it works
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-terminal-gold/15 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-terminal-white">
            Tailored to{" "}
            <span className="text-terminal-gold text-glow-gold">
              Your Project
            </span>
          </h2>
          <p className="text-terminal-text mt-4 max-w-xl text-[15px] md:text-base leading-[1.7]">
            Analyzes your repo and loads{" "}
            <span className="text-terminal-text font-medium">
              only what&apos;s relevant
            </span>
            {" "}&mdash; the right skills, rules, and memory for your stack.
          </p>
        </FadeIn>

        {/* Before/After */}
        <FadeIn className="mb-14 md:mb-16">
          <BeforeAfter />
        </FadeIn>

        {/* Features as terminal --help */}
        <FadeIn delay={100}>
          <FeaturesGrid />
        </FadeIn>
      </div>
    </section>
  );
}

import { CopyInstallButton } from "./copy-button";
import { FadeIn } from "./fade-in";

export function MidPageCta() {
  return (
    <FadeIn className="py-12 md:py-16 px-5 md:px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 px-6 md:px-8 glass-hero"
          style={{ borderColor: "rgba(227,179,65,0.20)" }}
        >
          <div className="text-center sm:text-left">
            <p className="text-terminal-white font-bold text-lg">
              Ready to try it?
            </p>
            <p className="text-terminal-text/80 text-sm mt-1">
              One command. 30 seconds to set up.
            </p>
          </div>
          <div className="shrink-0">
            <CopyInstallButton />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

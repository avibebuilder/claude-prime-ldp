import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { StatsBanner } from "@/components/stats-banner";
import { GetStartedSection } from "@/components/get-started-section";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { FloatingCTA } from "@/components/floating-cta";
import { siteConfig } from "./site-config";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS, Linux, Windows",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* CRT effects stack */}
      <div className="fixed inset-0 scanlines z-50 pointer-events-none opacity-[0.15]" />
      <div className="fixed inset-0 noise z-40 pointer-events-none" />
      <div className="fixed inset-0 vignette z-30 pointer-events-none" />

      {/* Asymmetric background gradients — off-center for depth */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Primary green orb — offset right for asymmetry */}
        <div
          className="absolute top-[-200px] left-[55%] -translate-x-1/2 w-[1200px] h-[1000px] rounded-full blur-[200px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(227,179,65,0.16) 0%, rgba(227,179,65,0.04) 50%, transparent 70%)",
            animation: "gradient-drift 20s ease-in-out infinite",
          }}
        />
        {/* Secondary green orb — lower left, dimmer */}
        <div
          className="absolute top-[50%] left-[20%] w-[800px] h-[500px] rounded-full blur-[200px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(227,179,65,0.06) 0%, transparent 70%)",
            animation: "gradient-drift 25s ease-in-out infinite reverse",
          }}
        />
        {/* Tertiary orb — behind CTA for depth */}
        <div
          className="absolute top-[80%] right-[15%] w-[600px] h-[400px] rounded-full blur-[200px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(227,179,65,0.05) 0%, transparent 70%)",
            animation: "gradient-drift 30s ease-in-out infinite",
          }}
        />
      </div>

      <HeroSection />
      <StatsBanner />
      <div className="h-px bg-gradient-to-r from-transparent via-terminal-gold/15 to-transparent" />
      <HowItWorksSection />
      <div className="h-px bg-gradient-to-r from-transparent via-terminal-gold/15 to-transparent" />
      <GetStartedSection />
      <Footer />
      <FloatingCTA />
      <ScrollToTop />
    </main>
  );
}

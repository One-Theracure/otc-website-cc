import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { AboutBrand } from "@/components/landing/AboutBrand";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { PlatformSection } from "@/components/landing/PlatformSection";
import { ProductShowcase } from "@/components/landing/ProductShowcase";
import { EcosystemFlow } from "@/components/landing/EcosystemFlow";
import { Solutions } from "@/components/landing/Solutions";
import { Differentiation } from "@/components/landing/Differentiation";
import { GlobalPositioning } from "@/components/landing/GlobalPositioning";
import { TrustSafety } from "@/components/landing/TrustSafety";
import { Team } from "@/components/landing/Team";
import { FounderStory } from "@/components/landing/FounderStory";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "One TheraCure | The AI Healthcare Operating System" },
      {
        name: "description",
        content:
          "One TheraCure connects doctors, clinics, hospitals and patients into one intelligent care layer, from clinical workflow to patient continuity.",
      },
      { property: "og:title", content: "One TheraCure | The AI Healthcare Operating System" },
      {
        property: "og:description",
        content:
          "One patient. One story. One connected care journey.",
      },
      { property: "og:url", content: "https://onetheracure.com/" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "hi_IN" },
      { property: "og:locale:alternate", content: "mr_IN" },
      { property: "og:image", content: "https://onetheracure.com/og-image.png" },
      { property: "og:image:alt", content: "One TheraCure — The AI Healthcare Operating System" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      // Fallback image (JPG, smaller — used by clients that pick a secondary og:image, e.g. WhatsApp prefers <300KB)
      { property: "og:image", content: "https://onetheracure.com/og-image-fallback.jpg" },
      { property: "og:image:alt", content: "One TheraCure — The AI Healthcare Operating System" },
      { property: "og:image:type", content: "image/jpeg" },
      // Locale-specific share images (Hindi / Marathi)
      { property: "og:image", content: "https://onetheracure.com/og-image-hi.png" },
      { property: "og:image:alt", content: "एक थेराक्योर — एआई हेल्थकेयर ऑपरेटिंग सिस्टम" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image", content: "https://onetheracure.com/og-image-mr.png" },
      { property: "og:image:alt", content: "वन थेराक्युअर — एआय हेल्थकेअर ऑपरेटिंग सिस्टीम" },
      { property: "og:image:type", content: "image/png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "One TheraCure | The AI Healthcare Operating System" },
      { name: "twitter:description", content: "One patient. One story. One connected care journey." },
      { name: "twitter:image", content: "https://onetheracure.com/og-image.png" },
      { name: "twitter:image:alt", content: "One TheraCure — The AI Healthcare Operating System" },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { name: "theme-color", content: "#0b1e3a" },
    ],
    links: [
      { rel: "canonical", href: "https://onetheracure.com/" },
      { rel: "alternate", hrefLang: "en", href: "https://onetheracure.com/" },
      { rel: "alternate", hrefLang: "hi", href: "https://onetheracure.com/" },
      { rel: "alternate", hrefLang: "mr", href: "https://onetheracure.com/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://onetheracure.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "One TheraCure",
          url: "https://onetheracure.com/",
          logo: "https://onetheracure.com/og-image.png",
          description:
            "The AI Healthcare Operating System — connecting doctors, clinics, hospitals and families into one continuous care layer.",
          sameAs: [
            "https://x.com/onetheracure",
            "https://www.linkedin.com/company/one-theracure/",
            "https://www.instagram.com/onetheracure/",
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              email: "info@onetheracure.com",
              contactType: "customer support",
              availableLanguage: ["en", "hi", "mr"],
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "One TheraCure",
          url: "https://onetheracure.com/",
        }),
      },
    ],
  }),
  component: Index,
});

const Divider = () => (
  <div className="mx-auto max-w-6xl px-4">
    <hr className="border-border/60" />
  </div>
);

function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <AboutBrand />
        <Divider />
        <ProblemSection />
        <Divider />
        <PlatformSection />
        <Divider />
        <ProductShowcase />
        <Divider />
        <EcosystemFlow />
        <Divider />
        <Solutions />
        <Divider />
        <Differentiation />
        <Divider />
        <TrustSafety />
        <Divider />
        <GlobalPositioning />
        <Divider />
        <Team />
        <Divider />
        <FounderStory />
        <FinalCTA />
      </main>
      <Footer />
      </div>
    </LanguageProvider>
  );
}

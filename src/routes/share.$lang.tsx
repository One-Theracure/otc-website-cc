import { createFileRoute, notFound } from "@tanstack/react-router";

type Lang = "en" | "hi" | "mr";

const META: Record<
  Lang,
  {
    locale: string;
    title: string;
    description: string;
    ogImage: string;
    ogImageAlt: string;
    htmlLang: string;
    bodyHeadline: string;
    bodySub: string;
    cta: string;
  }
> = {
  en: {
    locale: "en_US",
    htmlLang: "en",
    title: "One TheraCure | The AI Healthcare Operating System",
    description:
      "One TheraCure connects doctors, clinics, hospitals and patients into one intelligent care layer — from clinical workflow to patient continuity.",
    ogImage: "https://onetheracure.com/og-image.png",
    ogImageAlt: "One TheraCure — The AI Healthcare Operating System",
    bodyHeadline: "One patient. One story. One connected care journey.",
    bodySub: "The AI Healthcare Operating System.",
    cta: "Continue to onetheracure.com",
  },
  hi: {
    locale: "hi_IN",
    htmlLang: "hi",
    title: "वन थेराक्योर | एआई हेल्थकेयर ऑपरेटिंग सिस्टम",
    description:
      "वन थेराक्योर डॉक्टरों, क्लीनिकों, अस्पतालों और मरीज़ों को एक बुद्धिमान केयर परत में जोड़ता है — क्लीनिकल वर्कफ़्लो से लेकर मरीज़ की निरंतरता तक।",
    ogImage: "https://onetheracure.com/og-image-hi.png",
    ogImageAlt: "वन थेराक्योर — एआई हेल्थकेयर ऑपरेटिंग सिस्टम",
    bodyHeadline: "एक मरीज़। एक कहानी। एक जुड़ी हुई केयर यात्रा।",
    bodySub: "एआई हेल्थकेयर ऑपरेटिंग सिस्टम।",
    cta: "onetheracure.com पर जाएँ",
  },
  mr: {
    locale: "mr_IN",
    htmlLang: "mr",
    title: "वन थेराक्युअर | एआय हेल्थकेअर ऑपरेटिंग सिस्टीम",
    description:
      "वन थेराक्युअर डॉक्टर, क्लिनिक, रुग्णालये आणि रुग्णांना एका सुज्ञ केअर लेयरमध्ये जोडते — क्लिनिकल वर्कफ्लोपासून रुग्ण निरंतरतेपर्यंत.",
    ogImage: "https://onetheracure.com/og-image-mr.png",
    ogImageAlt: "वन थेराक्युअर — एआय हेल्थकेअर ऑपरेटिंग सिस्टीम",
    bodyHeadline: "एक रुग्ण. एक कहाणी. एक जोडलेला केअर प्रवास.",
    bodySub: "एआय हेल्थकेअर ऑपरेटिंग सिस्टीम.",
    cta: "onetheracure.com वर जा",
  },
};

function isLang(v: string): v is Lang {
  return v === "en" || v === "hi" || v === "mr";
}

export const Route = createFileRoute("/share/$lang")({
  beforeLoad: ({ params }) => {
    if (!isLang(params.lang)) throw notFound();
  },
  head: ({ params }) => {
    const lang = isLang(params.lang) ? params.lang : "en";
    const m = META[lang];
    const url = `https://onetheracure.com/share/${lang}`;
    return {
      meta: [
        { title: m.title },
        { name: "description", content: m.description },
        { property: "og:site_name", content: "One TheraCure" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:locale", content: m.locale },
        { property: "og:title", content: m.title },
        { property: "og:description", content: m.description },
        { property: "og:image", content: m.ogImage },
        { property: "og:image:alt", content: m.ogImageAlt },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:type", content: "image/png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: m.title },
        { name: "twitter:description", content: m.description },
        { name: "twitter:image", content: m.ogImage },
        { name: "twitter:image:alt", content: m.ogImageAlt },
        { name: "robots", content: "index,follow,max-image-preview:large" },
        { name: "theme-color", content: "#0b1e3a" },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "alternate", hrefLang: "en", href: "https://onetheracure.com/share/en" },
        { rel: "alternate", hrefLang: "hi", href: "https://onetheracure.com/share/hi" },
        { rel: "alternate", hrefLang: "mr", href: "https://onetheracure.com/share/mr" },
        { rel: "alternate", hrefLang: "x-default", href: "https://onetheracure.com/" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: m.title,
            description: m.description,
            url,
            inLanguage: m.htmlLang,
            image: m.ogImage,
            isPartOf: {
              "@type": "WebSite",
              name: "One TheraCure",
              url: "https://onetheracure.com/",
            },
          }),
        },
      ],
    };
  },
  component: SharePreview,
  notFoundComponent: () => (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Not found</h1>
      <p>
        Try <a href="/share/en">/share/en</a>,{" "}
        <a href="/share/hi">/share/hi</a>, or{" "}
        <a href="/share/mr">/share/mr</a>.
      </p>
    </main>
  ),
});

function SharePreview() {
  const { lang } = Route.useParams();
  const m = META[lang as Lang];
  return (
    <main
      lang={m.htmlLang}
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#0b1e3a",
        color: "#e6f4ff",
        fontFamily: "Inter, system-ui, sans-serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 640 }}>
        <img
          src={m.ogImage}
          alt={m.ogImageAlt}
          width={600}
          height={315}
          style={{ width: "100%", height: "auto", borderRadius: 12, marginBottom: 24 }}
        />
        <h1 style={{ fontSize: "1.75rem", margin: "0 0 12px", lineHeight: 1.2 }}>
          {m.bodyHeadline}
        </h1>
        <p style={{ opacity: 0.85, margin: "0 0 24px" }}>{m.bodySub}</p>
        <a
          href="/"
          style={{
            display: "inline-block",
            padding: "12px 22px",
            borderRadius: 999,
            background: "#22d3ee",
            color: "#0b1e3a",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          {m.cta}
        </a>
      </div>
    </main>
  );
}

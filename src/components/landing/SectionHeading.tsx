export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div
          className={`text-[10px] font-semibold uppercase tracking-[0.22em] text-navy/60 mb-5 ${
            isCenter ? "text-center" : ""
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2 className="h-display text-3xl sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && (
        <p
          className={`mt-5 text-base sm:text-lg text-foreground/65 leading-relaxed text-pretty ${
            isCenter ? "max-w-xl mx-auto" : "max-w-xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

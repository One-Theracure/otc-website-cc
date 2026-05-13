import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { useLang } from "@/lib/i18n/LanguageProvider";
import rutik from "@/assets/team-rutik.png";
import ramakant from "@/assets/team-ramakant.png";
import vishal from "@/assets/team-vishal.png";

type Person = {
  name: string;
  role: string;
  cred: string;
  img: string;
  focal: string;
};

function PersonCard({ p }: { p: Person }) {
  return (
    <article className="group max-w-sm mx-auto w-full rounded-3xl border border-border bg-white p-5 sm:p-6 shadow-card transition-shadow duration-700 hover:shadow-elegant">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#eaf2fb] via-[#f5f9fd] to-white ring-1 ring-inset ring-navy/5">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
          style={{ objectPosition: p.focal }}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.015]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/70 to-transparent" />
      </div>
      <div className="mt-6 px-1">
        <h3 className="h-display text-xl sm:text-2xl text-navy leading-tight">
          {p.name}
        </h3>
        <div className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-teal font-semibold text-pretty">
          {p.role}
        </div>
        <p className="mt-3 text-sm text-foreground/65 leading-relaxed text-pretty">
          {p.cred}
        </p>
      </div>
    </article>
  );
}

export function Team() {
  const { t } = useLang();
  const people: Person[] = [
    { name: "Rutik Thorat", role: t("team.0.role"), cred: t("team.0.cred"), img: rutik, focal: "center 30%" },
    { name: "Dr. Ramakant Deshpande", role: t("team.1.role"), cred: t("team.1.cred"), img: ramakant, focal: "center 25%" },
    { name: "Dr. Vishal Warke", role: t("team.2.role"), cred: t("team.2.cred"), img: vishal, focal: "center 35%" },
  ];

  return (
    <section id="team" className="py-20 sm:py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow={t("team.eyebrow")}
          title={t("team.title")}
          subtitle={t("team.subtitle")}
        />

        <Reveal className="mt-20 grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {people.map((p) => (
            <PersonCard key={p.name} p={p} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

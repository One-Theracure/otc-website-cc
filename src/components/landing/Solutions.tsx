import {
  Stethoscope,
  FileText,
  UserCog,
  ClipboardCheck,
  Brain,
  NotebookPen,
  Hospital,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Reveal";
import { useLang } from "@/lib/i18n/LanguageProvider";

const icons = [FileText, NotebookPen, Brain, ClipboardCheck, Stethoscope, UserCog, Hospital];

export function Solutions() {
  const { t } = useLang();
  const items = icons.map((Icon, i) => ({
    Icon,
    title: t(`solutions.${i}.t`),
    desc: t(`solutions.${i}.d`),
  }));

  return (
    <section id="solutions" className="py-20 sm:py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow={t("solutions.eyebrow")}
          title={t("solutions.title")}
          subtitle={t("solutions.subtitle")}
        />

        <StaggerGroup className="mt-20 grid gap-x-6 gap-y-0 sm:grid-cols-2 lg:grid-cols-3 divide-hairline lg:divide-y-0">
          {items.map((it, i) => (
            <StaggerItem key={i}>
              <div className="py-7 lg:py-9 lg:border-t lg:border-border">
                <div className="h-9 w-9 rounded-md bg-navy/5 grid place-items-center text-navy">
                  <it.Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-navy text-pretty">{it.title}</h3>
                <p className="mt-2 text-sm text-foreground/65 leading-relaxed max-w-xs text-pretty">
                  {it.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

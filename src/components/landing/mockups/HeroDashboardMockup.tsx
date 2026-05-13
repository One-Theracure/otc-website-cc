import {
  Stethoscope,
  FileText,
  CalendarClock,
  ShieldCheck,
  Pill,
  AlertTriangle,
  ArrowRight,
  Mic,
  Activity,
  QrCode,
  Check,
  Smartphone,
  Wifi,
} from "lucide-react";

export function HeroDashboardMockup() {
  return (
    <div className="relative">
      {/* soft glow */}
      <div className="pointer-events-none absolute -inset-10 bg-gradient-to-br from-cyan/15 via-transparent to-teal/10 blur-3xl -z-10" />

      <div className="rounded-2xl bg-white border border-border/70 shadow-elegant overflow-hidden">
        {/* window chrome */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/70 bg-white">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-300" />
            <span className="h-2 w-2 rounded-full bg-amber-300" />
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
          </div>
          <div className="text-[10.5px] text-muted-foreground font-medium tracking-wide">
            ClinicOS · Dr. Mehta · OPD Room 2
          </div>
          <div className="flex items-center gap-1.5 text-[10.5px] text-emerald-600 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            ABHA · Synced 10:42
          </div>
        </div>

        <div className="grid grid-cols-12 min-h-[420px]">
          {/* left rail */}
          <aside className="hidden md:flex col-span-2 flex-col gap-1 p-3 border-r border-border/70 bg-secondary/40">
            <div className="flex items-center gap-2 px-1.5 pb-3 mb-1 border-b border-border/60">
              <div className="h-7 w-7 rounded-md bg-navy text-white text-[10px] grid place-items-center font-semibold">
                AC
              </div>
              <div>
                <div className="text-[11px] font-semibold text-navy leading-tight">
                  Asha Clinic
                </div>
                <div className="text-[9.5px] text-muted-foreground">Pune · OPD</div>
              </div>
            </div>
            {[
              { icon: Stethoscope, label: "Today", active: true },
              { icon: FileText, label: "Records" },
              { icon: CalendarClock, label: "Follow-ups" },
              { icon: Pill, label: "Pharmacy" },
              { icon: ShieldCheck, label: "Locker" },
            ].map((it) => (
              <div
                key={it.label}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] ${
                  it.active
                    ? "bg-navy text-white"
                    : "text-muted-foreground hover:bg-white"
                }`}
              >
                <it.icon className="h-3 w-3" />
                <span>{it.label}</span>
              </div>
            ))}
          </aside>

          {/* center: encounter */}
          <div className="col-span-12 md:col-span-7 p-4 border-r border-border/70 space-y-3.5">
            {/* patient header */}
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-navy to-[#4a7fb5] text-white text-[10px] grid place-items-center font-semibold">
                    AR
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-navy leading-tight">
                      Anita Rao
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      F · 54 · MRN 00482 · ABHA 91-1234-5678-9012
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-[9.5px] font-medium text-rose-700 bg-rose-50 border border-rose-100 rounded-full px-2 py-0.5">
                Allergy: Sulpha
              </span>
            </div>

            {/* vitals */}
            <div className="grid grid-cols-4 gap-2">
              {[
                { l: "BP", v: "142/92", flag: true },
                { l: "HR", v: "84" },
                { l: "SpO₂", v: "98%" },
                { l: "Temp", v: "37.1°" },
              ].map((m) => (
                <div
                  key={m.l}
                  className="rounded-lg border border-border/70 bg-white p-2"
                >
                  <div className="text-[9.5px] text-muted-foreground uppercase tracking-wider">
                    {m.l}
                  </div>
                  <div
                    className={`text-[12px] font-semibold ${
                      m.flag ? "text-amber-700" : "text-navy"
                    }`}
                  >
                    {m.v}
                  </div>
                  {m.flag && (
                    <svg
                      viewBox="0 0 60 16"
                      className="mt-0.5 w-full h-3 text-amber-500"
                      fill="none"
                    >
                      <polyline
                        points="0,12 10,10 20,11 30,8 40,6 50,5 60,3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>

            {/* live transcript */}
            <div className="rounded-lg border border-border/70 bg-secondary/40 p-3">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2 text-[10.5px] font-semibold text-navy">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 rounded-full bg-rose-400 animate-pulse-dot" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
                  </span>
                  Recording · 04:21
                </div>
                <Mic className="h-3 w-3 text-muted-foreground" />
              </div>
              <p className="text-[10.5px] text-foreground/70 leading-relaxed">
                <span className="text-navy font-medium">Pt:</span> Chest tightness for three days, worse climbing stairs.{" "}
                <span className="text-navy font-medium">Dr:</span> Any breathlessness at rest?
              </p>
            </div>

            {/* SOAP */}
            <div className="rounded-lg border border-border/70 bg-white">
              <div className="flex items-center justify-between px-3 py-2 border-b border-border/70">
                <div className="text-[10.5px] font-semibold text-navy">
                  AI-drafted clinical note
                </div>
                <span className="text-[9.5px] uppercase tracking-wider text-teal font-semibold">
                  Draft
                </span>
              </div>
              <dl className="divide-hairline text-[10.5px]">
                {[
                  { k: "S", v: "Exertional chest tightness × 3d. No rest dyspnoea." },
                  { k: "O", v: "BP 142/92 · HR 84 · SpO₂ 98% · chest clear." },
                  { k: "A", v: "Stable angina vs anxiety; risk-stratify." },
                  { k: "P", v: "ECG today, troponin, lipid profile, start aspirin 75." },
                ].map((row) => (
                  <div key={row.k} className="flex gap-3 px-3 py-1.5">
                    <span className="w-3 text-[10px] font-bold text-cyan">
                      {row.k}
                    </span>
                    <span className="text-foreground/80 leading-relaxed">
                      {row.v}
                    </span>
                  </div>
                ))}
              </dl>
              <div className="flex items-center justify-between px-3 py-2 border-t border-border/70">
                <span className="text-[9.5px] text-muted-foreground">
                  Sources: 4 · Confidence: high
                </span>
                <div className="flex items-center gap-1.5">
                  <button className="text-[10px] px-2.5 py-1 rounded-md border border-border text-foreground/70">
                    Edit
                  </button>
                  <button className="text-[10px] px-2.5 py-1 rounded-md bg-navy text-white inline-flex items-center gap-1">
                    Approve <Check className="h-2.5 w-2.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* right rail */}
          <aside className="hidden md:flex col-span-3 flex-col gap-2.5 p-3 bg-white">
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-2.5">
              <div className="flex items-center gap-1.5 text-[10.5px] font-semibold text-amber-800">
                <AlertTriangle className="h-3 w-3" /> Clinical alert
              </div>
              <p className="text-[10px] text-amber-900/80 mt-1 leading-relaxed">
                BP trend rising 6 weeks. Suggest 24-hr ABPM.
              </p>
            </div>

            <div className="rounded-lg border border-border/70 bg-white p-2.5">
              <div className="flex items-center gap-1.5 text-[10.5px] font-semibold text-navy">
                <CalendarClock className="h-3 w-3 text-cyan" /> Follow-up
              </div>
              <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">
                Review · 14 days
              </p>
              <p className="text-[9.5px] text-muted-foreground/80">
                WhatsApp + ABHA summary
              </p>
            </div>

            <div className="rounded-lg border border-border/70 bg-white p-2.5">
              <div className="flex items-center gap-1.5 text-[10.5px] font-semibold text-navy">
                <ArrowRight className="h-3 w-3 text-teal" /> Referral
              </div>
              <p className="text-[10px] text-muted-foreground mt-1">
                Cardiology · Dr. Sinha
              </p>
              <p className="text-[9.5px] text-muted-foreground/80">Tue 4:00 PM</p>
            </div>

            <div className="rounded-lg border border-border/70 bg-white p-2.5 mt-auto">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-md bg-navy/5 grid place-items-center">
                  <Smartphone className="h-4 w-4 text-navy" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[10.5px] font-semibold text-navy leading-tight">
                    Patient app linked
                    <Wifi className="h-2.5 w-2.5 text-emerald-500" />
                  </div>
                  <div className="text-[9.5px] text-muted-foreground">
                    QR paired · Locker synced
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* patient timeline strip */}
        <div className="hidden md:flex items-center gap-3 px-4 py-2.5 border-t border-border/70 bg-white overflow-hidden">
          <div className="text-[9.5px] uppercase tracking-wider text-muted-foreground font-semibold shrink-0">
            Patient timeline
          </div>
          <div className="relative flex-1 h-6 min-w-0">
            <div className="absolute left-2 right-2 top-1/2 h-px bg-border" />
            <div className="absolute inset-0 flex justify-between items-start px-2">
              {[
                { l: "2019 · Dx HTN", c: "bg-navy" },
                { l: "2022 · Lipids", c: "bg-cyan" },
                { l: "2024 · ECG", c: "bg-teal" },
                { l: "Today · Visit", c: "bg-rose-500" },
                { l: "+14d · F/U", c: "bg-amber-400" },
              ].map((p, i, a) => (
                <div
                  key={p.l}
                  className={`flex flex-col gap-0.5 ${
                    i === 0 ? "items-start" : i === a.length - 1 ? "items-end" : "items-center"
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full ${p.c} ring-2 ring-white`} />
                  <span className="text-[9px] text-muted-foreground whitespace-nowrap">
                    {p.l}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* footer chips */}
        <div className="flex items-center gap-3 px-4 py-2 border-t border-border/70 bg-secondary/30 text-[9.5px] text-muted-foreground">
          <Activity className="h-3 w-3" />
          <span>End-to-end encrypted</span>
          <span className="text-border">·</span>
          <span>ABDM compliant</span>
          <span className="text-border">·</span>
          <span>Doctor-in-the-loop</span>
        </div>
      </div>
    </div>
  );
}

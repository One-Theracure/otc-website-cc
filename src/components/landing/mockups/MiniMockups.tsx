import {
  Mic,
  CalendarClock,
  FileText,
  Pill,
  FlaskConical,
  ArrowRight,
  Stethoscope,
  Shield,
  QrCode,
  Heart,
  Users,
} from "lucide-react";

function Frame({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white border border-border/70 shadow-elegant overflow-hidden">
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-border/70 bg-secondary/30">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-red-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
        </div>
        <div className="text-[10px] text-muted-foreground font-medium tracking-wide">
          {label}
        </div>
        <span className="text-[9.5px] text-teal font-semibold tracking-wider">LIVE</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

/** BEFORE — Patient intake & guidance */
export function BeforeMockup() {
  return (
    <Frame label="Health Companion · Intake">
      <div className="flex items-center gap-2.5 mb-3">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan/30 to-teal/20 grid place-items-center text-navy">
          <Heart className="h-4 w-4" />
        </div>
        <div>
          <div className="text-[12px] font-semibold text-navy leading-tight">
            Anita Rao · Profile
          </div>
          <div className="text-[9.5px] text-muted-foreground">
            Switch profile · Mother · Father
          </div>
        </div>
      </div>

      <div className="text-[10px] uppercase tracking-wider text-muted-foreground/80 font-semibold mb-2">
        Symptoms
      </div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {["Cough · 5 days", "Fever 38.2°", "No breathlessness", "No chest pain"].map(
          (t) => (
            <span
              key={t}
              className="text-[10.5px] rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-foreground/75"
            >
              {t}
            </span>
          ),
        )}
      </div>

      <div className="rounded-lg border border-cyan/30 bg-cyan/5 p-2.5 mb-3">
        <div className="text-[10px] uppercase tracking-wider text-teal font-semibold">
          AI guidance
        </div>
        <p className="text-[11px] text-foreground/80 mt-1 leading-relaxed">
          Likely viral. Monitor; consult if persists past 7 days or if breathing changes.
        </p>
      </div>

      <div className="rounded-lg border border-border/70 bg-white p-2.5">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground/80 font-semibold mb-2">
          Right doctor for you
        </div>
        <div className="space-y-1.5">
          {[
            { n: "Dr. Mehta", s: "Pulmonology · 2.1 km" },
            { n: "Dr. Khan", s: "General Medicine · 800 m" },
          ].map((d) => (
            <div
              key={d.n}
              className="flex items-center justify-between text-[10.5px] rounded-md bg-secondary/40 px-2 py-1.5"
            >
              <div>
                <div className="font-medium text-navy">{d.n}</div>
                <div className="text-[9.5px] text-muted-foreground">{d.s}</div>
              </div>
              <ArrowRight className="h-3 w-3 text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/** DURING — ClinicOS encounter (slim) */
export function DuringMockup() {
  return (
    <Frame label="ClinicOS · Encounter">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-navy text-white text-[10px] grid place-items-center font-semibold">
            AR
          </div>
          <div>
            <div className="text-[12px] font-semibold text-navy leading-tight">
              Anita Rao · F · 54
            </div>
            <div className="text-[9.5px] text-muted-foreground">
              MRN 00482 · ABHA linked
            </div>
          </div>
        </div>
        <span className="text-[9.5px] font-medium text-rose-700 bg-rose-50 border border-rose-100 rounded-full px-2 py-0.5">
          Sulpha
        </span>
      </div>

      <div className="rounded-lg border border-border/70 bg-secondary/30 p-2.5 mb-3">
        <div className="flex items-center gap-2 text-[10.5px] font-semibold text-navy mb-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-rose-400 animate-pulse-dot" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
          </span>
          Recording · 04:21
          <Mic className="h-3 w-3 ml-auto text-muted-foreground" />
        </div>
        <p className="text-[10.5px] text-foreground/70 leading-relaxed">
          <span className="text-navy font-medium">Pt:</span> Chest tightness for 3 days, worse on stairs.
        </p>
      </div>

      <div className="rounded-lg border border-border/70 bg-white">
        <div className="px-3 py-1.5 border-b border-border/70 text-[10.5px] font-semibold text-navy">
          AI-drafted note · SOAP
        </div>
        <dl className="divide-hairline text-[10.5px]">
          {[
            { k: "S", v: "Exertional chest tightness × 3d." },
            { k: "O", v: "BP 142/92 · HR 84 · chest clear." },
            { k: "A", v: "Stable angina vs anxiety." },
            { k: "P", v: "ECG, troponin, lipid; aspirin 75." },
          ].map((row) => (
            <div key={row.k} className="flex gap-3 px-3 py-1.5">
              <span className="w-3 text-[10px] font-bold text-cyan">{row.k}</span>
              <span className="text-foreground/80">{row.v}</span>
            </div>
          ))}
        </dl>
        <div className="flex items-center justify-between px-3 py-1.5 border-t border-border/70">
          <span className="text-[9.5px] text-muted-foreground">Sources: 4</span>
          <button className="text-[10px] px-2.5 py-1 rounded-md bg-navy text-white">
            Approve
          </button>
        </div>
      </div>
    </Frame>
  );
}

/** AFTER — Continuity, follow-ups, QR */
export function AfterMockup() {
  return (
    <Frame label="Health Companion · Continuity">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground/80 font-semibold mb-2">
        Health timeline
      </div>
      <div className="relative pl-4 mb-4">
        <div className="absolute left-1 top-1 bottom-1 w-px bg-border" />
        {[
          { d: "Today", t: "OPD · Dr. Mehta", s: "Synced to ABHA" },
          { d: "Mar 12", t: "Lipid panel", s: "LDL 142 · flagged" },
          { d: "Feb 02", t: "Telmisartan started", s: "40mg daily" },
        ].map((row, i) => (
          <div key={i} className="relative mb-2.5 last:mb-0">
            <span className="absolute -left-[14px] top-1.5 h-2 w-2 rounded-full bg-cyan ring-2 ring-white" />
            <div className="text-[9.5px] text-muted-foreground">{row.d}</div>
            <div className="text-[10.5px] font-medium text-navy">{row.t}</div>
            <div className="text-[9.5px] text-muted-foreground">{row.s}</div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-border/70 bg-white">
        <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-border/70 text-[10.5px] font-semibold text-navy">
          <CalendarClock className="h-3 w-3" /> Follow-up engine
        </div>
        <ul className="divide-hairline">
          {[
            { i: FileText, t: "Review · 14 days", s: "WhatsApp scheduled", c: "text-cyan" },
            { i: FlaskConical, t: "HbA1c repeat", s: "Pending", c: "text-teal" },
            { i: Pill, t: "Refill · Telmisartan", s: "Auto-renewed", c: "text-navy" },
          ].map((row, i) => (
            <li key={i} className="flex items-center gap-2.5 px-3 py-1.5">
              <row.i className={`h-3 w-3 ${row.c}`} />
              <div className="text-[10.5px] flex-1">
                <div className="font-medium text-navy">{row.t}</div>
                <div className="text-[9.5px] text-muted-foreground">{row.s}</div>
              </div>
              <span className="text-[9.5px] text-teal font-semibold">Auto</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 flex items-center gap-2.5 rounded-lg border border-border/70 bg-secondary/30 p-2.5">
        <div className="h-9 w-9 rounded-md bg-white border border-border grid place-items-center">
          <QrCode className="h-4 w-4 text-navy" />
        </div>
        <div className="flex-1">
          <div className="text-[10.5px] font-semibold text-navy leading-tight">
            After-visit summary
          </div>
          <div className="text-[9.5px] text-muted-foreground">QR · ABHA · Locker</div>
        </div>
        <Shield className="h-3 w-3 text-emerald-600" />
      </div>
    </Frame>
  );
}

/** Ecosystem command map (used by InvestorMarket / optional) */
export function EcosystemMockup() {
  const nodes = [
    { i: Stethoscope, t: "Doctor" },
    { i: Users, t: "Patient" },
    { i: FileText, t: "Records" },
    { i: FlaskConical, t: "Lab" },
    { i: Pill, t: "Pharmacy" },
    { i: CalendarClock, t: "Follow-up" },
  ];
  return (
    <Frame label="Care command layer">
      <div className="grid grid-cols-3 gap-2">
        {nodes.map((n) => (
          <div
            key={n.t}
            className="flex flex-col items-center gap-1.5 rounded-lg border border-border/70 bg-white py-3"
          >
            <n.i className="h-4 w-4 text-navy" />
            <span className="text-[10px] text-foreground/80">{n.t}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

import type { ReactNode } from "react";

export function MockupFrame({
  label,
  children,
  className = "",
}: {
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass rounded-2xl p-3 shadow-elegant ${className}`}>
      <div className="flex items-center justify-between px-1.5 pb-2.5 border-b border-border/60">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-300/70" />
          <span className="h-2 w-2 rounded-full bg-amber-300/70" />
          <span className="h-2 w-2 rounded-full bg-emerald-300/70" />
        </div>
        {label && (
          <div className="text-[10px] text-muted-foreground font-medium tracking-wide">
            {label}
          </div>
        )}
        <span className="text-[10px] text-teal font-semibold tracking-wide">LIVE</span>
      </div>
      <div className="pt-3">{children}</div>
    </div>
  );
}
import type { MouseEvent } from "react";

export function smoothScrollTo(id: string) {
  if (typeof window === "undefined") return;
  if (id === "top") {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    history.replaceState(null, "", " ");
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

export function handleHashClick(href: string, after?: () => void) {
  return (e: MouseEvent) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    smoothScrollTo(href.slice(1));
    after?.();
  };
}
import { useEffect, useState } from "react";

export function useActiveSection(ids: string[], offset = 88) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!elements.length) return;

    const compute = () => {
      const probe = offset + 8;
      let current: string | null = null;
      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.top - probe <= 0) {
          current = el.id;
        } else {
          break;
        }
      }
      // Bottom of page → last section
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      ) {
        current = elements[elements.length - 1].id;
      }
      setActive(current);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [ids.join("|"), offset]);

  return active;
}

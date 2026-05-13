import { motion, useInView, useReducedMotion, type Variants, type HTMLMotionProps } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
} & Omit<HTMLMotionProps<"div">, "children">;

export function Reveal({
  children,
  delay = 0,
  y = 14,
  className,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const reduce = useReducedMotion();
  const [forceShow, setForceShow] = useState(false);

  // Safety net: if IntersectionObserver never fires (SSR/hydration races,
  // overflow:hidden ancestors, headless previews), force visibility after 800ms.
  useEffect(() => {
    const id = window.setTimeout(() => setForceShow(true), 800);
    return () => window.clearTimeout(id);
  }, []);

  const show = reduce || inView || forceShow;

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 1.05,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
  },
};

export function StaggerGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const reduce = useReducedMotion();
  const [forceShow, setForceShow] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setForceShow(true), 800);
    return () => window.clearTimeout(id);
  }, []);
  const show = reduce || inView || forceShow;

  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial={reduce ? "show" : "hidden"}
      animate={show ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}
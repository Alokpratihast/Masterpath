"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Raw stat string, e.g. "10+", "1.1K+", "54+", "4.8/5" */
  value: string;
  /** Animation duration in ms */
  duration?: number;
  className?: string;
};

function parseStat(value: string) {
  // Matches a leading number (with optional decimal) and captures the rest as suffix
  const match = value.match(/^(\d+(\.\d+)?)(.*)$/);

  if (!match) {
    return { end: 0, decimals: 0, suffix: value };
  }

  const numberPart = match[1];
  const suffix = match[3] ?? "";
  const decimals = numberPart.includes(".")
    ? numberPart.split(".")[1].length
    : 0;

  return {
    end: parseFloat(numberPart),
    decimals,
    suffix,
  };
}

export default function CountUp({
  value,
  duration = 1500,
  className = "",
}: CountUpProps) {
  const { end, decimals, suffix } = parseStat(value);
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const startTime = performance.now();

            const animate = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);

              setCurrent(end * eased);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCurrent(end);
              }
            };

            requestAnimationFrame(animate);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {current.toFixed(decimals)}
      {suffix}
    </span>
  );
}

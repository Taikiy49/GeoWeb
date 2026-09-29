import { useEffect, useRef } from "react";

/** Animate once on entry; assistive technology always reads the final fact. */
export function CountUp({ value }: { value: string }) {
  const number = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const element = number.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const target = Number.parseInt(value, 10);
    const suffix = value.replace(/^\d+/, "");
    let frame = 0;
    let observer: IntersectionObserver | undefined;
    const finish = () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      element.textContent = value;
    };
    const onPreferenceChange = () => {
      if (preference.matches) finish();
    };
    if (!preference.matches && "IntersectionObserver" in window && Number.isFinite(target)) {
      observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        observer?.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / 1400, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          element.textContent = `${Math.round(target * eased)}${suffix}`;
          if (progress < 1) frame = requestAnimationFrame(tick);
          else finish();
        };
        frame = requestAnimationFrame(tick);
      }, { threshold: 0.6 });
      observer.observe(element);
    }
    preference.addEventListener("change", onPreferenceChange);
    return () => {
      finish();
      preference.removeEventListener("change", onPreferenceChange);
    };
  }, [value]);
  return (
    <strong className="count-up">
      <span className="count-up-accessible">{value}</span>
      <span className="count-up-measure" aria-hidden="true">{value}</span>
      <span className="count-up-value" ref={number} aria-hidden="true">{value}</span>
    </strong>
  );
}

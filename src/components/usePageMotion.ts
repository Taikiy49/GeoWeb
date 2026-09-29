import { useEffect } from "react";

/** Progressive enhancement: content stays visible if observation or motion is unavailable. */
export function usePageMotion(route: string) {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;
    const start = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      if (preference.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            observer?.unobserve(entry.target);
            const animation = entry.target.animate(
              [
                { opacity: 0, transform: "translateY(24px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: 680,
                easing: "cubic-bezier(.2,.65,.3,1)",
                fill: "backwards",
              },
            );
            animations.add(animation);
            animation.onfinish = () => animations.delete(animation);
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
      );
      document
        .querySelectorAll(
          "main .section-heading, main .film-heading, main .film-viewer, main .filmstrip, main .company-intro > div, main .home-service-card, main .secondary-services > a, main .project-card, main .careers-copy, main .recognition > *, main .page-intro, main .service-card, main .capabilities article, main .leaders article, main .office-list article, main .benefits-grid article, main .awards-list article, main .prose, main .contact-band .container",
        )
        .forEach((element) => observer?.observe(element));
    };
    start();
    preference.addEventListener("change", start);
    return () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", start);
    };
  }, [route]);
}

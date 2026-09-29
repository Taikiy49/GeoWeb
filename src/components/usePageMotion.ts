import { useEffect, useRef } from "react";

/** Progressive enhancement: content stays visible if observation or motion is unavailable. */
export function usePageMotion(route: string) {
  const previousPath = useRef<string>();
  useEffect(() => {
    const path = route.split("?")[0];
    const filtering = previousPath.current === path;
    previousPath.current = path;
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
          const groupCounts = new Map<Element, number>();
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            observer?.unobserve(entry.target);
            const element = entry.target;
            const isGallery = element.matches(".project-card, .home-service-card, .leaders article, .benefits-grid article, .awards-list article, .office-list article, .three-columns article");
            const isPhoto = element.matches("img, .film-viewer, .panorama, .project-cover, .detail-hero");
            const isText = element.matches("h1, h2, h3, p, li, .eyebrow");
            const parent = element.parentElement;
            const order = (isGallery || isText) && parent ? (groupCounts.get(parent) ?? 0) : 0;
            if ((isGallery || isText) && parent) groupCounts.set(parent, order + 1);
            const from = isPhoto
              ? { opacity: 0.65, transform: "scale(.985)" }
              : { opacity: 0.55, transform: `translateY(${isGallery ? 14 : 8}px)` };
            const animation = element.animate(
              [
                from,
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: filtering ? 300 : isPhoto ? 600 : 420,
                delay: Math.min(order, 3) * 45,
                easing: "cubic-bezier(.16,1,.3,1)",
                fill: "backwards",
              },
            );
            animations.add(animation);
            animation.onfinish = () => animations.delete(animation);
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
      );
      const candidates = Array.from(document
        .querySelectorAll(
          filtering
            ? "main .project-card"
            : "main h1, main h2, main h3, main p, main li, main .eyebrow, main img, main .button, main .arrow-link, main .film-viewer, main .filmstrip, .footer-top h2, .footer-top p, .footer-links a, .footer-contact a",
        ));
      // Hero and film media already have authored motion. Keep numbers under
      // CountUp's ownership, and do not replay UI labels during search updates.
      const eligible = candidates.filter((element) =>
        !element.closest(".hero, .stats, .film-screen, .film-meta, .filmstrip, .portfolio-toolbar, .result-count")
        || element.matches(".filmstrip"),
      );
      const targets = new Set(eligible);
      eligible.forEach((element) => {
        let ancestor = element.parentElement;
        while (ancestor) {
          if (targets.has(ancestor)) return;
          ancestor = ancestor.parentElement;
        }
        observer?.observe(element);
      });
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

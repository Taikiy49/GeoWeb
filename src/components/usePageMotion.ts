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
            const isGallery = element.matches(".project-card, .home-service-card, .leaders article, .benefits-grid article, .awards-list article, .office-list article");
            const isPhoto = element.matches(".film-viewer, .recognition > img, .company-intro > div:first-child");
            const parent = element.parentElement;
            const order = isGallery && parent ? (groupCounts.get(parent) ?? 0) : 0;
            if (isGallery && parent) groupCounts.set(parent, order + 1);
            const from = isPhoto
              ? { opacity: 0.65, transform: "scale(.985)" }
              : { opacity: 0.55, transform: `translateY(${isGallery ? 18 : 10}px)` };
            const animation = element.animate(
              [
                from,
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: filtering ? 300 : isPhoto ? 700 : 520,
                delay: Math.min(order, 3) * 65,
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
      document
        .querySelectorAll(
          filtering
            ? "main .project-card"
            : "main .section-heading, main .film-heading, main .film-viewer, main .filmstrip, main .company-intro > div, main .home-service-card, main .secondary-services > a, main .project-card, main .careers-copy, main .recognition > *, main .page-intro, main .service-card, main .capabilities article, main .leaders article, main .office-list article, main .benefits-grid article, main .awards-list article, main .prose, main .contact-band .container, main .project-title, main .project-detail-image, main .team-photo, main .contact-main, main .application-box, .footer-top > div",
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

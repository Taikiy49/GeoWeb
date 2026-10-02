import { useEffect, useRef } from "react";

/** Progressive enhancement: content stays visible if observation or motion is unavailable. */
export function usePageMotion(route: string) {
  const previousRoute = useRef<string>();
  const revealed = useRef(new WeakSet<Element>());
  useEffect(() => {
    const path = route.split("?")[0];
    const filtering = previousRoute.current !== route
      && previousRoute.current?.split("?")[0] === path;
    if (previousRoute.current?.split("?")[0] !== path) revealed.current = new WeakSet();
    previousRoute.current = route;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const pending = new Set<Element>();
    const showPending = () => {
      pending.forEach((element) => element.removeAttribute("data-reveal-pending"));
      pending.clear();
    };
    let observer: IntersectionObserver | undefined;
    const start = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      showPending();
      if (preference.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(
        (entries) => {
          const groupCounts = new Map<Element, number>();
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            observer?.unobserve(entry.target);
            const element = entry.target;
            element.removeAttribute("data-reveal-pending");
            pending.delete(element);
            if (revealed.current.has(element)) return;
            revealed.current.add(element);
            const isGallery = element.matches(".project-card, .home-service-card, .leaders article, .benefits-grid article, .awards-list article, .office-list article, .three-columns article");
            const isPhoto = element.matches("img, .film-viewer, .panorama, .project-cover, .detail-hero");
            const isText = element.matches("h1, h2, h3, p, li, .eyebrow");
            const parent = element.parentElement;
            const order = (isGallery || isText) && parent ? (groupCounts.get(parent) ?? 0) : 0;
            if ((isGallery || isText) && parent) groupCounts.set(parent, order + 1);
            const from = isPhoto
              ? { opacity: 0.35, transform: "scale(.985)" }
              : { opacity: 0, transform: `translateY(${isGallery ? 22 : 18}px)` };
            const animation = element.animate(
              [
                from,
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: filtering ? 320 : isPhoto ? 750 : 650,
                delay: Math.min(order, 3) * 70,
                easing: "cubic-bezier(.16,1,.3,1)",
                fill: "backwards",
              },
            );
            animations.add(animation);
            animation.onfinish = () => animations.delete(animation);
          });
        },
        { threshold: 0, rootMargin: "0px 0px -36px 0px" },
      );
      const candidates = Array.from(document
        .querySelectorAll(
          filtering
            ? "main .project-card"
            : "main .project-card, main .home-service-card, main .service-card, main .leaders article, main .benefits-grid article, main .awards-list article, main .office-list article, main .three-columns article, main h1, main h2, main h3, main p, main li, main .eyebrow, main img, main .button, main .arrow-link, main .film-viewer, main .filmstrip, .footer-top h2, .footer-top p, .footer-links a, .footer-contact a",
        ));
      // Hero and film media already have authored motion. Keep numbers under
      // CountUp's ownership, and do not replay UI labels during search updates.
      const eligible = candidates.filter((element) =>
        !element.closest(".hero, .stats, .film-screen, .film-meta, .filmstrip, .portfolio-toolbar, .result-count, .service-approach details")
        || element.matches(".filmstrip"),
      );
      const targets = new Set(eligible);
      eligible.forEach((element) => {
        let ancestor = element.parentElement;
        while (ancestor) {
          if (targets.has(ancestor)) return;
          ancestor = ancestor.parentElement;
        }
        if (!revealed.current.has(element) && element.getBoundingClientRect().top >= window.innerHeight) {
          element.setAttribute("data-reveal-pending", "");
          pending.add(element);
        }
        observer?.observe(element);
      });
    };
    // Keyboard navigation must never land on an invisible action.
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest("[data-reveal-pending]");
      if (target) {
        target.removeAttribute("data-reveal-pending");
        pending.delete(target);
        revealed.current.add(target);
        observer?.unobserve(target);
      }
    };
    document.addEventListener("focusin", onFocus);
    start();
    preference.addEventListener("change", start);
    return () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      showPending();
      document.removeEventListener("focusin", onFocus);
      preference.removeEventListener("change", start);
    };
  }, [route]);
}

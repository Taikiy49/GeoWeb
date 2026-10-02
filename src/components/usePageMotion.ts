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
    let footerObserver: IntersectionObserver | undefined;
    const start = () => {
      observer?.disconnect();
      footerObserver?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      showPending();
      if (preference.matches || !("IntersectionObserver" in window)) return;
      const reveal: IntersectionObserverCallback = (entries) => {
          const groupCounts = new Map<Element, number>();
          entries.forEach((entry) => {
            const element = entry.target;
            if (!entry.isIntersecting) return;
            observer?.unobserve(element);
            footerObserver?.unobserve(element);
            element.removeAttribute("data-reveal-pending");
            pending.delete(element);
            if (revealed.current.has(element)) return;
            revealed.current.add(element);
            const isGallery = element.matches(".project-card, .home-service-card, .leaders article, .benefits-grid article, .awards-list article, .office-list article, .three-columns article");
            const isPhoto = element.matches("img, .film-viewer, .panorama, .project-cover, .detail-hero");
            const isText = !isPhoto;
            const parent = element.parentElement;
            const order = (isGallery || isText) && parent ? (groupCounts.get(parent) ?? 0) : 0;
            if ((isGallery || isText) && parent) groupCounts.set(parent, order + 1);
            const from = isPhoto
              ? { opacity: 0.35, transform: "scale(.985)" }
              : { opacity: 0, transform: `translateY(${isGallery ? 22 : 28}px)` };
            animations.forEach((active) => {
              if ((active.effect as KeyframeEffect)?.target === element) { active.cancel(); animations.delete(active); }
            });
            const animation = element.animate(
              [
                from,
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: filtering ? 320 : 1000,
                delay: filtering ? 0 : Math.min(order, 3) * 90,
                easing: filtering ? "cubic-bezier(.16,1,.3,1)" : "cubic-bezier(.4,0,.2,1)",
                fill: "backwards",
              },
            );
            animations.add(animation);
            animation.onfinish = () => animations.delete(animation);
          });
        };
      observer = new IntersectionObserver(reveal, { threshold: 0, rootMargin: `0px 0px -${Math.round(window.innerHeight * .15)}px 0px` });
      // The final footer lines cannot scroll farther into the page; reveal at the edge.
      footerObserver = new IntersectionObserver(reveal);
      const candidates = Array.from(document.querySelectorAll(
        filtering
          ? "main .project-card"
          : "main h1, main h2, main h3, main h4, main p, main li, main span, main strong, main address, main summary, main a, main figcaption, main dt, main dd, main .eyebrow, main img, main .portfolio-toolbar, main .filmstrip, .site-footer h2, .site-footer p, .site-footer a, .footer-facts span, .footer-legal span",
      ));
      // Text owns its entrance independently of tall photo/card containers.
      // Media, counters, live search feedback and opened disclosures retain their own motion.
      const eligible = candidates.filter((element) => {
        if (filtering) return true;
        if (element.closest(".hero, .count-up, .film-screen, .filmstrip, .result-count, [aria-live], [aria-hidden='true']")) return element.matches(".filmstrip");
        const details = element.closest("details");
        if (details && !element.matches("summary")) return false;
        if (element.matches("a") && element.querySelector("h1, h2, h3, p, img")) return false;
        return element.matches("img, .filmstrip") || !!element.textContent?.trim();
      });
      const targets = new Set(eligible);
      eligible.forEach((element) => {
        let ancestor = element.parentElement;
        while (ancestor) {
          if (targets.has(ancestor)) return;
          ancestor = ancestor.parentElement;
        }
        if (revealed.current.has(element)) return;
        if (element.getBoundingClientRect().top >= window.innerHeight * .85) {
          element.setAttribute("data-reveal-pending", "");
          pending.add(element);
        }
        element.setAttribute("data-reveal-target", "");
        if (element.closest(".site-footer")) footerObserver?.observe(element);
        else observer?.observe(element);
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
        footerObserver?.unobserve(target);
      }
    };
    document.addEventListener("focusin", onFocus);
    start();
    preference.addEventListener("change", start);
    window.addEventListener("resize", start);
    return () => {
      observer?.disconnect();
      footerObserver?.disconnect();
      animations.forEach((animation) => animation.cancel());
      showPending();
      document.removeEventListener("focusin", onFocus);
      preference.removeEventListener("change", start);
      window.removeEventListener("resize", start);
    };
  }, [route]);
}

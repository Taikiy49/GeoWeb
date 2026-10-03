import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X, ArrowRight } from "lucide-react";
import { ReadingProgress } from "./ReadingProgress";
import { usePageMotion } from "./usePageMotion";
import { applyUrl, offices } from "../data/site";
import { formatPhone, phoneHref } from "../data/phone";

export function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Geolabs home">
      <img
        src="/brand/geolabs-50th-anniversary.png"
        alt="Geolabs, Inc. — 50 years of geotechnical engineering and drilling services"
        width="906"
        height="300"
      />
    </Link>
  );
}
export function Shell() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  usePageMotion(location.pathname + location.search);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    setOpen(false);
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.getElementById("main")?.focus({ preventScroll: true });
      // Finish after the browser's link-focus scroll, including an interrupted smooth scroll.
      const frame = requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "instant" }));
      return () => cancelAnimationFrame(frame);
    }
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(location.hash.slice(1));
      target?.focus({ preventScroll: true });
      target?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOutside = (event: Event) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("focusin", closeOutside);
    return () => {
      window.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("focusin", closeOutside);
    };
  }, [open]);
  return (
    <>
      <ReadingProgress route={location.pathname + location.search} />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header
        ref={header}
        className="site-header"
        onClick={(event) => {
          if (open && event.target instanceof Element && event.target.closest("a")) {
            setOpen(false);
            menuButton.current?.focus({ preventScroll: true });
          }
        }}
      >
        <div className="header-inner">
          <Brand />
          <button
            ref={menuButton}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav
            id="site-nav"
            className={open ? "main-nav is-open" : "main-nav"}
            aria-label="Main navigation"
          >
            {[
              ["/about", "About us"],
              ["/services", "Services"],
              ["/projects", "Projects"],
              ["/people", "Our people"],
              ["/careers", "Careers"],
            ].map(([to, label]) => (
              <NavLink key={to} to={to}>
                {label}
              </NavLink>
            ))}
            <NavLink className="nav-contact" to="/contact">
              Contact us <ArrowUpRight size={17} />
            </NavLink>
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-identity">
            <Link className="footer-brand" to="/" aria-label="Geolabs home">
              <img
                src="/brand/geolabs-g.png"
                alt="Geolabs G logo"
                width="64"
                height="72"
              />
              <span>
                GEOLABS, INC.<small>ESTABLISHED 1975</small>
              </span>
            </Link>
            <p>
              Geotechnical engineering
              <br />
              and drilling services.
            </p>
          </div>
          <div className="footer-links">
            <h2>Explore</h2>
            {[
              ["/about", "About Geolabs"],
              ["/services", "Our services"],
              ["/projects", "Our projects"],
              ["/awards", "Awards & recognition"],
              ["/people", "Our people"],
            ].map(([to, label]) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
          </div>
          <div className="footer-links">
            <h2>Connect</h2>
            <Link to="/contact">Contact our offices</Link>
            <a href={applyUrl}>
              Apply online <ArrowUpRight size={13} />
            </a>
            <a
              href="https://www.linkedin.com/company/10666064/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight size={13} />
            </a>
            <Link to="/drafts">Draft project stories</Link>
            <a href={applyUrl}>
              Join our team <ArrowUpRight size={13} />
            </a>
          </div>
          <div className="footer-contact">
            <h2>Hawaiʻi office</h2>
            <p>
              {offices[0].address}
              <br />
              {offices[0].locality}
            </p>
            <div className="footer-contact-links">
              <a href={phoneHref(offices[0].phones[0])}>
                {formatPhone(offices[0].phones[0])}
              </a>
              <a href="mailto:hawaii@geolabs.net">hawaii@geolabs.net</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <div className="footer-facts">
            <span>HAWAIʻI · PACIFIC BASIN · CALIFORNIA</span>
            <span>Employee-owned since 1991</span>
          </div>
          <div className="footer-legal">
            <span>© {new Date().getFullYear()} Geolabs, Inc.</span>
            <span>Oʻahu · Maui · Kauaʻi · California</span>
            <Link to="/contact">
              Contact us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

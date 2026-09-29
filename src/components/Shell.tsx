import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X, ArrowRight } from "lucide-react";
import { usePageMotion } from "./usePageMotion";
import { applyUrl, offices } from "../data/site";

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
  useEffect(() => {
    setOpen(false);
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.getElementById("main")?.focus({ preventScroll: true });
    } else
      requestAnimationFrame(() =>
        document.getElementById(location.hash.slice(1))?.scrollIntoView(),
      );
  }, [location.pathname, location.hash]);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
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
          <div>
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
          </div>
          <div className="footer-contact">
            <h2>Hawaiʻi office</h2>
            <p>
              {offices[0].address}
              <br />
              {offices[0].locality}
            </p>
            <a href="tel:+18088415064">808.841.5064</a>
            <a href="mailto:hawaii@geolabs.net">hawaii@geolabs.net</a>
          </div>
        </div>
        <div className="utility">
          <span>HAWAIʻI · PACIFIC BASIN · CALIFORNIA</span>
          <div>
            <span>Employee-owned since 1991</span>
            <a href={applyUrl}>
              Join our team <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Geolabs, Inc.</span>
          <span>Oʻahu · Maui · Kauaʻi · California</span>
          <Link to="/contact">
            Contact us <ArrowRight size={14} />
          </Link>
        </div>
      </footer>
    </>
  );
}

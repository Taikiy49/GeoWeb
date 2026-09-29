import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Pause, Play } from "lucide-react";

export function HeroVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const hero = useRef<HTMLElement>(null);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const wantsPlayback = useRef(!reducedMotion);
  const syncPlayback = useRef<() => void>(() => {});

  useEffect(() => {
    const player = video.current;
    const section = hero.current;
    if (!player || !section) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = !("IntersectionObserver" in window);
    let disposed = false;
    const sync = () => {
      if (wantsPlayback.current && visible && !document.hidden) {
        if (player.paused) {
          void player.play().catch(() => {
            if (!disposed) setPlaying(false);
          });
        }
      } else player.pause();
    };
    syncPlayback.current = sync;
    const update = () => {
      setReducedMotion(preference.matches);
      if (preference.matches) wantsPlayback.current = false;
      sync();
    };
    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          sync();
        })
      : undefined;
    observer?.observe(section);
    sync();
    preference.addEventListener("change", update);
    document.addEventListener("visibilitychange", sync);
    return () => {
      disposed = true;
      observer?.disconnect();
      preference.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", sync);
      syncPlayback.current = () => {};
      player.pause();
    };
  }, [failed]);

  const togglePlayback = () => {
    const player = video.current;
    if (!player) return;
    wantsPlayback.current = player.paused;
    syncPlayback.current();
  };

  return (
    <section ref={hero} className="hero" aria-label="Geolabs geotechnical engineering">
      {failed ? (
        <img
          className="hero-video"
          src="/images/geolabs-cover-poster.webp"
          alt=""
          aria-hidden="true"
        />
      ) : (
        <video
          ref={video}
          className="hero-video"
          src="/videos/geolabs-cover.mp4"
          poster="/images/geolabs-cover-poster.webp"
          muted
          loop
          playsInline
          preload={reducedMotion ? "none" : "metadata"}
          aria-hidden="true"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setFailed(true)}
        />
      )}
      <div className="hero-shade" />
      <div className="container hero-content">
        <div className="eyebrow">
          <span>ESTABLISHED 1975</span>{" · "}<span>EMPLOYEE-OWNED SINCE 1991</span>
        </div>
        <h1>
          <span className="hero-title-line">
            <span>Geotechnical</span>
          </span>{" "}
          <span className="hero-title-line hero-title-accent">
            <span>engineering</span>
          </span>{" "}
          <span className="hero-title-sub">& drilling services</span>
        </h1>
        <p>Hawaiʻi · Pacific Basin · California</p>
        <div className="hero-actions">
          <Link className="button button-yellow" to="/services">
            Explore our services <ArrowUpRight size={19} />
          </Link>
          <Link className="button button-outline" to="/contact">
            Contact us <ArrowUpRight size={19} />
          </Link>
        </div>
      </div>
      <div className="container hero-bottom">
        {!failed && (
          <button
            className="video-control"
            onClick={togglePlayback}
            aria-label={
              playing ? "Pause background video" : "Play background video"
            }
          >
            {playing ? <Pause size={16} /> : <Play size={16} />}
            <span>{playing ? "Pause video" : "Play video"}</span>
          </button>
        )}
      </div>
    </section>
  );
}

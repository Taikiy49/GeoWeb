import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { image } from "../data/site";
import { featuredProjects as frames } from "../data/featuredProjects";

export function FeaturedFilm() {
  const [selected, setSelected] = useState(2);
  const [playing, setPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const video = useRef<HTMLVideoElement>(null);
  const retry = useRef<HTMLButtonElement>(null);
  const transferFocus = useRef(false);
  const frame = frames[selected];
  useLayoutEffect(() => {
    const button = buttons.current[selected];
    const strip = button?.parentElement;
    if (!button || !strip) return;
    const center = () => {
      const buttonBounds = button.getBoundingClientRect();
      const stripBounds = strip.getBoundingClientRect();
      strip.scrollTo({
        left: strip.scrollLeft + buttonBounds.left - stripBounds.left
          - (strip.clientWidth - buttonBounds.width) / 2,
        behavior: "instant",
      });
    };
    center();
    const observer = "ResizeObserver" in window ? new ResizeObserver(center) : undefined;
    observer?.observe(strip);
    return () => observer?.disconnect();
  }, [selected]);
  useEffect(() => {
    if (!transferFocus.current) return;
    const target = playing ? video.current : videoError ? retry.current : null;
    if (target) {
      target.focus({ preventScroll: true });
      transferFocus.current = false;
    }
  }, [playing, videoError]);
  const select = (index: number, focus = false) => {
    const next = (index + frames.length) % frames.length;
    setSelected(next);
    setPlaying(false);
    setVideoError(false);
    transferFocus.current = false;
    if (focus) buttons.current[next]?.focus({ preventScroll: true });
  };
  return (
    <section
      className="featured-film section"
      aria-labelledby="featured-heading"
    >
      <div className="container film-container">
        <div className="film-heading">
          <span className="eyebrow">HAWAIʻI & THE PACIFIC</span>
          <h2 id="featured-heading">Featured projects</h2>
        </div>
        <div
          className="film-viewer"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured project photography and video"
        >
          <div
            className="film-screen"
            key={frame.image}
            role="group"
            aria-roledescription="slide"
            aria-label={`${selected + 1} of ${frames.length}: ${frame.title}`}
          >
            {playing && frame.video ? (
              <video
                ref={video}
                tabIndex={0}
                className="film-media"
                src="/videos/ala-moana-walkway.mp4"
                poster={image(frame.image)}
                controls
                autoPlay
                playsInline
                onError={() => {
                  transferFocus.current = transferFocus.current || document.activeElement === video.current;
                  setPlaying(false);
                  setVideoError(true);
                }}
                aria-label="Ala Moana Elevated Pedestrian Walkway — video courtesy of HDOT"
              />
            ) : (
              <>
                <img
                  className="film-media"
                  src={image(frame.image)}
                  alt={frame.title}
                  loading="lazy"
                />
                <div className="film-shade" />
                <div className="film-title">
                  {frame.location && <span className="eyebrow">{frame.location}</span>}
                  <h3>{frame.title}</h3>
                </div>
                {frame.video && !videoError && (
                  <button
                    className="film-play"
                    onClick={() => {
                      transferFocus.current = true;
                      setPlaying(true);
                    }}
                    aria-label="Play Ala Moana walkway video"
                  >
                    <Play size={30} fill="currentColor" />
                    <span>Play film</span>
                  </button>
                )}
                {videoError && (
                  <p className="film-error" role="status">
                    Video could not load.{" "}
                    <button
                      ref={retry}
                      onClick={() => {
                        transferFocus.current = true;
                        setVideoError(false);
                        setPlaying(true);
                      }}
                    >
                      Try again
                    </button>
                  </p>
                )}
              </>
            )}
          </div>
          <div className="film-meta">
            <div className="film-current" aria-live="polite">
              <span className="film-count">
                {String(selected + 1).padStart(2, "0")} / {String(frames.length).padStart(2, "0")}
              </span>
              <span>{frame.title}</span>
            </div>
            <span className="film-credit">
              {frame.video ? "Video courtesy: HDOT" : frame.credit || frame.location}
            </span>
            <div className="film-arrows">
              <button
                onClick={() => select(selected - 1)}
                aria-label="Previous featured project"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => select(selected + 1)}
                aria-label="Next featured project"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="filmstrip" role="group" aria-label="Choose a featured project">
          {frames.map((item, index) => (
            <button
              ref={(el) => {
                buttons.current[index] = el;
              }}
              key={item.image}
              className={`film-frame ${selected === index ? "is-selected" : ""}`}
              aria-label={`Show ${item.title}`}
              aria-pressed={selected === index}
              onClick={() => select(index)}
              onKeyDown={(event) => {
                if (
                  !["ArrowLeft", "ArrowRight", "Home", "End"].includes(
                    event.key,
                  )
                )
                  return;
                event.preventDefault();
                select(
                  event.key === "Home"
                    ? 0
                    : event.key === "End"
                      ? frames.length - 1
                      : index + (event.key === "ArrowRight" ? 1 : -1),
                  true,
                );
              }}
            >
              <span className="film-thumb">
                <img src={image(item.image)} alt="" loading="lazy" />
                {item.video && <Play size={18} fill="currentColor" />}
                <span>{item.title}</span>
              </span>
            </button>
          ))}
        </div>
        <div className="film-actions">
          <Link className="button button-yellow" to="/projects">
            View all projects <ArrowUpRight size={19} />
          </Link>
          {frame.slug && (
            <Link className="arrow-link" to={`/projects/${frame.slug}`}>
              Explore this project <ArrowUpRight size={18} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

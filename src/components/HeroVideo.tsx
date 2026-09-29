import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Pause, Play } from "lucide-react";

const watchUrl = "https://www.youtube.com/watch?v=tbyqrhBD-hA";

export function HeroVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReducedMotion(preference.matches);
      if (preference.matches) video.current?.pause();
    };
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  const togglePlayback = async () => {
    const player = video.current;
    if (!player) return;
    if (!player.paused) player.pause();
    else {
      try {
        await player.play();
      } catch {
        setPlaying(false);
      }
    }
  };

  return (
    <section className="hero" aria-label="Geolabs geotechnical engineering">
      {failed ? (
        <img
          className="hero-video"
          src="/images/geolabs-cover-poster.webp"
          alt="Geolabs drilling operations"
        />
      ) : (
        <video
          ref={video}
          className="hero-video"
          src="/videos/geolabs-cover.mp4"
          poster="/images/geolabs-cover-poster.webp"
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          preload={reducedMotion ? "none" : "metadata"}
          aria-label="Geolabs cover: drilling operations"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setFailed(true)}
        />
      )}
      <div className="hero-shade" />
      <div className="container hero-content">
        <div className="eyebrow">
          <span className="yellow-line" /> ESTABLISHED 1975 · EMPLOYEE-OWNED
          SINCE 1991
        </div>
        <h1>
          Geotechnical
          <br />
          engineering<span>& drilling services</span>
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
        <div className="hero-project">
          <span className="eyebrow">GEOLABS IN THE FIELD</span>
          <a href={watchUrl} target="_blank" rel="noreferrer">
            Watch the full video <ArrowUpRight size={18} />
          </a>
        </div>
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

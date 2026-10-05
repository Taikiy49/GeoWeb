import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { image, leaders } from "../data/site";

const leaderSlugs = ["robin-lim", "gerald-seki", "john-chen", "payton-kiuchi"];

/** Portraits lead to one readable profile, like the authored Wix slideshow. */
export function LeadershipGallery() {
  const { hash } = useLocation();
  const selected = Math.max(0, leaderSlugs.indexOf(hash.slice(1)));
  const profile = useRef<HTMLElement>(null);
  const leader = leaders[selected];
  return <>
    <div className="leadership-portraits" aria-label="Leadership profiles">
      {leaders.map((person, index) => <Link
        key={person.name}
        to={`/people#${leaderSlugs[index]}`}
        aria-label={`View ${person.name}’s profile`}
        aria-current={selected === index ? "true" : undefined}
        className={`leadership-portrait${selected === index ? " is-selected" : ""}`}
        onClick={event => {
          if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          requestAnimationFrame(() => {
            profile.current?.focus({ preventScroll: true });
            profile.current?.scrollIntoView();
          });
        }}
      >
        <div className="leadership-image">
          <img src={image(person.image)} alt={person.name} width="400" height="500" decoding="async" />
          <div className="portrait-reveal" aria-hidden="true">
            {person.experience && <p>{person.experience}</p>}
            <span>View profile <ArrowRight size={20} /></span>
          </div>
        </div>
        <div className="leadership-name"><h3>{person.name}</h3><p>{person.role}</p><ArrowUpRight size={20} aria-hidden="true" /></div>
      </Link>)}
    </div>
    <section ref={profile} id={leaderSlugs[selected]} tabIndex={-1} className="leadership-profile" aria-labelledby="profile-name">
      <img key={leader.image} src={image(leader.image)} alt={leader.name} width="400" height="500" decoding="async" loading="lazy" />
      <div className="profile-content" key={leader.name}>
        <div className="profile-heading"><h2 id="profile-name">{leader.name}</h2><p>{leader.role}</p></div>
        {leader.education ? <dl className="profile-credentials">
          <div><dt>Years of Experience</dt><dd>{leader.experience}</dd></div>
          <div><dt>Education</dt><dd>{leader.education.map(text => <p key={text}>{text}</p>)}</dd></div>
          <div><dt>Professional Registration</dt><dd>{leader.registration?.split("; ").map(text => <p key={text}>{text}</p>)}</dd></div>
          <div><dt>Email</dt><dd><a className="arrow-link" href={`mailto:${leader.email}`}>{leader.email}<ArrowUpRight size={18} aria-hidden="true" /></a></dd></div>
        </dl> : <p className="profile-construction">Profile under construction</p>}
        <nav className="profile-navigation" aria-label="Browse leadership profiles">
          <Link to={`/people#${leaderSlugs[(selected + leaders.length - 1) % leaders.length]}`}>Previous profile</Link>
          <Link to={`/people#${leaderSlugs[(selected + 1) % leaders.length]}`}>Next profile <ArrowRight size={18} aria-hidden="true" /></Link>
        </nav>
      </div>
    </section>
  </>;
}

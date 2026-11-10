import { useRef } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { image } from "../data/site";
import imageSizes from "../data/image-sizes.json";
import "./RegionalStories.css";

const photoDimensions: Record<string, number[]> = imageSizes;
type Milestone = { year: string; title: string; image?: string; credit?: string; to?: string; pending?: string; verified?: boolean; description?: string };

// These are Wix concept years, not verified engagement or completion dates.
const koOlinaConcept: Milestone[] = [
  { year: "1959", title: "Old Ko Olina", pending: "Historic imagery awaiting review" },
  { year: "1986", title: "Ko Olina Lagoons", image: "lagoon", credit: "Aloha Secrets", to: "/drafts/koolina-lagoons" },
  { year: "2003", title: "Marriott’s Ko Olina Beach Club", image: "marriott", credit: "Marriott", to: "/drafts/marriott" },
  { year: "2007", title: "Ko Olina Beach Villas", image: "villas", credit: "Vacation Koʻolina", to: "/drafts/beach-villas" },
  { year: "2011", title: "Aulani", image: "aulani", credit: "Disney Vacation Club", to: "/drafts/aulani" },
  { year: "2025", title: "Ecology Center", pending: "Project information awaiting review" },
];
const waikikiConcept: Milestone[] = [
  { year: "2014", title: "Outrigger Reef Renovation" },
  { year: "2016", title: "International Market Place", image: "marketplace", credit: "International Market Place", to: "/projects/international-marketplace", verified: true, description: "A gathering place, reimagined. Highly variable ground, protected trees and archaeological concerns shaped the foundation work. Geotechnical engineers: SME and Geolabs, Inc." },
  { year: "2017", title: "Waikīkī Beach Walk Phase 2" },
  { year: "2018", title: "Ritz-Carlton Residences" },
  { year: "2019", title: "Queen Kapiʻolani Hotel" },
  { year: "2022", title: "Royal Hawaiian Center" },
];

function StoryPhoto({ name, alt, eager = false }: { name: string; alt: string; eager?: boolean }) {
  return <img src={image(name)} alt={alt} width={photoDimensions[name]?.[0]}
    height={photoDimensions[name]?.[1]} loading={eager ? "eager" : "lazy"} decoding="async" data-subject={name} />;
}

/** Photographic regional chronology; source concepts remain distinct from verified work. */
export function RegionalStories({ compact = false }: { compact?: boolean }) {
  const [params] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const milestoneButtons = useRef<(HTMLButtonElement | null)[]>([]);
  const waikiki = params.get("region") !== "ko-olina";
  const milestones = waikiki ? waikikiConcept : koOlinaConcept;
  const requestedIndex = milestones.findIndex(item => item.year === params.get("milestone"));
  const selectedIndex = requestedIndex >= 0 ? requestedIndex : 1;
  const selected = milestones[selectedIndex];
  const region = waikiki ? "Waikīkī" : "Ko Olina";
  const photo = selected.image || (waikiki ? "marketplace" : "lagoon");
  const photoCredit = selected.image ? `${selected.title} · Photo: ${selected.credit}`
    : waikiki ? "Regional setting: International Market Place · Photo: International Market Place"
      : "Present-day regional setting: Ko Olina Lagoons · Photo: Aloha Secrets";
  const projectReturnTo = location.pathname === "/projects"
    ? `${location.pathname}${location.search}#project-regional-stories` : undefined;
  const storyState = projectReturnTo ? { projectReturnTo } : undefined;
  const updateSelection = (next: URLSearchParams) => navigate({
    pathname: location.pathname, search: next.toString(), hash: location.hash,
  }, { replace: true, preventScrollReset: true });
  const selectRegion = (nextRegion: string) => {
    const next = new URLSearchParams(params);
    if (nextRegion === "ko-olina") next.set("region", nextRegion);
    else next.delete("region");
    next.delete("milestone");
    updateSelection(next);
  };
  const selectMilestone = (index: number, focus = false) => {
    const next = new URLSearchParams(params);
    next.set("milestone", milestones[index].year);
    updateSelection(next);
    if (focus) milestoneButtons.current[index]?.focus();
  };

  return (
    <section id="project-regional-stories" className="container regional-stories" aria-labelledby="regional-stories-heading" tabIndex={-1}>
      <div className="regional-heading">
        <div>
          <h2 id="regional-stories-heading">Places over time</h2>
          <p>Two places. Many chapters. Follow a shoreline through the years.</p>
        </div>
        <div className="regional-selector" role="group" aria-label="Choose a regional story">
          <button aria-pressed={!waikiki} aria-controls="regional-story-content" onClick={() => selectRegion("ko-olina")}>Ko Olina</button>
          <button aria-pressed={waikiki} aria-controls="regional-story-content" onClick={() => selectRegion("waikiki")}>Waikīkī</button>
        </div>
      </div>
      <div id="regional-story-content" className="regional-experience">
        <div className="regional-stage">
          <figure className="regional-scene">
            <div className="regional-scene-image" key={photo}><StoryPhoto name={photo} alt={selected.image ? selected.title : waikiki ? "International Market Place in Waikīkī, shown as a regional setting, not as the selected project" : "Present-day Ko Olina Lagoons, not historic imagery"} eager /></div>
            <div className="regional-scene-title"><h3>{region}</h3><p>{waikiki ? "2014–2022" : "1959–2025"}<span>Proposed chronology</span></p></div>
            <figcaption>{photoCredit}</figcaption>
          </figure>
          <div className="regional-chapter" id="regional-selected-chapter" aria-labelledby="regional-chapter-title">
            <div className="regional-chapter-top"><span className="regional-status">{selected.verified ? "Completed August 2016" : "Draft chronology"}</span><span>{selectedIndex + 1} / {milestones.length}</span></div>
            <div className="regional-chapter-copy" key={`${region}-${selected.year}`}>
              <span className="regional-selected-year">{selected.year}</span>
              <h4 id="regional-chapter-title">{selected.title}</h4>
              <p>{selected.description ? selected.description : selected.pending ? `${selected.pending}. This chapter is part of the original Wix concept.` : `A proposed chapter in the ${region} story. Its date and Geolabs’ role are awaiting review.`}</p>
              {selected.to ? <Link to={selected.to} state={storyState}>{selected.verified ? "Read the project story" : "Explore the draft story"} <ArrowUpRight size={18} aria-hidden="true" /></Link>
                : <Link to={waikiki ? "/projects/international-marketplace" : "/drafts"} state={storyState}>{waikiki ? "Read a verified Waikīkī story" : "View stories in development"}<ArrowUpRight size={18} aria-hidden="true" /></Link>}
            </div>
            <div className="regional-step-controls">
              <span>Explore the timeline</span>
              <button aria-label="Previous milestone" disabled={selectedIndex === 0} onClick={() => selectMilestone(selectedIndex - 1)}><ArrowLeft size={19} aria-hidden="true" /></button>
              <button aria-label="Next milestone" disabled={selectedIndex === milestones.length - 1} onClick={() => selectMilestone(selectedIndex + 1)}><ArrowRight size={19} aria-hidden="true" /></button>
            </div>
          </div>
        </div>
        <ol className={`regional-timeline${waikiki ? " regional-timeline-text" : ""}`} aria-label={`${region} proposed milestones`} aria-describedby="regional-concept-note">
          {milestones.map((milestone, index) => <li key={`${region}-${milestone.year}`}>
            <button ref={element => { milestoneButtons.current[index] = element; }} aria-pressed={selectedIndex === index} aria-controls="regional-selected-chapter" aria-label={`${milestone.year}: ${milestone.title}`} onClick={() => selectMilestone(index)} onKeyDown={event => {
              const target = event.key === "ArrowRight" ? (index + 1) % milestones.length : event.key === "ArrowLeft" ? (index + milestones.length - 1) % milestones.length : event.key === "Home" ? 0 : event.key === "End" ? milestones.length - 1 : -1;
              if (target >= 0) { event.preventDefault(); selectMilestone(target, true); }
            }}>
              <span className="regional-timeline-node" aria-hidden="true" />
              <span className="regional-year">{milestone.year}</span>
              {!waikiki && <span className="regional-timeline-image">{milestone.image ? <StoryPhoto name={milestone.image} alt="" /> : <span>{index === 0 ? "Earlier chapter" : "Next chapter"}</span>}</span>}
              <span className="regional-milestone-title">{milestone.title}</span>
              {waikiki && <small className="regional-milestone-status">{milestone.verified ? "Completed project" : "Draft chapter"}</small>}
            </button>
          </li>)}
        </ol>
        <p className="sr-only" role="status">{region}: {selected.year}, {selected.title} selected.</p>
      </div>
      <div className="regional-source-note">
        <p id="regional-concept-note"><strong>Proposed {region} chronology.</strong> {waikiki ? "International Market Place was completed in August 2016. The other milestones reproduce the Wix concept; their dates, photographs and Geolabs’ role await review." : "Years reproduce the Wix concept. Dates, photographs and Geolabs’ role are awaiting review."} Regional setting photographs do not depict unverified milestones.</p>
        <Link className="regional-development-link" to="/drafts">Stories in development <ArrowUpRight size={15} aria-hidden="true" /></Link>
      </div>
      {waikiki && !compact && <div className="waikiki-chapters">
        <ol className="waikiki-history">
          <li><span className="regional-year">1960s–1970s</span><h4>A gathering place</h4><p>The project story recalls Duke Kahanamoku’s restaurant and the crowds who came to hear Don Ho, followed by the open-air market’s small vendors.</p></li>
          <li><span className="regional-year">2016</span><h4>A new chapter</h4><p>Completed in August 2016, the reimagined International Market Place brought new shops and open-air courts around the protected banyan tree.</p><Link to="/projects/international-marketplace" state={storyState}>Read the project story <ArrowUpRight size={17} aria-hidden="true" /></Link></li>
        </ol>
        <figure className="waikiki-story-photo"><StoryPhoto name="marketplace" alt="The reimagined International Market Place in Waikīkī" /><figcaption>International Market Place · Photo: International Market Place</figcaption></figure>
      </div>}
      {waikiki && <div className="regional-related">
        <h4>More Waikīkī project stories in development</h4>
        <div className="regional-related-grid">
          <Link to="/drafts/hilton-grand-islander" state={storyState}><div><StoryPhoto name="gallery-hilton-grand-islander" alt="Hilton Grand Islander" /></div><span>Hilton Grand Islander <ArrowUpRight size={17} aria-hidden="true" /></span><small>Under construction</small></Link>
          <Link to="/drafts/hilton-grand-waikikian" state={storyState}><div><StoryPhoto name="hilton-grand-waikikian" alt="Hilton Grand Waikikian" /></div><span>Hilton Grand Waikikian <ArrowUpRight size={17} aria-hidden="true" /></span><small>Under construction · Photo: Booking.com</small></Link>
        </div>
      </div>}
    </section>
  );
}

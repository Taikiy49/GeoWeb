import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { image } from "../data/site";
import imageSizes from "../data/image-sizes.json";
import "./RegionalStories.css";

const photoDimensions: Record<string, number[]> = imageSizes;

// Years and their associations come from the supplied notes (pp. 5–6) and Wix
// Resorts concept. They are intentionally not presented as approved project dates.
const koOlinaConcept = [
  { year: "1959", title: "Old Ko Olina", image: "", credit: "", to: "", pending: "Historic imagery awaiting review" },
  { year: "1986", title: "Ko Olina Lagoons", image: "lagoon", credit: "Aloha Secrets", to: "/drafts/koolina-lagoons", pending: "" },
  { year: "2003", title: "Marriott’s Ko Olina Beach Club", image: "marriott", credit: "Marriott", to: "/drafts/marriott", pending: "" },
  { year: "2007", title: "Ko Olina Beach Villas", image: "villas", credit: "Vacation Koʻolina", to: "/drafts/beach-villas", pending: "" },
  { year: "2011", title: "Aulani", image: "aulani", credit: "Disney Vacation Club", to: "/drafts/aulani", pending: "" },
  { year: "2025", title: "Ecology Center", image: "", credit: "", to: "", pending: "Project information awaiting review" },
];

const waikikiConcept = [
  { year: "2014", title: "Outrigger Reef Renovation" },
  { year: "2017", title: "Waikīkī Beach Walk Phase 2" },
  { year: "2018", title: "Ritz-Carlton Residences" },
  { year: "2019", title: "Queen Kapiʻolani Hotel" },
  { year: "2022", title: "Royal Hawaiian Center" },
];

function StoryPhoto({ name, alt }: { name: string; alt: string }) {
  return <img src={image(name)} alt={alt} width={photoDimensions[name]?.[0]}
    height={photoDimensions[name]?.[1]} loading="lazy" decoding="async" data-subject={name} />;
}

/** Regional narratives keep source concepts visibly distinct from completed stories. */
export function RegionalStories() {
  const [params, setParams] = useSearchParams();
  const location = useLocation();
  const waikiki = params.get("region") === "waikiki";
  const projectReturnTo = location.pathname === "/projects"
    ? `${location.pathname}${location.search}#project-regional-stories`
    : undefined;
  const storyState = projectReturnTo ? { projectReturnTo } : undefined;
  const selectRegion = (region: string) => {
    const next = new URLSearchParams(params);
    if (region === "waikiki") next.set("region", region);
    else next.delete("region");
    setParams(next, { replace: true });
  };

  return (
    <section id="project-regional-stories" className="container regional-stories" aria-labelledby="regional-stories-heading" tabIndex={-1}>
      <div className="regional-heading">
        <div>
          <h2 id="regional-stories-heading">Places over time</h2>
          <p>Follow the stories of Ko Olina and Waikīkī through the years.</p>
          <Link className="regional-development-link" to="/drafts">Stories in development <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
        <div className="regional-selector" role="group" aria-label="Choose a regional story">
          <button aria-pressed={!waikiki} aria-controls="regional-story-content" onClick={() => selectRegion("ko-olina")}>Ko Olina</button>
          <button aria-pressed={waikiki} aria-controls="regional-story-content" onClick={() => selectRegion("waikiki")}>Waikīkī</button>
        </div>
      </div>
      <div id="regional-story-content">
        {!waikiki ? (
          <div className="regional-ko-olina">
            <div className="regional-story-intro">
              <h3>Ko Olina</h3>
              <p id="regional-concept-note"><span className="regional-status">Draft chronology</span> Years reproduce the Wix concept. Dates and Geolabs’ role are awaiting review.</p>
            </div>
            <ol className="regional-timeline" aria-describedby="regional-concept-note">
              {koOlinaConcept.map((milestone) => (
                <li key={milestone.year}>
                  <span className="regional-year">{milestone.year}</span>
                  <div className="regional-milestone-photo">
                    {milestone.image ? <StoryPhoto name={milestone.image} alt={milestone.title} /> : <p>{milestone.pending}</p>}
                  </div>
                  <div className="regional-milestone-copy">
                    <h4>{milestone.title}</h4>
                    {milestone.to && <Link to={milestone.to} state={storyState}>Draft story <ArrowUpRight size={15} aria-hidden="true" /></Link>}
                    {milestone.credit && <p className="regional-photo-credit">Photo: {milestone.credit}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div className="regional-waikiki">
            <div className="regional-story-intro">
              <h3>Waikīkī</h3>
              <p>International Market Place: an earlier chapter and its 2016 transformation.</p>
            </div>
            <div className="waikiki-chapters">
              <ol className="waikiki-history">
                <li>
                  <span className="regional-year">1960s–1970s</span>
                  <h4>A gathering place</h4>
                  <p>The project story recalls Duke Kahanamoku’s restaurant and the crowds who came to hear Don Ho, followed by the open-air market’s small vendors.</p>
                </li>
                <li>
                  <span className="regional-year">2016</span>
                  <h4>A new chapter</h4>
                  <p>Completed in August 2016, the reimagined International Market Place brought new shops and open-air courts around the protected banyan tree.</p>
                  <Link to="/projects/international-marketplace" state={storyState}>Read the project story <ArrowUpRight size={17} aria-hidden="true" /></Link>
                </li>
              </ol>
              <figure className="waikiki-story-photo">
                <StoryPhoto name="marketplace" alt="The reimagined International Market Place in Waikīkī" />
                <figcaption>International Market Place · Photo: International Market Place</figcaption>
              </figure>
            </div>
            <div className="waikiki-concept">
              <h4>Proposed Waikīkī chronology</h4>
              <p id="waikiki-concept-note"><span className="regional-status">Draft chronology</span> Years reproduce the Wix concept. Dates, photographs and Geolabs’ role are awaiting review.</p>
              <ol className="regional-concept-list" aria-describedby="waikiki-concept-note">
                {waikikiConcept.map((milestone) => <li key={milestone.year}><span className="regional-year">{milestone.year}</span><span>{milestone.title}</span></li>)}
              </ol>
            </div>
            <div className="regional-related">
              <h4>More Waikīkī project stories in development</h4>
              <div className="regional-related-grid">
                <Link to="/drafts/hilton-grand-islander" state={storyState}>
                  <div><StoryPhoto name="gallery-hilton-grand-islander" alt="Hilton Grand Islander" /></div>
                  <span>Hilton Grand Islander <ArrowUpRight size={17} aria-hidden="true" /></span>
                  <small>Under construction</small>
                </Link>
                <Link to="/drafts/hilton-grand-waikikian" state={storyState}>
                  <div><StoryPhoto name="hilton-grand-waikikian" alt="Hilton Grand Waikikian" /></div>
                  <span>Hilton Grand Waikikian <ArrowUpRight size={17} aria-hidden="true" /></span>
                  <small>Under construction · Photo: Booking.com</small>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

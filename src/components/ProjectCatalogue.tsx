import { useRef } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ArrowDown, ArrowUpRight, LayoutGrid, List, Search, X } from "lucide-react";
import { image, type Project } from "../data/site";
import imageSizes from "../data/image-sizes.json";
import { normalizeProjectSearch } from "../data/projectSearch";
import "./ProjectCatalogue.css";

const photoDimensions: Record<string, number[]> = imageSizes;

/** The catalogue owns its browsing state; details receive the original return link. */
export function ProjectCatalogue({ projects }: { projects: Project[] }) {
  const [params, setParams] = useSearchParams();
  const location = useLocation();
  const input = useRef<HTMLInputElement>(null);
  const query = params.get("q") || "";
  const requestedMarket = params.get("market") || "All projects";
  const markets = ["All projects", ...new Set(projects.map((project) => project.market))];
  const market = markets.includes(requestedMarket) ? requestedMarket : "All projects";
  const listView = params.get("view") === "list";
  const normalizedQuery = normalizeProjectSearch(query);
  const found = projects.filter((project) =>
    (market === "All projects" || project.market === market)
      && normalizeProjectSearch(`${project.title} ${project.location} ${project.summary}`)
        .includes(normalizedQuery),
  );
  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value && value !== "All projects") next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };
  const clearFilters = () => {
    const next = new URLSearchParams(params);
    next.delete("q");
    next.delete("market");
    setParams(next, { replace: true });
    input.current?.focus();
  };

  return (
    <section className="container project-catalogue" aria-label="Project catalogue">
      <div className="portfolio-toolbar">
        <div className="mobile-market-filter">
          <label htmlFor="project-category">Project category</label>
          <select id="project-category" value={market} onChange={(event) => update("market", event.target.value)}>
            {markets.map((category) => <option key={category} value={category}>{category}</option>)}
          </select>
        </div>
        <div className="filter-tabs" role="group" aria-label="Filter projects by market">
          {markets.map((category) => (
            <button key={category} className={market === category ? "selected" : ""}
              aria-pressed={market === category} onClick={() => update("market", category)}>
              {category}
            </button>
          ))}
        </div>
        <div className="search-field">
          <Search size={18} aria-hidden="true" />
          <input ref={input} type="search" name="project-search" autoComplete="off"
            aria-label="Search projects" placeholder="Find a project" value={query}
            onChange={(event) => update("q", event.target.value)} />
          {query && (
            <button aria-label="Clear project search" onClick={() => { update("q", ""); input.current?.focus(); }}>
              <X size={17} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
      <div className="portfolio-results-bar catalogue-results-bar">
        <p className="result-count" aria-live="polite">{found.length} {found.length === 1 ? "project" : "projects"}</p>
        <Link className="catalogue-regions-link" to={`${location.pathname}${location.search}#project-regional-stories`}>
          Places over time <ArrowDown size={16} aria-hidden="true" />
        </Link>
        <div className="portfolio-view" role="group" aria-label="Project display">
          <button aria-pressed={!listView} onClick={() => update("view", "")}><LayoutGrid size={17} aria-hidden="true" /> Gallery</button>
          <button aria-pressed={listView} onClick={() => update("view", "list")}><List size={19} aria-hidden="true" /> List</button>
        </div>
      </div>
      <div className={`catalogue-grid${listView ? " catalogue-grid-list" : ""}`}>
        {found.map((project) => {
          const cardId = `project-${project.slug}`;
          return (
            <Link id={cardId} key={project.slug} className="catalogue-tile"
              to={`/${project.draft ? "drafts" : "projects"}/${project.slug}`}
              state={{ projectReturnTo: `${location.pathname}${location.search}#${cardId}` }}
              aria-label={`${project.title}, ${project.location}${project.draft ? " — under construction" : ""}`}>
              <div className="catalogue-photo">
                <img src={image(project.image)} alt={project.title} data-subject={project.image}
                  width={photoDimensions[project.image]?.[0]} height={photoDimensions[project.image]?.[1]}
                  loading="lazy" decoding="async" />
              </div>
              <div className="catalogue-caption">
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.location}</p>
                </div>
                <ArrowUpRight size={19} aria-hidden="true" />
              </div>
              {project.draft && <span className="catalogue-draft">Under construction</span>}
              {listView && <span className="catalogue-list-market">{project.market}</span>}
            </Link>
          );
        })}
      </div>
      {!found.length && (
        <div className="empty-state">
          <h2>No matching projects</h2>
          <p>Try another name, island, or market.</p>
          <button className="button button-navy" onClick={clearFilters}>Clear filters</button>
        </div>
      )}
    </section>
  );
}

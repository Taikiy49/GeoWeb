import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { image, type Project } from "../data/site";
import { getProjectReturnTo } from "../data/projectNavigation";
import imageSizes from "../data/image-sizes.json";
import "./ProjectStoryGuide.css";

const photoDimensions: Record<string, number[]> = imageSizes;

/** A reading route through the original project text, without rewriting it. */
export function StoryNavigation({ project }: { project: Project }) {
  const { state } = useLocation();

  return (
    <nav className="project-story-navigation" aria-label={`${project.title} story sections`}>
      <Link to="#project-context" state={state}>Project context</Link>
      <Link to="#engineering-story" state={state}>Read the story <ArrowDown size={16} aria-hidden="true" /></Link>
      <Link to="#continue-story" state={state}>Continue the story <ArrowDown size={16} aria-hidden="true" /></Link>
    </nav>
  );
}

/** Connect by a documented place or project type, never an assumed chronology. */
export function StoryContinuation({ project, related }: { project: Project; related: Project[] }) {
  const { state } = useLocation();
  const projectReturnTo = getProjectReturnTo(state);
  // Move forward through the supplied collection so a place with many stories
  // does not send every reader back to its first project indefinitely.
  const currentIndex = related.findIndex((candidate) => candidate.slug === project.slug);
  const ordered = currentIndex < 0 ? related : [
    ...related.slice(currentIndex + 1),
    ...related.slice(0, currentIndex),
  ];
  const candidates = ordered.filter((candidate) => candidate.slug !== project.slug && !candidate.draft);
  const samePlace = candidates.find((candidate) => candidate.location && candidate.location === project.location);
  const sameMarket = candidates.find((candidate) => candidate.market === project.market);
  const next = samePlace || sameMarket || candidates[0];

  if (!next) return null;

  // Reuse the source's completion label and value. Pending/conflicting values
  // remain in the story facts and are never promoted into a date here.
  const completion = next.facts?.find(([label, value]) =>
    /^(completed|completion|completion year)$/i.test(label)
    && /\b(?:19|20)\d{2}\b/.test(value)
    && !/review|pending|expected|planned|scheduled|estimated|proposed|circa|\?/i.test(value),
  );
  const heading = samePlace
    ? `Continue in ${next.location}`
    : sameMarket ? `Another ${next.market.toLowerCase()} story` : "Continue the story";

  return (
    <section id="continue-story" className="container project-story-continuation" aria-labelledby="continue-story-heading" tabIndex={-1}>
      <h2 id="continue-story-heading">{heading}</h2>
      <Link className="project-story-next" to={`/projects/${next.slug}`}
        state={projectReturnTo ? { projectReturnTo } : undefined}
        aria-labelledby="next-story-title next-story-action">
        <figure className="project-story-next-photo">
          <div>
            <img src={image(next.image)} alt={next.title} data-subject={next.image}
              width={photoDimensions[next.image]?.[0]} height={photoDimensions[next.image]?.[1]}
              loading="lazy" decoding="async" />
          </div>
          {next.credit && <figcaption>Photo courtesy: {next.credit}</figcaption>}
        </figure>
        <div className="project-story-next-copy">
          <p className="project-story-next-place">{next.location}</p>
          <h3 id="next-story-title">{next.title}</h3>
          <p className="project-story-next-summary">{next.summary}</p>
          {completion && <p className="project-story-next-date">{completion[0]}: {completion[1]}</p>}
          <span id="next-story-action" className="project-story-next-action">Read the project story <ArrowUpRight size={20} aria-hidden="true" /></span>
        </div>
      </Link>
    </section>
  );
}

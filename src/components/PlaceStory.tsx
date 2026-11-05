import { ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { image } from "../data/site";
import imageSizes from "../data/image-sizes.json";
import "./PlaceStory.css";

interface PlaceStoryProps {
  id?: string;
  compact?: boolean;
}

/**
 * A guided reading of the completed Wix project story, not an engagement
 * timeline. The earlier decades describe the place before its redevelopment.
 */
export function PlaceStory({ id = "place-story", compact = false }: PlaceStoryProps) {
  const location = useLocation();
  const projectReturnTo = location.pathname === "/projects"
    ? `${location.pathname}${location.search}#${id}`
    : undefined;
  const storyState = projectReturnTo ? { projectReturnTo } : undefined;

  return (
    <section
      id={id}
      className={`place-story${compact ? " place-story-compact" : ""}`}
      aria-labelledby={`${id}-heading`}
      tabIndex={-1}
    >
      <div className="container">
        <div className="place-story-intro">
          <h2 id={`${id}-heading`}>A familiar place.<br />A new chapter.</h2>
          <div>
            <p className="place-story-location">International Market Place, Waikīkī</p>
            <p>A place’s history shapes what comes next. Follow this story from an earlier gathering place to the engineering behind its redevelopment.</p>
          </div>
        </div>

        <figure className="place-story-photo">
          <img
            src={image("marketplace")}
            alt="The reimagined International Market Place in Waikīkī, with people gathered along its illuminated storefronts"
            width={imageSizes.marketplace[0]}
            height={imageSizes.marketplace[1]}
            loading="lazy"
            decoding="async"
            data-subject="marketplace"
          />
          <figcaption>The reimagined International Market Place · Photo: International Market Place</figcaption>
        </figure>

        <ol className="place-story-chapters" aria-label="The International Market Place story">
          <li>
            <div className="place-story-period">1960s–1970s</div>
            <h3>The place before</h3>
            <p>It was famous for Duke Kahanamoku’s restaurant where people flocked to hear Don Ho singing in the ’60s and ’70s.</p>
            {!compact && <p>Later, it was a bustling, open-air hub of small vendors who peddled everything from Hawaiian souvenirs and jewelry to food court meals and farmer’s market produce.</p>}
          </li>
          <li>
            <div className="place-story-period">During redevelopment</div>
            <h3>The challenge beneath it</h3>
            <p>The installation of the micropiles at IMP had significant difficulties and constraints: highly variable substrata, live trees protected in place, archeological concerns, working on an island, artesian ground water, complex critical path schedule, and the list goes on.</p>
            <p className="place-story-role">Geotechnical engineers: SME and Geolabs, Inc.</p>
            {!compact && <p>The project team members met weekly throughout the project to discuss the current and upcoming challenges.</p>}
          </li>
          <li>
            <div className="place-story-period">Completed <time dateTime="2016-08">August 2016</time></div>
            <h3>A new chapter</h3>
            <p>The IMP offers a distinctive collection of upscale fashion and lifestyle retailers, restaurants, and two large open-air courts, the first of which has the huge Banyan tree as its entryway centerpiece.</p>
            <Link className="place-story-link" to="/projects/international-marketplace" state={storyState}>
              Read the full project story <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </li>
        </ol>
      </div>
    </section>
  );
}

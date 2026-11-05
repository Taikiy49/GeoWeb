import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { image } from "../data/site";
import imageSizes from "../data/image-sizes.json";
import "./WorkJourney.css";

const dimensions: Record<string, number[]> = imageSizes;
const chapters = [
  {
    title: "Understand the ground",
    image: "drill-rig",
    caption: "Geolabs truck-mounted CME-75 drill rig",
    text: "Drilling and subsurface investigation involve extracting rock and soil from underground to assess the geological properties of a site. This allows designers and construction workers to have a better idea of the terrain of an area.",
    to: "/services/drilling-subsurface-investigation",
    link: "Explore subsurface investigation",
  },
  {
    title: "Develop the geotechnical design",
    image: "park-foundations",
    caption: "The Park on Keaaumoku Twin Towers, Honolulu, Oahu (2025)",
    text: "At Geolabs, Inc., we are committed to delivering efficient, high-quality geotechnical recommendations that meet our clients’ needs and contribute to the long-term resilience of our communities. With over 50 years of experience, we have had the privilege of working on many of Hawaii’s most high-profile projects.",
    to: "/services/geotechnical-engineering",
    link: "Explore geotechnical engineering",
  },
  {
    title: "Support work in the field",
    image: "hoopili-parcel49",
    caption: "Hoopili Development Phase 11 Parcel 49, Oahu (2024)",
    text: "Geolabs provides geotechnical support during construction, including field observation, special inspections, materials testing, and geotechnical instrumentation.",
    to: "/services/construction-support",
    link: "Explore construction support",
  },
];

/** Explain the relationship between the disciplines before asking visitors to browse them. */
export function WorkJourney() {
  return <section className="work-journey soft-section" id="the-work" tabIndex={-1} aria-labelledby="work-journey-heading">
    <div className="container">
      <div className="work-journey-heading">
        <h2 id="work-journey-heading">The work behind a place</h2>
        <p>Explore the ground, the design, and the work in the field.</p>
      </div>
      <ol className="work-journey-chapters">
        {chapters.map(chapter => <li key={chapter.to}>
          <figure>
            <Link to={chapter.to} aria-label={chapter.link}>
              <img src={image(chapter.image)} alt={chapter.caption} width={dimensions[chapter.image]?.[0]} height={dimensions[chapter.image]?.[1]} loading="lazy" decoding="async" />
            </Link>
            <figcaption>{chapter.caption}</figcaption>
          </figure>
          <h3>{chapter.title}</h3>
          <p>{chapter.text}</p>
          <Link className="arrow-link" to={chapter.to}>{chapter.link}<ArrowUpRight size={17} aria-hidden="true" /></Link>
        </li>)}
      </ol>
      <div className="work-journey-scope">
        <p>The scope of observation, inspection, testing, and monitoring is defined for each project. Contact us to discuss your project requirements.</p>
        <Link className="arrow-link" to="/services/materials-testing">Materials engineering & testing<ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
    </div>
  </section>;
}

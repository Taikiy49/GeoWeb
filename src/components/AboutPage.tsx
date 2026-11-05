import type { ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { aboutTopics } from "../data/aboutTopics";
import { image, offices } from "../data/site";
import imageSizes from "../data/image-sizes.json";
import { ContourAccent } from "./ContourAccent";
import { VendorBadge } from "./VendorBadge";
import "./AboutPage.css";

const dimensions: Record<string, number[]> = imageSizes;

function AboutPhoto({ name, caption }: { name: string; caption: string }) {
  return <figure className="about-explorer-photo">
    <img
      data-subject={name}
      src={image(name)}
      width={dimensions[name]?.[0]}
      height={dimensions[name]?.[1]}
      alt={caption}
      decoding="async"
    />
    <figcaption>{caption}</figcaption>
  </figure>;
}

function AboutLink({ to, children }: { to: string; children: ReactNode }) {
  return <Link className="arrow-link" to={to}>{children}<ArrowUpRight size={18} aria-hidden="true" /></Link>;
}

const topicContent: Record<string, ReactNode> = {
  "our-legacy": <>
    <p>Founded in 1975, Geolabs has built a legacy of solving complex geotechnical challenges with precision, grit, and a deep understanding of the unique subsurface conditions in Hawaii and the Pacific Basin.</p>
    <p>Our work has played a vital role in building Hawaii’s infrastructure and continues to shape Honolulu’s skyline through the design of many of its high-rise building foundations.</p>
  </>,
  "our-team": <>
    <p>We are a team of more than 80 geotechnical professionals—including licensed engineers, seasoned technical specialists, and dedicated field personnel—working collaboratively to deliver technically sound, constructible solutions tailored to the demands of Hawaii and the Pacific Basin.</p>
    <AboutLink to="/people">Meet our people</AboutLink>
  </>,
  "what-we-do": <>
    <h3>Geotechnical engineering</h3>
    <p>Our services span a wide range of geotechnical areas:</p>
    <ul>{["Foundation Investigation", "Landslide Stabilization", "Rockfall Mitigation", "Ground Improvement", "Geotechnical Earthquake Engineering"].map(item => <li key={item}>{item}</li>)}</ul>
    <p>Geotechnical Earthquake Engineering is a vital component in ensuring seismic resilience across the region.</p>
    <p>Our consulting organization provides the knowledge, equipment, and experienced personnel to successfully accomplish projects ranging from geotechnical foundation investigations to roadway embankments, dams, landslides, and rockfall mitigation.</p>
    <AboutLink to="/services">Explore our capabilities</AboutLink>
  </>,
  "construction-support": <>
    <p>Beyond design-phase services, Geolabs provides geotechnical support during construction:</p>
    <ul>{["Field Observation", "Special Inspections", "Materials Testing", "Geotechnical Instrumentation"].map(item => <li key={item}>{item}</li>)}</ul>
    <p>Our construction support helps the project team evaluate site conditions and address geotechnical questions during construction.</p>
    <AboutLink to="/services/construction-support">Explore construction support</AboutLink>
  </>,
  "who-we-serve": <>
    <p>We support a diverse portfolio of public and private-sector clients, including the following:</p>
    <ul>{["All branches of the Military", "Federal and State Agencies", "Local Municipalities", "Developers and Project Owners", "Architects and Engineers", "Design-Build Contractors"].map(item => <li key={item}>{item}</li>)}</ul>
  </>,
  "key-sectors": <dl className="about-sector-list">
    <div><dt>Transportation</dt><dd>Highways, Airports, and Harbor Facilities</dd></div>
    <div><dt>Vertical construction</dt><dd>High-rise Buildings, Parking Structures, Residential and Commercial Developments, and Industrial Complexes</dd></div>
    <div><dt>Infrastructure development</dt><dd>Wastewater Treatment Plants, Water Mains, Electrical Transmission Lines, and Advanced Telecommunication Networks.</dd></div>
  </dl>,
  "where-we-work": <>
    <p>We maintain a strong regional presence and a vast archive of geologic and soil data spanning over five decades. This depth of knowledge enables us to deliver informed, site-specific recommendations that support resilient, sustainable development.</p>
    <div className="about-explorer-offices">
      {offices.map(office => <Link to={`/contact#${office.id}`} key={office.id}>
        <span>{office.name}<small>{office.city}</small></span><ArrowUpRight size={18} aria-hidden="true" />
      </Link>)}
    </div>
  </>,
  "our-culture": <>
    <p>Since becoming an employee-owned company in 1991, we have fostered a culture of accountability, collaboration, and long-term partnership. Our work has earned engineering awards for innovation and excellence across numerous projects.</p>
    <AboutLink to="/people">Meet our people</AboutLink>
  </>,
  "our-commitment": <>
    <p>At Geolabs, we don’t just engineer solutions—we build trust, resilience, and a foundation for Hawaii’s future.</p>
    <AboutLink to="/people">Meet our people</AboutLink>
  </>,
};

const qualityHighlights = [
  ["park-foundations", "The Park on Keaaumoku Twin Towers, Honolulu, Oahu (2025)", "Leading provider of Geotechnical Engineering services in Hawaii", "park-on-keeaumoku"],
  ["about-koa", "Koa Ridge, Oahu (2023)", "In-house staff of experienced Engineers and Geologists", "koa-ridge"],
  ["alele-rockfall", "Rockfall Protection at Alelele Slope along Piilani Highway, Maui (2023)", "Branch offices in Maui and Oakland, California", "alele-rockfall"],
];

/** The original About topics stay complete without repeating nine full sections. */
export function AboutPage() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const selected = aboutTopics.find(topic => topic.id === hash.slice(1)) ?? aboutTopics[0];

  return <div className="about-page">
    <div className="page-masthead about-masthead">
      <ContourAccent />
      <div className="page-intro container">
        <div className="eyebrow">Our company</div>
        <h1>About us</h1>
        <div className="intro-description"><p>Geolabs, Inc. is Hawaii’s largest and most experienced geotechnical engineering firm, with over 50 years of proven expertise and a reputation for technical excellence, resilience, and practical innovation.</p></div>
      </div>
    </div>

    <section className="container about-explorer" aria-label="About Geolabs">
      <nav className="about-explorer-navigation" aria-label="Explore About Geolabs">
        <p>Explore our company</p>
        <div className="about-explorer-links">
          {aboutTopics.map(topic => <Link
            key={topic.id}
            to={`/about#${topic.id}`}
            aria-current={selected.id === topic.id ? "location" : undefined}
          >{topic.title}<ArrowUpRight size={17} aria-hidden="true" /></Link>)}
        </div>
        <div className="about-explorer-select">
          <label htmlFor="about-topic">Choose a topic</label>
          <select id="about-topic" name="about-topic" value={selected.id} onChange={event => navigate(`/about#${event.target.value}`)}>
            {aboutTopics.map(topic => <option value={topic.id} key={topic.id}>{topic.title}</option>)}
          </select>
        </div>
      </nav>

      <article className="about-explorer-panel" id={selected.id} key={selected.id} tabIndex={-1} aria-labelledby="about-topic-heading">
        <div className="about-explorer-heading">
          <h2 id="about-topic-heading">{selected.title}</h2>
          {selected.id === "our-legacy" && <span>Established 1975</span>}
          {selected.id === "our-culture" && <span>Employee-owned since 1991</span>}
        </div>
        <div className="about-explorer-story">
          <AboutPhoto name={selected.image} caption={selected.id === "our-culture" ? "Malakal Port, Republic of Palau (2024)" : selected.caption} />
          <div className="about-explorer-copy">{topicContent[selected.id]}</div>
        </div>
      </article>
    </section>

    <section className="about-quality-summary soft-section" aria-labelledby="about-quality-heading">
      <div className="container">
        <h2 id="about-quality-heading">We Strive for Quality & Excellence</h2>
        <div className="about-quality-projects">
          {qualityHighlights.map(([photo, caption, text, slug]) => <article key={photo}>
            <Link to={`/projects/${slug}`} aria-label={`Explore ${caption}`}>
              <img src={image(photo)} alt={caption} width={dimensions[photo]?.[0]} height={dimensions[photo]?.[1]} loading="lazy" decoding="async" />
              <div><p>{text}</p><span>{caption}</span></div>
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </article>)}
        </div>
      </div>
    </section>
    <div className="container about-vendor-row"><VendorBadge /></div>
  </div>;
}

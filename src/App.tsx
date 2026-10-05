import { useEffect } from "react";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  LayoutGrid,
  List,
  MapPin,
  Plus,
  Search,
  X,
} from "lucide-react";
import { CountUp } from "./components/CountUp";
import { Shell } from "./components/Shell";
import { HeroVideo } from "./components/HeroVideo";
import { FeaturedFilm } from "./components/FeaturedFilm";
import { OfficeMap } from "./components/OfficeMap";
import { VendorBadge } from "./components/VendorBadge";
import { TeamDirectory } from "./components/TeamDirectory";
import { ContactInquiry } from "./components/ContactInquiry";
import { ContourAccent } from "./components/ContourAccent";
import {
  applyUrl,
  careersUrl,
  image,
  offices,
  services,
  projects,
  leaders,
  awards,
  benefits,
  Project,
} from "./data/site";
import unfinishedStories from "./data/unfinished-projects.json";
import imageSizes from "./data/image-sizes.json";

import { normalizeProjectSearch } from "./data/projectSearch";
import { formatPhone, phoneHref } from "./data/phone";
import { getLegacyDestination } from "./data/legacyRoutes";

const photoDimensions: Record<string, number[]> = imageSizes;

function Meta({
  title,
  description,
  draft = false,
}: {
  title: string;
  description?: string;
  draft?: boolean;
}) {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = `${title} | Geolabs, Inc.`;
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute(
      "content",
      description ||
        "Geotechnical engineering, drilling, construction support, and materials testing in Hawaiʻi and the Pacific Basin. Employee-owned since 1991.",
    );
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute(
      "content",
      draft ||
        window.location.hostname === "test.geolabs.net" ||
        window.location.hostname.endsWith(".vercel.app")
        ? "noindex, nofollow"
        : "index, follow",
    );
  }, [title, description, draft, pathname]);
  return null;
}
function ArrowLink({
  to,
  children,
  light = false,
}: {
  to: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link className={`arrow-link ${light ? "light" : ""}`} to={to}>
      {children}
      <ArrowUpRight size={20} />
    </Link>
  );
}
function Photo({
  name,
  alt,
  className = "",
  eager = false,
}: {
  name: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      className={className}
      data-subject={name}
      src={image(name)}
      width={photoDimensions[name]?.[0]}
      height={photoDimensions[name]?.[1]}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
function Breadcrumb({ to, label, context }: { to: string; label: string; context: string }) {
  return (
    <nav className="container breadcrumb" aria-label="Breadcrumb">
      <Link to={to}>{label}</Link>
      <span aria-hidden="true">/</span>
      <span>{context}</span>
    </nav>
  );
}
function PageIntro({
  eyebrow,
  title,
  children,
  connected = false,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  connected?: boolean;
  breadcrumb?: React.ReactNode;
}) {
  return (
    <div className={`page-masthead${connected ? " page-masthead-connected" : ""}${breadcrumb ? " page-masthead-with-breadcrumb" : ""}`}>
      <ContourAccent />
      {breadcrumb}
      <div className="page-intro container">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {children && <div className="intro-description">{children}</div>}
      </div>
    </div>
  );
}
function ProjectCard({ project, showSummary = false, spotlight = false }: {
  project: Project;
  showSummary?: boolean;
  spotlight?: boolean;
}) {
  const Heading = showSummary ? "h2" : "h3";
  return (
    <Link className={`project-card${spotlight ? " project-spotlight" : ""}`} to={`/projects/${project.slug}`} aria-label={`Explore ${project.title}`}>
      <div className="project-image">
        <Photo name={project.image} alt={project.title} />
      </div>
      <div className="project-card-copy">
        <div className="project-meta">
          <span className="project-market">{project.market}</span>
          <span className="caption-location">{project.location}</span>
        </div>
        <div className="project-caption">
          <Heading>{project.title}</Heading>
          <ArrowUpRight size={20} aria-hidden="true" />
        </div>
        {showSummary && <p className="project-summary">{project.summary}</p>}
        {spotlight && <span className="project-story-link">Explore project <ArrowUpRight size={19} aria-hidden="true" /></span>}
      </div>
    </Link>
  );
}
function Home() {
  return (
    <>
      <Meta title="Geotechnical engineering & drilling services" />
      <HeroVideo />
      <FeaturedFilm />
      <div className="stats container">
        {[
          ["1975", "Year established"],
          ["1991", "Employee-owned since"],
          ["80+", "Geotechnical professionals"],
          ["16", "Awards won"],
        ].map(([value, label]) => (
          <div key={label}>
            <CountUp value={value} />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <section id="introduction" className="section container company-intro">
        <div>
          <span className="eyebrow">ABOUT GEOLABS</span>
          <h2>
            We strive for quality
            <br /> & excellence.
          </h2>
          <ArrowLink to="/about">About our company</ArrowLink>
        </div>
        <div>
          <p className="lead">
            Geolabs, Inc. is Hawaii’s largest geotechnical engineering firm and
            a trusted advisor for over 50 years throughout the Hawaiian Islands
            and Pacific Basin.
          </p>
          <p>
            Our team of 80+ geotechnical professionals—including licensed
            engineers and seasoned geotechnical specialists—delivers reliable,
            construction-friendly solutions tailored to Hawaii’s unique
            subsurface conditions.
          </p>
          <p>We proudly serve a diverse range of clients across both public and private sectors, including military branches, government agencies, local municipalities, and private developers. From highways, land developments, and high-rises to wastewater systems and telecom networks, Geolabs is committed to technical excellence, sustainable design, and long-term partnerships that help shape resilient communities.</p>
          <VendorBadge />
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR EXPERTISE</span>
              <h2>Our services</h2>
            </div>
            <ArrowLink to="/services">Explore all services</ArrowLink>
          </div>
          <div className="home-services">
            {services.slice(0, 3).map((service, i) => (
              <Link
                className="home-service-card"
                to={`/services/${service.slug}`}
                key={service.slug}
              >
                <div className="service-card-photo">
                  <Photo name={service.image} alt={service.imageAlt} />
                  <span>0{i + 1}</span>
                </div>
                <div className="service-card-copy">
                  <h3>{service.title}</h3>
                  <p>{service.intro}</p>
                  <span className="arrow-link">
                    Explore service <ArrowUpRight size={19} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="secondary-services">
            {services.slice(3).map((service) => (
              <Link to={`/services/${service.slug}`} key={service.slug}>
                <Photo name={service.image} alt={service.imageAlt} />
                <div>
                  <span className="eyebrow">SPECIALIST SERVICES</span>
                  <h3>{service.title}</h3>
                </div>
                <ArrowUpRight size={23} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <DesignApproach />
      <section className="home-careers">
        <div className="careers-image">
          <Photo
            name="field"
            alt="Geolabs field crew beside drilling equipment"
          />
          <span className="photo-label">THE GEOLABS TEAM</span>
        </div>
        <div className="careers-copy">
          <span className="eyebrow">EMPLOYMENT</span>
          <h2>Join the team.</h2>
          <p>
            We are a team of more than 80 geotechnical professionals—including
            licensed engineers, seasoned technical specialists, and dedicated
            field personnel—working collaboratively to deliver technically
            sound, constructible solutions tailored to the demands of Hawaii and the Pacific Basin.
          </p>
          <div className="careers-actions">
            <a className="button button-yellow" href={careersUrl}>
              View career opportunities <ArrowUpRight size={19} />
            </a>
            <Link className="arrow-link light" to="/careers">
              Benefits & employee ownership <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section container recognition">
        <div>
          <span className="eyebrow">RECOGNITION</span>
          <h2>Engineering excellence</h2>
          <p>
            The high quality of our work is demonstrated by engineering awards
            that we received for outstanding and innovative design
            accomplishments.
          </p>
          <ArrowLink to="/awards">Awards & recognition</ArrowLink>
        </div>
        <Photo
          name="awards"
          alt="Geolabs colleagues at an engineering awards ceremony"
        />
      </section>
    </>
  );
}
function About() {
  return (
    <>
      <Meta title="About us" />
      <PageIntro eyebrow="OUR COMPANY" title="About us">
        <p>
          Geolabs, Inc. is Hawaii’s largest and most experienced geotechnical
          engineering firm, with over 50 years of proven expertise and a
          reputation for technical excellence, resilience, and practical innovation.
        </p>
      </PageIntro>
      <div className="content-band light-surface">
      <div className="container panorama">
        <Photo eager name="koa-ridge" alt="Koa Ridge development on Oʻahu" />
        <span>Koa Ridge, Oʻahu · 2023</span>
      </div>
      <section className="section container editorial-grid">
        <aside>
          <span className="eyebrow">ESTABLISHED 1975</span>
          <h2>Our legacy</h2>
          <figure className="about-source-photo"><Photo name="park-foundations" alt="The Park on Keaaumoku Twin Towers, Honolulu, Oahu (2025)" /><figcaption>The Park on Keaaumoku Twin Towers, Honolulu, Oahu (2025)</figcaption></figure>
        </aside>
        <div className="prose">
          <p className="lead">
            Founded in 1975, Geolabs has built a legacy of solving complex
            geotechnical challenges with precision, grit, and a deep understanding
            of the unique subsurface conditions in Hawaii and the Pacific Basin.
          </p>
          <p>
            Our work has played a vital role in building Hawaii’s infrastructure
            and continues to shape Honolulu’s skyline through the design of many
            of its high-rise building foundations.
          </p>
          <h3>Our team</h3>
          <p>
            We are a team of more than 80 geotechnical professionals—including
            licensed engineers, seasoned technical specialists, and dedicated
            field personnel—working collaboratively to deliver technically sound,
            constructible solutions tailored to the demands of Hawaii and the Pacific Basin.
          </p>
          <VendorBadge />
        </div>
      </section>
      </div>
      <div className="container about-source-highlights">
        <article><p>Leading provider of Geotechnical Engineering services in Hawaii</p></article>
        <article><p>In-house staff of experienced Engineers and Geologists</p></article>
        <article><p>Branch offices in Maui and Oakland, California</p></article>
      </div>
      <section className="section soft-section about-capabilities">
        <div className="container">
          <div className="section-heading">
            <h2>What we do</h2>
            <ArrowLink to="/services">Explore our capabilities</ArrowLink>
          </div>
          <div className="capability-columns">
            <div>
              <h3>Geotechnical engineering</h3>
              <p>Our services span a wide range of geotechnical areas:</p>
              <ul className="capability-list">
                {[
                  "Foundation Investigation",
                  "Landslide Stabilization",
                  "Rockfall Mitigation",
                  "Trenchless Utility Installations",
                  "Ground Improvement",
                  "Geotechnical Earthquake Engineering",
                ].map((item, index) => (
                  <li key={item}><span aria-hidden="true">0{index + 1}</span>{item}</li>
                ))}
              </ul>
              <p>Geotechnical Earthquake Engineering is a vital component in ensuring seismic resilience across the region.</p>
            </div>
            <div>
              <h3>Construction support</h3>
              <p>Beyond design-phase services, Geolabs provides comprehensive support during construction:</p>
              <ul className="capability-list">
                {["Field Observation", "Special Inspections", "Materials Testing", "Geotechnical Instrumentation"].map((item, index) => (
                  <li key={item}><span aria-hidden="true">0{index + 1}</span>{item}</li>
                ))}
              </ul>
              <p>
                Our continued involvement ensures that design recommendations
                are properly implemented and evolving site conditions are
                addressed with agility and expertise.
              </p>
            </div>
          </div>
          <p className="about-capabilities-note">
            Our consulting organization provides the knowledge, equipment, and
            experienced personnel to successfully accomplish projects ranging
            from geotechnical foundation investigations to roadway embankments,
            dams, landslides, and rockfall mitigation.
          </p>
        </div>
      </section>
      <div className="light-surface">
      <section className="section container about-sectors">
        <div className="editorial-grid">
          <div><h2>Who we serve</h2><figure className="about-source-photo"><Photo name="yap-wharf" alt="Yap Wharf Improvements, Federated States of Micronesia (2023)" /><figcaption>Yap Wharf Improvements, Federated States of Micronesia (2023)</figcaption></figure></div>
          <div className="prose">
            <p>We support a diverse portfolio of public and private-sector clients, including the following:</p>
            <ul className="client-types">
              {["All branches of the Military", "Federal and State Agencies", "Local Municipalities", "Developers and Project Owners", "Architects and Engineers", "Design-Build Contractors"].map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
        <h3 className="sector-heading">Key sectors</h3>
        <div className="three-columns sector-grid">
          {[
            ["Transportation", "Highways, Airports, and Harbor Facilities"],
            ["Vertical construction", "High-rise Buildings, Parking Structures, Residential and Commercial Developments, and Industrial Complexes"],
            ["Infrastructure development", "Wastewater Treatment Plants, Water Mains, Electrical Transmission Lines, and Advanced Telecommunication Networks—including Trenchless Installations."],
          ].map(([title, text], index) => (
            <article key={title}>
              <span className="sector-index" aria-hidden="true">0{index + 1}</span>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      </div>
      <section className="section soft-section">
        <div className="container editorial-grid">
          <div><h2>Where we work</h2><figure className="about-source-photo"><Photo name="kuilei" alt="Kuilei Place High-Rise, Honolulu, Oahu (2025)" /><figcaption>Kuilei Place High-Rise, Honolulu, Oahu (2025)</figcaption></figure></div>
          <div className="prose">
            <p>
              We maintain a strong regional presence and a vast archive of
              geologic and soil data spanning over five decades. This depth of
              knowledge enables us to deliver informed, site-specific recommendations
              that support resilient, sustainable development.
            </p>
            <div className="about-office-links">
              {offices.map((office) => (
                <Link to={`/contact#${office.id}`} key={office.id}>
                  <span>{office.name}<small>{office.city}</small></span><ArrowUpRight size={19} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="slate-surface">
      <section className="section container people-feature">
        <Photo name="earthwork" alt="Hoopili development mass grading and slope construction, Oʻahu" />
        <div>
          <div className="eyebrow">EMPLOYEE-OWNED SINCE 1991</div>
          <h2>Our culture</h2>
          <p>
            Since becoming an employee-owned company in 1991, we have fostered
            a culture of accountability, collaboration, and long-term partnership.
            Our work has earned engineering awards for innovation and excellence
            across numerous projects.
          </p>
          <h3>Our commitment</h3>
          <p>
            At Geolabs, we don’t just engineer solutions—we build trust,
            resilience, and a foundation for Hawaii’s future.
          </p>
          <ArrowLink to="/people">Meet our people</ArrowLink>
        </div>
      </section>
      </div>
      <section className="container clients-status" id="clients" aria-labelledby="clients-heading">
        <h2 id="clients-heading">Clients</h2><span>Under construction</span>
      </section>
    </>
  );
}
function DesignApproach() {
  return (
      <section className="section soft-section">
        <div className="container service-approach">
          <details>
            <summary>Design <Plus size={20} aria-hidden="true" /></summary>
            <div>
              <p>At Geolabs, Inc., we are committed to delivering efficient, high-quality geotechnical recommendations that meet our clients’ needs and contribute to the long-term resilience of our communities. With over 50 years of experience, we have had the privilege of working on many of Hawaii’s most high-profile projects.</p>
              <p>While we are confident in our expertise, we remain humble in our approach—always striving to innovate, improve, and earn the trust of those we serve, project by project, year after year. Our dedication to forward-thinking solutions and collaborative partnerships continues to shape the future of geotechnical engineering in Hawaii and beyond.</p>
            </div>
          </details>
          <details>
            <summary>Construction support <Plus size={20} aria-hidden="true" /></summary>
            <div>
              <p>At Geolabs, Inc., one of our core strengths lies in confirming that the foundations of buildings, bridges, embankments, roadways, and facilities are structurally sound and built to last.</p>
              <p>Our team is actively involved in every phase of the process, providing hands-on, day-to-day oversight to ensure each element performs as intended and meets rigorous standards for safety and reliability. With a deep understanding of Hawaii’s unique geotechnical conditions, we apply innovative methods and proven experience to deliver solutions our clients and communities can trust.</p>
            </div>
          </details>
        </div>
      </section>
  );
}
function Services() {
  return (
    <>
      <Meta title="Our services" />
      <PageIntro eyebrow="OUR EXPERTISE" title="Our services" connected>
        <p>
          We are a full-serve Geotechnical Engineering firm with specialties in Subsurface Investigation, Construction Support, and Construction Materials Engineering and Testing.
        </p>
      </PageIntro>
      <div className="content-band light-surface">
      <div className="container services-source-heading"><h2>From start to end —<br />We are with you</h2></div>
      <div className="container service-source-panorama">
        <figure><Photo name="service-pali" alt="Pali Highway Emergency Slope Stabilization, Oahu (2019)" /><figcaption>Pali Highway Emergency Slope Stabilization, Oahu (2019)</figcaption></figure>
        <figure><Photo name="hoopili-parcel49" alt="Hoopili Development Phase 11 Parcel 49, Oahu (2024)" /><figcaption>Hoopili Development Phase 11 Parcel 49, Oahu (2024)</figcaption></figure>
      </div>
      <div className="container service-cards">
        {services.map((s) => (
          <article
            key={s.slug}
            className="service-card"
          >
            <div className="service-row-photo">
              <Photo name={s.slug === "geotechnical-engineering" ? "service-victoria" : s.slug === "construction-support" ? "service-palau" : s.image} alt={s.slug === "geotechnical-engineering" ? "Victoria Place, Honolulu, Oahu (2024)" : s.slug === "construction-support" ? "Palau Wharf Improvements, Malakal Island (2024)" : s.imageAlt} />
            </div>
            <div>
              <span className="eyebrow">{s.slug === "geotechnical-engineering" ? "Victoria Place, Honolulu, Oahu (2024)" : s.slug === "construction-support" ? "Palau Wharf Improvements, Malakal Island (2024)" : s.caption}</span>
              <h2>{s.title}</h2>
              <p>{s.intro}</p>
              {s.overview?.map(text => <p key={text}>{text}</p>)}
              <Link className="arrow-link" to={`/services/${s.slug}`}>
                Explore service <ArrowUpRight size={20} />
              </Link>
            </div>
          </article>
        ))}
      </div>
      </div>
      <DesignApproach />
    </>
  );
}
function ServiceDetail() {
  const { slug } = useParams();
  const { hash } = useLocation();
  const s = services.find((x) => x.slug === slug);
  if (!s) return <NotFound />;
  return (
    <>
      <Meta title={s.title} />
      <PageIntro eyebrow="OUR SERVICES" title={s.title}>
        <p>{s.intro}</p>
      </PageIntro>
      <div className="content-band photo-band light-surface">
      <figure className="container detail-hero">
        <Photo eager name={s.image} alt={s.imageAlt} />
        <figcaption>{s.caption}</figcaption>
      </figure>
      </div>
      <div className="soft-section">
      <section className="section container editorial-grid">
        <aside className="sticky-index">
          <span className="eyebrow">CAPABILITIES</span>
          {s.sections.map((section, i) => (
            <a
              key={section.title}
              href={`#capability-${i}`}
              aria-current={hash === `#capability-${i}` ? "location" : undefined}
            >
              {section.title}
              <ArrowDown size={13} />
            </a>
          ))}
          <Link className="button button-yellow" to="/contact">
            Discuss your project <ArrowUpRight size={17} />
          </Link>
        </aside>
        <div className="capabilities">
          {s.overview && <div className="service-overview-copy">{s.overview.map(text => <p key={text}>{text}</p>)}</div>}
          {s.sections.map((section, i) => (
            <article id={`capability-${i}`} key={section.title} tabIndex={-1}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
              {section.groups?.map(group => <div className="capability-group" key={group.title}><h3>{group.title}</h3><ul className="check-list">{group.items.map(item => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul></div>)}
              {section.items && (
                <ul className="check-list">
                  {section.items.map((t) => (
                    <li key={t}>
                      <Check size={17} />
                      {t}
                    </li>
                  ))}
                </ul>
              )}
              {section.image && <figure className="capability-photo"><Photo name={section.image} alt={section.caption || section.title} /><figcaption>{section.caption}</figcaption></figure>}
            </article>
          ))}
        </div>
      </section>
      </div>
    </>
  );
}
function Projects() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") || "";
  const market = params.get("market") || "All projects";
  const listView = params.get("view") === "list";
  const showSpotlights = !listView && !query && market === "All projects";
  const markets = ["All projects", ...new Set(projects.map((p) => p.market))];
  const normalizedQuery = normalizeProjectSearch(query);
  const found = projects.filter(
    (p) =>
      (market === "All projects" || p.market === market) &&
      normalizeProjectSearch(`${p.title} ${p.location} ${p.summary}`)
        .includes(normalizedQuery),
  );
  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value && value !== "All projects") next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };
  return (
    <>
      <Meta title="Our projects" />
      <PageIntro eyebrow="OUR EXPERIENCE" title="Our projects" connected>
        <p>
          One of our biggest strengths at Geolabs, Inc. is the experience we have. The various projects we have completed and received awards for have allowed us to gain the versatility needed to ensure satisfaction when we undertake a project. With each of these projects, we fulfilled the requirements of our clients and created a better community in the process.
        </p>
        <p>We deliver end-to-end project solutions, specializing in Planning, Execution, and Quality Assurance to ensure lasting success.</p>
      </PageIntro>
      <div className="content-band light-surface">
      <section className="container portfolio">
        <div className="portfolio-toolbar">
          <div className="mobile-market-filter">
            <label htmlFor="project-category">Project category</label>
            <select id="project-category" value={market} onChange={(event) => update("market", event.target.value)}>
              {markets.map((category) => <option key={category} value={category}>{category}</option>)}
            </select>
          </div>
          <div className="filter-tabs" role="group" aria-label="Filter projects by market">
            {markets.map((m) => (
              <button
                key={m}
                className={market === m ? "selected" : ""}
                aria-pressed={market === m}
                onClick={() => update("market", m)}
              >
                {m}
              </button>
            ))}
          </div>
          <div className="search-field">
            <Search size={18} />
            <input
              type="search"
              name="project-search"
              autoComplete="off"
              aria-label="Search projects"
              placeholder="Find a project"
              value={query}
              onChange={(e) => update("q", e.target.value)}
            />
            {query && (
              <button
                aria-label="Clear project search"
                onClick={() => {
                  update("q", "");
                  document
                    .querySelector<HTMLInputElement>(".search-field input")
                    ?.focus();
                }}
              >
                <X size={17} />
              </button>
            )}
          </div>
        </div>
        <div className="portfolio-results-bar">
          <p className="result-count" aria-live="polite">
            {found.length} {found.length === 1 ? "project" : "projects"}
          </p>
          <div className="portfolio-view" role="group" aria-label="Project display">
            <button aria-pressed={!listView} onClick={() => update("view", "")}>
              <LayoutGrid size={17} aria-hidden="true" /> Gallery
            </button>
            <button aria-pressed={listView} onClick={() => update("view", "list")}>
              <List size={19} aria-hidden="true" /> List
            </button>
          </div>
        </div>
        <div className={`project-grid portfolio-grid${listView ? " is-list" : ""}`}>
          {found.map((p, index) => (
            <ProjectCard key={p.slug} project={p} showSummary spotlight={showSpotlights && index % 10 === 0} />
          ))}
        </div>
        {!found.length && (
          <div className="empty-state">
            <h2>No matching projects</h2>
            <p>Try another name, island, or market.</p>
            <button
              className="button button-navy"
              onClick={() => {
                setParams(listView ? { view: "list" } : {});
                document.querySelector<HTMLInputElement>(".search-field input")?.focus();
              }}
            >
              Clear filters
            </button>
          </div>
        )}
        <div className="draft-callout">
          <div>
            <span className="draft-tag">IN DEVELOPMENT</span>
            <h3>Draft project stories</h3>
            <p>
              Explore our resort concepts and project drafts, clearly marked for
              review.
            </p>
          </div>
          <ArrowLink to="/drafts">View draft stories</ArrowLink>
        </div>
      </section>
      </div>
    </>
  );
}
function ProjectDetail() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);
  if (!p) return <NotFound />;
  return (
    <>
      <Meta title={p.title} description={p.summary} />
      <div className="page-masthead">
        <ContourAccent />
        <Breadcrumb to="/projects" label="Projects" context={p.market} />
        <div className="container project-title">
          <span className="eyebrow">{p.location}</span>
          <h1>{p.title}</h1>
          {p.slug === "honolulu-rail" && <span className="project-era">Conceptual & preliminary engineering · Initial plans: 2008</span>}
          <p>{p.summary}</p>
        </div>
      </div>
      <div className="content-band photo-band light-surface">
      <figure className="container project-cover">
        <Photo eager name={p.image} alt={p.title} />
        {p.credit && <figcaption>Photo courtesy: {p.credit}</figcaption>}
      </figure>
      </div>
      <div className="soft-section">
      <section className="section container editorial-grid">
        <aside className="project-facts">
          <div>
            <span>Location</span>
            <strong>{p.location}</strong>
          </div>
          <div>
            <span>Market</span>
            <strong>{p.market}</strong>
          </div>
          {p.facts?.map(([k, v]) => (
            <div key={k}>
              <span>{k}</span>
              <strong>{v}</strong>
            </div>
          ))}
        </aside>
        <article className="prose">
          <span className="eyebrow">PROJECT STORY</span>
          <h2>Project overview</h2>
          {p.body.map((t) => (
            <p key={t}>{t}</p>
          ))}
          <ArrowLink to="/contact">Talk about a similar project</ArrowLink>
        </article>
      </section>
      </div>
      <section className="container related">
        <div className="section-heading">
          <h2>Related projects</h2>
          <ArrowLink to="/projects">All projects</ArrowLink>
        </div>
        <div className="project-grid">
          {projects
            .filter((x) => x.slug !== slug)
            .sort((a, b) =>
              Number(b.market === p.market) - Number(a.market === p.market)
              || Number(b.location === p.location) - Number(a.location === p.location),
            )
            .slice(0, 3)
            .map((x) => (
              <ProjectCard key={x.slug} project={x} />
            ))}
        </div>
      </section>
    </>
  );
}
function People() {
  return (
    <>
      <Meta title="Our people" />
      <PageIntro eyebrow="OUR PEOPLE" title="Our people" connected>
        <p>
          Dedicated to Serving You
        </p>
        <div className="people-jump-links"><a className="arrow-link" href="#leadership">Leadership <ArrowDown size={17} /></a><a className="arrow-link" href="#team">The Team <ArrowDown size={17} /></a></div>
      </PageIntro>
      <section className="light-surface">
        <div className="container leadership" id="leadership">
          <div className="section-heading">
            <h2>Our leadership</h2>
            <span className="eyebrow">GEOLABS, INC.</span>
          </div>
          <div className="leaders">
            {leaders.map((l) => (
              <article key={l.name} id={l.image === "robin" ? "robin-lim" : l.image === "gerald" ? "gerald-seki" : l.image === "john" ? "john-chen" : "payton-kiuchi"}>
                <Photo eager name={l.image} alt={l.name} />
                <h3>{l.name}</h3>
                <p>{l.role}</p>
                {l.education && (
                  <details>
                    <summary>
                      Experience & credentials <Plus size={16} />
                    </summary>
                    <div>
                      <h4>Years of Experience</h4>
                      <p>{l.experience}</p>
                      <h4>Education</h4>
                      {l.education.map((e) => (
                        <p key={e}>{e}</p>
                      ))}
                      <h4>Professional Registration</h4>
                      <p>{l.registration}</p>
                      {l.email && <a href={`mailto:${l.email}`}>{l.email}</a>}
                    </div>
                  </details>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <TeamDirectory />
      <section className="section soft-section">
        <div className="container editorial-grid">
          <h2>Why us?</h2>
          <div className="prose">
            <p className="lead">
              We have a professional staff of geotechnical engineers with
              advanced degrees specializing in geotechnical engineering and
              foundation design.
            </p>
            <p>Our engineers are licensed in Hawaii and/or in Guam and California.</p>
            <p>Our engineers have the education, diverse technical experience, and demonstrated capabilities to fulfill their assigned project roles.</p>
            <p>Our geologists help interpret geologic conditions and perform geologic reconnaissance and aerial photograph analysis.</p>
            <p>
              We are a team of more than 80 geotechnical professionals—including
              licensed engineers, seasoned technical specialists, and dedicated
              field personnel—working collaboratively to deliver technically
              sound, constructible solutions tailored to the demands of Hawaii
              and the Pacific Basin.
            </p>
            <ArrowLink to="/careers">Find your place at Geolabs</ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
function Awards() {
  return (
    <>
      <Meta title="Awards & recognition" />
      <PageIntro eyebrow="RECOGNITION" title="Awards & recognition">
        <p>
          The high quality of our work is demonstrated by engineering awards
          that we received for outstanding and innovative design accomplishments.
        </p>
      </PageIntro>
      <div className="content-band light-surface">
      <div className="container awards-layout">
        <div className="awards-photo">
          <Photo
            eager
            name="awards"
            alt="Geolabs colleagues at an engineering awards ceremony"
          />
        </div>
        <section className="awards-list">
          {awards.map(([year, project, award, body]) => (
            <article key={project}>
              <span className="award-year">
                {year.includes(" / ")
                  ? year.split(" / ").map((part, index) => <span key={part}>{index > 0 && <small>/ </small>}{part}</span>)
                  : year}
              </span>
              <div>
                <h2>{project}</h2>
                <p>{award}</p>
                <span>{body}</span>
              </div>
              <span className="award-mark" aria-hidden="true">
                ✳
              </span>
            </article>
          ))}
        </section>
      </div>
      </div>
    </>
  );
}
function Contact() {
  return (
    <>
      <Meta title="Contact us" />
      <PageIntro eyebrow="LET’S WORK TOGETHER" title="Contact us">
        <p>We would love to hear from you</p>
      </PageIntro>
      <div className="content-band light-surface">
      <section className="container contact-layout">
        <div className="contact-main">
          <span className="eyebrow">PROJECT INQUIRIES</span>
          <h2>How can we help?</h2>
          <p>
            Contact the office nearest your project, or connect with our Hawaiʻi
            headquarters.
          </p>
          <a className="contact-email" href="mailto:hawaii@geolabs.net">
            hawaii@geolabs.net <ArrowUpRight />
          </a>
          <a className="contact-phone" href="tel:+18088415064">
            {formatPhone(offices[0].phones[0])}
          </a>
          <div className="contact-careers">
            <span className="eyebrow">LOOKING TO JOIN US?</span>
            <p>
              View opportunities and submit your application through our careers
              portal.
            </p>
            <a className="arrow-link" href={applyUrl}>
              Apply online <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <div className="office-list" id="office-locations">
          {offices.map((o) => (
            <article key={o.id} id={o.id} tabIndex={-1} aria-labelledby={`${o.id}-heading`}>
              <div className="office-details">
                <div className="office-heading">
                  <h2 id={`${o.id}-heading`}>{o.name}</h2>
                  <span>{o.city}</span>
                </div>
                <address>
                  {o.address}
                  <br />
                  {o.locality}
                </address>
                <div className="office-links">
                  {o.phones.map((p) => (
                    <a key={p} href={phoneHref(p)}>
                      {formatPhone(p)}
                    </a>
                  ))}
                  <a href={`mailto:${o.email}`}>{o.email}</a>
                </div>
                <a
                  className="map-link"
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${o.address}, ${o.locality}`)}`}
                >
                  <MapPin size={15} />
                  Get directions
                  <ArrowUpRight size={15} />
                </a>
              </div>
              <OfficeMap office={o} />
            </article>
          ))}
        </div>
      </section>
      </div>
      <div className="soft-section"><ContactInquiry /></div>
    </>
  );
}
function Careers() {
  return (
    <>
      <Meta title="Careers" />
      <section className="career-hero">
        <Photo
          eager
          name="field"
          alt="Geolabs field crew beside drilling equipment"
        />
        <div className="hero-shade" />
        <div className="container">
          <span className="eyebrow">EMPLOYMENT</span>
          <h1>Join the team.</h1>
          <p>
            Geolabs is a 100% Employee-Owned Company
          </p>
          <a className="button button-yellow" href={careersUrl}>
            Explore career opportunities <ArrowUpRight size={20} />
          </a>
        </div>
      </section>
      <div className="slate-surface">
      <section className="section container editorial-grid">
        <aside>
          <span className="eyebrow">EMPLOYEE OWNERSHIP</span>
          <h2>Employee-owned since 1991</h2>
        </aside>
        <div className="prose">
          <p>
            Since becoming an employee-owned company in 1991, we have fostered
            a culture of accountability, collaboration, and long-term partnership.
            Our work has earned engineering awards for innovation and excellence
            across numerous projects.
          </p>
          <div className="application-box">
            <h3>Apply online</h3>
            <p>
              Check current openings, complete your application, and upload your
              resume through the Geolabs careers portal.
            </p>
            <a className="button button-yellow" href={applyUrl}>
              Apply online <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
      </div>
      <section className="section soft-section">
        <div className="container">
          <span className="eyebrow">INVESTING IN OUR PEOPLE</span>
          <h2>Employee benefits</h2>
          <div className="benefits-grid">
            {benefits.map(([title, text]) => (
              <article key={title}>
                <Check size={21} />
                <h3>{title}</h3>
                {text && <p>{text}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className="light-surface">
      <section className="section container career-policy">
        <h2>EEO Statement</h2>
        <p>
          Geolabs, Inc. is an equal opportunity employer committed to providing
          equal employment opportunities to all applicants and employees in
          accordance with all applicable federal, state, and local laws.
          Employment decisions are based on individual merit, qualifications,
          business needs, and the ability to perform the essential functions of the position.
        </p>
        <p>
          The Company prohibits unlawful discrimination and harassment on the
          basis of race, color, religion, sex, gender identity, sexual orientation,
          national origin, age, disability, genetic information, marital status,
          citizenship, arrest and court record (as permitted by Hawaii law),
          amnesty or status as a covered veteran, lactation, or any other
          characteristic protected by applicable law.
        </p>
        <p>
          As a federal contractor, Geolabs, Inc. complies with all applicable
          Executive Orders and federal contractor requirements, including
          Executive Orders 14173 and 14398. The Company does not engage in
          unlawful discriminatory employment practices, including racially
          discriminatory DEI activities or preferences prohibited by applicable law.
        </p>
        <h2>AAP Statement</h2>
        <p>
          Geolabs, Inc. is also an ADA-compliant employer. The Company is committed
          to providing reasonable accommodations to qualified applicants and
          employees with disabilities to enable them to perform the essential
          functions of their positions, unless doing so would impose an undue
          hardship. Applicants requiring reasonable accommodation during the
          application process should contact Human Resources at{" "}
          <a href="tel:+18089135146">{formatPhone("8089135146")}</a> or{" "}
          <a href="mailto:employment@geolabs.net">employment@geolabs.net</a>.
        </p>
        <a className="arrow-link" href={careersUrl}>
          View current openings and application information <ArrowUpRight size={19} />
        </a>
      </section>
      </div>
    </>
  );
}
function Drafts() {
  return (
    <>
      <Meta title="Draft project stories" draft />
      <PageIntro eyebrow="WORK IN PROGRESS" title="Draft project stories">
        <p>These project pages are under construction.</p>
      </PageIntro>
      <div className="content-band light-surface">
      <section className="container draft-index">
        <div className="draft-notice">
          <span className="draft-tag">UNDER CONSTRUCTION</span>
          <p>Unfinished project descriptions are awaiting review.</p>
        </div>
        <div className="project-grid">
          {unfinishedStories.map((d, index) => (
            <Link className="project-card" key={d.slug} to={`/drafts/${d.slug}`}>
              <div className={`project-image${d.image ? "" : " unfinished-artwork"}`}>
                {d.image ? <Photo name={d.image} alt={d.title} /> : (
                  <><ContourAccent /><span className="unfinished-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></>
                )}
                <span className="project-market">Under construction</span>
              </div>
              <div className="project-caption"><h3>{d.title}</h3><ArrowUpRight size={20} /></div>
              {d.credit && <p className="image-credit">{d.credit}</p>}
            </Link>
          ))}
        </div>
      </section>
      </div>
    </>
  );
}
function DraftDetail() {
  const { slug } = useParams();
  const d = unfinishedStories.find((x) => x.slug === slug);
  if (!d) return <NotFound />;
  return (
    <>
      <Meta title={`${d.title} — Under construction`} draft />
      <PageIntro eyebrow="UNDER CONSTRUCTION" title={d.title}
        breadcrumb={<Breadcrumb to="/drafts" label="Draft stories" context="Under construction" />}
      >
        <p>This project page is under construction.</p>
      </PageIntro>
      <div className="content-band light-surface">
      <section className="container draft-document">
        <div className="draft-notice">
          <span className="draft-tag">WORK IN PROGRESS</span>
          <p>The project description is awaiting review.</p>
        </div>
        {d.image && <>
          <Photo eager name={d.image} alt={d.title} />
          {d.credit && <p className="image-credit">{d.credit}</p>}
        </>}
        <ArrowLink to="/drafts">Back to draft stories</ArrowLink>
      </section>
      </div>
    </>
  );
}
function NotFound() {
  return (
    <>
      <Meta title="Page not found" draft />
      <section className="container not-found">
        <span className="eyebrow">404 · PAGE NOT FOUND</span>
        <h1>Page not found</h1>
        <p>This page may have moved. Explore our projects or return home.</p>
        <Link className="button button-navy" to="/">
          Back to Geolabs <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}
function LegacyCompatibility({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const destination = getLegacyDestination(location.pathname, location.hash);
  const external = destination?.startsWith("https://");
  useEffect(() => {
    if (external && destination) window.location.replace(destination);
  }, [external, destination]);
  if (external && destination) return <p><a href={destination}>Continue to the careers portal</a></p>;
  if (destination) {
    const [path, fragment] = destination.split("#");
    return <Navigate replace to={`${path}${location.search}${fragment ? `#${fragment}` : ""}`} />;
  }
  return children;
}
function App() {
  return (
    // Search is controlled by URL state, which must update synchronously with typing.
    <BrowserRouter useTransitions={false}>
      <LegacyCompatibility>
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="people" element={<People />} />
          <Route path="awards" element={<Awards />} />
          <Route path="contact" element={<Contact />} />
          <Route path="careers" element={<Careers />} />
          <Route path="drafts" element={<Drafts />} />
          <Route path="drafts/:slug" element={<DraftDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </LegacyCompatibility>
    </BrowserRouter>
  );
}
export default App;

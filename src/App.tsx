import { useEffect } from "react";
import {
  BrowserRouter,
  Link,
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
  MapPin,
  Plus,
  Search,
  X,
} from "lucide-react";
import { CountUp } from "./components/CountUp";
import { Shell } from "./components/Shell";
import { HeroVideo } from "./components/HeroVideo";
import { FeaturedFilm } from "./components/FeaturedFilm";
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
import drafts from "./data/drafts.json";
import { formatDraftParagraph } from "./data/draftText";
import { normalizeProjectSearch } from "./data/projectSearch";

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
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="page-intro container">
      <div className="eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      {children && <div className="intro-description">{children}</div>}
    </div>
  );
}
function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className="project-card" to={`/projects/${project.slug}`}>
      <div className="project-image">
        <Photo name={project.image} alt={project.title} />
        <span className="image-arrow">
          <ArrowUpRight size={23} />
        </span>
        <span className="project-market">{project.market}</span>
      </div>
      <div className="project-caption">
        <div>
          <span className="caption-location">{project.location}</span>
          <h3>{project.title}</h3>
        </div>
        <ArrowUpRight size={20} />
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
          ["4", "Regional offices"],
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
            Geolabs, Inc. is Hawaiʻi’s largest geotechnical engineering firm and
            a trusted advisor for over 50 years throughout the Hawaiian Islands
            and Pacific Basin.
          </p>
          <p>
            Our team of 80+ geotechnical professionals—including licensed
            engineers and seasoned geotechnical specialists—delivers reliable,
            construction-friendly solutions tailored to Hawaiʻi’s unique
            subsurface conditions.
          </p>
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
            sound, constructible solutions.
          </p>
          <a className="button button-yellow" href={careersUrl}>
            View career opportunities <ArrowUpRight size={19} />
          </a>
          <Link className="arrow-link light" to="/careers">
            Benefits & employee ownership <ArrowUpRight size={19} />
          </Link>
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
          Hawaiʻi’s largest geotechnical engineering firm. More than 50 years of
          knowledge, built one project at a time.
        </p>
      </PageIntro>
      <div className="container panorama">
        <Photo eager name="koa-ridge" alt="Koa Ridge development on Oʻahu" />
        <span>Koa Ridge, Oʻahu · 2023</span>
      </div>
      <section className="section container editorial-grid">
        <aside>
          <span className="eyebrow">ESTABLISHED 1975</span>
          <h2>Our legacy</h2>
        </aside>
        <div className="prose">
          <p className="lead">
            Founded in 1975, Geolabs has built a legacy of solving complex
            geotechnical challenges with precision, grit, and a deep
            understanding of Hawaiʻi and the Pacific Basin.
          </p>
          <p>
            Our work has helped build the islands’ infrastructure and continues
            to shape Honolulu’s skyline through the design of high-rise building
            foundations. Our archive of geologic and soil data spans over five
            decades, informing recommendations tailored to each site.
          </p>
          <h3>Our team</h3>
          <p>
            More than 80 professionals—including licensed engineers, experienced
            technical specialists, geologists, and field personnel—work together
            to deliver sound, constructible solutions.
          </p>
          <h3>What we do</h3>
          <p>
            Our expertise covers foundation investigation, landslide
            stabilization, rockfall mitigation, trenchless utilities, ground
            improvement, and geotechnical earthquake engineering. During
            construction, we provide field observation, special inspections,
            materials testing, and geotechnical instrumentation.
          </p>
          <ArrowLink to="/services">Explore our capabilities</ArrowLink>
        </div>
      </section>
      <section className="soft-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">THE COMMUNITIES WE SERVE</div>
              <h2>Who we serve</h2>
            </div>
            <p>
              Public and private. Local and regional.
              <br />
              Our work connects people and places.
            </p>
          </div>
          <div className="three-columns">
            {[
              [
                "Who we serve",
                "Military branches, federal and state agencies, municipalities, developers, project owners, architects, engineers, and design-build contractors.",
              ],
              [
                "Where we work",
                "Offices in Waipahu, Wailuku, Līhuʻe, and Oakland support projects throughout Hawaiʻi and the Pacific Basin.",
              ],
              [
                "What we support",
                "Highways, airports, harbors, high-rise buildings, housing, commercial and industrial developments, water and wastewater systems, and utility networks.",
              ],
            ].map(([t, p]) => (
              <article key={t}>
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container people-feature">
        <Photo
          name="earthwork"
          alt="Hoopili development mass grading and slope construction, Oʻahu"
        />
        <div>
          <div className="eyebrow">EMPLOYEE-OWNED SINCE 1991</div>
          <h2>Our culture</h2>
          <p>
            Employee ownership strengthens our accountability to clients and to
            one another. We invest in lasting partnerships, technical
            excellence, and a resilient future for our communities.
          </p>
          <ArrowLink to="/people">Meet our people</ArrowLink>
        </div>
      </section>
    </>
  );
}
function Services() {
  return (
    <>
      <Meta title="Our services" />
      <PageIntro eyebrow="OUR EXPERTISE" title="Our services">
        <p>
          Geotechnical engineering, subsurface investigation, construction
          support, and materials testing—all working together.
        </p>
      </PageIntro>
      <div className="container service-cards">
        {services.map((s) => (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            className="service-card"
          >
            <div className="service-row-photo">
              <Photo name={s.image} alt={s.imageAlt} />
            </div>
            <div>
              <span className="eyebrow">{s.caption}</span>
              <h2>{s.title}</h2>
              <p>{s.intro}</p>
              <span className="arrow-link">
                Explore service <ArrowUpRight size={20} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
function ServiceDetail() {
  const { slug } = useParams();
  const s = services.find((x) => x.slug === slug);
  if (!s) return <NotFound />;
  return (
    <>
      <Meta title={s.title} />
      <PageIntro eyebrow="OUR SERVICES" title={s.title}>
        <p>{s.intro}</p>
      </PageIntro>
      <figure className="container detail-hero">
        <Photo eager name={s.image} alt={s.imageAlt} />
        <figcaption>{s.caption}</figcaption>
      </figure>
      <section className="section container editorial-grid">
        <aside className="sticky-index">
          <span className="eyebrow">CAPABILITIES</span>
          {s.sections.map((section, i) => (
            <a key={section.title} href={`#capability-${i}`}>
              {section.title}
              <ArrowDown size={13} />
            </a>
          ))}
          <Link className="button button-navy" to="/contact">
            Discuss your project <ArrowUpRight size={17} />
          </Link>
        </aside>
        <div className="capabilities">
          {s.sections.map((section, i) => (
            <article id={`capability-${i}`} key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
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
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
function Projects() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") || "";
  const market = params.get("market") || "All projects";
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
      <PageIntro eyebrow="OUR EXPERIENCE" title="Our projects">
        <p>
          From the foundations of Honolulu’s skyline to the infrastructure
          connecting our islands. Explore the work behind our experience.
        </p>
      </PageIntro>
      <section className="container portfolio">
        <div className="portfolio-toolbar">
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
        <p className="result-count" aria-live="polite">
          {found.length} {found.length === 1 ? "project" : "projects"}
        </p>
        <div className="project-grid">
          {found.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        {!found.length && (
          <div className="empty-state">
            <h2>No matching projects</h2>
            <p>Try another name, island, or market.</p>
            <button
              className="button button-navy"
              onClick={() => {
                setParams({});
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
      <div className="container breadcrumb">
        <Link to="/projects">Projects</Link>
        <span>/</span>
        <span>{p.market}</span>
      </div>
      <div className="container project-title">
        <span className="eyebrow">{p.location}</span>
        <h1>{p.title}</h1>
        <p>{p.summary}</p>
      </div>
      <figure className="container project-cover">
        <Photo eager name={p.image} alt={p.title} />
        {p.credit && <figcaption>Photo courtesy: {p.credit}</figcaption>}
      </figure>
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
      <PageIntro eyebrow="OUR PEOPLE" title="Our people">
        <p>
          Engineers, geologists, field specialists, and employee owners. A team
          dedicated to serving you.
        </p>
      </PageIntro>
      <section className="container leadership">
        <div className="section-heading">
          <h2>Our leadership</h2>
          <span className="eyebrow">GEOLABS, INC.</span>
        </div>
        <div className="leaders">
          {leaders.map((l) => (
            <article key={l.name}>
              <Photo eager name={l.image} alt={l.name} />
              <h3>{l.name}</h3>
              <p>{l.role}</p>
              {l.education && (
                <details>
                  <summary>
                    Education & credentials <Plus size={16} />
                  </summary>
                  <div>
                    {l.education.map((e) => (
                      <p key={e}>{e}</p>
                    ))}
                    <p>{l.registration}</p>
                    <a href={`mailto:${l.email}`}>{l.email}</a>
                  </div>
                </details>
              )}
            </article>
          ))}
        </div>
      </section>
      <section className="section soft-section">
        <div className="container editorial-grid">
          <h2>Our team</h2>
          <div className="prose">
            <p className="lead">
              Our professional staff includes geotechnical engineers with
              advanced degrees specializing in geotechnical engineering and
              foundation design.
            </p>
            <p>
              Licensed engineers, geologists, experienced technical specialists,
              and field personnel collaborate across the project lifecycle.
              Employee ownership brings personal accountability to the work and
              a shared interest in our clients’ success.
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
          Innovative solutions to difficult geotechnical challenges. A record of
          recognition spanning decades.
        </p>
      </PageIntro>
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
              <span className="award-year">{year}</span>
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
    </>
  );
}
function Contact() {
  return (
    <>
      <Meta title="Contact us" />
      <PageIntro eyebrow="LET’S WORK TOGETHER" title="Contact us">
        <p>
          Tell us what you’re planning. Our local teams can help you take the
          next step.
        </p>
      </PageIntro>
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
            808.841.5064
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
        <div className="office-list">
          {offices.map((o) => (
            <article key={o.name}>
              <div className="office-heading">
                <h2>{o.name}</h2>
                <span>{o.city}</span>
              </div>
              <address>
                {o.address}
                <br />
                {o.locality}
              </address>
              <div className="office-links">
                {o.phones.map((p) => (
                  <a key={p} href={`tel:+1${p.replace(/\./g, "")}`}>
                    {p}
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
            </article>
          ))}
        </div>
      </section>
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
            Make a lasting contribution to Hawaiʻi.
            <br />
            Become part of an employee-owned team.
          </p>
          <a className="button button-yellow" href={careersUrl}>
            Explore career opportunities <ArrowUpRight size={20} />
          </a>
        </div>
      </section>
      <section className="section container editorial-grid">
        <aside>
          <span className="eyebrow">EMPLOYEE OWNERSHIP</span>
          <h2>Employee-owned since 1991</h2>
        </aside>
        <div className="prose">
          <p className="lead">
            Our engineers and technicians work on projects that shape
            communities across Hawaiʻi and the Pacific.
          </p>
          <p>
            We’re a 100% employee-owned company. That means shared
            responsibility, pride in the work, and an investment in one
            another’s future.
          </p>
          <div className="application-box">
            <h3>Apply online</h3>
            <p>
              Check current openings, complete your application, and upload your
              resume securely through the Geolabs careers portal.
            </p>
            <a className="button button-navy" href={applyUrl}>
              Apply online <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <span className="eyebrow">INVESTING IN OUR PEOPLE</span>
          <h2>Employee benefits</h2>
          <div className="benefits-grid">
            {benefits.map(([title, text]) => (
              <article key={title}>
                <Check size={21} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container career-policy">
        <h2>Equal employment opportunity</h2>
        <p>
          Geolabs, Inc. provides equal employment opportunities to all employees
          and applicants for employment without regard to race, color, religion,
          gender or gender identity, sexual orientation, national origin, age,
          disability, genetic information, marital status, amnesty or status as
          a covered veteran and lactation in accordance with applicable federal,
          state and local laws.
        </p>
        <p>
          Reasonable accommodations are available during the application
          process. For accommodation assistance, contact Human Resources at{" "}
          <a href="tel:+18088415064">808.841.5064</a>. Submit applications and
          resumes through the <a href={applyUrl}>online careers portal</a>.
        </p>
        <a className="arrow-link" href={careersUrl}>
          View current openings and application information{" "}
          <ArrowUpRight size={19} />
        </a>
      </section>
    </>
  );
}
function Drafts() {
  return (
    <>
      <Meta title="Draft project stories" draft />
      <PageIntro eyebrow="WORK IN PROGRESS" title="Draft project stories">
        <p>
          These pages preserve developing project stories for review. They
          contain unverified placeholder text and are not completed case
          studies.
        </p>
      </PageIntro>
      <section className="container draft-index">
        <div className="draft-notice">
          <span className="draft-tag">DRAFT · NOT VERIFIED</span>
          <p>
            Some source material was explicitly labeled as AI-generated
            placeholder content. Names, dates, project involvement, imagery, and
            technical claims require editorial verification.
          </p>
        </div>
        <div className="project-grid">
          {drafts.map((d) => (
            <Link
              className="project-card"
              key={d.slug}
              to={`/drafts/${d.slug}`}
            >
              <div className="project-image">
                <Photo name={d.image} alt={`${d.title} — draft illustration`} />
                <span className="project-market">Draft for review</span>
              </div>
              <div className="project-caption">
                <h3>{d.title}</h3>
                <ArrowUpRight size={20} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
function DraftDetail() {
  const { slug } = useParams();
  const d = drafts.find((x) => x.slug === slug);
  if (!d) return <NotFound />;
  return (
    <>
      <Meta title={`${d.title} — Draft`} draft />
      <div className="container breadcrumb">
        <Link to="/drafts">Draft stories</Link>
        <span>/</span>
        <span>For review</span>
      </div>
      <PageIntro eyebrow="DRAFT · NOT VERIFIED" title={d.title}>
        <p>Unfinished source content, preserved for editorial review.</p>
      </PageIntro>
      <section className="container draft-document">
        <div className="draft-notice">
          <span className="draft-tag">PLACEHOLDER CONTENT</span>
          <p>
            This is not a verified Geolabs case study. The source includes
            AI-generated material and may contain mismatched locations, project
            descriptions, imagery, or claims about Geolabs’ work. All content
            below remains a draft.
          </p>
        </div>
        <Photo
          eager
          name={d.image}
          alt={`${d.title}, illustrative draft image`}
        />
        <div className="prose draft-prose">
          {d.paragraphs.map(formatDraftParagraph).filter(Boolean).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <ArrowLink to="/drafts">Back to draft stories</ArrowLink>
      </section>
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
function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
export default App;

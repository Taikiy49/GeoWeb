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
import { Shell } from "./components/Shell";
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
      draft ? "noindex, nofollow" : "index, follow",
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
function ContactBand() {
  return (
    <section className="contact-band">
      <div className="container">
        <div>
          <span className="eyebrow">A strong start for your next project</span>
          <h2>Let’s get to solid ground.</h2>
        </div>
        <Link className="button button-yellow" to="/contact">
          Talk with our team <ArrowUpRight size={19} />
        </Link>
      </div>
    </section>
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
      <Meta title="Grounded in experience" />
      <section className="hero">
        <Photo
          eager
          name="coast"
          alt="The coastline and lagoons of Ko Olina, Oʻahu"
          className="hero-photo"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <div className="eyebrow">
            <span className="yellow-line" />
            HAWAIʻI & THE PACIFIC · SINCE 1975
          </div>
          <h1>
            Grounded in experience.
            <br />
            <span>Built for Hawaiʻi.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              Geotechnical insight. Practical solutions.
              <br />A stronger foundation for our communities.
            </p>
            <Link className="button button-yellow" to="/projects">
              Explore our work <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
        <div className="hero-caption">
          <span>KO OLINA COASTLINE · OʻAHU</span>
          <a href="#introduction" aria-label="Discover Geolabs">
            <ArrowDown size={19} />
          </a>
        </div>
      </section>
      <section id="introduction" className="container intro-section">
        <div className="eyebrow">THE GROUND KNOWS NO SHORTCUTS.</div>
        <div>
          <h2>
            Local knowledge.
            <br />
            Far-reaching expertise.
          </h2>
          <p className="large-copy">
            For over 50 years, we’ve helped shape Hawaiʻi from the ground up.
            Our engineers, geologists, and field specialists turn complex
            subsurface conditions into practical, construction-ready solutions.
          </p>
          <ArrowLink to="/about">Get to know Geolabs</ArrowLink>
        </div>
      </section>
      <div className="container stats">
        <div>
          <strong>1975</strong>
          <span>Established in Hawaiʻi</span>
        </div>
        <div>
          <strong>80+</strong>
          <span>Geotechnical professionals</span>
        </div>
        <div>
          <strong>
            100<span>%</span>
          </strong>
          <span>Employee-owned</span>
        </div>
        <div>
          <strong>4</strong>
          <span>Offices. One team.</span>
        </div>
      </div>
      <section className="section projects-feature">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">OUR WORK, IN THE WORLD</div>
              <h2>
                Foundations for
                <br />
                what comes next.
              </h2>
            </div>
            <ArrowLink to="/projects">View all projects</ArrowLink>
          </div>
          <div className="featured-grid">
            <ProjectCard project={projects[0]} />
            <ProjectCard project={projects[1]} />
            <ProjectCard project={projects[9]} />
          </div>
          <div className="recent-strip">
            <Photo
              name="walkway"
              alt="Ala Moana Elevated Pedestrian Walkway construction"
            />
            <div>
              <span className="eyebrow">FROM THE FIELD</span>
              <h3>Ala Moana Elevated Pedestrian Walkway</h3>
              <p>
                Connecting places. Supporting the communities that use them.
              </p>
            </div>
            <ArrowLink to="/projects/ala-moana-walkway">
              Explore the project
            </ArrowLink>
          </div>
        </div>
      </section>
      <section className="services-section section">
        <div className="container services-layout">
          <div className="service-intro">
            <div className="eyebrow">FROM INVESTIGATION TO CONSTRUCTION</div>
            <h2>
              With you,
              <br />
              from the
              <br />
              <em>ground up.</em>
            </h2>
            <p>One experienced team, through every phase of your project.</p>
            <ArrowLink to="/services" light>
              Explore our services
            </ArrowLink>
          </div>
          <div className="service-list">
            {services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`}>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                </div>
                <ArrowUpRight size={25} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section container people-feature">
        <div className="people-photo">
          <Photo name="careers" alt="Geolabs field work in Hawaiʻi" />
          <span className="photo-note">
            EXPERIENCE IN THE FIELD. OWNERSHIP IN OUR WORK.
          </span>
        </div>
        <div>
          <div className="eyebrow">ENGINEERS. GEOLOGISTS. EMPLOYEE OWNERS.</div>
          <h2>
            Our strength
            <br />
            is our people.
          </h2>
          <p>
            Since becoming employee-owned in 1991, we’ve built a culture of
            accountability, collaboration, and long-term partnership. Every
            project is personal. Every detail matters.
          </p>
          <div className="inline-links">
            <ArrowLink to="/people">Meet our leadership</ArrowLink>
            <ArrowLink to="/careers">Build your career</ArrowLink>
          </div>
        </div>
      </section>
      <section className="recognition">
        <div className="container">
          <span className="eyebrow">A RECORD OF INNOVATION</span>
          <h2>
            Good work leaves
            <br />a lasting impression.
          </h2>
          <ArrowLink to="/awards">Explore our awards</ArrowLink>
        </div>
        <Photo name="awards" alt="Geolabs engineering awards and recognition" />
      </section>
      <ContactBand />
    </>
  );
}
function About() {
  return (
    <>
      <Meta title="About us" />
      <PageIntro eyebrow="OUR COMPANY" title="Deep roots. Lasting impact.">
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
          <h2>
            We know
            <br />
            this ground.
          </h2>
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
          <h3>A team built around your project</h3>
          <p>
            More than 80 professionals—including licensed engineers, experienced
            technical specialists, geologists, and field personnel—work together
            to deliver sound, constructible solutions.
          </p>
          <h3>From design through construction</h3>
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
              <h2>Built on partnership.</h2>
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
          alt="Geolabs construction and earthwork experience"
        />
        <div>
          <div className="eyebrow">EMPLOYEE-OWNED SINCE 1991</div>
          <h2>
            We own our work.
            <br />
            And stand behind it.
          </h2>
          <p>
            Employee ownership strengthens our accountability to clients and to
            one another. We invest in lasting partnerships, technical
            excellence, and a resilient future for our communities.
          </p>
          <ArrowLink to="/people">Meet our people</ArrowLink>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
function Services() {
  return (
    <>
      <Meta title="Our services" />
      <PageIntro
        eyebrow="OUR EXPERTISE"
        title="A strong foundation. At every stage."
      >
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
            <Photo name={s.image} alt={s.title} />
            <div>
              <span className="eyebrow">{s.short}</span>
              <h2>{s.title}</h2>
              <p>{s.intro}</p>
              <span className="arrow-link">
                Explore service <ArrowUpRight size={20} />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <ContactBand />
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
      <div className="container detail-hero">
        <Photo eager name={s.image} alt={s.title} />
      </div>
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
      <ContactBand />
    </>
  );
}
function Projects() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") || "";
  const market = params.get("market") || "All projects";
  const markets = ["All projects", ...new Set(projects.map((p) => p.market))];
  const found = projects.filter(
    (p) =>
      (market === "All projects" || p.market === market) &&
      `${p.title} ${p.location} ${p.summary}`
        .toLowerCase()
        .includes(query.toLowerCase()),
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
      <PageIntro eyebrow="OUR EXPERIENCE" title="The places we help build.">
        <p>
          From the foundations of Honolulu’s skyline to the infrastructure
          connecting our islands. Explore the work behind our experience.
        </p>
      </PageIntro>
      <section className="container portfolio">
        <div className="portfolio-toolbar">
          <div className="filter-tabs" aria-label="Filter projects by market">
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
              onClick={() => setParams({})}
            >
              Clear filters
            </button>
          </div>
        )}
        <div className="draft-callout">
          <div>
            <span className="draft-tag">IN DEVELOPMENT</span>
            <h3>More stories are taking shape.</h3>
            <p>
              Explore our resort concepts and project drafts, clearly marked for
              review.
            </p>
          </div>
          <ArrowLink to="/drafts">View draft stories</ArrowLink>
        </div>
      </section>
      <ContactBand />
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
          <h2>
            Experience beneath
            <br />
            the surface.
          </h2>
          {p.body.map((t) => (
            <p key={t}>{t}</p>
          ))}
          <ArrowLink to="/contact">Talk about a similar project</ArrowLink>
        </article>
      </section>
      <section className="container related">
        <div className="section-heading">
          <h2>Explore more work.</h2>
          <ArrowLink to="/projects">All projects</ArrowLink>
        </div>
        <div className="project-grid">
          {projects
            .filter((x) => x.slug !== slug)
            .slice(0, 3)
            .map((x) => (
              <ProjectCard key={x.slug} project={x} />
            ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
function People() {
  return (
    <>
      <Meta title="Our people" />
      <PageIntro eyebrow="OUR PEOPLE" title="Experience you can build on.">
        <p>
          Engineers, geologists, field specialists, and employee owners. A team
          dedicated to serving you.
        </p>
      </PageIntro>
      <section className="container leadership">
        <div className="section-heading">
          <h2>Our leadership</h2>
          <span className="eyebrow">LOCAL KNOWLEDGE. SHARED COMMITMENT.</span>
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
          <h2>
            80+ professionals.
            <br />
            One shared purpose.
          </h2>
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
      <ContactBand />
    </>
  );
}
function Awards() {
  return (
    <>
      <Meta title="Awards & recognition" />
      <PageIntro eyebrow="RECOGNITION" title="Excellence, earned in the field.">
        <p>
          Innovative solutions to difficult geotechnical challenges. A record of
          recognition spanning decades.
        </p>
      </PageIntro>
      <div className="container awards-photo">
        <Photo eager name="awards" alt="Geolabs engineering awards" />
      </div>
      <section className="container awards-list">
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
      <ContactBand />
    </>
  );
}
function Contact() {
  return (
    <>
      <Meta title="Contact us" />
      <PageIntro
        eyebrow="LET’S WORK TOGETHER"
        title="Good projects start with a conversation."
      >
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
        <Photo eager name="careers" alt="Geotechnical field work in Hawaiʻi" />
        <div className="hero-shade" />
        <div className="container">
          <span className="eyebrow">YOUR WORK. YOUR COMPANY. YOUR FUTURE.</span>
          <h1>
            Build a career
            <br />
            with solid ground.
          </h1>
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
          <span className="eyebrow">GROW WITH GEOLABS</span>
          <h2>
            More than
            <br />a place to work.
          </h2>
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
            <h3>Your next step starts here.</h3>
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
          <h2>Benefits that support your life.</h2>
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
        <h2>Opportunity for everyone.</h2>
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
          <a href="tel:+18089135146">808.913.5146</a>. Submit applications and
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
      <PageIntro eyebrow="WORK IN PROGRESS" title="Stories still taking shape.">
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
          {d.paragraphs.map((p, i) => (
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
        <h1>
          Let’s get you
          <br />
          back on solid ground.
        </h1>
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

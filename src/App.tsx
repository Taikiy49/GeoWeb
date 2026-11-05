import { Fragment, useEffect } from "react";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPin,
} from "lucide-react";
import { CountUp } from "./components/CountUp";
import { Shell } from "./components/Shell";
import { HeroVideo } from "./components/HeroVideo";
import { FeaturedFilm } from "./components/FeaturedFilm";
import { OfficeMap } from "./components/OfficeMap";
import { VendorBadge } from "./components/VendorBadge";
import { TeamDirectory } from "./components/TeamDirectory";
import { ContactInquiry } from "./components/ContactInquiry";
import { LeadershipGallery } from "./components/LeadershipGallery";
import { AboutPage } from "./components/AboutPage";
import { AwardsPage } from "./components/AwardsPage";
import { ProjectCatalogue } from "./components/ProjectCatalogue";
import { RegionalStories } from "./components/RegionalStories";
import { PlaceStory } from "./components/PlaceStory";
import { WorkJourney } from "./components/WorkJourney";
import { StoryPath, StoryCoda } from "./components/StoryPath";
import { StoryNavigation, StoryContinuation } from "./components/ProjectStoryGuide";
import { ContourAccent } from "./components/ContourAccent";
import {
  applyUrl,
  careersUrl,
  image,
  offices,
  services,
  serviceDescriptionsUnderReview,
  projects,
  benefits,
  Project,
} from "./data/site";
import unfinishedStories from "./data/unfinished-projects.json";
import imageSizes from "./data/image-sizes.json";

import { getProjectReturnTo } from "./data/projectNavigation";
import { storySections } from "./data/storySections";
import { formatPhone, phoneHref } from "./data/phone";
import { getLegacyDestination } from "./data/legacyRoutes";

const photoDimensions: Record<string, number[]> = imageSizes;
const projectCatalogue: Project[] = [
  ...projects,
  ...unfinishedStories.filter((story) => story.gallery).map((story): Project => ({
    slug: story.slug,
    title: story.title,
    location: story.location || "",
    image: story.image || "",
    credit: story.credit,
    market: "Under construction",
    summary: "This project page is under construction.",
    body: [],
    source: story.source || "New Projects",
    draft: true,
  })),
];

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
  const photo = <img
    className={className}
    data-subject={name}
    src={image(name)}
    width={photoDimensions[name]?.[0]}
    height={photoDimensions[name]?.[1]}
    alt={alt}
    loading={eager ? "eager" : "lazy"}
    decoding="async"
  />;
  // The supplied photograph is sideways. Present it upright without altering source pixels.
  return name === "concrete-core" ? <span className="photo-upright">{photo}</span> : photo;
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
  eyebrow?: string;
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
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
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
  const location = useLocation();
  const cardId = `project-${project.slug}`;
  const projectReturnTo = location.pathname === "/projects"
    ? `${location.pathname}${location.search}#${cardId}`
    : getProjectReturnTo(location.state);
  const Heading = showSummary ? "h2" : "h3";
  return (
    <Link id={cardId} className={`project-card${spotlight ? " project-spotlight" : ""}`} to={`/${project.draft ? "drafts" : "projects"}/${project.slug}`} state={projectReturnTo ? { projectReturnTo } : undefined} aria-label={`Explore ${project.title}${project.draft ? " — under construction" : ""}`}>
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
      <StoryPath />
      <section id="introduction" className="section container company-intro">
        <div id="our-roots" tabIndex={-1}>
          <h2>Rooted in Hawaiʻi since 1975.</h2>
          <p className="home-origin-note">Employee-owned since 1991.</p>
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
      <PlaceStory compact id="home-place-story" />
      <FeaturedFilm />
      <WorkJourney />
      <section className="home-careers" id="the-people" tabIndex={-1}>
        <div className="careers-image">
          <Photo
            name="field"
            alt="Geolabs field crew beside drilling equipment"
          />
          <span className="photo-label">THE GEOLABS TEAM</span>
        </div>
        <div className="careers-copy">
          <h2>The people behind the work.</h2>
          <p>
            We are a team of more than 80 geotechnical professionals—including
            licensed engineers, seasoned technical specialists, and dedicated
            field personnel—working collaboratively to deliver technically
            sound, constructible solutions tailored to the demands of Hawaii and the Pacific Basin.
          </p>
          <div className="careers-actions">
            <Link className="button button-yellow" to="/people">Meet our people <ArrowUpRight size={19} aria-hidden="true" /></Link>
            <a className="arrow-link light" href={careersUrl}>View career opportunities <ArrowUpRight size={19} aria-hidden="true" /></a>
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
      <StoryCoda />
    </>
  );
}
function About() {
  return <><Meta title="About us" /><AboutPage /></>;
}
function ServiceApproach({ slug, level = 4 }: { slug: string; level?: 3 | 4 }) {
  const Heading = level === 3 ? "h3" : "h4";
  if (slug === "geotechnical-engineering") return <div className="service-approach-copy">
    <Heading>Our approach to design</Heading>
    <p>At Geolabs, Inc., we are committed to delivering efficient, high-quality geotechnical recommendations that meet our clients’ needs and contribute to the long-term resilience of our communities. With over 50 years of experience, we have had the privilege of working on many of Hawaii’s most high-profile projects.</p>
    <p>While we are confident in our expertise, we remain humble in our approach—always striving to innovate, improve, and earn the trust of those we serve, project by project, year after year. Our dedication to forward-thinking solutions and collaborative partnerships continues to shape the future of geotechnical engineering in Hawaii and beyond.</p>
  </div>;
  if (slug === "construction-support") return <div className="service-approach-copy">
    <Heading>Support during construction</Heading>
    <p>Geolabs provides geotechnical support during construction, including field observation, special inspections, materials testing, and geotechnical instrumentation.</p>
    <p>The scope of observation, inspection, testing, and monitoring is defined for each project. Contact us to discuss your project requirements.</p>
  </div>;
  return null;
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
      <nav className="container service-navigation" aria-label="Services on this page">
        {services.map(s => <a href={`#service-${s.slug}`} key={s.slug}>{s.title}<ArrowDown size={17} aria-hidden="true" /></a>)}
      </nav>
      <div className="container services-source-heading"><h2>Geotechnical engineering<br />& services during construction</h2></div>
      <div className="container service-source-panorama">
        <figure><Photo name="service-pali" alt="Pali Highway Emergency Slope Stabilization, Oahu (2019)" /><figcaption>Pali Highway Emergency Slope Stabilization, Oahu (2019)</figcaption></figure>
        <figure><Photo name="hoopili-parcel49" alt="Hoopili Development Phase 11 Parcel 49, Oahu (2024)" /><figcaption>Hoopili Development Phase 11 Parcel 49, Oahu (2024)</figcaption></figure>
      </div>
      <div className="container service-cards">
        {services.map((s) => (
          <article
            key={s.slug}
            className="service-card"
            id={`service-${s.slug}`}
            tabIndex={-1}
            aria-labelledby={`service-${s.slug}-heading`}
          >
            <figure className="service-row-media">
            <div className="service-row-photo">
              <Photo name={s.slug === "geotechnical-engineering" ? "service-victoria" : s.slug === "construction-support" ? "service-palau" : s.image} alt={s.slug === "geotechnical-engineering" ? "Victoria Place, Honolulu, Oahu (2024)" : s.slug === "construction-support" ? "Palau Wharf Improvements, Malakal Island (2024)" : s.imageAlt} />
            </div>
              <figcaption>{s.slug === "geotechnical-engineering" ? "Victoria Place, Honolulu, Oahu (2024)" : s.slug === "construction-support" ? "Palau Wharf Improvements, Malakal Island (2024)" : s.caption}</figcaption>
            </figure>
            <div>
              <h2 id={`service-${s.slug}-heading`}>{s.title}</h2>
              <p>{s.intro}</p>
              {s.overview?.map(text => <p key={text}>{text}</p>)}
              <ServiceApproach slug={s.slug} level={3} />
              <Link className="arrow-link" to={`/services/${s.slug}`}>
                Explore service <ArrowUpRight size={20} />
              </Link>
            </div>
          </article>
        ))}
      </div>
      </div>
    </>
  );
}
function ServiceDetail() {
  const { slug } = useParams();
  const { hash } = useLocation();
  const s = services.find((x) => x.slug === slug);
  if (!s) {
    const title = slug && Object.prototype.hasOwnProperty.call(serviceDescriptionsUnderReview, slug)
      ? serviceDescriptionsUnderReview[slug] : undefined;
    if (!title) return <NotFound />;
    return (
      <>
        <Meta title={`${title} — Under review`} description="This service description is under review." draft />
        <PageIntro eyebrow="UNDER REVIEW" title={title}>
          <p>This service description is under review.</p>
        </PageIntro>
        <div className="content-band light-surface">
          <section className="section container">
            <ArrowLink to="/services">View our services</ArrowLink>
          </section>
        </div>
      </>
    );
  }
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
  return <>
    <Meta title="Our projects" />
    <PageIntro title="Our projects" connected>
      <p>Start with a place, discover the work beneath it, then follow the stories across Hawaiʻi and the Pacific.</p>
      <div className="project-story-entry"><a className="arrow-link" href="#project-place-story">Follow a place’s story <ArrowDown size={17} aria-hidden="true" /></a><a className="arrow-link" href="#project-catalogue">Browse all projects <ArrowDown size={17} aria-hidden="true" /></a></div>
    </PageIntro>
    <div className="content-band light-surface">
      <PlaceStory id="project-place-story" />
      <RegionalStories compact />
      <div id="project-catalogue" tabIndex={-1}><ProjectCatalogue projects={projectCatalogue} /></div>
    </div>
  </>;
}
function ProjectDetail() {
  const { slug } = useParams();
  const { state } = useLocation();
  const projectReturnTo = getProjectReturnTo(state);
  const p = projects.find((x) => x.slug === slug);
  if (!p) return <NotFound />;
  return (
    <>
      <Meta title={p.title} description={p.summary} />
      <div className="page-masthead">
        <ContourAccent />
        <Breadcrumb to={projectReturnTo || "/projects"} label="Projects" context={p.market} />
        <div className="container project-title" id="project-context" tabIndex={-1}>
          <span className="eyebrow">{p.location}</span>
          <h1>{p.title}</h1>
          {p.slug === "honolulu-rail" && <span className="project-era">Conceptual & preliminary engineering · Initial plans: 2008</span>}
          <p>{p.summary}</p>
          <StoryNavigation project={p} />
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
        <article className="prose" id="engineering-story" tabIndex={-1}>
          <h2>The project story</h2>
          {p.body.map((t, index) => <Fragment key={t}>
            {storySections[p.slug]?.[index] && <h3 className="story-section-heading">{storySections[p.slug][index]}</h3>}
            <p>{t}</p>
          </Fragment>)}
          <ArrowLink to="/contact">Talk about a similar project</ArrowLink>
        </article>
      </section>
      </div>
      <StoryContinuation project={p} related={projects} />
      <section className="container related">
        <div className="section-heading">
          <h2>Related projects</h2>
          <ArrowLink to={projectReturnTo || "/projects"}>{projectReturnTo ? "Back to projects" : "All projects"}</ArrowLink>
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
          <LeadershipGallery />
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
            <ArrowLink to="/projects#project-place-story">Follow the team’s work</ArrowLink>
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
        <p>We have an outstanding record for completing projects within the required schedules.</p>
        <p>
          The high quality of our work is demonstrated by engineering awards
          that we received for outstanding and innovative design accomplishments.
        </p>
      </PageIntro>
      <AwardsPage />
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
  const { state } = useLocation();
  const projectReturnTo = getProjectReturnTo(state);
  const returnTo = projectReturnTo || "/drafts";
  const d = unfinishedStories.find((x) => x.slug === slug);
  if (!d) return <NotFound />;
  return (
    <>
      <Meta title={`${d.title} — Under construction`} draft />
      <PageIntro eyebrow="UNDER CONSTRUCTION" title={d.title}
        breadcrumb={<Breadcrumb to={returnTo} label={projectReturnTo ? "Projects" : "Draft stories"} context="Under construction" />}
      >
        {d.location && <p>{d.location}</p>}
        <p>This project page is under construction.</p>
      </PageIntro>
      <div className="content-band light-surface">
      <section className="container draft-document">
        <div className="draft-notice">
          <span className="draft-tag">WORK IN PROGRESS</span>
          <p>The project description is awaiting review.</p>
        </div>
        {d.slug === "resort-concepts" && <RegionalStories />}
        {d.image && <>
          <Photo eager name={d.image} alt={d.title} />
          {d.credit && <p className="image-credit">{d.credit}</p>}
        </>}
        <ArrowLink to={returnTo}>{projectReturnTo ? "Back to projects" : "Back to draft stories"}</ArrowLink>
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

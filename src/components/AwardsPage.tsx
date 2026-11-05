import { awards, image } from "../data/site";
import awardPhotos from "../data/award-photos.json";
import imageSizes from "../data/image-sizes.json";
import "./AwardsPage.css";

const awardMedia: Record<string, { image: string; credit: string }> = awardPhotos;
const photoDimensions: Record<string, number[]> = imageSizes;

function AwardPhoto({
  name,
  alt,
  eager = false,
}: {
  name: string;
  alt: string;
  eager?: boolean;
}) {
  return (
    <img
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

/** Keep source-verified project photographs visible alongside each award. */
export function AwardsPage() {
  return (
    <div className="content-band light-surface">
      <div className="container awards-layout">
        <div className="awards-photo">
          <AwardPhoto
            eager
            name="awards"
            alt="Geolabs colleagues at an engineering awards ceremony"
          />
        </div>
        <section className="awards-list" aria-label="Award-winning projects">
          {awards.map(([year, project, award, body, location], index) => {
            const media = awardMedia[index];
            return (
              <article key={project}>
                <span className="award-year">
                  {year.includes(" / ")
                    ? year.split(" / ").map((part, partIndex) => (
                        <span key={part}>
                          {partIndex > 0 && <small>/ </small>}
                          {part}
                        </span>
                      ))
                    : year}
                </span>
                <div>
                  <h2>{project}</h2>
                  <p className="image-credit">{location}</p>
                  <p>{award}</p>
                  <span>{body}</span>
                  {media && (
                    <figure className="award-project-photo">
                      <AwardPhoto name={media.image} alt={project} />
                      {media.credit && <figcaption>{media.credit}</figcaption>}
                    </figure>
                  )}
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
}

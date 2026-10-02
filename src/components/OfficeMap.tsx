import { useId, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { offices } from "../data/site";
import "./OfficeMap.css";

export function OfficeMap() {
  const headingId = useId();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mapState, setMapState] = useState<"loading" | "ready" | "error">("loading");
  const office = offices[selectedIndex];
  const address = `${office.address}, ${office.locality}`;
  const query = encodeURIComponent(address);

  function selectOffice(index: number) {
    if (index === selectedIndex) return;
    setMapState("loading");
    setSelectedIndex(index);
  }

  return (
    <section className="office-map" aria-labelledby={headingId}>
      <div className="office-map-header">
        <h2 id={headingId}>Office locations</h2>
        <div className="office-map-selector" role="group" aria-label="Choose an office to view on the map">
          {offices.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-pressed={selectedIndex === index}
              onClick={() => selectOffice(index)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div className="office-map-canvas">
        <iframe
          key={office.name}
          src={`https://maps.google.com/maps?q=${query}&z=15&output=embed`}
          title={`${office.name} office location on Google Maps`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          onLoad={() => setMapState("ready")}
          onError={() => setMapState("error")}
        />
        {mapState !== "ready" && (
          <div className="office-map-status" role="status">
            <MapPin size={24} aria-hidden="true" />
            {mapState === "loading"
              ? `Loading the ${office.name} map…`
              : "Map unavailable. Use the directions link below."}
          </div>
        )}
      </div>
      <div className="office-map-caption">
        <div className="office-map-address" aria-live="polite" aria-atomic="true">
          <MapPin size={22} aria-hidden="true" />
          <div className="office-map-address-content" key={office.name}>
            <strong>{office.name} · {office.city}</strong>
            <address>{office.address}<br />{office.locality}</address>
          </div>
        </div>
        <a
          className="office-map-directions"
          href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
          target="_blank"
          rel="noreferrer"
          aria-label={`Get directions to the ${office.name} office (opens Google Maps in a new tab)`}
        >
          Get directions <ArrowUpRight size={19} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

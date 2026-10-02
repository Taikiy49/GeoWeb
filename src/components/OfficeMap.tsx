import { useState } from "react";
import { MapPin } from "lucide-react";
import type { offices } from "../data/site";
import "./OfficeMap.css";

export function OfficeMap({ office }: { office: (typeof offices)[number] }) {
  const [mapState, setMapState] = useState<"loading" | "ready" | "error">("loading");
  const query = encodeURIComponent(`${office.address}, ${office.locality}`);

  return (
    <div className="office-map-canvas">
      <iframe
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
            : "Map unavailable. Use this office’s directions link."}
        </div>
      )}
    </div>
  );
}

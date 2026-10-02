/** Verified public Wix aliases. Source/edge rules: docs/legacy-route-review.md. */
export const legacyRoutes: Readonly<Record<string, string>> = {
  "/johnylchen": "/people#john-chen",
  "/robinmlim": "/people#robin-lim",
  "/geraldyseki": "/people#gerald-seki",
  "/team": "/people",
  "/leadership-new": "/people",
  "/team-new": "/people",
  "/ala-moana-center-expansion": "/projects/ala-moana-center",
  "/ala-moana-new": "/projects/ala-moana-center",
  "/copy-of-ala-moana-center-expansion": "/projects/ala-moana-center",
  "/kahului-new": "/projects/kahului-airport",
  "/pacifica-honolulu": "/projects/kahului-airport",
  "/909-kapiolani": "/projects/kamehameha-athletic-field",
  "/materials-new": "/services/materials-testing",
  "/new-projects": "/projects",
  "/application": "https://careers.geolabs.net/apply",
  "/forensics-new": "/services/forensic-expert-witness",
  "/moana-pacific": "/projects/moana-pacific",
  "/navy-dock-new": "/projects/navy-dry-dock",
  "/honolulu-high-capacity-transit-corridor": "/projects/honolulu-rail",
  "/copy-of-honolulu-high-capacity-tran": "/projects/international-marketplace",
  "/blank-4": "/projects/koolani-tower",
  "/inquiry-services-page": "/contact",
  "/book-online": "/contact",
  "/projects/aulani-resort": "/drafts/aulani-cms",
  "/projects/ka-makana-aliʻi": "/projects/ka-makana-alii",
  "/projects/hilton-grand-islander": "/drafts/hilton-grand-islander",
  "/projects/wainiha-landslide-mitigation": "/projects/wainiha-landslide",
  "/projects/consolidated-car-rental-(conrac)-facility": "/projects/kahului-conrac",
  "/projects/pali-highway-landslide-mitigation": "/projects/pali-highway",
  "/projects/life-sciences-building-at-universit": "/projects/uh-life-sciences",
  "/projects/hanalei-hills-landslide-mitigation": "/projects/hanalei-hills",
  "/projects/hnl-consolidated-rental-car-(conrac)-facility": "/projects/hnl-conrac",
  "/projects/mauka-concourse-at-daniel-k.-inouye-international-airport-honolulu,-oahu": "/projects/mauka-concourse",
  "/projects/sky-ala-moana-twin-towers": "/projects/sky-ala-moana",
  "/projects/the-central-ala-moana-": "/projects/central-ala-moana",
  "/projects/palau-wharf-improvements-": "/projects/palau-wharf",
  "/projects/makai-slope-repair-below-alelele-slope-piilani-hwy,-maui": "/projects/makai-alele-slope",
  "/projects/koa-ridge-": "/projects/koa-ridge",
  "/projects/yap-wharf-improvements": "/projects/yap-wharf",
  "/projects/rockfall-protection-at-alelele-slope": "/projects/alele-rockfall",
  "/projects/emergency-slope-scaling-for-kalepa-slope": "/projects/kalepa-slope",
  "/projects/azure-and-sky-ala-moana-twin-towers": "/projects/azure-sky-ala-moana",
  "/projects/palau-wharf-improvements": "/projects/palau-wharf",
  "/projects/ala-moana-elevated-pedestrian-walkway": "/projects/ala-moana-walkway",
  "/projects/\"the-park-on-keaaumoku\"-twin-towers": "/projects/park-on-keeaumoku",
  "/projects/kahalui-airport-terminal-expansion": "/projects/kahului-airport",
  "/projects/koolani-condo": "/projects/koolani-tower",
  "/projects/ala-moana-expansion": "/projects/ala-moana-center",
  "/specificproject/ko'olina-beach-villas": "/drafts/dynamic-beach-villas",
  "/specificproject/mariott-hotel": "/drafts/marriott"
};

/** Observed IDs in the public Wix homepage DOM, not inferred section names. */
export const legacyHomeFragments: Readonly<Record<string, string>> = {
  "services": "/services",
  "comp-iggq277c": "/services",
  "dataItem-iggq277e": "/services",
  "about": "/about",
  "comp-iggq2kqb": "/about",
  "dataItem-iggq2kqc": "/about",
  "projects": "/projects",
  "comp-iggq2qkr": "/projects",
  "dataItem-iggq2qkr1": "/projects",
  "people": "/people",
  "comp-iggq361j": "/people",
  "dataItem-iggq361j1": "/people",
  "contact": "/contact",
  "comp-ip2uzos0": "/contact",
  "dataItem-ip2uzos2": "/contact",
  "careers": "/careers",
  "comp-jrjqmf1d": "/careers",
  "dataItem-jrjqmf2f": "/careers",
  "clients": "/about#clients",
  "comp-iggq2y8l": "/about#clients"
};

/** Decode once so literal and percent-encoded Wix slugs share a lookup key. */
export function normalizeLegacyPath(pathname: string): string {
  let decoded = pathname;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    // A malformed percent escape must reach normal not-found handling, not crash routing.
  }
  return decoded.normalize("NFC").replace(/\/+$/, "") || "/";
}

/** A fixed allowlist: unknown URLs and existing canonical routes return undefined. */
export function getLegacyDestination(pathname: string, hash = ""): string | undefined {
  const path = normalizeLegacyPath(pathname);
  const destination = Object.prototype.hasOwnProperty.call(legacyRoutes, path)
    ? legacyRoutes[path]
    : undefined;
  if (destination) return destination;
  if (path !== "/" || !hash) return undefined;
  const fragment = normalizeLegacyPath(hash.replace(/^#/, ""));
  return Object.prototype.hasOwnProperty.call(legacyHomeFragments, fragment)
    ? legacyHomeFragments[fragment]
    : undefined;
}

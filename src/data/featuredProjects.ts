export interface FeaturedProject {
  title: string;
  image: string;
  slug: string | null;
  location?: string;
  credit?: string;
  video: boolean;
}

// All five authored Home (New) slides, plus the existing Park/Azure features.
export const featuredProjects: FeaturedProject[] = [
  { title: "The Park on Keʻeaumoku", image: "park", slug: "park-on-keeaumoku", location: "Honolulu, Oʻahu", video: false },
  { title: "Azure & Sky Ala Moana", image: "azure", slug: "azure-sky-ala-moana", location: "Honolulu, Oʻahu", video: false },
  { title: "Ala Moana Elevated Pedestrian Walkway", image: "walkway-film-poster", slug: "ala-moana-walkway", location: "Honolulu, Oʻahu", video: true },
  { title: "Kuilei Place High-Rise", image: "kuilei", slug: null, location: "Honolulu, Oʻahu", video: false },
  { title: "The Central Ala Moana", image: "central-ala-moana", slug: "central-ala-moana", location: "Honolulu, Oʻahu", credit: "Photo courtesy: Homes.com", video: false },
  { title: "Halawa View Apartments", image: "halawa-view", slug: null, credit: "Photo courtesy: PCL Construction", video: false },
  { title: "Ka Haku Timeshare", image: "ka-haku-timeshare", slug: null, credit: "Photo courtesy: Mike Betz", video: false },
];

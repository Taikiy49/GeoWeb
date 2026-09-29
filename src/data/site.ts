import cmsProjects from "./cms-projects.json";
export const careersUrl = "https://careers.geolabs.net";
export const applyUrl = `${careersUrl}/apply`;
export const image = (name: string) => `/images/${name}.webp`;
export const offices = [
  {
    name: "Oʻahu",
    city: "Waipahu",
    address: "94-429 Koaki Street, Suite 200",
    locality: "Waipahu, HI 96797",
    phones: ["808.841.5064"],
    email: "hawaii@geolabs.net",
  },
  {
    name: "Maui",
    city: "Wailuku",
    address: "780 Alua Street, 1st Floor",
    locality: "Wailuku, HI 96793",
    phones: ["808.244.4435"],
    email: "maui@geolabs.net",
  },
  {
    name: "Kauaʻi",
    city: "Līhuʻe",
    address: "1639 Haleukana Street, Unit #5",
    locality: "Lihue, HI 96766",
    phones: ["808.913.5151", "808.479.2488"],
    email: "kauai@geolabs.net",
  },
  {
    name: "California",
    city: "Oakland",
    address: "344 20th Street, Suite 340",
    locality: "Oakland, CA 94612",
    phones: ["510.710.3140"],
    email: "oakland@geolabs.net",
  },
];
export interface Service {
  slug: string;
  title: string;
  short: string;
  image: string;
  intro: string;
  sections: { title: string; text: string; items?: string[] }[];
}
export const services: Service[] = [
  {
    slug: "geotechnical-engineering",
    title: "Geotechnical engineering",
    short: "Understand the ground. Design with confidence.",
    image: "slope",
    intro:
      "Practical, site-specific recommendations built on five decades of experience with Hawaiʻi’s soil, rock, and groundwater. We investigate, analyze, and design the systems that connect structures to the ground.",
    sections: [
      {
        title: "Subsurface investigation",
        text: "We explore and test soil, rock, and groundwater to establish reliable site information for foundations, slopes, retaining walls, tunnels, embankments, and roads.",
      },
      {
        title: "Foundations",
        text: "Foundation systems transfer structural loads into the ground. We recommend solutions suited to both structural demands and the subsurface conditions.",
        items: [
          "Shallow foundations: footings, mats, and slabs",
          "Deep foundations: piles, drilled shafts, and caissons",
        ],
      },
      {
        title: "Retaining walls",
        text: "Lateral support creates usable space on sloped or uneven terrain and helps stabilize the ground and prevent erosion.",
        items: [
          "Gravity and cantilevered retaining walls",
          "Mechanically stabilized earth (MSE) walls",
          "Segmental block and geosynthetically reinforced soil (GRS) walls",
          "Soil nail walls",
          "Soldier pile and lagging or shotcrete walls",
          "Tieback retaining walls and crib walls",
        ],
      },
      {
        title: "Slope stability & rockfall hazard analysis",
        text: "We evaluate natural and engineered slopes for potential movement or failure, informing the design of retaining walls, embankments, roadways, and mitigation measures in challenging terrain.",
      },
      {
        title: "Ground improvement",
        text: "Ground improvement strengthens difficult sites and addresses settlement and drainage.",
        items: [
          "Jet grouting",
          "Stone columns",
          "Cement deep soil mixing (CDSM)",
          "Compaction grouting",
          "Prefabricated vertical drains (wick drains)",
        ],
      },
      {
        title: "Additional expertise",
        text: "Our broader practice includes landslide stabilization, trenchless utility installations, and geotechnical earthquake engineering to support seismic resilience.",
      },
    ],
  },
  {
    slug: "construction-support",
    title: "Services during construction",
    short: "Expertise that stays with your project.",
    image: "earthwork",
    intro:
      "Field conditions evolve. Our engineers and specialists stay involved to help contractors implement recommendations, address unexpected conditions, and maintain design intent.",
    sections: [
      {
        title: "Construction support",
        text: "Plan review, earthwork monitoring, foundation observation, and practical advice on unexpected conditions support safe, efficient execution.",
      },
      {
        title: "Geotechnical special inspection",
        text: "We verify that soil and foundation systems meet the project’s design requirements.",
        items: [
          "Deep foundations",
          "Shallow foundations",
          "Earthwork",
          "Shoring systems",
        ],
      },
      {
        title: "Instrumentation & monitoring",
        text: "Specialized sensors track ground and structural movement, pressure, and stability during and after construction. The resulting data supports early detection, risk management, and long-term performance.",
      },
      {
        title: "Construction materials engineering & testing",
        text: "Testing verifies the strength, durability, and suitability of concrete, soil, asphalt, and steel to support quality, compliant construction.",
      },
      {
        title: "Excavation shoring design",
        text: "Temporary structural support stabilizes excavation walls and protects workers and neighboring structures throughout construction.",
      },
      {
        title: "Dewatering evaluation & design",
        text: "We assess groundwater conditions and select and design dewatering systems to help keep excavations dry and stable while protecting surrounding structures.",
      },
    ],
  },
  {
    slug: "drilling-subsurface-investigation",
    title: "Drilling & subsurface investigation",
    short: "The right information, below the surface.",
    image: "drilling",
    intro:
      "Direct exploration reveals the geological properties of a site. Our drilling and sampling capabilities give project teams the information they need to plan for the conditions below ground.",
    sections: [
      {
        title: "Core drilling",
        text: "Cylindrical samples of rock or soil allow detailed examination of subsurface conditions.",
      },
      {
        title: "Rotary drilling",
        text: "Borehole drilling can be adapted to different investigation objectives and ground conditions.",
      },
      {
        title: "Offshore drilling",
        text: "Investigation of seabed materials provides information on soil strength, layering, and stability to inform marine foundation design.",
      },
    ],
  },
  {
    slug: "materials-testing",
    title: "Materials engineering & testing",
    short: "Confidence in every material.",
    image: "testing",
    intro:
      "We evaluate the properties of construction materials and help project teams verify their quality and performance, from field placement to laboratory assessment.",
    sections: [
      {
        title: "Soils & concrete",
        text: "Assessment and characterization of soil and concrete support decisions about foundation performance, stability, and material suitability.",
      },
      {
        title: "Construction quality control",
        text: "We work with project teams to check construction against project quality standards, applicable codes, and design requirements.",
      },
      {
        title: "Geotechnical instrumentation",
        text: "Monitoring soil and rock behavior helps engineers assess how structures respond to site conditions.",
      },
      {
        title: "Slope stability analysis",
        text: "Testing and monitoring help evaluate how slope materials interact with surrounding conditions and inform mitigation measures.",
      },
    ],
  },
  {
    slug: "forensic-expert-witness",
    title: "Forensic & expert witness services",
    short: "Understand what happened. Inform what comes next.",
    image: "forensic",
    intro:
      "When structural or ground-related problems occur, careful investigation helps establish their causes. Our specialized geotechnical knowledge supports informed resolution of complex disputes.",
    sections: [
      {
        title: "Litigation support",
        text: "Technical expertise and opinions help explain complex geotechnical issues in legal proceedings.",
      },
      {
        title: "Insurance claim investigations",
        text: "Forensic investigation evaluates the cause and extent of damage associated with structural or ground-related failures.",
      },
      {
        title: "Arbitration",
        text: "Specialist geotechnical insight supports the evaluation of disputes through arbitration and settlement procedures.",
      },
    ],
  },
];
export interface Project {
  slug: string;
  title: string;
  location: string;
  market: string;
  image: string;
  credit?: string;
  summary: string;
  facts?: [string, string][];
  body: string[];
  source: string;
}
export const projects: Project[] = [
  {
    slug: "international-marketplace",
    title: "International Market Place",
    location: "Waikīkī, Oʻahu",
    market: "Retail",
    image: "marketplace",
    credit: "International Market Place",
    summary: "Complex foundations beneath an iconic Waikīkī destination.",
    facts: [
      ["Completed", "August 2016"],
      ["Size", "345,000 square feet"],
    ],
    source: "International Marketplace (New)",
    body: [
      "For decades, the International Market Place has been an icon in the heart of Waikīkī. The site stretches from Kalākaua Avenue to Kūhiō Avenue, with a historic banyan tree at its entrance. The Queen Emma Land Company’s land has supported The Queen’s Medical Center for decades.",
      "The reimagined destination brings together upscale fashion and lifestyle retailers, restaurants, and open-air courts. Its foundation installation faced highly variable substrata, protected live trees, archaeological concerns, artesian groundwater, island logistics, and a complex construction schedule.",
      "The project used a design-assist approach with the foundation contractor. Weekly coordination among the owner, contractors, and consultants helped the team address technical challenges while maintaining its focus on safety, quality, cost, and schedule.",
      "Project team: Taubman Centers, Inc.; dck-FWF; Ehlert Consulting Services; Ludwig Structural Consulting; SME and Geolabs, Inc.; and Hayward Baker Inc.",
    ],
  },
  {
    slug: "honolulu-rail",
    title: "Honolulu High-Capacity Transit Corridor",
    location: "Oʻahu",
    market: "Transportation",
    image: "rail",
    credit: "Honolulu.gov",
    summary: "Subsurface knowledge supporting a 20-mile guideway corridor.",
    facts: [
      ["Exploration", "130 borings"],
      ["Drilling", "Over 16,000 linear feet"],
      ["Scope", "Conceptual & preliminary engineering"],
    ],
    source: "Honolulu Rail (Newer)",
    body: [
      "Geolabs supported the conceptual and preliminary engineering phases of the Honolulu High-Capacity Transit Corridor Project. The original conceptual plans, developed around 2008, focused on aerial guideway foundations along the 20-mile Minimum Operating Segment.",
      "The scope included drilling and sampling 130 borings totaling more than 16,000 linear feet, seismic cone penetration testing, seismic shear-wave velocity profiling, and groundwater monitoring. Selected borings became monitoring points with vibrating wire piezometers.",
      "Foundation analyses evaluated compression and lateral loads to establish drilled shaft diameters and lengths. The guideway design included varying elevations, typical spans of approximately 100 to 150 feet, and special structures where spans exceeded 180 feet.",
      "This case study describes Geolabs’ conceptual and preliminary engineering work; it is not a statement of the current operating rail alignment.",
    ],
  },
  {
    slug: "kamehameha-athletic-field",
    title: "Kamehameha School Athletic Field",
    location: "Maui",
    market: "Education",
    image: "kamehameha",
    credit: "sheriqpetunia",
    summary: "Five retaining wall systems. One challenging mountain ridge.",
    facts: [
      ["Completed", "2002"],
      ["Vertical relief", "80 feet"],
    ],
    source: "Kamehameha (Newer)",
    body: [
      "The project called for a state-of-the-art, three-level high school athletic complex on a rocky mountain ridge with 80 feet of vertical relief. Geolabs provided geotechnical engineering services to help create a stable building surface.",
      "The design team repositioned the project footprint and employed five retaining wall systems: tieback soldier pile walls, mechanically stabilized earth walls, soil nail walls, cantilevered concrete walls, and gravity walls. Geolabs recommended the majority of these systems.",
      "The project was built at nearly 50 percent below the original estimated budget. Its innovative approach received recognition in local and national engineering competitions.",
    ],
  },
  {
    slug: "ala-moana-center",
    title: "Ala Moana Center Expansion",
    location: "Honolulu, Oʻahu",
    market: "Retail",
    image: "ala-moana",
    credit: "CallisonRTKL",
    summary: "A flexible foundation strategy for highly variable ground.",
    facts: [["Site area", "173,300 square feet"]],
    source: "Ala Moana Center Expansion (New)",
    body: [
      "Geolabs served as the geotechnical consultant for an expansion of Hawaiʻi’s largest shopping center. The work included a three-level Nordstrom store, a seven-level parking structure with provisions for a future residential tower, and a three-level retail connector.",
      "An ancient alluvial stream channel had eroded part of the upper coral ledge typically encountered 15 to 20 feet below ground in the Ala Moana–Kakaʻako area. This created significant variability across the site.",
      "Working with the design and construction team, Geolabs recommended a combination of cast-in-place concrete drilled shafts, augered cast-in-place concrete piles, driven concrete piles, and drilled micropiles. Matching each system to structural demand and local subsurface conditions helped reduce foundation costs.",
    ],
  },
  {
    slug: "moana-pacific",
    title: "The Moana Pacific",
    location: "Honolulu, Oʻahu",
    market: "Residential",
    image: "moana-pacific",
    credit: "CTBUH",
    summary: "Deep foundations for twin towers in Honolulu.",
    facts: [
      ["Completed", "2007"],
      ["Drilled shafts", "Approximately 310"],
      ["Foundation depth", "Up to 130 feet"],
    ],
    source: "The Moana Pacific (New)",
    body: [
      "At Piʻikoi Street and Kapiʻolani Boulevard, the Moana Pacific development combines two oval residential towers above a five-level parking garage. Each tower includes 46 apartment stories and two penthouse levels.",
      "Fill and soft lagoonal deposits overlie interbedded coral and coralline materials. To meet structural demands, Geolabs recommended high-capacity cast-in-place concrete drilled shafts deriving support from friction in the underlying alluvial and coralline deposits.",
      "Shaft diameters of 24, 42, and 48 inches and depths of up to 130 feet accommodated loads of up to 3,500 kips per shaft. Geolabs observed installation of approximately 310 shafts and provided special inspection services.",
    ],
  },
  {
    slug: "koolani-tower",
    title: "Koʻolani Tower",
    location: "Honolulu, Oʻahu",
    market: "Residential",
    image: "koolani",
    credit: "Hawaii Real Estate and Living",
    summary: "Tower foundations and trenchless utility infrastructure.",
    facts: [
      ["Foundation depth", "45–130 feet"],
      ["Drilled shafts", "Approximately 274"],
      ["Trunk sewer", "1,200 linear feet"],
    ],
    source: "Ko'olani Tower (New)",
    body: [
      "The Koʻolani project at Waimanu and Pensacola Streets includes a high-rise condominium, recreation and commercial space, and an adjacent five-story parking garage.",
      "Geolabs recommended cast-in-place drilled shafts through fill and soft lagoonal deposits into underlying coral formations and coralline materials. Shaft diameters of 36, 42, and 48 inches reached depths of 45 to 130 feet, with loads up to 3,500 kips per shaft.",
      "Geolabs observed installation of approximately 274 shafts and provided special inspections. The firm also prepared geotechnical construction documents for the Auahi Trunk Sewer: 1,200 linear feet of 30-inch gravity sewer installed by microtunneling across sensitive areas, with jet grout columns providing long-term support.",
    ],
  },
  {
    slug: "kahului-airport",
    title: "Kahului Airport Terminal Complex",
    location: "Kahului, Maui",
    market: "Airports",
    image: "airport",
    credit: "Hawaiʻi Department of Transportation",
    summary: "Engineering an airport expansion around active operations.",
    source: "Kahului Airport Terminal Complex (New)",
    body: [
      "Airport work draws on the full range of geotechnical expertise: testing, foundations, site stabilization, and pavement design. Geolabs served as the geotechnical consultant through all design phases of the Kahului Airport expansion.",
      "The work evaluated existing aircraft and vehicular pavements for defects and service life. Traffic analyses and new pavement designs used Federal Highway Administration and Federal Aviation Administration methods as appropriate, addressing rigid and flexible pavements and transitions between different traffic loadings.",
      "The project also included a new terminal, air cargo building, and baggage handling facility. Most fieldwork took place at night to avoid disrupting flight schedules.",
    ],
  },
  {
    slug: "navy-dry-dock",
    title: "Navy’s Dry Dock 3 Replacement",
    location: "Pearl Harbor–Hickam, Oʻahu",
    market: "Docks & harbors",
    image: "drydock",
    credit: "U.S. Pacific Fleet",
    summary: "Major waterfront infrastructure at Pearl Harbor.",
    source: "Navy's Dry Dock 3 Replacement (New)",
    body: [
      "The Dry Dock 3 replacement at Joint Base Pearl Harbor–Hickam is part of a major program of Navy shipyard infrastructure investment. The project portfolio identifies the U.S. Department of Defense as the client and classifies the project under docks and harbors.",
      "The project brings together local and mainland contractors within the Navy’s broader Shipyard Infrastructure Optimization Program. Contact our team for information about Geolabs’ project involvement and relevant marine geotechnical experience.",
    ],
  },
  {
    slug: "kapolei-harborside",
    title: "Kapolei Harborside Redevelopment",
    location: "Kapolei, Oʻahu",
    market: "Utilities",
    image: "kapolei",
    credit: "G70 Design",
    summary: "Infrastructure for the next chapter of West Oʻahu.",
    facts: [
      ["Client", "James Campbell Company"],
      ["Development", "Approximately 360 acres"],
    ],
    source: "Kapolei Harborside Redevelopment (New)",
    body: [
      "Geolabs is involved in utilities redevelopment on Oʻahu’s west side. The Kapolei Harborside industrial development is located near Kalaeloa Barbers Point Harbor.",
      "The project includes a four-phase development, with wastewater, drainage, roadway, and electrical improvements serving an initial area of approximately 72 acres. These infrastructure investments support the wider industrial development and the businesses that depend on it.",
    ],
  },
  {
    slug: "park-on-keeaumoku",
    title: "The Park on Keeaumoku",
    location: "Honolulu, Oʻahu",
    market: "Residential",
    image: "park",
    summary: "Twin towers and a new gathering place in urban Honolulu.",
    facts: [["Completion year", "2025"]],
    source: "Ala Moana (Newer) (Item)",
    body: [
      "The Park on Keeaumoku is a twin-tower residential development in Honolulu’s Ala Moana neighborhood. The development spans more than 3.5 acres and brings residences, landscaped outdoor space, shopping, and dining together.",
      "Shared amenities, gathering spaces, and a landscaped park connect urban living with outdoor space.",
    ],
  },
];
projects.push(...cmsProjects);
export const leaders = [
  {
    name: "Robin M. Lim",
    role: "President & CEO",
    image: "robin",
    email: "robin@geolabs.net",
    education: [
      "M.S., Geotechnical Engineering, University of California, Berkeley",
      "B.S., Mining Engineering, University of California, Berkeley",
    ],
    registration:
      "Registered Civil Engineer: California (1991) and Hawaiʻi (1994)",
  },
  { name: "Gerald Y. Seki", role: "Vice President", image: "gerald" },
  { name: "John Y.L. Chen", role: "Vice President", image: "john" },
  { name: "Payton Kiuchi", role: "Chief Financial Officer", image: "payton" },
];
export const awards = [
  [
    "2018",
    "Hoʻopili Development",
    "Excellence Award for Foundation Innovation",
    "ACEC Hawaiʻi",
  ],
  [
    "2016",
    "International Market Place",
    "Project of the Year",
    "Deep Foundations Institute",
  ],
  [
    "2013 / 2014",
    "Kūhiō Highway Emergency Slope Repairs",
    "Grand Conceptor Awards",
    "ACEC Hawaiʻi",
  ],
  [
    "2013 / 2014",
    "Honoapiʻilani Highway Realignment",
    "Outstanding Civil Engineering Achievement / Grand Conceptor Award",
    "ACEC Hawaiʻi",
  ],
  [
    "2005",
    "Hāna Highway Rockfall Mitigation, MP 11",
    "Engineering Excellence Award",
    "ACEC Hawaiʻi",
  ],
  [
    "2003",
    "Kunuiakea Athletic Complex",
    "Engineering Excellence Grand Conceptor Award",
    "ACEC Hawaiʻi",
  ],
  [
    "2002",
    "Halekuai Center",
    "Kūkulu Hale Award — New Project of the Year",
    "NAIOP",
  ],
  [
    "2001",
    "Kapiʻolani Park Bandstand",
    "Kūkulu Hale Award — Renovation of the Year",
    "NAIOP",
  ],
  [
    "2001",
    "Kūhiō Beach Park / Kalākaua Promenade",
    "Kūkulu Hale Award — Renovation of the Year",
    "NAIOP",
  ],
  [
    "1996",
    "University of Hawaiʻi at Mānoa Faculty Housing",
    "Honor Award — Innovative Shallow Foundation Design",
    "Consulting Engineers Council of Hawaiʻi",
  ],
  [
    "1995",
    "Aloha Tower Marketplace",
    "Honor Award — Shallow Foundation Design",
    "Consulting Engineers Council of Hawaiʻi",
  ],
  [
    "1992",
    "Sewer Tunnel Relief, Increment 2",
    "Excellence Award",
    "Consulting Engineers Council of Hawaiʻi",
  ],
  [
    "1992",
    "H-3 Trans-Koʻolau Tunnel and Portals",
    "Excellence Award — Innovative Field Exploration Techniques",
    "Consulting Engineers Council of Hawaiʻi",
  ],
  [
    "1991",
    "Pearl Kai Center",
    "Excellence Award — Foundation Design in a Marginal-Use Wetland Area",
    "CECH / American Consulting Engineers Council",
  ],
  [
    "1990",
    "Maintenance Hangar Facility",
    "Excellence Award — Innovative Slope Stabilization",
    "CECH / American Consulting Engineers Council",
  ],
];
export const benefits = [
  [
    "Employee ownership",
    "An Employee Stock Ownership Plan provides eligible employees with retirement benefits based on ownership in the company.",
  ],
  [
    "Health & family",
    "Medical, dental, drug, and vision coverage. Geolabs pays family coverage after twelve consecutive months of full-time employment.",
  ],
  [
    "Time to recharge",
    "14 days of paid time off in the first year, increasing to 28 days at 20 or more years of service.",
  ],
  [
    "Retirement planning",
    "A 401(k) plan helps employees prepare for their financial future.",
  ],
  ["Holidays", "Ten holidays each year, plus a half day on Christmas Eve."],
  [
    "Additional support",
    "Group term life insurance and a flexible spending account for eligible expenses.",
  ],
];

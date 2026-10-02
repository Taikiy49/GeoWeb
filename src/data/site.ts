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
    phones: ["(808)841-5064"],
    email: "hawaii@geolabs.net",
  },
  {
    name: "Maui",
    city: "Wailuku",
    address: "780 Alua Street, 1st Floor",
    locality: "Wailuku, HI 96793",
    phones: ["(808)244-4435"],
    email: "maui@geolabs.net",
  },
  {
    name: "Kauaʻi",
    city: "Līhuʻe",
    address: "1639 Haleukana Street, Unit #5",
    locality: "Lihue, HI 96766",
    phones: ["(808)913-5151", "(808)479-2488"],
    email: "kauai@geolabs.net",
  },
  {
    name: "California",
    city: "Oakland",
    address: "344 20th Street, Suite 340",
    locality: "Oakland, CA 94612",
    phones: ["(510)710-3140"],
    email: "oakland@geolabs.net",
  },
];
export interface Service {
  slug: string;
  title: string;
  short: string;
  imageAlt: string;
  caption: string;
  image: string;
  intro: string;
  sections: { title: string; text: string; items?: string[] }[];
}
export const services: Service[] = [
  {
    slug: "geotechnical-engineering",
    title: "Geotechnical engineering",
    short: "Understand the ground. Design with confidence.",
    image: "pali-highway",
    imageAlt: "Slope stabilization and rockfall protection along Pali Highway",
    caption: "Pali Highway landslide mitigation, Oʻahu",
    intro:
      "Geotechnical engineering is a branch of civil engineering that focuses on the behavior of earth materials—such as soil, rock, and groundwater—and how they interact with man-made structures. It involves the investigation, analysis, and design of foundations, slopes, retaining structures, tunnels, embankments, and other systems that rely on the stability and strength of the ground.",
    sections: [
      {
        title: "Subsurface investigation",
        text: "Subsurface investigation is the process of exploring and testing soil, rock, and groundwater to understand site conditions. Its purpose is to provide reliable data for designing foundations, slopes, retaining walls, tunnels, embankments, and roads, ensuring projects are safe and stable.",
      },
      {
        title: "Foundations",
        text: "Foundations transfer structural loads into the ground, ensuring stability and durability for buildings, bridges, retaining walls, embankments, and roads. Our work spans the full range of foundation systems:",
        items: [
          "Shallow foundations are used where competent soils are close to the surface, relying on footings, mats, or slabs to distribute loads efficiently.",
          "Deep foundations come into play when stronger support is needed at depth, using piles, drilled shafts, or caissons to reach more stable layers.",
        ],
      },
      {
        title: "Retaining walls",
        text: "Retaining walls provide lateral support for soil, allowing construction on sloped or uneven terrain. They help stabilize ground, prevent erosion, and create usable space for infrastructure and development.",
        items: [
          "Gravity retaining walls",
          "Cantilevered retaining walls",
          "Mechanically stabilized earth (MSE) retaining walls",
          "Segmental block retaining walls",
          "Geosynthetically reinforced soil (GRS) retaining walls",
          "Soil nail walls",
          "Soldier pile and lagging (shotcrete) walls",
          "Tieback retaining walls",
          "Crib walls",
        ],
      },
      {
        title: "Slope stability & rockfall hazard analysis",
        text: "Slope stability and rockfall hazard analysis is the process of evaluating natural and engineered slopes to understand their potential for movement or failure. Its purpose is to provide reliable assessments for designing retaining walls, embankments, roadways, and other structures in hilly or mountainous terrain, ensuring projects remain safe, stable, and resilient against landslides or falling rock.",
      },
      {
        title: "Ground improvement",
        text: "Ground improvement enhances soil properties to support construction on challenging sites. Techniques improve strength, settlement, and drainage for stable, long-lasting performance.",
        items: [
          "Jet grouting",
          "Stone columns",
          "Cement deep soil mixing (CDSM)",
          "Compaction grouting",
          "Prefabricated vertical drains (PVD or wick drains)",
        ],
      },
      {
        title: "Additional expertise",
        text: "Our services span a wide range of geotechnical areas:",
        items: [
          "Landslide stabilization",
          "Trenchless utility installations",
          "Geotechnical earthquake engineering (a vital component in ensuring seismic resilience across the region)",
        ],
      },
    ],
  },
  {
    slug: "construction-support",
    title: "Services during construction",
    short: "Expertise that stays with your project.",
    image: "earthwork",
    imageAlt: "Mass grading and earthwork at Hoopili development",
    caption: "Hoopili development mass grading & slope, Oʻahu",
    intro:
      "Services during construction is the on-site phase of geotechnical practice that ensures designs are implemented correctly and safely as conditions evolve in the field. It focuses on how subsurface conditions, foundations, and support systems perform during active work, bringing together construction support, geotechnical special inspection, and real-time decision-making to align plans with actual site behavior.",
    sections: [
      {
        title: "Construction support",
        text: "Construction support refers to the geotechnical services provided during active building phases to ensure safe, efficient execution. It includes reviewing plans, monitoring earthwork, inspecting foundations, and advising on unexpected site conditions. The goal is to help contractors respond to real-time challenges while maintaining design integrity, safety, and compliance with engineering standards.",
      },
      {
        title: "Geotechnical special inspection",
        text: "Geotechnical special inspection verifies that soil and foundation systems are built to design standards, supporting safe and stable construction. These inspections help prevent settlement, ensure proper load support, and protect Hawaii’s infrastructure.",
        items: [
          "Deep foundations",
          "Shallow foundations",
          "Earthwork",
          "Shoring systems",
        ],
      },
      {
        title: "Instrumentation & monitoring",
        text: "Geotechnical Instrumentation and Monitoring use specialized sensors to track ground and structural behavior during and after construction. These systems provide real-time data on movement, pressure, and stability, helping engineers detect issues early and ensure safety. Effective monitoring supports risk management and long-term performance of infrastructure.",
      },
      {
        title: "Construction materials engineering & testing",
        text: "Construction Materials Engineering and Testing (CoMET) ensure that building materials meet quality and safety standards throughout a project. These services verify the strength, durability, and suitability of materials like concrete, soil, asphalt, and steel. Reliable testing helps prevent failures and supports long-lasting, compliant construction.",
      },
      {
        title: "Excavation shoring design",
        text: "Excavation Shoring Design provides temporary structural support to excavation walls, preventing soil collapse and protecting workers and nearby structures. Proper shoring design is essential for safe, efficient construction in challenging ground conditions. It helps maintain stability throughout excavation, reducing risks and ensuring project success.",
      },
      {
        title: "Dewatering evaluation & design",
        text: "Dewatering Evaluation and Design manage groundwater on construction sites to keep excavations dry and stable. This process involves assessing site conditions, selecting effective dewatering methods, and designing systems to control water levels. Proper dewatering supports safe construction and protects surrounding structures.",
      },
    ],
  },
  {
    slug: "drilling-subsurface-investigation",
    title: "Drilling & subsurface investigation",
    short: "The right information, below the surface.",
    image: "drill-rig",
    imageAlt: "Geolabs truck-mounted CME-75 drill rig",
    caption: "Geolabs drilling equipment",
    intro:
      "Drilling and subsurface investigation involve extracting rock and soil from underground to assess the geological properties of a site. This allows designers and construction workers to have a better idea of the terrain of an area.",
    sections: [
      {
        title: "Core drilling",
        text: "Core Drilling is a method that extracts cylindrical samples of rock or soil from underground.",
      },
      {
        title: "Rotary drilling",
        text: "Rotary Drilling is a technique that involves creating boreholes in the ground. This method of drilling is versatile as it can be adapted to various drilling objectives and ground conditions.",
      },
      {
        title: "Offshore drilling",
        text: "Offshore Drilling evaluates seabed materials to support safe marine construction. It guides foundation design for offshore platforms by analyzing soil strength, layering, and stability underwater.",
      },
    ],
  },
  {
    slug: "materials-testing",
    title: "Materials engineering & testing",
    short: "Confidence in every material.",
    image: "concrete-core",
    imageAlt: "Concrete core sample in a testing apparatus",
    caption: "Concrete core testing",
    intro:
      "Materials testing involves evaluating the physical, mechanical, and chemical properties of materials that are used in infrastructure.",
    sections: [
      {
        title: "Soils & concrete",
        text: "Proper assessment and characterization of these materials are vital to ensure the stability and safety of these large projects.",
      },
      {
        title: "Construction quality control",
        text: "Construction Quality Control refers to the activities to ensure that the work meets the client's quality standards and conforms to all codes/regulations.",
      },
      {
        title: "Geotechnical instrumentation",
        text: "Geotechnical Instruments allow us to monitor the behaviors of rock and soil formations. We can use this information to test and determine how different infrastructures will react at various sites.",
      },
      {
        title: "Slope stability analysis",
        text: "To mitigate these risks, we precisely test and monitor how the materials involved in these slopes are interacting with the environment around them.",
      },
    ],
  },
  {
    slug: "forensic-expert-witness",
    title: "Forensic & expert witness services",
    short: "Understand what happened. Inform what comes next.",
    image: "forensic-damage",
    imageAlt: "Excavation and foundation exposure beneath a bridge",
    caption: "Bridge foundation investigation",
    intro:
      "Forensic and Expert Witnesses are people who possess specialized knowledge and experience in a field relevant in a legal case. These witnesses are called upon to provide this expertise/opinions to help the court understand the complex issues regarding the case.",
    sections: [
      {
        title: "Litigation support",
        text: "Litigation refers to the process of settling legal disputes through a court system. Litigation often occurs when the parties involved in these cases need the expertise from specialized companies, like Geolabs.",
      },
      {
        title: "Insurance claim investigations",
        text: "Insurance Claims during forensic investigations are often filed to investigate the cause, extent, and value of the damages a structural failure caused.",
      },
      {
        title: "Arbitration",
        text: "Arbitration is an alternative dispute resolution method in which parties agree to have their case heard by the arbitrator(s) instead of going to a court.",
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
    summary: "For decades, the International Market Place (IMP) has been an icon in the heart of Waikiki in Honolulu, Hawaii.",
    facts: [
      ["Completed", "August 2016"],
      ["Size", "345,000 square feet"],
    ],
    source: "International Marketplace (New)",
    body: [
      "For decades, the International Market Place has been an icon in the heart of Waikīkī. The site stretches from Kalākaua Avenue to Kūhiō Avenue, with a historic banyan tree at its entrance. The Queen Emma Land Company’s land has supported The Queen’s Medical Center for decades.",
      "The reimagined destination brings together upscale fashion and lifestyle retailers, restaurants, and open-air courts. The installation of the micropiles at IMP had significant difficulties and constraints: highly variable substrata, live trees protected in place, archeological concerns, working on an island, artesian ground water, complex critical path schedule, and the list goes on.",
      "The project used a design-assist approach with the foundation contractor. Weekly coordination among the owner, contractors, and consultants helped the team address technical challenges while maintaining its focus on safety, quality, cost, and schedule.",
      "Project Team Members: Owner, Taubman Centers, Inc.; General Contractor, dck-FWF; Owner’s Consultant, Ehlert Consulting Services; Structural Engineer, Ludwig Structural Consulting; Geotechnical Engineers, SME and Geolabs, Inc.; Micropile Design-Build/Design Assist Contractor, Hayward Baker Inc.",
    ],
  },
  {
    slug: "honolulu-rail",
    title: "Honolulu High-Capacity Transit Corridor",
    location: "Oʻahu",
    market: "Transportation",
    image: "rail",
    credit: "Honolulu.gov",
    summary: "Geolabs provided geotechnical engineering services in support of the conceptual engineering and preliminary engineering phases of the project.",
    facts: [
      ["Exploration", "130 borings"],
      ["Drilling", "Over 16,000 linear feet"],
      ["Scope", "Conceptual & preliminary engineering"],
    ],
    source: "Honolulu Rail (Newer)",
    body: [
      "Geolabs supported the conceptual and preliminary engineering phases of the Honolulu High-Capacity Transit Corridor Project. The original conceptual plans, developed around 2008, focused on aerial guideway foundations along the 20-mile Minimum Operating Segment.",
      "The scope included drilling and sampling 130 borings totaling more than 16,000 linear feet, seismic cone penetration testing, seismic shear-wave velocity profiling, and groundwater monitoring. Selected borings became monitoring points with vibrating wire piezometers.",
      "Our geotechnical engineering efforts also included performing preliminary foundation analyses including compression load and lateral load analyses to establish the diameters and lengths of the drilled shaft foundations along the entire 20-mile Minimum Operating Segment during the Conceptual Engineering and Preliminary Engineering Phases. The top of rail for the guideway varied from almost 29 feet to 75 feet above the existing ground. Spans between columns were planned as being in the range of 125 feet ± 25 feet based on studies completed for segmental construction. Several sections required spans exceeding 180 feet were designated special structures and were envisioned as balanced cantilever guideway construction.",
      "This case study describes Geolabs’ conceptual and preliminary engineering work; it is not a statement of the current operating rail alignment.",
    ],
  },
  {
    slug: "kamehameha-athletic-field",
    title: "Kamehameha School Athletic Field",
    location: "Pukalani, Maui",
    market: "Education",
    image: "kamehameha",
    credit: "sheriqpetunia",
    summary: "Geolabs performed geotechnical engineering services on the Kamehameha School Athletic Field.",
    facts: [
      ["Completed", "2002"],
      ["Vertical relief", "80 feet"],
    ],
    source: "Kamehameha (Newer)",
    body: [
      "The project called for a state-of-the-art, three-level high school athletic complex on a rocky mountain ridge with 80 feet of vertical relief. Geolabs provided geotechnical engineering services to help create a stable building surface.",
      "The design team repositioned the project footprint and employed five retaining wall systems: tieback soldier pile walls, mechanically stabilized earth walls, soil nail walls, cantilevered concrete walls, and gravity walls. Geolabs recommended the majority of these systems.",
      "The project was built at a cost nearly 50 percent less than original estimate budget. The project was awarded the 2002 Grand Conceptor Award at the local ACEC Competition and received an Honorable Mention Award at the National Civil Engineering Competition held in Washington DC in 2002.",
    ],
  },
  {
    slug: "ala-moana-center",
    title: "Ala Moana Center Expansion",
    location: "Honolulu, Oʻahu",
    market: "Retail",
    image: "ala-moana",
    credit: "CallisonRTKL",
    summary: "This flexible foundation approach helped the Owner in reducing the overall foundation costs for the project.",
    facts: [["Site area", "173,300 square feet"]],
    source: "Ala Moana Center Expansion (New)",
    body: [
      "Geolabs served as the geotechnical consultant for an expansion of Hawaiʻi’s largest shopping center. The work included a three-level Nordstrom store, a seven-level parking structure with provisions for a future residential tower, and a three-level retail connector.",
      "This project site was unique in that the upper coral ledge that is generally present at depths of about 15 to 20 feet below the ground surface in the Ala Moana-Kakaʻako area was absent across a portion of the project site probably due to erosion by an ancient alluvial stream channel. The presence of an ancient alluvial stream channel across a portion of the project site posed significant challenges to the design and construction of foundations for this project.",
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
    summary: "Geolabs served as the geotechnical consultant.",
    facts: [
      ["Completed", "2007"],
      ["Drilled shafts", "Approximately 310"],
      ["Foundation depth", "Up to 130 feet"],
    ],
    source: "The Moana Pacific (New)",
    body: [
      "At Piʻikoi Street and Kapiʻolani Boulevard, the Moana Pacific development combines two oval residential towers above a five-level parking garage. Each residential tower included 46 stories of apartments and two levels of penthouses, comprising a total of 416 living units for each tower.",
      "Fill and soft lagoonal deposits overlie interbedded coral and coralline materials. To meet structural demands, Geolabs recommended high-capacity cast-in-place concrete drilled shafts deriving support from friction in the underlying alluvial and coralline deposits.",
      "Drilled shafts with diameters of 24, 42 and 48 inches extending down to depths up to 130 feet below the ground surface were recommended based on the structural demands of up to 3,500 kips per drilled shaft. The larger diameter and deeper drilled shafts were generally recommended for areas with relatively high column loads, such as the main tower structure. The project consisted of installing about 310 drilled shafts to support the building and parking structures. Geolabs observed installation of all the drilled shaft foundations and provided Special Inspection services.",
    ],
  },
  {
    slug: "koolani-tower",
    title: "Koʻolani Tower",
    location: "Honolulu, Oʻahu",
    market: "Residential",
    image: "koolani",
    credit: "Hawaii Real Estate and Living",
    summary: "Geolabs observed installation of all the drilled shaft foundations and provided Special Inspection services.",
    facts: [
      ["Foundation depth", "45–130 feet"],
      ["Drilled shafts", "Approximately 274"],
      ["Trunk sewer", "1,200 linear feet"],
    ],
    source: "Ko'olani Tower (New)",
    body: [
      "The Koʻolani Tower Condominium is at the intersection of Waimanu Street and Pensacola Street in Honolulu on the Island of Oahu, Hawaii. The project consisted of a new luxury high-rise condominium comprising of 46 stories and providing approximately 750,000 square feet of interior space with a recreation center and commercial spaces in the first five floors and a five-story parking garage constructed adjacent to the main tower.",
      "Geolabs recommended cast-in-place drilled shafts through fill and soft lagoonal deposits into underlying coral formations and coralline materials. Drilled shafts with diameters of 36, 42 and 48 inches extending down to depths ranging from 45 to 130 feet below the ground surface were recommended based on the structural demands of up to 3,500 kips per drilled shaft. The larger diameter and deeper drilled shafts were generally recommended for areas with relatively high column loads, such as the main tower structure. The project consisted of installing about 274 drilled shafts to support the building and parking structures.",
      "Geolabs observed installation of all the drilled shaft foundations and provided Special Inspection services. Geolabs also provided geotechnical engineering services in support of the Auahi Trunk Sewer project by preparing construction documents to install 1,200 linear feet of 30-inch diameter gravity sewer line by microtunneling methods. The sewer line alignment traversed sensitive areas, such as Ala Moana Boulevard and the Ala Moana Drainage Canal, before discharging into the 69-inch Ala Moana Trunk Sewer. As part of the project, jet grout column supports were utilized to support the sewer line in the long term.",
    ],
  },
  {
    slug: "kahului-airport",
    title: "Kahului Airport Terminal Complex",
    location: "Kahului, Maui",
    market: "Airports",
    image: "kahului-terminal",
    credit: "maui-airport.com",
    summary: "Airport work, a Geolabs Specialty, requires experience in all aspects of Geotechnical Engineering: Testing, Foundation Work, Site Stabilization and Pavement Design.",
    source: "Kahului Airport Terminal Complex (New)",
    facts: [["Completion year", "1983"]],
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
    summary: "The Navy's Dry Dock 3 Replacement Project is located at the Joint Base Pearl Harbor-Hickam.",
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
    summary: "The project is being built in four phases.",
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
    summary: "The project emphasizes community and lifestyle with an expansive nearly half-acre green space known as The Park.",
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
      "M.S. in Geotechnical Engineering, University of California at Berkeley",
      "B.S. in Mining Engineering, University of California at Berkeley",
    ],
    registration:
      "Registered Civil Engineer: California (1991) and Hawaiʻi (1994)",
  },
  {
    name: "Gerald Y. Seki",
    role: "Vice President",
    image: "gerald",
    education: [
      "M.S. in Soil Mechanics and Foundation Engineering, California State University at Sacramento",
      "B.S. in Civil Engineering, University of Hawaii at Manoa",
    ],
    registration: "State of Hawaii, Registered Civil Engineer",
  },
  {
    name: "John Y.L. Chen",
    role: "Vice President",
    image: "john",
    education: [
      "M.S. in Geotechnical Engineering, University of Massachusetts at Lowell",
      "B.S. in Structural Engineering, Tongji University, Shanghai, China",
    ],
    registration: "State of Hawaii, Registered Civil Engineer",
  },
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
    "Honor Award — Innovative Shallow Foundation Design Using “Wick Drains”",
    "Consulting Engineers Council of Hawaiʻi",
  ],
  [
    "1995",
    "Aloha Tower Marketplace",
    "Honor Award — Shallow Foundation Design Over Soft Soil",
    "Consulting Engineers Council of Hawaiʻi",
  ],
  [
    "1992",
    "Sewer Tunnel Relief, Increment 2",
    "Excellence Award — Innovative and Highly Accurate Methods in Determining Subsurface Conditions Enabling the Project to Complete On-Time and Within Cost",
    "Consulting Engineers Council of Hawaiʻi",
  ],
  [
    "—", // Published Awards says 1993; saved Awards (New) says 1992. See content-parity-review.md.
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
    "Employee Stock Ownership Plan (ESOP)",
    "Provides retirement benefits to eligible employees based on ownership interest in our Company.",
  ],
  [
    "Medical, Dental, Drug and Vision",
    "Geolabs pays family coverage after twelve consecutive months of full-time employment.",
  ],
  [
    "Paid Time Off (PTO)",
    "14 days the first year up to 28 days at 20 or more years of service.",
  ],
  [
    "401K Plan",
    "Provides employees the potential for future financial security for retirement.",
  ],
  ["Holidays", "Ten days per year plus 1/2 day on Christmas Eve."],
  ["Group Term Life Insurance", ""],
  [
    "Flexible Spending Account (FSA)",
    "Allows employees to save tax dollars on money they spend for eligible, non-reimbursed health care expenses, insurance premiums and/or dependent care out-of-pockets expenses.",
  ],
];

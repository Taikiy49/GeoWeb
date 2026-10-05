import cmsProjects from "./cms-projects.json";
export const careersUrl = "https://careers.geolabs.net";
export const applyUrl = `${careersUrl}/apply`;
export const image = (name: string) => `/images/${name}.webp`;
export const offices = [
  {
    id: "office-oahu",
    name: "Oʻahu",
    city: "Waipahu",
    address: "94-429 Koaki Street, Suite 200",
    locality: "Waipahu, HI 96797",
    phones: ["(808) 841-5064"],
    email: "hawaii@geolabs.net",
  },
  {
    id: "office-maui",
    name: "Maui",
    city: "Wailuku",
    address: "780 Alua Street, 1st Floor",
    locality: "Wailuku, HI 96793",
    phones: ["(808) 244-4435"],
    email: "maui@geolabs.net",
  },
  {
    id: "office-kauai",
    name: "Kauaʻi",
    city: "Līhuʻe",
    address: "1639 Haleukana Street, Unit #5",
    locality: "Lihue, HI 96766",
    phones: ["(808) 913-5151", "(808) 479-2488"],
    email: "kauai@geolabs.net",
  },
  {
    id: "office-california",
    name: "California",
    city: "Oakland",
    address: "344 20th Street, Suite 340",
    locality: "Oakland, CA 94612",
    phones: ["(510) 710-3140"],
    email: "oakland@geolabs.net",
  },
];
export interface Service {
  slug: string;
  title: string;
  imageAlt: string;
  caption: string;
  image: string;
  intro: string;
  overview?: string[];
  sections: { title: string; text: string; items?: string[]; groups?: { title: string; items: string[] }[]; image?: string; caption?: string }[];
}
export const services: Service[] = [
  {
    slug: "geotechnical-engineering",
    title: "Geotechnical engineering",
    image: "pali-highway",
    imageAlt: "Slope stabilization and rockfall protection along Pali Highway",
    caption: "Pali Highway landslide mitigation, Oʻahu",
    intro:
      "Geotechnical engineering is a branch of civil engineering that focuses on the behavior of earth materials—such as soil, rock, and groundwater—and how they interact with man-made structures. It involves the investigation, analysis, and design of foundations, slopes, retaining structures, tunnels, embankments, and other systems that rely on the stability and strength of the ground.",
    overview: ["The primary goal of geotechnical engineering is to ensure that structures like buildings, bridges, retaining walls, earth embankment, and roads, are safe, stable, and durable by understanding and managing the risks posed by subsurface conditions."],
    sections: [
      {
        title: "Subsurface investigation",
        image: "investigation-h1",
        caption: "Interstate Route H-1 Widening, Oahu (2005)",
        text: "Subsurface investigation is the process of exploring and testing soil, rock, and groundwater to understand site conditions. Its purpose is to provide reliable data for designing foundations, slopes, retaining walls, tunnels, embankments, and roads, ensuring projects are safe and stable.",
      },
      {
        title: "Foundations",
        image: "park-foundations",
        caption: "The Park on Keaaumoku Twin Towers, Honolulu, Oahu (2025)",
        text: "Foundations transfer structural loads into the ground, ensuring stability and durability for buildings, bridges, retaining walls, embankments, and roads. Our work spans the full range of foundation systems:",
        items: [
          "Shallow foundations are used where competent soils are close to the surface, relying on footings, mats, or slabs to distribute loads efficiently.",
          "Deep foundations come into play when stronger support is needed at depth, using piles, drilled shafts, or caissons to reach more stable layers.",
        ],
      },
      {
        title: "Retaining walls",
        image: "wainiha-walls",
        caption: "Wainiha Landslide Mitigation on Kuhio Highway, Kauai (2018)",
        text: "Retaining walls provide lateral support for soil, allowing construction on sloped or uneven terrain. They help stabilize ground, prevent erosion, and create usable space for infrastructure and development.",
        groups: [{ title: "Conventional retaining walls", items: ["Gravity retaining walls", "Cantilevered retaining walls"] }, { title: "Specialty retaining walls", items: [
          "Mechanically stabilized earth (MSE) retaining walls",
          "Segmental block retaining walls",
          "Geosynthetically reinforced soil (GRS) retaining walls",
          "Soil nail walls",
          "Soldier pile and lagging (shotcrete) walls",
          "Tieback retaining walls",
          "Crib walls",
        ] }],
      },
      {
        title: "Slope stability & rockfall hazard analysis",
        image: "rock-scaling",
        caption: "Rock Slope Scaling along Kalanianaole Highway at Makapuu, Oahu (2002)",
        text: "Slope stability and rockfall hazard analysis is the process of evaluating natural and engineered slopes to understand their potential for movement or failure. Its purpose is to provide reliable assessments for designing retaining walls, embankments, roadways, and other structures in hilly or mountainous terrain, ensuring projects remain safe, stable, and resilient against landslides or falling rock.",
      },
      {
        title: "Ground improvement",
        image: "ground-improvement",
        caption: "Wainiha Landslide Mitigation on Kuhio Highway, Kauai (2018)",
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
    image: "earthwork",
    imageAlt: "Mass grading and earthwork at Hoopili development",
    caption: "Hoopili development mass grading & slope, Oʻahu",
    intro:
      "Services during construction is the on-site phase of geotechnical practice that ensures designs are implemented correctly and safely as conditions evolve in the field. It focuses on how subsurface conditions, foundations, and support systems perform during active work, bringing together construction support, geotechnical special inspection, and real-time decision-making to align plans with actual site behavior. This includes targeted oversight for deep foundations, shallow foundations, earthwork, and shoring systems, with verification that methods and materials meet design intent.",
    overview: ["The primary goal is to confirm that geotechnical elements perform as designed through geotechnical instrumentation and monitoring, construction materials engineering and testing (CoMET), excavation shoring design, and dewatering evaluation and design, so constructed works are safe, compliant, and durable.", "Construction support refers to the technical assistance and oversight provided by engineers—especially geotechnical, structural, and civil engineers—during the construction phase of a project. It ensures that the design intent is properly implemented in the field and that any unforeseen conditions or challenges are addressed promptly and effectively."],
    sections: [
      {
        title: "Construction support",
        image: "investigation-h1",
        caption: "Interstate Route H-1 Widening, Oahu (2005)",
        text: "Construction support refers to the geotechnical services provided during active building phases to ensure safe, efficient execution. It includes reviewing plans, monitoring earthwork, inspecting foundations, and advising on unexpected site conditions. The goal is to help contractors respond to real-time challenges while maintaining design integrity, safety, and compliance with engineering standards.",
      },
      {
        title: "Geotechnical special inspection",
        image: "park-foundations",
        caption: "The Park on Keaaumoku Twin Towers, Honolulu, Oahu (2025)",
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
        image: "wainiha-walls",
        caption: "Wainiha Landslide Mitigation on Kuhio Highway, Kauai (2018)",
        text: "Geotechnical Instrumentation and Monitoring use specialized sensors to track ground and structural behavior during and after construction. These systems provide real-time data on movement, pressure, and stability, helping engineers detect issues early and ensure safety. Effective monitoring supports risk management and long-term performance of infrastructure.",
      },
      {
        title: "Construction materials engineering & testing",
        image: "rock-scaling",
        caption: "Rock Slope Scaling along Kalanianaole Highway at Makapuu, Oahu (2002)",
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
    image: "drill-rig",
    imageAlt: "Geolabs truck-mounted CME-75 drill rig",
    caption: "Geolabs drilling equipment",
    intro:
      "Drilling and subsurface investigation involve extracting rock and soil from underground to assess the geological properties of a site. This allows designers and construction workers to have a better idea of the terrain of an area.",
    overview: ["A subsurface investigation is a critical phase in the planning and design of construction projects, especially those involving large structures such as high-rise buildings, bridges, retaining walls, earth embankments, and airfield pavements. It involves exploring below the ground surface by extracting soil and rock samples and analyzing their physical and engineering properties, along with assessing groundwater conditions at the proposed construction site.", "This process provides engineers and designers with a detailed understanding of the subsurface terrain, enabling informed decisions about foundation design, earthwork, and construction methods. It helps identify potential geotechnical challenges and ensures the safety, stability, and cost-effectiveness of the project."],
    sections: [
      {
        title: "Core drilling",
        text: "Core Drilling is a method that extracts cylindrical samples of rock or soil from underground. It provides a more precise depiction of subsurface conditions than other drilling methods.",
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
    image: "concrete-core",
    imageAlt: "Concrete core sample in a testing apparatus",
    caption: "Concrete core testing",
    intro:
      "Materials testing involves evaluating the physical, mechanical, and chemical properties of materials that are used in infrastructure. We test and ensure that the quality and performance of these materials guarantee safety among us and the community.",
    overview: ["Construction Materials Engineering and Testing (CoMET) is a vital process in infrastructure development that ensures the quality, safety, and performance of materials used in construction. It involves evaluating the physical, mechanical, and chemical properties of materials such as soil, concrete, asphaltic concrete, steel, and aggregates to verify that they meet project specifications, industry standards, and regulatory requirements."],
    sections: [
      {
        title: "Soils & concrete",
        text: "Both soil and concrete and widely used as foundations in infrastructure. Proper assessment and characterization of these materials are vital to ensure the stability and safety of these large projects.",
      },
      {
        title: "Construction quality control",
        text: "Construction Quality Control refers to the activities to ensure that the work meets the client's quality standards and conforms to all codes/regulations. We closely work with all people on a job site to guarantee that the work is done to the best of everyone's ability.",
      },
      {
        title: "Geotechnical instrumentation",
        text: "Geotechnical Instruments allow us to monitor the behaviors of rock and soil formations. We can use this information to test and determine how different infrastructures will react at various sites.",
      },
      {
        title: "Slope stability analysis",
        text: "Slope stability analysis is used to prevent any type of slope from failing. To mitigate these risks, we precisely test and monitor how the materials involved in these slopes are interacting with the environment around them.",
      },
    ],
  },
  {
    slug: "forensic-expert-witness",
    title: "Forensic & expert witness services",
    image: "forensic-damage",
    imageAlt: "Excavation and foundation exposure beneath a bridge",
    caption: "Bridge foundation investigation",
    intro:
      "Forensic and Expert Witnesses are people who possess specialized knowledge and experience in a field relevant in a legal case. These witnesses are called upon to provide this expertise/opinions to help the court understand the complex issues regarding the case.",
    overview: ["When structural failures occur, we don't study them to point blame, we study them to ensure that it never happens again. For the safety of our community, we carefully investigate what caused these events and provide a plan to prevent them from happening again."],
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
  draft?: boolean;
}
export const projects: Project[] = [
  {
    slug: "international-marketplace",
    title: "International Market Place",
    location: "Waikīkī, Oʻahu",
    market: "Retail",
    image: "marketplace",
    credit: "International Market Place",
    summary: "The International Market Place is an open-air shop/dining entertainment market at the heart of Waikiki. It consists of over 90 stores, and showcases of rich Hawaiian traditions and culture.",
    facts: [
      ["Completed", "August 2016"],
      ["Size", "345,000 square feet"],
      ["Client", "International Marketplace"],
    ],
    source: "International Marketplace (New)",
    body: [
          "For decades, the International Market Place (IMP) has been an icon in the heart of Waikiki in Honolulu, Hawaii. It was famous for Duke Kahanamoku’s restaurant where people flocked to hear Don Ho singing in the ’60s and ’70s. Later, it was a bustling, open-air hub of small vendors who peddled everything from Hawaiian souvenirs and jewelry to food court meals and farmer’s market produce. Small buildings and shacks that housed the businesses were located on a curved tract of land, just one block off the beach, that stretches from Kalakaua Avenue to Kuhio Avenue. The entrance to the complex is dominated by a huge, old (circa 1850) Banyan tree. The land is owned by the Queen Emma Land Company. Queen Emma was a Hawaiian Queen from the 1800s. Revenue from the land has supported the Queen’s Medical Center in Honolulu for decades.",
          "The reimagined IMP is owned by Taubman Centers, of Bloomfield Hills, Mich., and CoastWood Capital Group of San Francisco, Calif. The IMP offers a distinctive collection of upscale fashion and lifestyle retailers, restaurants, and two large open-air courts, the first of which has the huge Banyan tree as its entryway centerpiece.",
          "The installation of the micropiles at IMP had significant difficulties and constraints: highly variable substrata, live trees protected in place, archeological concerns, working on an island, artesian ground water, complex critical path schedule, and the list goes on. These significant challenges were met by a diverse project team that worked cooperatively with the project’s goals clearly in focus. The use of a design-assist concept with the foundation contractor provided a unique atmosphere of technical cooperation to the benefit of the project. The project team members met weekly throughout the project to discuss the current and upcoming challenges. The agreed goals and open communication created a partnering environment between the contractor, owner, consultants, and specialty foundation contractor to ensure performance in safety, quality, financial control, and schedule.",
          "Project Team Members: Owner, Taubman Centers, Inc.; General Contractor, dck-FWF; Owner’s Consultant, Ehlert Consulting Services; Structural Engineer, Ludwig Structural Consulting; Geotechnical Engineers, SME and Geolabs, Inc.; Micropile Design-Build/Design Assist Contractor, Hayward Baker Inc."
    ],
  },
  {
    slug: "honolulu-rail",
    title: "Honolulu High-Capacity Transit Corridor",
    location: "Oʻahu",
    market: "Transportation",
    image: "rail",
    credit: "Honolulu.gov",
    summary: "The Honolulu High Capacity Transit Corridor Project is a metro system that will feature driverless trains and a commuter rail design.",
    facts: [
      ["Exploration", "130 borings"],
      ["Drilling", "Over 16,000 linear feet"],
      ["Scope", "Conceptual & preliminary engineering"],
      ["Initial plans", "2008"],
      ["Client", "Government"],
    ],
    source: "Honolulu Rail (Newer)",
    body: [
          "The Honolulu High-Capacity Transit Corridor Project (HHCTCP) involved the construction and operation of a fixed-guideway transit system in the corridor between Kapolei and the University of Hawaii at Manoa with a branch to Waikiki on the Island of Oahu, Hawaii.",
          "The initial conceptual plans [circa 2008] were for the guideway alignment to advance the project design team efforts with the conceptual engineering phase of the aerial guideway foundations being the primary focus.",
          "The HHCTCP consisted of a dual track, aerially supported guideway, transit stations, and transit system appurtenant facilities, and requires revisions to the existing infrastructure, including utilities associated with project execution. The top of rail for the guideway varied from almost 29 feet to 75 feet above the existing ground. Spans between columns were planned as being in the range of 125 feet ± 25 feet based on studies completed for segmental construction. Several sections required spans exceeding 180 feet were designated special structures and were envisioned as balanced cantilever guideway construction.",
          "Geolabs provided geotechnical engineering services in support of the conceptual engineering and preliminary engineering phases of the project. Our scope of work consisted of drilling and sampling 130 borings totaling over 16,000 lineal feet of geotechnical exploration; performing seismic cone penetration tests; performing seismic shear wave velocity profiling; converting selected borings into groundwater monitoring points with installation of vibrating wire piezometers; and monitoring groundwater levels in the groundwater monitoring points.",
          "Our geotechnical engineering efforts also included performing preliminary foundation analyses including compression load and lateral load analyses to establish the diameters and lengths of the drilled shaft foundations along the entire 20-mile Minimum Operating Segment during the Conceptual Engineering and Preliminary Engineering Phases."
    ],
  },
  {
    slug: "kamehameha-athletic-field",
    title: "Kamehameha School Athletic Field",
    location: "Pukalani, Maui",
    market: "Education",
    image: "kamehameha",
    credit: "sheriqpetunia",
    summary: "The Kamehameha School Athletic Field is a state-of-the-art high school tri-level complex that stably sits on a rough mountain ridge.",
    facts: [
      ["Completed", "2002"],
      ["Vertical relief", "80 feet"],
      ["Client", "Kamehameha School"],
    ],
    source: "Kamehameha (Newer)",
    body: [
          "Geolabs performed geotechnical engineering services on the Kamehameha School Athletic Field. The purpose of the project was to build a state-of-the-art high school athletic complex (tri-level complex) on a rocky mountain ridge, with a vertical relief of 80 feet, by creating a stable horizontal building surface.",
          "Engineers repositioned the project footprint and employed five different retaining wall systems, the majority of which were recommended by Geolabs, which included tie-back soldier pile walls, MSE walls, and soil nail walls. The more traditional cantilevered concrete retaining walls and gravity walls were also used.",
          "The project was built at a cost nearly 50 percent less than original estimate budget. The project was awarded the 2002 Grand Conceptor Award at the local ACEC Competition and received an Honorable Mention Award at the National Civil Engineering Competition held in Washington DC in 2002."
    ],
  },
  {
    slug: "ala-moana-center",
    title: "Ala Moana Center Expansion",
    location: "Honolulu, Oʻahu",
    market: "Retail",
    image: "ala-moana",
    credit: "CallisonRTKL",
    summary: "The expansion of Ala Moana features 30 new stores and a gathering place flushed with native Hawaiian and tropical plants, serving as a passageway from the original mall to the new wing.",
    facts: [["Site area", "173,300 square feet"], ["Completion", "Under review"]],
    source: "Ala Moana Center Expansion (New)",
    body: [
          "Geolabs served as the geotechnical consultant for the expansion of Ala Moana Center, the largest shopping center in the State of Hawaii. As part of the expansion project, General Growth Properties developed the area to the north of the existing shopping center by constructing a three-level Nordstrom Store and a seven-level parking structure with provisions for a future residential tower structure atop the parking garage. In addition, the project also included a new three-level retail connector to tie into the existing shopping center. The long rectangular-shaped parcel for the expansion project encompassed about 173,300 square feet in land area.",
          "This project site was unique in that the upper coral ledge that is generally present at depths of about 15 to 20 feet below the ground surface in the Ala Moana-Kaka’ako area was absent across a portion of the project site probably due to erosion by an ancient alluvial stream channel. The presence of an ancient alluvial stream channel across a portion of the project site posed significant challenges to the design and construction of foundations for this project.",
          "Because of the variable subsurface conditions across the project site, Geolabs in conjunction with the design and construction team utilized various types of foundation systems including cast-in-place concrete drilled shafts, Augered Cast-In-Place concrete piles, driven concrete piles, and drilled micropiles for the expansion project depending on the structural load demands and the prevalent subsurface conditions for the elements. This flexible foundation approach helped the Owner in reducing the overall foundation costs for the project."
    ],
  },
  {
    slug: "moana-pacific",
    title: "The Moana Pacific",
    location: "Honolulu, Oʻahu",
    market: "Residential",
    image: "moana-pacific",
    credit: "CTBUH",
    summary: "The Moana Pacific consists of 2 large-scale condo towers that house amenities like tennis courts, fitness areas, movie theaters, and a driving range.",
    facts: [
      ["Completed", "2007"],
      ["Drilled shafts", "Approximately 310"],
      ["Foundation depth", "Up to 130 feet"],
    ],
    source: "The Moana Pacific (New)",
    body: [
          "The Moana Pacific high-rise condominium project is located at the intersection of Piikoi Street and Kapiolani Boulevard in Honolulu on the Island of Oahu, Hawaii. The development consisted of a luxury high-rise condominium with a five-level above ground parking garage encompassing the majority of the project site. Two oval-shaped, high-rise residential towers above the parking garage are located at the northeastern and southwestern portions of the property. Each residential tower included 46 stories of apartments and two levels of penthouses, comprising a total of 416 living units for each tower.",
          "Geolabs served as the geotechnical consultant. The subsurface conditions at the project site generally consisted of fill materials at the ground surface underlain by soft lagoonal deposits. Coral formation interbedded with layers of coralline detritus was encountered below the lagoonal deposits. Based on the subsurface conditions encountered and the structural demands on the building foundation and parking garage foundation, Geolabs recommended supporting the new structures by a deep foundation system consisting of cast-in-place concrete drilled shafts. The high capacity drilled shaft foundations derived support from friction in the alluvial and coralline deposits beneath the site.",
          "Drilled shafts with diameters of 24, 42 and 48 inches extending down to depths up to 130 feet below the ground surface were recommended based on the structural demands of up to 3,500 kips per drilled shaft. The larger diameter and deeper drilled shafts were generally recommended for areas with relatively high column loads, such as the main tower structure. The project consisted of installing about 310 drilled shafts to support the building and parking structures. Geolabs observed installation of all the drilled shaft foundations and provided Special Inspection services."
    ],
  },
  {
    slug: "koolani-tower",
    title: "Koʻolani Tower",
    location: "Honolulu, Oʻahu",
    market: "Residential",
    image: "koolani",
    credit: "Hawaii Real Estate and Living",
    summary: "The Ko'olani Condominium has a total of 370 units spread amongst 48 floors. The design of these units maximizes natural light, particularly on the higher floors.",
    facts: [
      ["Foundation depth", "45–130 feet"],
      ["Drilled shafts", "Approximately 274"],
      ["Trunk sewer", "1,200 linear feet"],
      ["Completion", "2007"],
    ],
    source: "Ko'olani Tower (New)",
    body: [
          "The Ko’olani Tower Condominium is at the intersection of Waimanu Street and Pensacola Street in Honolulu on the Island of Oahu, Hawaii. The project consisted of a new luxury high-rise condominium comprising of 46 stories and providing approximately 750,000 square feet of interior space with a recreation center and commercial spaces in the first five floors and a five-story parking garage constructed adjacent to the main tower.",
          "The subsurface conditions at the project site generally consisted of fill materials at the ground surface underlain by soft lagoonal deposits. Coral formations interbedded with layers of coralline detritus were encountered below the lagoonal deposits. Based on the subsurface conditions encountered and the structural demands on the high‑rise building foundation and parking garage foundation, Geolabs recommended supporting the new structures by a deep foundation system consisting of cast-in-place concrete drilled shafts. Drilled shafts with diameters of 36, 42 and 48 inches extending down to depths ranging from 45 to 130 feet below the ground surface were recommended based on the structural demands of up to 3,500 kips per drilled shaft. The larger diameter and deeper drilled shafts were generally recommended for areas with relatively high column loads, such as the main tower structure. The project consisted of installing about 274 drilled shafts to support the building and parking structures. Geolabs observed installation of all the drilled shaft foundations and provided Special Inspection services.",
          "Geolabs also provided geotechnical engineering services in support of the Auahi Trunk Sewer project by preparing construction documents to install 1,200 linear feet of 30-inch diameter gravity sewer line by microtunneling methods. The sewer line alignment traversed sensitive areas, such as Ala Moana Boulevard and the Ala Moana Drainage Canal, before discharging into the 69-inch Ala Moana Trunk Sewer. As part of the project, jet grout column supports were utilized to support the sewer line in the long term."
    ],
  },
  {
    slug: "kahului-airport",
    title: "Kahului Airport Terminal Complex",
    location: "Kahului, Maui",
    market: "Airports",
    image: "kahului-terminal",
    credit: "maui-airport.com",
    summary: "The Kahului Airport consists of the Commuter and Main Terminal. The Main Terminal is a spacious facility with many shopping and eating options.",
    source: "Kahului Airport Terminal Complex (New)",
    facts: [["Completion year", "1983"]],
    body: [
          "Airport work, a Geolabs Specialty, requires experience in all aspects of Geotechnical Engineering: Testing, Foundation Work, Site Stabilization and Pavement Design.",
          "Geolabs served as the geotechnical engineering consultant for all phases of the design of the Kahului Airport expansion project. Included in the work was the evaluation of the existing aircraft and vehicular pavements for defects and effective service life. Design efforts included traffic analysis and design for new vehicular and aircraft pavements using Federal Highway Administration and Federal Aviation Administration methods as appropriate. The projects involved both rigid and flexible pavements with transitional thicknesses between sections with differing traffic loadings.",
          "A new terminal building; air cargo building and baggage handling facility were also included in the project. Most of the field work was done during evening hours to avoid disruption of aircraft traffic schedules."
    ],
  },
  {
    slug: "navy-dry-dock",
    title: "Navy’s Dry Dock 3 Replacement",
    location: "Pearl Harbor–Hickam, Oʻahu",
    market: "Docks & harbors",
    image: "drydock",
    credit: "U.S. Pacific Fleet",
    summary: "The Navy's Dry Dock 3 Replacement Project is located at the Joint Base Pearl Harbor-Hickam. This ~$3 billion project was awarded by Naval Facilities Engineering Systems Command to local and offshore general contractors.",
    source: "Navy's Dry Dock 3 Replacement (New)",
    facts: [["Client", "U.S. Department of Defense"]],
    body: [
          "The Navy's Dry Dock 3 Replacement project at Join Base Pearl Harbor-Hickam is valued at approximately $2 billion to $4 billion. \"It will be huge,” says Steve Baginski, 2023 president of the General Contractors Association of Hawaii. The project dovetails with enormous contracts recently awarded by Naval Facilities Engineering Systems Command (NAVAC) to local and offshore general contractors. These include:",
          "$8.5 billion from NAVFAC Pacific awarded in late 2021 for work in Hawaii and Washington state to five Shipyard Infrastructure Optimization Program (SIOP) contractors. Local GCs include Hawaiian Dredging Construction Co. Inc., Nan Inc. and Kiewit, all operating as members of three separate joint ventures (JV). The contract expires in 2029.",
          "Approximately $3 billion in four separate MACCs (multiple award construction contracts), awarded for work in Hawaii, Washington state and the Pacific to local GCs, often operating in tandem or separately as joint ventures. Hawaii GCs include Healy Tibbitts Builders Inc., Hawaiian Dredging, Hensel Phelps, Nan Inc., Kiewit Infrastructure West and others.",
          "Contracts run from 2025 through 2027. And this doesn't even touch on military projects currently underway. One, valued at $342 million, indicates the Size and scope of current and upcoming construction. \"Hensel Phelps was contracted to construct the third phase of the U.S. Army Pacific's (USARPAC) new Command and Control Facility (C2F) Complex on Fort Shafter,\" says Thomas J. Diersbock, Hensel Phelps vice president and Pacific Thomas I. Diersbock District manager. C2F will be the new headquarters for USARPAC to support administrative and special-use operations in the Pacific. The project's third phase includes new construction of three administrative facilities divided into specified security zones, all built within the constraints of the two existing buildings. The project also includes a Sensitive Compartmented Information Facility space, independent fueling station, mechanical yard, generator yard and architectural concrete flatwork. \"The Command and Control Facility is not only a very complex construction project in terms of its technological design, but bringing numerous stakeholders together to complete their vision and expectations was a major feat by the entire project team,\" Diersbock says. \"We use the term 'EXCELLENCE' on this project to describe the energy and expertise brought forward by the entire team to create this exceptional complex.\""
    ],
  },
  {
    slug: "kapolei-harborside",
    title: "Kapolei Harborside Redevelopment",
    location: "Kapolei, Oʻahu",
    market: "Utilities",
    image: "kapolei",
    credit: "G70 Design",
    summary: "Kapolei Harborside Redevelopment is a project located in Kapolei that is developing Oahu's 76 West Side in a big way. IT consists of ~$30 million of critical infrastructures and a 360-area industrial park.",
    facts: [
      ["Client", "James Campbell Company"],
      ["Development", "Approximately 360 acres"],
    ],
    source: "Kapolei Harborside Redevelopment (New)",
    body: [
          "Geolabs is at the center of Oahu's West Side utilities redevelopment. The Kamaaina company that built Kapolei from scratch is developing more of Oahu's West Side in a very big way. \"James Campbell Co. is currently building approximately $30 million of critical infrastructure at its Kapolei Harborside development, an approximately 360-acre industrial park located near the Kalaeloa Barbers Point Harbor,\" says Peter Phillips, Project & Construction manager, Kapolei Properties Division, James Campbell Co. LLC.",
          "The project is being built in four phases. New infrastructure includes wastewater systems, drainage, roadway and electrical improvements, and will service Harborside's first phase of approximately 72 acres. That's plenty of work for Hawaii contractors in 2023. And there's plenty of power nearby to back it up. Kapolei Energy Storage, a 185MW Plus Power battery storage project currently underway by Moss & Associates, is \" scheduled to wrap in March and is scheduled to wrap in March and is \"the first stand-alone, largest battery-storage project in the state,\" says Josh Meyers, Moss vice president of energy in Hawaii. But for many would-be Harborside builders, there's a catch. \"Oahu's industrial vacancy rate [is] anticipated to drop below 1% in 2023,\" says Robert Kelley, vice president at Avalon Development Co. LLC. \"There is currently almost no fee-simple industrial warehouse space under construction, leaving local businesses stunted in growth or forced to choose from existing inventory that is often functionally obsolete.\" Avalon is moving quickly. \"Currently, Avalon is developing Coral Creek Center at Gentry Business Park-Ew and The Crossing at Kapolei Business Park West,\" Kelley says.",
          "Combined the two sites will create over 430,000 square feet of industrial space for West Oahu. “Coral Creek Center offers IMX-zoned mixed-use industrial condominiums ranging from approximately 1,100 square feet, up to approximately 111,000 square feet of contiguous space,\" Kelley says. \"The Crossing offers I-2 zoned industrial condominiums at the prime corner of Kalaeloa Boulevard and Lauwiliwili Street, ranging from approximately 1,000 square feet to approximately 59,000 square feet of contiguous space. Both are slated to break ground in 2023 and for delivery in 2024-2025. Harborside's developer is also eyeing this market: \"The James Campbell Co. is designing an approximately 100,000-square-foot industrial spec building for lease,\" Phillips says."
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
          "The Park on Keeaumoku is a striking twin-tower condominium development located in the heart of Honolulu's Ala Moana neighborhood, offering a vibrant, modern community experience. Spanning over 3.5 acres, it features nearly 1,000 residences ranging from studios to three-bedroom units designed for contemporary urban living, complete with floor-to-ceiling windows, open floor plans, private lanais, and upscale finishes such as quartz countertops and Samsung appliances.",
          "The project emphasizes community and lifestyle with an expansive nearly half-acre green space known as The Park. This lush outdoor landscaped area includes picnic spaces, a playground, and comfortable seating, creating a tranquil retreat in the middle of the city. Surrounding this green haven is The Grove, an exclusive shopping and dining area that offers an 11,200-square-foot food hall featuring a variety of restaurants and a full-service bar.",
          "Residents enjoy an impressive suite of resort-style amenities, including a rooftop amenity deck connecting the two towers. This deck boasts an infinity pool and spa with private cabanas and a sun deck for relaxation. Additional amenities include private barbecue pavilions, a state-of-the-art fitness center with cardio and strength equipment, a yoga room, sauna, a movie theater with surround sound, co-working spaces with technology integration, and multi-media rooms perfect for entertainment or work-from-home needs.",
          "The Park on Keeaumoku aims to provide a holistic lifestyle combining urban conveniences with natural beauty and community engagement, making it a highly desirable address that offers the kind of amenities many people travel to experience. It is strategically situated near the Ala Moana Center and other key neighborhoods, providing easy access to shopping, dining, entertainment, and public transportation options.",
          "Overall, The Park on Keeaumoku is more than just a residential development; it is a thoughtfully crafted living environment designed to foster connection, wellness, and comfort in one of Honolulu's sought-after locations."
    ],
  },
];
projects.push(...cmsProjects.map(project => ({
  ...project,
  facts: project.facts.map(([label, value]): [string, string] => [label, value]),
})));
export const leaders = [
  {
    name: "Robin M. Lim",
    role: "President & CEO",
    image: "robin",
    email: "robin@geolabs.net",
    experience: "34.5 total; 30.5 Years with Geolabs, Inc.",
    education: [
      "M.S. in Geotechnical Engineering, University of California at Berkeley",
      "B.S. in Mining Engineering, University of California at Berkeley",
    ],
    registration:
      "State of California, Registered Civil Engineer, 1991; State of Hawaii, Registered Civil Engineer, 1994",
  },
  {
    name: "Gerald Y. Seki",
    role: "Vice President",
    image: "gerald",
    email: "gerald@geolabs.net",
    experience: "41.5 Total; 25.5 Years with Geolabs, Inc.",
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
    email: "john.chen@geolabs.net",
    experience: "35.5 Total; 24.5 Years with Geolabs, Inc.",
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
    "Ewa, Oahu, Hawaii",
  ],
  [
    "2016",
    "International Market Place",
    "Project of the Year",
    "Deep Foundations Institute",
    "Honolulu, Hawaii",
  ],
  [
    "2013 / 2014",
    "Kūhiō Highway Emergency Slope Repairs",
    "Grand Conceptor Awards",
    "ACEC Hawaiʻi",
    "Lumahai, Kauai, Hawaii",
  ],
  [
    "2013 / 2014",
    "Honoapiʻilani Highway Realignment",
    "Outstanding Civil Engineering Achievement / Grand Conceptor Award",
    "ACEC Hawaiʻi",
    "Lahaina, Maui, Hawaii",
  ],
  [
    "2005",
    "Hāna Highway Rockfall Mitigation, MP 11",
    "Engineering Excellence Award",
    "ACEC Hawaiʻi",
    "Hana, Maui, Hawaii",
  ],
  [
    "2003",
    "Kunuiakea Athletic Complex",
    "Engineering Excellence Grand Conceptor Award",
    "ACEC Hawaiʻi",
    "Honolulu, Oahu, Hawaii",
  ],
  [
    "2002",
    "Halekuai Center",
    "Kūkulu Hale Award — New Project of the Year",
    "NAIOP",
    "Kapolei, Oahu, Hawaii",
  ],
  [
    "2001",
    "Kapiʻolani Park Bandstand",
    "Kūkulu Hale Award — Renovation of the Year",
    "NAIOP",
    "Honolulu, Oahu, Hawaii",
  ],
  [
    "2001",
    "Kūhiō Beach Park / Kalākaua Promenade",
    "Kūkulu Hale Award — Renovation of the Year",
    "NAIOP",
    "Honolulu, Oahu, Hawaii",
  ],
  [
    "1996",
    "University of Hawaiʻi at Mānoa Faculty Housing",
    "Honor Award — Innovative Shallow Foundation Design Using “Wick Drains”",
    "Consulting Engineers Council of Hawaiʻi",
    "Honolulu, Oahu, Hawaii",
  ],
  [
    "1995",
    "Aloha Tower Marketplace",
    "Honor Award — Shallow Foundation Design Over Soft Soil",
    "Consulting Engineers Council of Hawaiʻi",
    "Honolulu, Oahu, Hawaii",
  ],
  [
    "1992",
    "Sewer Tunnel Relief, Increment 2",
    "Excellence Award — Innovative and Highly Accurate Methods in Determining Subsurface Conditions Enabling the Project to Complete On-Time and Within Cost",
    "Consulting Engineers Council of Hawaiʻi",
    "Cartwright Field to Metcalf Street, Honolulu, Oahu, Hawaii",
  ],
  [
    "—", // Published Awards says 1993; saved Awards (New) says 1992. See content-parity-review.md.
    "H-3 Trans-Koʻolau Tunnel and Portals",
    "Excellence Award — Innovative Field Exploration Techniques",
    "Consulting Engineers Council of Hawaiʻi",
    "North Halawa and Haiku Valleys, Oahu, Hawaii",
  ],
  [
    "1991",
    "Pearl Kai Center",
    "Excellence Award — Foundation Design in Marginal-Use Wetland Area",
    "CECH / American Consulting Engineers Council",
    "Aiea, Oahu, Hawaii",
  ],
  [
    "1990",
    "Maintenance Hangar Facility",
    "Excellence Award — Innovative Slope Stabilization",
    "CECH / American Consulting Engineers Council",
    "FY85 Milcon P-516 U.S. Naval Air Station Cubi Point, Republic of the Philippines",
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

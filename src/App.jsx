import { useEffect, useMemo, useState } from "react";
import { projects } from "./projectData.js";

const imageAssets = import.meta.glob("../images/*", {
  eager: true,
  query: "?url",
  import: "default"
});
const figureAssets = import.meta.glob("../figs/*", {
  eager: true,
  query: "?url",
  import: "default"
});

const asset = (path) => imageAssets[`../${path}`] || figureAssets[`../${path}`] || path;

const condensedProjectDraft = [
  {
    slug: "shield-vs-strato",
    title: "Shield vs. Stratovolcanoes: Comparing Hazards of Volcanism in Hawai'i and Washington",
    shortTitle: "Shield vs. Stratovolcanoes",
    subtitle: "Comparing Hazards of Volcanism in Hawai'i and Washington",
    meta: [
      ["Course", "GIS4324 - GIS Analysis of Hazard Vulnerability"],
      ["Instructor", "Dr. Kevin Ash"],
      ["Date", "Spring 2025"]
    ],
    sections: [
      {
        heading: "Background",
        paragraphs: [
          "Volcanic hazards vary considerably between volcano types. Shield volcanoes such as Mauna Loa produce low-viscosity basaltic lava that can travel tens of kilometers, while stratovolcanoes such as Mount St. Helens are associated with explosive eruptions, pyroclastic flows, lahars, tephra fall, and earthquake hazards.",
          "This project compares the 2022 Mauna Loa eruption and the 1980 Mount St. Helens eruption to understand how hazard distribution, frequency, and social vulnerability differ between these volcanic systems."
        ]
      },
      {
        heading: "Data",
        paragraphs: [
          "The analysis integrated USGS lava-flow hazard zones, 2022 Mauna Loa eruption shapefiles, Hawaii land-use and Native Hawaiian Land datasets, USGS Mount St. Helens hazard extents, georeferenced historical maps, fatality locations, ACS tract data, and FEMA National Risk Index volcanic hazard scores."
        ]
      },
      {
        heading: "Methods",
        paragraphs: [
          "Work was conducted in ArcGIS Pro. Historic Mount St. Helens disturbance maps were georeferenced against a Cascade Range DEM, fatality locations were overlaid, and hazard extents were compared with census and infrastructure layers.",
          "For Mauna Loa, 2022 lava-flow polygons were intersected with land-use and Native Hawaiian Land datasets, then compared against USGS lava-flow hazard zones and tract-level population exposure."
        ]
      },
      {
        heading: "Results",
        paragraphs: [
          "The 2022 Mauna Loa eruption produced a roughly 19 km lava flow that covered conservation-zoned land and stopped short of the Daniel K. Inouye Highway. In contrast, the 1980 Mount St. Helens eruption produced broad pyroclastic, lahar, and ashfall impacts with major regional consequences.",
          "FEMA NRI scores reflected this contrast: Hawaii Island tracts were comparatively low in national volcanic risk rankings, while Washington tracts near pyroclastic and lahar zones reached much higher volcanic hazard scores."
        ]
      }
    ],
    figures: [
      ["figs/shieldfig1.jpg", "Georeferenced U.S. Forest Service post-eruption map of the May 18, 1980, Mount St. Helens eruption, showing lateral blast, pyroclastic-flow, and lahar disturbance zones.", true],
      ["figs/shieldfig2.jpg", "USGS Lava-Flow Hazard Zones for Hawaii Island and the footprint of the November 27-December 10, 2022, Mauna Loa eruption.", false],
      ["figs/shieldfig3.jpg", "FEMA National Risk Index volcanic hazard scores by census tract for Hawaii Island and Washington State.", false]
    ]
  },
  {
    slug: "mineral-exploration",
    title: "Enhancing Mineral Exploration through Remote Sensing and Machine Learning: A Focus on Cobalt and Nickel in New Caledonia",
    shortTitle: "Enhancing Mineral Exploration through Remote Sensing and Machine Learning",
    subtitle: "A Focus on Cobalt and Nickel in New Caledonia",
    meta: [
      ["Course", "GIS4037 - Remote Sensing"],
      ["Instructor", "Dr. Moulay Anwar Sounny-Slitine"],
      ["Date", "Fall 2024"]
    ],
    sections: [
      {
        heading: "Background",
        paragraphs: [
          "This project investigates whether custom spectral indices and machine learning classification can identify cobalt and nickel deposits in New Caledonia using Google Earth Engine. The goal was to reduce the cost and environmental footprint of traditional mineral exploration."
        ]
      },
      {
        heading: "Data",
        paragraphs: [
          "Sentinel-2 spectral bands, NASA global elevation data, NDVI masking, and known mining operation locations were combined to identify likely laterite and ultramafic rock signatures."
        ]
      },
      {
        heading: "Methods",
        paragraphs: [
          "Two normalized difference indices were developed: LNDI using SWIR and Red Edge bands to highlight lateritic soils, and UNDI using SWIR and NIR bands to highlight ultramafic materials.",
          "A supervised Random Forest classifier was trained in Google Earth Engine using forest, development/barren, water, herbaceous, and cobalt/nickel classes. The final composite map overlaid the machine-learning output on the spectral-index result."
        ],
        formulas: [
          ["LNDI = (SWIR - RedEdge) / (SWIR + RedEdge)", "Laterite Normalized Difference Index"],
          ["UNDI = (SWIR - NIR) / (SWIR + NIR)", "Ultramafic Normalized Difference Index"]
        ]
      },
      {
        heading: "Results",
        paragraphs: [
          "Both the spectral-index map and Random Forest output correctly highlighted most known mining operations and identified additional possible deposit areas. The composite map strengthened confidence where both methods agreed."
        ]
      }
    ],
    figures: [
      ["figs/mineralfig1.jpg", "Combined LNDI, UNDI, and DEM spectral index map of New Caledonia alongside true-color Sentinel-2 imagery.", true],
      ["figs/mineralfig2.jpg", "Random Forest classification output for New Caledonia alongside true-color Sentinel-2 imagery.", false],
      ["figs/mineralfig3.jpg", "Composite map overlaying Random Forest classification onto the spectral indices map.", false]
    ]
  },
  {
    slug: "vog-exposure",
    title: "Vog Exposure and Respiratory Vulnerability in Hawai'i",
    shortTitle: "Vog Exposure and Respiratory Vulnerability in Hawai'i",
    subtitle: "Spatial Risk Modeling & Hot-Spot Analysis",
    meta: [
      ["Course", "GIS4424C - Applications in GIS for Disease Ecology and Zoonoses"],
      ["Instructor", "Dr. Jason Blackburn"],
      ["Date", "Fall 2025"]
    ],
    sections: [
      {
        heading: "Background",
        paragraphs: [
          "This public-health GIS project studied the uneven spatial impacts of volcanic smog, or vog, produced by eruptive activity at Kilauea. The analysis focused on where elevated exposure and respiratory vulnerability overlap across Hawaii census tracts."
        ]
      },
      {
        heading: "Data and Materials",
        paragraphs: [
          "Hourly SO2 and PM2.5 data from Hawaii Department of Health monitoring stations were paired with 2020 census tracts and tract-level adult asthma and COPD prevalence estimates from the Hawaii Health Data Warehouse."
        ]
      },
      {
        heading: "Methods",
        paragraphs: [
          "Kernel density estimation modeled continuous vog exposure using monitoring-station exceedance counts. Zonal statistics summarized exposure by tract, then exposure, asthma prevalence, and COPD prevalence were standardized and averaged into a composite Vog Risk Index.",
          "Global Moran's I, Local Moran's I, and Getis-Ord Gi* hot-spot analysis were used to evaluate clustering and statistically significant risk patterns."
        ]
      },
      {
        heading: "Results",
        paragraphs: [
          "Modeled exposure was highest near Kilauea and across the southern Big Island. Local clustering and hot-spot analysis identified elevated respiratory risk in the same area, while lower-risk clusters appeared near Honolulu."
        ]
      }
    ],
    figures: [
      ["figs/vogfig1.png", "Kernel density estimation surface of vog exposure intensity across the Hawaiian Island chain.", true],
      ["figs/vogfig2.png", "Getis-Ord Gi* hot-spot analysis of the composite Vog Risk Index by census tract.", true],
      ["figs/vogfig3.jpg", "Local Moran's I cluster map of the Vog Risk Index by census tract across Hawaii.", false],
      ["figs/vogfig4.jpg", "Moran's scatterplot for the Local Moran's I analysis of the Vog Risk Index.", false]
    ]
  },
  {
    slug: "brooks-range",
    title: "Characterization of the Structural and Stratigraphic Relationships Across the Northern Boundary of the High-Pressure Terrane in the Brooks Range Orogen of Northern Alaska",
    shortTitle: "Structural & Stratigraphic Relationships Across the Brooks Range",
    subtitle: "High-Pressure Terrane, Northern Alaska - Undergraduate Honors Research",
    meta: [
      ["Course", "Undergraduate Senior Project (USP) - Honors Thesis"],
      ["Research Advisor", "Dr. Jim Vogl"],
      ["Date", "July 2025 - May 2026"]
    ],
    sections: [
      {
        heading: "Background",
        paragraphs: [
          "This honors research examines the boundary between the Schist Belt and Central Belt in the Brooks Range of northern Alaska. The work focuses on structural relationships, metamorphic grade changes, and detrital zircon geochronology across the high-pressure terrane boundary.",
          "The Hammond River shear zone is central to competing models of Schist Belt exhumation, including thrust-related stacking and extensional unroofing."
        ]
      },
      {
        heading: "Data and Methods",
        paragraphs: [
          "Geologic mapping was conducted west of the Dalton Highway near Wiseman, Vermont Creek, Gold Creek, Smith Creek, and the Hammond River. Fieldwork included foliation, lineation, fold, and kinematic measurements logged in StraboSpot.",
          "Seven quartzite, metasandstone, and quartz-rich schist samples were selected for U-Pb detrital zircon geochronology and processed through crushing, milling, magnetic separation, and heavy liquid separation."
        ]
      },
      {
        heading: "Preliminary Results",
        paragraphs: [
          "Mapping documented a north-to-south decrease in metamorphic grade and evidence for at least two deformation phases. Steep foliations in the Wiseman Creek gorge likely reflect concentrated strain near the Schist Belt/Central Belt boundary."
        ]
      },
      {
        heading: "Conclusion and Future Work",
        paragraphs: [
          "Field mapping and mineral separation are complete. Once LA-ICP-MS ages are available, the data will help test whether units across the Hammond River shear zone share depositional histories or represent separate sedimentary basins."
        ]
      }
    ],
    table: {
      caption: "Table 1. Samples processed for detrital zircon U-Pb geochronology in this study.",
      headers: ["Sample", "Unit", "Locality", "Rock Type", "Coordinates"],
      rows: [
        ["25BR03", "SB (Northern)", "Wiseman Creek", "Calc-schist", "67.4202520 N, 150.1406040 W"],
        ["25BR31", "HR Unit", "Gold Creek", "Block-weathering metasandstone", "67.5107541 N, 149.8125003 W"],
        ["25BR36", "Midnight Dome", "Smith Creek Dome", "Quartzose schist", "67.4769045 N, 150.1804389 W"],
        ["25BR48", "Midnight Dome", "Smith Ck. Dome - Midnight Dome", "Quartzose schist", "67.4865129 N, 150.1596195 W"],
        ["25BR66", "Nugget Schist", "Nugget Ridge", "Quartzose schist", "67.4676018 N, 149.8426963 W"],
        ["25BR96", "Midnight Dome", "Midnight Dome", "Meta-sandstone/quartzite", "67.4593986 N, 150.1690418 W"],
        ["25BR97", "SB (Northern)", "Wiseman Creek gorge", "Quartzose schist", "67.4236791 N, 150.1413421 W"]
      ]
    },
    figures: [["figs/characterfig1.jpg", "Shaded relief map of the study area west of the Dalton Highway, central Brooks Range, Alaska.", true]],
    references: [
      "Dickinson, W. R., & Gehrels, G. E. (2009). Use of U-Pb ages of detrital zircons to infer maximum depositional ages of strata. Earth and Planetary Science Letters, 288(1-2), 115-125.",
      "Gehrels, G. (2014). Detrital zircon U-Pb geochronology applied to tectonics. Annual Review of Earth and Planetary Sciences, 42(1), 127-149.",
      "Hoiland, C. W., Miller, E. L., & Pease, V. (2018). Greenschist facies metamorphic zircon overgrowths as a constraint on exhumation of the Brooks Range Metamorphic Core, Alaska. Tectonics, 37(10), 3429-3455.",
      "Till, A. B., Dumoulin, J. A., Harris, A. G., Moore, T. E., Bleick, H. A., & Siwiec, B. R. (2008). Bedrock geologic map of the southern Brooks Range, Alaska. USGS Open-File Report 2008-1149."
    ]
  },
  {
    slug: "kilauea-hydrology",
    title: "Impacts of Volcanism on Hydrological Systems: Rainfall Anomalies, Ash Leachate Chemistry, and Spatial Patterns of Water-Quality Change During the 2018 Kilauea Eruption",
    shortTitle: "Impacts of Volcanism on Hydrological Systems",
    subtitle: "Rainfall Anomalies & Water-Quality Change During the 2018 Kilauea Eruption",
    meta: [
      ["Course", "GEO3280 - Principles of Geographic Hydrology"],
      ["Instructor", "Dr. Johanna Engstrom"],
      ["Date", "Fall 2025"]
    ],
    sections: [
      {
        heading: "Background",
        paragraphs: [
          "This project investigates how the 2018 Kilauea eruption intersected with hydrological systems through rainfall anomalies, ash fallout, acid rain, and water-quality change."
        ]
      },
      {
        heading: "Data and Materials",
        paragraphs: [
          "The analysis used Daymet V4 precipitation data, USGS water-quality records, USGS 2018 Kilauea ash leachate and catchment chemistry data, mapped lava-flow and fissure data, and Hawaii stream and watershed shapefiles."
        ]
      },
      {
        heading: "Methods",
        paragraphs: [
          "January-April 2018 precipitation totals were compared with a 2000-2006 baseline. Water-quality samples were mapped and grouped into pre-eruption, during-eruption, and post-eruption periods, then compared against fissures, lava flows, and watershed boundaries."
        ]
      },
      {
        heading: "Results",
        paragraphs: [
          "Above-average precipitation coincided with the eruption period, creating conditions for sulfur dioxide, ashfall, and leachates to alter atmospheric and surface-water chemistry. The strongest chemical signatures appeared downslope of active fissures and within catchments intersecting the Lower East Rift Zone lava footprint."
        ]
      }
    ],
    figures: [
      ["figs/impactfig1.jpg", "Map of abnormal rainfall on the Big Island of Hawaii along with tephra and magma extent from the 2018 Kilauea eruption.", true],
      ["figs/impactfig2a.png", "Pollution recorded before the 2018 Kilauea eruption.", false],
      ["figs/impactfig2b.png", "Pollution recorded during the 2018 Kilauea eruption.", false],
      ["figs/impactfig2c.png", "Pollution recorded after the 2018 Kilauea eruption.", false],
      ["figs/impactfig3.jpg", "Map of eruption and tephra extent and local marine habitat.", true]
    ]
  }
];

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash || "#/");

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash || "#/");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return hash.replace(/^#\/?/, "") || "home";
}

function Header() {
  return (
    <header className="border-b border-line bg-white">
      <div className="mx-auto flex w-[min(900px,92%)] flex-col gap-4 py-[18px] md:flex-row md:items-center md:justify-between">
        <a href="#/" className="text-inherit no-underline">
          <div className="font-bold">Cody Hunter</div>
          <div className="text-sm text-muted">Geology & Geography • University of Florida</div>
        </a>
        <nav>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 p-0 text-sm md:text-base">
            <li><a className="text-muted hover:text-moss" href="#about">About</a></li>
            <li><a className="text-muted hover:text-moss" href="#projects">Projects</a></li>
            <li><a className="text-muted hover:text-moss" href="#contact">Contact</a></li>
            <li><a className="text-muted hover:text-moss" href="#/resume">Resume/CV</a></li>
            <li><a className="text-muted hover:text-moss" href={asset("images/cHunter_GeoE_Portfolio.pdf")} target="_blank" rel="noreferrer">Portfolio</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-white py-8 text-sm">
      <div className="mx-auto flex w-[min(900px,92%)] flex-wrap justify-between gap-3">
        <div>
          <strong>Cody Hunter</strong>
          <br />
          Geology & Geography - University of Florida
        </div>
        <div>
          University Email: <a className="text-moss" href="mailto:codyhunter@ufl.edu">codyhunter@ufl.edu</a>
          <br />
          Personal Email: <a className="text-moss" href="mailto:cody.hunter03@hotmail.com">cody.hunter03@hotmail.com</a>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <section>
        <img className="block h-[340px] w-full object-cover" src={asset("images/pano.jpg")} alt="Mountain panorama" />
      </section>
      <main>
        <section className="mx-auto w-[min(900px,92%)] py-[60px] pb-[30px] text-center">
          <h1 className="mb-3 text-3xl font-bold">Geology & Geography Portfolio</h1>
          <p className="mx-auto mb-5 max-w-[600px] text-muted">
            I'm a Geology & Geography double major at the University of Florida focused on GIS analysis, remote
            sensing, hazards, and structural/stratigraphic research.
          </p>
          <a className="inline-block rounded bg-moss px-[18px] py-2.5 text-white" href="#projects">View Projects</a>
        </section>

        <section id="about" className="mx-auto w-[min(900px,92%)] py-[45px]">
          <h2 className="mb-3 text-2xl font-bold">About</h2>
          <p>
            My work brings together geologic understanding and spatial analysis to support decision-making across hazards,
            environmental health, and resource systems. I'm particularly interested in field-focused research enabled by GIS
            and reproducible workflows. I also have an interest in igneous petrology and volcanology with hopes to enter
            grad school studying these topics.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["ArcGIS Pro", "Remote Sensing", "Spatial Statistics", "Machine Learning", "Geologic Mapping", "Lab/LA-ICP-MS Experience"].map((tag) => (
              <span className="rounded bg-chip px-2.5 py-1.5 text-sm" key={tag}>{tag}</span>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto w-[min(900px,92%)] py-[45px]">
          <h2 className="mb-3 text-[1.8rem] font-bold">Selected Projects</h2>
          <div className="flex flex-col gap-5">
            {projects.map((project) => (
              <a
                className="block rounded-md border border-line border-l-[6px] border-l-moss bg-white p-7 text-xl font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-hover md:text-[1.3rem]"
                href={`#/project/${project.slug}`}
                key={project.slug}
              >
                {project.shortTitle}
                <span className="mt-1.5 block text-base font-normal text-muted">{project.subtitle}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto w-[min(900px,92%)] py-[45px]">
          <h2 className="mb-1 text-2xl font-bold">Field Photos</h2>
          <p className="mb-5 text-base tracking-wide text-muted">Brooks Range, Alaska (2025)</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
            {[
              ["images/seated.jpeg", "Overlook view"],
              ["images/rockystream.jpeg", "Rocky stream"],
              ["images/hikingimage.jpeg", "Mountain hiking scene"]
            ].map(([src, alt]) => (
              <img className="w-full rounded-lg" src={asset(src)} alt={alt} key={src} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="mb-[18px] border-b-2 border-moss pb-1.5 text-[1.1rem] font-bold uppercase tracking-[0.08em] text-moss">
      {children}
    </h2>
  );
}

function ProjectPage({ project }) {
  if (!project) return <NotFound />;

  return (
    <main>
      <div className="mx-auto w-[min(900px,92%)] py-[45px]">
        <a className="mb-2.5 inline-block text-sm text-muted hover:text-moss" href="#/">← Back to Portfolio</a>
        <div className="mb-9 border-b border-line pb-8 pt-3">
          <h1 className="mb-3.5 text-[1.8rem] font-bold leading-snug">{project.title}</h1>
          <div className="flex flex-col gap-1 text-sm leading-7 text-muted">
            {project.meta.map(([label, value]) => (
              <div key={label}><strong className="text-ink">{label}:</strong> {value}</div>
            ))}
          </div>
        </div>

        {project.sections.map((section) => (
          <section className="mb-11" key={section.heading}>
            <SectionTitle>{section.heading}</SectionTitle>
            {section.paragraphs.map((paragraph) => (
              <p className="mb-3 text-[0.95rem] leading-8" key={paragraph}>{paragraph}</p>
            ))}
            {section.formulas && (
              <div className="my-4 flex flex-wrap gap-6">
                {section.formulas.map(([formula, label]) => (
                  <div className="min-w-[220px] flex-1" key={formula}>
                    <div className="inline-block rounded bg-ink px-5 py-3 font-serif text-[1.05rem] italic tracking-wide text-paper">{formula}</div>
                    <p className="mt-2 text-[0.83rem] italic leading-6 text-muted">{label}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        {project.table && <SampleTable table={project.table} />}
        <Figures figures={project.figures} />
        {project.references && (
          <section className="mb-11">
            <SectionTitle>References</SectionTitle>
            {project.references.map((reference) => (
              <p className="mb-2.5 pl-6 text-[0.87rem] leading-7 text-muted indent-[-24px]" key={reference}>{reference}</p>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}

function SampleTable({ table }) {
  return (
    <section className="mb-11 overflow-x-auto">
      <SectionTitle>Sample Table</SectionTitle>
      <table className="w-full border-collapse text-[0.86rem]">
        <thead>
          <tr>
            {table.headers.map((header) => (
              <th className="whitespace-nowrap bg-moss px-3 py-2 text-left text-[0.83rem] font-semibold text-white" key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr className="even:bg-[#faf8f4]" key={row.join("-")}>
              {row.map((cell) => (
                <td className="border-b border-line px-3 py-2 align-top" key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2 text-[0.82rem] text-muted">{table.caption}</p>
    </section>
  );
}

function Figures({ figures }) {
  return (
    <section className="mb-11">
      <SectionTitle>Figures</SectionTitle>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
        {figures.map(([src, caption, fullWidth]) => (
          <figure className={`rounded-md border border-line bg-white p-4 ${fullWidth ? "md:col-span-full" : ""}`} key={src}>
            <img className="mb-2.5 block w-full rounded" src={asset(src)} alt={caption} />
            <figcaption className="text-[0.82rem] italic leading-6 text-muted">{caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function ResumePage() {
  const entries = [
    {
      section: "Education",
      items: [
        {
          title: "Bachelor of Science in Geology and Geography",
          date: "January 2023 - Present",
          sub: "University of Florida College of Liberal Arts and Sciences - Gainesville, FL",
          bullets: [
            "Proposed and conducted field research collecting detrital zircons for U-Pb geochronology of the Alaskan Brooks Range.",
            "University Scholars Program - awarded funding and platform to present research at symposium and in UF Journal of Undergraduate Research."
          ]
        },
        { title: "Associate of Arts", date: "December 2023", sub: "Santa Fe College - Gainesville, FL" },
        {
          title: "Undergraduate Certificate - GeoAI: Geographic Artificial Intelligence and Big Data",
          date: "January 2023 - Present",
          sub: "University of Florida - Gainesville, FL",
          bullets: ["Developed transferable skills applying AI to geospatial challenges and environmental issues."]
        }
      ]
    },
    {
      section: "Experience",
      items: [
        {
          title: "President, Beta Psi Chapter of Sigma Gamma Epsilon",
          date: "August 2025 - Present",
          sub: "University of Florida - Gainesville, FL",
          bullets: [
            "Serve as chief executive officer of the chapter and guide chapter activities.",
            "Oversee officer roles, delegate responsibilities, and support student research dissemination.",
            "Prepare agendas, lead chapter meetings, and ensure chapter bylaws are followed."
          ]
        },
        {
          title: "Toxicology Lab Aquaculturist",
          date: "October 2023 - October 2024",
          sub: "EcoAnalysts - Alachua, FL",
          bullets: [
            "Maintained and monitored aquatic organisms for environmental toxin tests.",
            "Operated laboratory aquaculture systems, instrumentation, and life-support equipment.",
            "Recorded water-quality parameters and organism responses while following laboratory safety protocols."
          ]
        }
      ]
    }
  ];

  return (
    <main>
      <div className="mx-auto w-[min(900px,92%)] py-[45px]">
        <a className="mb-2.5 inline-block text-sm text-muted hover:text-moss" href="#/">← Back to Portfolio</a>
        <div className="mb-8 border-b border-line pb-8 pt-5 text-center">
          <h1 className="mb-1.5 text-3xl font-bold">Cody Hunter</h1>
          <div className="text-sm text-muted">
            3920 SW 21st St, Gainesville, FL 32608 | (817) 312-9549 |{" "}
            <a className="text-moss" href="mailto:codyhunter@ufl.edu">codyhunter@ufl.edu</a>
          </div>
          <a className="mt-5 inline-block rounded bg-moss px-[18px] py-2.5 text-white" href={asset("images/cHunterCV(Aug2025).pdf")} target="_blank" rel="noreferrer">Download PDF</a>
        </div>

        {entries.map((group) => (
          <section className="mb-12" key={group.section}>
            <SectionTitle>{group.section}</SectionTitle>
            {group.items.map((item) => (
              <article className="mb-6" key={item.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <span className="whitespace-nowrap text-sm text-muted">{item.date}</span>
                </div>
                <p className="mb-2 mt-0.5 text-sm text-muted">{item.sub}</p>
                {item.bullets && (
                  <ul className="ml-5 list-disc text-[0.95rem]">
                    {item.bullets.map((bullet) => <li className="mb-1" key={bullet}>{bullet}</li>)}
                  </ul>
                )}
              </article>
            ))}
          </section>
        ))}

        <section className="mb-12">
          <SectionTitle>Skills</SectionTitle>
          <p className="mb-2 text-[0.95rem]"><strong>Management:</strong> Project management, proposal writing, research methodology, oral and written communication</p>
          <p className="mb-2 text-[0.95rem]"><strong>Technical:</strong> Data collection, data management, spatial analysis, remote sensing, statistical analysis, mass spectrometry analysis</p>
          <p className="mb-2 text-[0.95rem]"><strong>Fieldwork:</strong> Geological mapping, lithostratigraphic correlation and logging</p>
        </section>

        <section className="mb-12">
          <SectionTitle>Research Interests</SectionTitle>
          <p className="text-[0.95rem] leading-7">Volcanology and igneous petrology, mantle plumes, plume magmatism, magma dynamics, eruption forecasting, volcanic hazards, and GIS-based volcanic hazard mapping and monitoring.</p>
        </section>
      </div>
    </main>
  );
}

function NotFound() {
  return (
    <main className="mx-auto w-[min(900px,92%)] py-24 text-center">
      <h1 className="mb-2 text-3xl font-bold">Page Not Found</h1>
      <p className="mb-6 text-muted">That route does not exist in the portfolio.</p>
      <a className="inline-block rounded bg-moss px-[18px] py-2.5 text-white" href="#/">Return Home</a>
    </main>
  );
}

export default function App() {
  const route = useHashRoute();
  const page = useMemo(() => {
    if (route === "resume") return <ResumePage />;
    if (route.startsWith("project/")) {
      return <ProjectPage project={projects.find((project) => project.slug === route.replace("project/", ""))} />;
    }
    return <HomePage />;
  }, [route]);

  useEffect(() => {
    if (["about", "projects", "contact"].includes(route)) {
      window.setTimeout(() => document.getElementById(route)?.scrollIntoView(), 0);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [route]);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      {page}
      <Footer />
    </div>
  );
}

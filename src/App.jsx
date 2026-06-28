import { useEffect, useMemo, useState } from "react";
import { projects } from "./projectData.js";
import portfolioPdfUrl from "../images/cHunter_GeoE_Portfolio.pdf";
import resumePdfUrl from "../images/cHunterCV(Aug2025).pdf";
import hikingImageUrl from "../images/hikingimage.jpeg";
import panoHeroUrl from "../images/pano-hero.jpg";
import rockyStreamUrl from "../images/rockystream.jpeg";
import seatedImageUrl from "../images/seated.jpeg";

const figureAssets = import.meta.glob("../figs/*", {
  eager: true,
  query: "?url",
  import: "default"
});

const imageAssets = {
  "../images/cHunter_GeoE_Portfolio.pdf": portfolioPdfUrl,
  "../images/cHunterCV(Aug2025).pdf": resumePdfUrl,
  "../images/hikingimage.jpeg": hikingImageUrl,
  "../images/pano-hero.jpg": panoHeroUrl,
  "../images/rockystream.jpeg": rockyStreamUrl,
  "../images/seated.jpeg": seatedImageUrl
};

const asset = (path) => imageAssets[`../${path}`] || figureAssets[`../${path}`] || path;

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
        <img
          className="block h-[340px] w-full object-cover"
          src={asset("images/pano-hero.jpg")}
          alt="Mountain panorama"
          width="2400"
          height="573"
          fetchPriority="high"
          decoding="async"
        />
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
              <img
                className="aspect-[4/3] w-full rounded-lg object-cover"
                src={asset(src)}
                alt={alt}
                key={src}
                loading="lazy"
                decoding="async"
              />
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
            <img className="mb-2.5 block w-full rounded" src={asset(src)} alt={caption} loading="lazy" decoding="async" />
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
      window.scrollTo({ top: 0, behavior: "auto" });
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

import { BackLink } from '../components/BackLink.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { assets } from '../data/content.js'
import { accent, border, muted, section } from '../styles.js'

export function ResumePage() {
  return (
    <div className={section}>
      <BackLink />
      <div className={`mb-[30px] border-b ${border} pt-[50px] pb-[30px] text-center`}>
        <h1 className="mb-1.5 text-[2rem] font-bold">Cody Hunter</h1>
        <p className={`text-[0.9rem] ${muted}`}>
          3920 SW 21st St, Gainesville, FL 32608 &nbsp;|&nbsp; (817) 312-9549 &nbsp;|&nbsp;
          <a className={accent} href="mailto:codyhunter@ufl.edu">codyhunter@ufl.edu</a>
        </p>
        <div className="mt-[18px]">
          <a className="inline-block rounded bg-[#3f5a3f] px-[18px] py-2.5 text-white no-underline" href={assets.resumePdf} target="_blank" rel="noreferrer">
            Download PDF
          </a>
        </div>
      </div>

      <ResumeSection title="Education">
        <Entry
          title="Bachelor of Science in Geology and Geography"
          date="January 2023 – Present"
          sub="University of Florida College of Liberal Arts and Sciences — Gainesville, FL"
          bullets={[
            'Proposed and conducted field research collecting detrital zircons for U-Pb geochronology of the Alaskan Brooks Range. Title: "Characterization of the structural and stratigraphic relationships across the northern boundary of the high-pressure terrane in the Brooks Range orogen of northern Alaska" (Project ongoing)',
            'University Scholars Program — Awarded funding and platform to present research at symposium and in UF Journal of Undergraduate Research.',
          ]}
        />
        <Entry title="Associate of Arts" date="December 2023" sub="Santa Fe College — Gainesville, FL" />
        <Entry
          title="Undergraduate Certificate — GeoAI: Geographic Artificial Intelligence and Big Data"
          date="January 2023 – Present"
          sub="University of Florida — Gainesville, FL"
          bullets={['Developed transferable skills applying AI to geospatial challenges, addressing environmental and societal issues.']}
        />
      </ResumeSection>

      <ResumeSection title="Skills">
        <SkillRow label="Management" text="Project management, proposal writing, research methodology, oral and written communication" />
        <SkillRow label="Technical" text="Data collection, data management, spatial analysis (ArcGIS Pro), remote sensing (GEE), statistical analysis (SPSS, GeoDa, R, Excel), mass spectrometry analysis" />
        <SkillRow label="Fieldwork" text="Geological mapping, lithostratigraphic correlation & logging" />
      </ResumeSection>

      <ResumeSection title="Research Interests">
        <p className="text-[0.95rem] leading-[1.7]">
          Volcanology and Igneous Petrology, structures and processes of mantle plumes, mantle sources of plume magmatism,
          plume generation, magma dynamics, eruption forecasting, eruption indicators, volcanic hazards, GIS-based volcanic
          hazard mapping and monitoring.
        </p>
      </ResumeSection>

      <ResumeSection title="Experience">
        <Entry
          title="President, Beta Psi Chapter of Sigma Gamma Epsilon"
          date="August 2025 – Present"
          sub="University of Florida — Gainesville, FL"
          bullets={[
            'Serve as the chief executive officer of the chapter; preside over meetings and guide chapter activities in alignment with the mission of Sigma Gamma Epsilon.',
            'Oversee officer roles (Vice President, Secretary, Treasurer) and delegate responsibilities to ensure efficient chapter operation.',
            'Encourage scholarly activities, support student research dissemination, and connect members with professional opportunities in geology and geography.',
            'Prepare agendas, lead chapter meetings, and ensure parliamentary procedures and chapter bylaws are followed.',
          ]}
        />
        <Entry
          title="Toxicology Lab Aquaculturist"
          date="October 2023 – October 2024"
          sub="EcoAnalysts — Alachua, FL"
          bullets={[
            'Maintained and monitored aquatic organisms for use in environmental toxin tests.',
            'Operated and maintained laboratory aquaculture systems, instrumentation, and life support equipment.',
            'Monitored and recorded data, including water quality parameters and organism responses, supporting optimal organism production and health.',
            'Ensured compliance with laboratory safety protocols and ethical standards for animal care.',
          ]}
        />
      </ResumeSection>
    </div>
  )
}

function ResumeSection({ title, children }) {
  return (
    <section className="mb-12">
      <SectionHeading variant="resume">{title}</SectionHeading>
      {children}
    </section>
  )
}

// Entry keeps resume rows consistent without turning the resume content into a separate data model.
function Entry({ title, date, sub, bullets = [] }) {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-baseline justify-between gap-1">
        <span className="text-base font-bold">{title}</span>
        <span className={`whitespace-nowrap text-[0.875rem] ${muted}`}>{date}</span>
      </div>
      <div className={`mt-0.5 mb-2 text-[0.9rem] ${muted}`}>{sub}</div>
      {bullets.length ? (
        <ul className="mt-2 list-disc pl-5">
          {bullets.map((bullet) => <li className="mb-[5px] text-[0.95rem]" key={bullet}>{bullet}</li>)}
        </ul>
      ) : null}
    </div>
  )
}

function SkillRow({ label, text }) {
  return <div className="mb-2 text-[0.95rem]"><strong>{label}:</strong> {text}</div>
}

import { BackLink } from '../components/BackLink.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { border, card, muted, section } from '../styles.js'

export function ProjectPage({ project }) {
  return (
    <div className={section}>
      <BackLink />

      <div className={`mb-9 border-b ${border} pt-[50px] pb-[30px]`}>
        <h1 className="mb-3.5 text-[1.8rem] font-bold leading-[1.35]">{project.title}</h1>
        <div className={`flex flex-col gap-[3px] text-[0.9rem] leading-[1.7] ${muted}`}>
          {project.meta.map(([label, value]) => (
            <div key={label}><strong className="text-[#2f2a24]">{label}:</strong> {value}</div>
          ))}
        </div>
      </div>

      {/* The same renderer handles every project because the long-form text lives in content.js. */}
      {project.sections.map((item) => <ProjectSection sectionData={item} key={item.title} />)}
      {project.table ? <SampleTable table={project.table} /> : null}
      <FigureGrid figures={project.figures} />
      {project.references ? <References references={project.references} /> : null}
    </div>
  )
}

function ProjectSection({ sectionData }) {
  return (
    <section className="mb-11">
      <SectionHeading>{sectionData.title}</SectionHeading>
      {sectionData.paragraphs.map((paragraph) => (
        <p className="mb-3 text-[0.95rem] leading-[1.8]" key={paragraph}>{paragraph}</p>
      ))}
      {/* Only the mineral-exploration project currently includes formulas. */}
      {sectionData.formulas ? (
        <div className="my-4 flex flex-wrap gap-6">
          {sectionData.formulas.map(([formula, label]) => (
            <div className="min-w-[220px] flex-1" key={formula}>
              <div className="inline-block rounded bg-[#2f2a24] px-[22px] py-3 font-serif text-[1.05rem] italic tracking-[0.02em] text-[#f4f1ea]">{formula}</div>
              <p className={`mt-2 text-[0.83rem] italic leading-[1.5] ${muted}`}>{label}</p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  )
}

function FigureGrid({ figures }) {
  return (
    <section className="mb-11">
      <SectionHeading>Figures</SectionHeading>
      <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
        {figures.map(([src, alt, caption, fullWidth]) => (
          <figure className={`${card} p-4 ${fullWidth ? 'col-span-full' : ''}`} key={src}>
            <img className="mb-2.5 block w-full rounded" src={src} alt={alt} />
            <figcaption className={`m-0 text-[0.82rem] italic leading-[1.55] ${muted}`}>{caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function SampleTable({ table }) {
  return (
    <section className="mb-11">
      <SectionHeading>Sample Table</SectionHeading>
      <div className="overflow-x-auto">
        <table className="mt-3.5 w-full border-collapse text-[0.86rem]">
          <thead>
            <tr>
              {table.headers.map((header) => (
                <th className="whitespace-nowrap bg-[#3f5a3f] px-3 py-[9px] text-left text-[0.83rem] font-semibold text-white" key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr className="even:bg-[#faf8f4]" key={row.join('-')}>
                {row.map((cell) => (
                  <td className={`border-b ${border} px-3 py-2 align-top`} key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={`mt-2 text-[0.82rem] ${muted}`}>{table.caption}</p>
    </section>
  )
}

function References({ references }) {
  return (
    <section className="mb-11">
      <SectionHeading>References</SectionHeading>
      <div>
        {references.map((reference) => (
          <p className={`mb-2.5 pl-6 text-[0.87rem] leading-[1.75] [text-indent:-24px] ${muted}`} key={reference}>{reference}</p>
        ))}
      </div>
    </section>
  )
}

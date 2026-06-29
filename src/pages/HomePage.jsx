import { assets, projects } from '../data/content.js'
import { card, container, muted, section } from '../styles.js'

export function HomePage() {
  return (
    <>
      <section className="h-[340px] overflow-hidden">
        <img className="block h-full w-full object-cover" src={assets.pano} alt="Mountain panorama" />
      </section>

      <section className={`${container} pt-[60px] pb-[30px] text-center`}>
        <h1 className="mb-2.5 text-[2rem] font-bold">Geology & Geography Portfolio</h1>
        <p className={`mx-auto mb-5 max-w-[600px] ${muted}`}>
          I&apos;m a Geology & Geography double major at the University of Florida focused on GIS analysis,
          remote sensing, hazards, and structural/stratigraphic research.
        </p>
        <a className="inline-block rounded bg-[#3f5a3f] px-[18px] py-2.5 text-white no-underline" href="#projects">
          View Projects
        </a>
      </section>

      <section id="about" className={section}>
        <h2 className="mb-2.5 text-2xl font-bold">About</h2>
        <p>
          My work brings together geologic understanding and spatial analysis to support decision-making across hazards,
          environmental health, and resource systems. I&apos;m particularly interested in field-focused research enabled by GIS
          and reproducible workflows. Moreover, I have a interest in igneous petrology and volcanology with hope to enter
          grad-school studying these topics.
        </p>

        <div className="mt-3">
          {['ArcGIS Pro', 'Remote Sensing', 'Spatial Statistics', 'Machine Learning', 'Geologic Mapping', 'Lab/LA-ICP-MS Experience'].map((tag) => (
            <span className="mt-1.5 mr-2 inline-block rounded bg-[#e7e1d6] px-2.5 py-1.5 text-[0.85rem]" key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <section id="projects" className={section}>
        <h2 className="mb-5 text-[1.8rem] font-bold">Selected Projects</h2>
        <div className="flex flex-col gap-5">
          {projects.map((project) => (
            <a
              className={`${card} border-l-[6px] border-l-[#3f5a3f] p-7 text-[1.3rem] font-semibold text-[#2f2a24] no-underline transition hover:-translate-y-1 hover:bg-[#ece6db]`}
              href={`#/${project.slug}`}
              key={project.slug}
            >
              {project.listTitle}
              <span className={`mt-1.5 block text-base font-normal ${muted}`}>{project.subtitle}</span>
            </a>
          ))}
        </div>
      </section>

      <section className={section}>
        <h2 className="mb-2.5 text-2xl font-bold">Field Photos</h2>
        <p className={`mt-[-4px] mb-5 text-base tracking-[0.04em] ${muted}`}>Brooks Range, Alaska (2025)</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[15px]">
          <img className="w-full rounded-lg" src={assets.seated} alt="Overlook view" />
          <img className="w-full rounded-lg" src={assets.rockyStream} alt="Rocky stream" />
          <img className="w-full rounded-lg" src={assets.hiking} alt="Mountain hiking scene" />
        </div>
      </section>
    </>
  )
}

import { assets } from '../data/content.js'
import { accent, border, container, muted } from '../styles.js'

export function Header() {
  return (
    <header className={`border-b ${border} bg-white`}>
      <div className={`${container} flex flex-col gap-4 py-[18px] sm:flex-row sm:items-center sm:justify-between`}>
        <a href="#/" className="no-underline">
          <div className="font-bold text-[#2f2a24]">Cody Hunter</div>
          <div className={`text-[0.9rem] ${muted}`}>Geology & Geography • University of Florida</div>
        </a>

        <nav aria-label="Primary navigation">
          <ul className={`m-0 flex list-none flex-wrap gap-x-5 gap-y-2 p-0 ${muted}`}>
            <li><a className="hover:text-[#3f5a3f]" href="#about">About</a></li>
            <li><a className="hover:text-[#3f5a3f]" href="#projects">Projects</a></li>
            <li><a className="hover:text-[#3f5a3f]" href="#contact">Contact</a></li>
            <li><a className="hover:text-[#3f5a3f]" href="#/resume">Resume/CV</a></li>
            <li><a className="hover:text-[#3f5a3f]" href={assets.portfolioPdf} target="_blank" rel="noreferrer">Portfolio</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer id="contact" className={`border-t ${border} bg-white py-[30px] text-[0.9rem]`}>
      <div className={`${container} flex flex-wrap justify-between gap-2.5`}>
        <div>
          <strong>Cody Hunter</strong><br />
          Geology & Geography — University of Florida
        </div>
        <div>
          University Email: <a className={accent} href="mailto:codyhunter@ufl.edu">codyhunter@ufl.edu</a>
          <br />
          Personal Email: <a className={accent} href="mailto:cody.hunter03@hotmail.com">cody.hunter03@hotmail.com</a>
        </div>
      </div>
    </footer>
  )
}

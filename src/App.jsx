import { useEffect, useState } from 'react'
import { Footer, Header } from './components/Layout.jsx'
import { projects } from './data/content.js'
import { HomePage } from './pages/HomePage.jsx'
import { ProjectPage } from './pages/ProjectPage.jsx'
import { ResumePage } from './pages/ResumePage.jsx'

function getRoute() {
  const hash = window.location.hash

  if (!hash || hash === '#/' || hash === '#') return { page: 'home' }
  if (hash === '#/resume') return { page: 'resume' }
  if (hash.startsWith('#/')) return { page: 'project', slug: hash.slice(2) }

  // Plain hashes like #about still behave like same-page section links.
  return { page: 'home', anchor: hash.slice(1) }
}

function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const projectTitle = projects.find((project) => project.slug === route.slug)?.listTitle

    // Keep browser tab titles aligned with whichever hash route is active.
    document.title =
      route.page === 'resume'
        ? 'Cody Hunter | Resume/CV'
        : route.page === 'project'
          ? `${projectTitle ?? 'Project'} | Cody Hunter`
          : 'Cody Hunter | Geology & Geography E-Portfolio'

    if (route.anchor) {
      requestAnimationFrame(() => document.getElementById(route.anchor)?.scrollIntoView())
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [route])

  const project = route.page === 'project' ? projects.find((item) => item.slug === route.slug) : null

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#2f2a24]">
      <Header />
      <main>
        {route.page === 'resume' ? <ResumePage /> : project ? <ProjectPage project={project} /> : <HomePage />}
      </main>
      <Footer />
    </div>
  )
}

export default App

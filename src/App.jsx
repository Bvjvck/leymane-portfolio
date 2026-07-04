import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Devis from './components/Devis'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Devis />
        <Contact />
      </main>
    </div>
  )
}

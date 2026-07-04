import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projets" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionHeading eyebrow="// projets" title="Ce que j'ai construit" />

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
            className={`card-border relative rounded-2xl bg-ink2/60 p-7 group hover:-translate-y-1 transition-transform ${
              p.id === 'glamshop' ? 'md:col-span-2' : ''
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className={`inline-block text-xs font-mono px-2.5 py-1 rounded-full bg-gradient-to-r ${p.accent} text-ink font-semibold`}>
                  {p.tag}
                </span>
                <h3 className="font-display text-2xl font-semibold mt-4">{p.title}</h3>
              </div>
              <span className="font-mono text-xs text-mist/40 mt-1">{p.year}</span>
            </div>

            <p className="mt-4 text-mist/70 leading-relaxed max-w-2xl">{p.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-mist/70">
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-mono text-cyan text-sm">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-2 tracking-tight">{title}</h2>
    </motion.div>
  )
}

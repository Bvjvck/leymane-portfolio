import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Instagram } from 'lucide-react'
import { SectionHeading } from './Projects'

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl px-6 mx-auto py-28">
      <SectionHeading eyebrow="// contact" title="Construisons quelque chose ensemble" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="p-8 mt-12 card-border rounded-2xl bg-ink2/60 sm:p-10"
      >
        <p className="max-w-xl text-mist/70">
          Une idée de projet, une envie de refonte, ou juste une question technique ? Écrivez-moi, je réponds
          rapidement.
        </p>

        <div className="flex flex-col gap-4 mt-8 sm:flex-row">
          <a
            href="mailto:Souleymvneseck@outlook.com"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-signature text-ink font-semibold text-sm hover:scale-[1.03] transition-transform"
          >
            <Mail size={16} /> Souleymvneseck@outlook.com
          </a>
          <a
            href="https://github.com/Bvjvck"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors border rounded-full border-white/15 hover:bg-white/5"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/ton-profil"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors border rounded-full border-white/15 hover:bg-white/5"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://instagram.com/ley_mvne"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors border rounded-full border-white/15 hover:bg-white/5"
          >
            <Instagram size={16} /> Instagram
          </a>
        </div>
      </motion.div>

      <p className="mt-16 font-mono text-xs text-center text-mist/30">
        conçu & développé par Leymane — {new Date().getFullYear()}
      </p>
    </section>
  )
}

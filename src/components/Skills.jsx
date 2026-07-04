import { motion } from "framer-motion";
import { skillGroups } from "../data/projects";
import { SectionHeading } from "./Projects";

export default function Skills() {
  return (
    <section id="competences" className="max-w-6xl px-6 mx-auto py-28">
      <SectionHeading
        eyebrow="// stack"
        title="Ce que j'utilise au quotidien"
      />

      <div className="grid gap-6 mt-14 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="p-6 border rounded-2xl border-white/10 bg-ink2/40"
          >
            <h3 className="text-lg font-semibold text-transparent font-display bg-clip-text bg-gradient-signature">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-sm px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-mist/80 hover:border-magenta/50 hover:text-white transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

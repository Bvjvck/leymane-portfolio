import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex items-center min-h-screen pt-24 pb-16 overflow-hidden"
    >
      {/* Fond : blobs en dégradé animés */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-violet/30 blur-[100px] animate-drift" />
        <div className="absolute top-1/3 -right-24 w-[460px] h-[460px] rounded-full bg-magenta/25 blur-[110px] animate-drift2" />
        <div className="absolute bottom-0 left-1/3 w-[380px] h-[380px] rounded-full bg-amber/20 blur-[110px] animate-drift" />
      </div>

      <div className="grid items-center w-full max-w-6xl px-6 mx-auto lg:grid-cols-2 gap-14">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-4 font-mono text-sm text-cyan"
          >
            {"// Ingénieur logiciel · Dakar, Sénégal"}
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl font-semibold leading-[1.05] tracking-tight"
          >
            About Me
          </motion.h1>
          <motion.p
            variants={item}
            className="max-w-md mt-6 text-lg text-mist/70"
          >
            Ingénieur en Génie Logiciel, Systèmes et Réseaux, passionné par le
            développement Full Stack et l'administration réseau. Capable de
            concevoir et déployer des applications web et mobiles complètes, de
            la base de données à l'interface utilisateur. Rigoureux, autonome et
            orienté résultats, avec une expérience concrète en environnements
            agiles et projets clients.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4 mt-9">
            <a
              href="#projets"
              className="px-6 py-3 rounded-full bg-gradient-signature text-ink font-semibold text-sm hover:scale-[1.03] transition-transform"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-sm font-medium transition-colors border rounded-full border-white/15 hover:bg-white/5"
            >
              Me contacter
            </a>
          </motion.div>
        </motion.div>

        {/* Élément signature : carte terminal flottante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="relative"
        >
          <div className="animate-float">
            <div className="overflow-hidden shadow-2xl card-border rounded-2xl bg-ink2/80 backdrop-blur-xl shadow-violet/10">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-3 font-mono text-xs text-mist/40">
                  developer.js
                </span>
              </div>
              <pre className="p-6 overflow-x-auto font-mono text-sm leading-relaxed">
                <code>
                  <span className="text-cyan">const</span>{" "}
                  <span className="text-amber">developer</span> = {"{"}
                  {"\n"} <span className="text-magenta">name</span>:{" "}
                  <span className="text-green-300">'Leymane'</span>,{"\n"}{" "}
                  <span className="text-magenta">based</span>:{" "}
                  <span className="text-green-300">'Dakar, SN'</span>,{"\n"}{" "}
                  <span className="text-magenta">stack</span>: [
                  <span className="text-green-300">'React'</span>,{" "}
                  <span className="text-green-300">'Node.js'</span>,{" "}
                  <span className="text-green-300">'MongoDB'</span>],
                  {"\n"} <span className="text-magenta">focus</span>:{" "}
                  <span className="text-green-300">'full-stack + design'</span>,
                  {"\n"} <span className="text-magenta">available</span>:{" "}
                  <span className="text-cyan">true</span>
                  {"\n"}
                  {"}"}
                  <span className="inline-block w-2 h-4 ml-1 align-middle bg-magenta animate-blink" />
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#projets"
        aria-label="Défiler vers les projets"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute flex-col items-center hidden gap-2 -translate-x-1/2 bottom-8 left-1/2 sm:flex text-mist/50"
      >
        <span className="font-mono text-xs">scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  );
}

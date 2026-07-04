import { motion } from "framer-motion";

const links = [
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#devis", label: "Devis" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md bg-ink/70 border-white/5"
    >
      <nav className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
        <a
          href="#top"
          className="text-lg font-semibold tracking-tight font-display"
        >
          <span className="text-gradient">leymvne</span>
          <span className="text-white/40">.dev</span>
        </a>
        <ul className="items-center hidden gap-8 font-mono text-sm sm:flex text-mist/70">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-white"
              >
                <span className="text-magenta/70">
                  {String(i + 1).padStart(2, "0")}.
                </span>{" "}
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#devis"
          className="px-4 py-2 text-sm font-medium font-semibold transition-opacity rounded-full bg-gradient-signature text-ink hover:opacity-90"
        >
          Demander un devis
        </a>
      </nav>
    </motion.header>
  );
}

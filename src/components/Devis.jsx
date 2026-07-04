import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { SectionHeading } from "./Projects";
import { EMAILJS_CONFIG } from "../config/emailjs";

const projectTypes = [
  "Site vitrine",
  "E-commerce",
  "Application mobile",
  "Branding & identité visuelle",
  "Autre",
];
const budgets = [
  "< 200 000 FCFA",
  "200 000 – 500 000 FCFA",
  "500 000 – 1 000 000 FCFA",
  "> 1 000 000 FCFA",
];
const timelines = [
  "Moins de 2 semaines",
  "2 à 4 semaines",
  "1 à 3 mois",
  "Pas de contrainte particulière",
];

const initialForm = {
  name: "",
  email: "",
  projectType: projectTypes[0],
  budget: budgets[0],
  timeline: timelines[0],
  message: "",
};

export default function Devis() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | failed
  const [error, setError] = useState("");

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError(
        "Merci de remplir ton nom, ton email et une description du projet.",
      );
      return;
    }
    setError("");
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          name: form.name,
          email: form.email,
          project_type: form.projectType,
          budget: form.budget,
          timeline: form.timeline,
          message: form.message,
        },
        EMAILJS_CONFIG.publicKey,
      );
      setStatus("sent");
    } catch (err) {
      console.error("Erreur EmailJS :", err);
      setStatus("failed");
      setError(
        "L'envoi a échoué. Vérifie ta connexion ou réessaie dans un instant.",
      );
    }
  };

  return (
    <section id="devis" className="max-w-4xl px-6 mx-auto py-28">
      <SectionHeading eyebrow="// devis" title="Demande un devis gratuit" />
      <p className="max-w-xl mt-4 text-mist/70">
        Décris ton projet en quelques lignes : type d'application, budget
        approximatif, délai souhaité. Je reviens vers toi avec une estimation
        sous 48h.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="p-8 mt-10 card-border rounded-2xl bg-ink2/60 sm:p-10"
      >
        <AnimatePresence mode="wait">
          {status === "sent" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4 py-10 text-center"
            >
              <CheckCircle2 size={44} className="text-cyan" />
              <h3 className="text-xl font-semibold font-display">
                Demande envoyée !
              </h3>
              <p className="max-w-sm text-mist/70">
                Merci {form.name.split(" ")[0]}, ta demande vient de partir
                directement dans ma boîte mail. Je reviens vers toi rapidement.
              </p>
              <button
                onClick={() => {
                  setForm(initialForm);
                  setStatus("idle");
                }}
                className="mt-2 font-mono text-sm transition-colors text-magenta hover:text-white"
              >
                ← faire une nouvelle demande
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="grid gap-5 sm:grid-cols-2"
            >
              <Field label="Ton nom">
                <input
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Ex : Aïcha Koné"
                  className="input"
                />
              </Field>

              <Field label="Ton email">
                <input
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="Ex : aicha@exemple.com"
                  className="input"
                />
              </Field>

              <Field label="Type de projet">
                <select
                  value={form.projectType}
                  onChange={update("projectType")}
                  className="input"
                >
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Budget estimé">
                <select
                  value={form.budget}
                  onChange={update("budget")}
                  className="input"
                >
                  {budgets.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Délai souhaité" className="sm:col-span-2">
                <select
                  value={form.timeline}
                  onChange={update("timeline")}
                  className="input"
                >
                  {timelines.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Décris ton projet" className="sm:col-span-2">
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  rows={5}
                  placeholder="Objectif du projet, fonctionnalités attendues, exemples de sites/apps que tu aimes..."
                  className="resize-none input"
                />
              </Field>

              {error && (
                <p className="font-mono text-sm sm:col-span-2 text-amber">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="sm:col-span-2 mt-2 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-signature text-ink font-semibold text-sm hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Envoi en
                    cours...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Envoyer ma demande
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function Field({ label, children, className = "" }) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="font-mono text-xs text-mist/50">{label}</span>
      {children}
    </label>
  );
}

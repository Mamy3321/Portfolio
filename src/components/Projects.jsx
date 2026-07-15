import { ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    name: 'Jestion des Produits',
    desc: "Gérer produit, bilan.",
    tags: ['JS', 'Node.js', 'PostgreSQL'],
    // href: '#',
  },
  {
    name: 'Gestion de Transport, Livraison',
    desc: "Demandes des transports, de déménagement ou de livraison à un transporteur disponible le plus proche.",
    tags: ['JS', 'Next.js', 'PostgreSQL'],
    // href: '#',
  },
  {
    name: 'Gestion des Questionnaires',
    desc: "Gérer Etudiant, Note, Question, Examen.",
    tags: ['Java', 'JSP', 'PostgreSQL'],
    // href: '#',
  },
  {
    name: 'Gestion des classification des Documents',
    desc: "En utilisant le Machine Learnin.g",
    tags: ['C#', '.Net', 'SQLite'],
    // href: '#',
  },
  {
    name: 'Gestion d\'évaluation des données',
    desc: "Gérer les membres, Formation, Réseaux, Groupes de solidarité.",
    tags: ['Java', 'JavaFX', 'PostgreSQL'],
    // href: '#',
  },
  {
    name: 'Gestion de Restaurant',
    desc: "Gérer les tables, les commandes, les réservation et facture.",
    tags: ['PHP', 'MySQL'],
    // href: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-8 py-28 border-t border-[var(--surface-line)]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[13px] text-[var(--accent)] mb-4">04 — Mes Projets</p>
        {/* <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-14 max-w-lg">
          Une sélection de projets récents
        </h2> */}

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className="group block rounded-lg border border-[var(--surface-line)] bg-[var(--surface)] p-7 hover:border-[var(--accent-dim)] transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl text-[var(--text)]">{p.name}</h3>
                {/* <ArrowUpRight
                  size={20}
                  className="shrink-0 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                /> */}
              </div>
              <p className="mt-3 text-[14px] text-[var(--text-muted)] leading-relaxed">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-[var(--mono-accent)] border border-[var(--surface-line)] rounded-sm px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

const EXPERIENCE = [
  {
    period: '2025 — 2026',
    role: 'Troisième année de Licence professionnelle',
    org: 'Ecole Nationale d\'Informatique Fianarantsoa',
    desc: 'Parcours Informatique Générale.',
  },
  {
    period: 'Septembre - Décembre 2025',
    role: 'Stage professionnel',
    org: 'ONG TSINJO AINA Fianarantsoa',
    desc: 'Développement d’une application desktop multi-utilisateurs avec gestion des rôles.',
  },
  {
    period: '2024 — 2025',
    role: 'Deuxième année de Licence professionnelle',
    org: 'Ecole Nationale d\'Informatique Fianarantsoa',
    desc: 'Parcours Informatique Générale.',
  },
  // {
  //   period: 'Septembre-Novembre 2024',
  //   role: 'Projet fin d\'année',
  //   org: 'Ecole Nationale d\'Informatique Fianarantsoa',
  //   desc: 'Gestion de voyage aérienne',
  // },
  {
    period: '2023 — 2024',
    role: 'Première année de Licence professionnelle',
    org: 'Ecole Nationale d\'Informatique Fianarantsoa',
    desc: 'Parcours Informatique Générale.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-8 py-28 border-t border-[var(--surface-line)] bg-[var(--bg-alt)]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[13px] text-[var(--accent)] mb-4">05 — Mon expérience professionnelle</p>
        {/* <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-14 max-w-lg">
          
        </h2> */}

        <div className="max-w-5xl">
          {EXPERIENCE.map((e, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[140px_1fr] gap-3 md:gap-8 py-8 border-b border-[var(--surface-line)] last:border-b-0"
            >
              <p className="font-mono text-[13px] text-[var(--text-muted)]">{e.period}</p>
              <div>
                <h3 className="font-display text-lg text-[var(--text)] flex items-baseline gap-2 overflow-hidden">
                  <span className="shrink-0">{e.role}</span>
                  <span className="text-[var(--text-muted)] font-sans text-sm truncate">
                    · {e.org}
                  </span>
                </h3>
                <p className="mt-2 text-[14px] text-[var(--text-muted)] leading-relaxed">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

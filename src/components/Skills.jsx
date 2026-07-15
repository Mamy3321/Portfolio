const GROUPS = [
  {
    label: 'Langages de programmation',
    items: [
      'JavaScript',
      'TypeScript',
      'PHP',
      'Python',
      'Java',
      'C#',],
  },
  {
    label: 'Technologies',
    items: ['React',
      'Next.js',
      'Node.js',
      'JSP',
      '.NET',
      'GitHub',]
  },
  {
    label: 'Base de données',
    items: [
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'SQL'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-8 py-28 border-t border-[var(--surface-line)] bg-[var(--bg-alt)]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[13px] text-[var(--accent)] mb-4">03 — Compétences</p>
        {/* <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-14 max-w-lg">
          Les outils avec lesquels je construis
        </h2> */}

        <div className="grid md:grid-cols-3 gap-10">
          {GROUPS.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-[13px] text-[var(--mono-accent)] mb-5 uppercase tracking-wide">
                {group.label}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[15px] text-[var(--text)] pb-3 border-b border-[var(--surface-line)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

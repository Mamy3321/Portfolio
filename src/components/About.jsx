export default function About() {
  return (
    <section id="about" className="px-6 md:px-8 py-28 border-t border-[var(--surface-line)]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <p className="font-mono text-[13px] text-[var(--accent)] mb-4">02 — À propos</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight">
            Un peu plus sur moi
          </h2>
        </div>

        <div className="space-y-5 text-[15px] text-[var(--text-muted)] leading-relaxed max-w-xl">
          <p>
            Passionné par l’informatique depuis mes débuts, je me suis naturellement orienté vers le développement web,
            où j’ai découvert le plaisir de transformer des idées en applications concrètes. Au fil de mon parcours,
            j’ai acquis des compétences en conception et en développement de solutions modernes. Aujourd’hui,
            je suis motivé par l’envie de créer des produits utiles, performants et adaptés aux besoins des utilisateurs.
          </p>
          {/* <p>
            Je privilégie une approche structurée et orientée qualité, en utilisant des technologies modernes et les bases de données relationnelles. 
            J’apprécie particulièrement travailler sur des projets qui demandent à la fois réflexion technique et sens du détail, notamment les applications web interactives et performantes. 
            Ce qui me distingue, c’est ma capacité à apprendre rapidement, à m’adapter aux besoins du projet et à proposer des solutions simples, efficaces et durables.
          </p> */}

          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="border-l border-[var(--surface-line)] pl-4">
              <p className="font-display text-2xl text-[var(--text)]">05 Octobre 2006</p>
              <p className="text-[13px] mt-1">Date de naissance</p>
            </div>
            <div className="border-l border-[var(--surface-line)] pl-4">
              <p className="font-display text-2xl text-[var(--text)]">ENI</p>
              <p className="text-[13px] mt-1">Ecole actuel</p>
            </div>
            <div className="border-l border-[var(--surface-line)] pl-4">
              <p className="font-display text-2xl text-[var(--text)]">3+</p>
              <p className="text-[13px] mt-1">Années d'expérience</p>
            </div>
            <div className="border-l border-[var(--surface-line)] pl-4">
              <p className="font-display text-2xl text-[var(--text)]">20+</p>
              <p className="text-[13px] mt-1">Projets réalisée</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

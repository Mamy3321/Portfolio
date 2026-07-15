import { useEffect, useState } from 'react'
import { ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'

const LINES = [
  { cmd: 'whoami', out: 'Développeur Full-Stack — Madagascar 🇲🇬' },
  { cmd: 'skills', out: 'React, Node.js, PostgreSQL, Python, Java, PHP, SQLite, MySQL, C#, .NET'},
  { cmd: 'status', out: 'Disponible pour des nouveaux projets ✓' },
]

function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [typed, setTyped] = useState('')

  useEffect(() => {
    if (visibleLines >= LINES.length) return
    const target = LINES[visibleLines].cmd
    let i = 0
    const typing = setInterval(() => {
      i += 1
      setTyped(target.slice(0, i))
      if (i >= target.length) {
        clearInterval(typing)
        setTimeout(() => {
          setVisibleLines((v) => v + 1)
          setTyped('')
        }, 350)
      }
    }, 45)
    return () => clearInterval(typing)
  }, [visibleLines])

  return (
    <div className="w-full max-w-md rounded-lg border border-[var(--surface-line)] bg-[var(--surface)] shadow-2xl shadow-black/40 overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--surface-line)] bg-black/20">
        <span className="w-2.5 h-2.5 rounded-full bg-[#E0625B]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#E0B75B]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#69C08A]" />
        <span className="ml-3 font-mono text-[11px] text-[var(--text-muted)]">portfolio.sh</span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[180px]">
        {LINES.slice(0, visibleLines).map((l, idx) => (
          <div key={idx} className="mb-3">
            <div className="text-[var(--mono-accent)]">
              <span className="text-[var(--accent)]">➜</span> {l.cmd}
            </div>
            <div className="text-[var(--text-muted)] pl-4">{l.out}</div>
          </div>
        ))}
        {visibleLines < LINES.length && (
          <div className="text-[var(--mono-accent)]">
            <span className="text-[var(--accent)]">➜</span> {typed}
            <span className="inline-block w-2 h-3.5 bg-[var(--accent)] ml-0.5 align-middle animate-pulse" />
          </div>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-40 pb-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center w-full">
        <div>
          <p className="font-mono text-[13px] text-[var(--accent)] mb-5">
            01 — Acceuil
          </p>
          <h4 className="font-display text-[clamp(1.6rem,3vw,4.4rem)] leading-[1.05] font-medium">
            RAZAFIMAHATRADRAIBE Mamy Ernest
            {/* <br />
            <span className="text-[var(--text-muted)]">développeur qui construit</span>
            <br />
            des produits soignés. */}
          </h4>
          <p className="mt-6 max-w-md text-[15px] text-[var(--text-muted)] leading-relaxed">
            Je suis développeur web passionné, spécialisé dans la création d’applications modernes, performantes et accessibles.
             J’accompagne chaque projet de l’idée initiale jusqu’à sa mise en production, en mettant l’accent sur la qualité du code,
              l’expérience utilisateur et la durabilité des solutions. Toujours en quête d’apprentissage, je m’efforce d’apporter des
               solutions innovantes et adaptées aux besoins réels.

          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="font-mono text-sm bg-[var(--accent)] text-[var(--bg)] px-6 py-3 rounded-sm font-medium hover:brightness-110 transition"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="font-mono text-sm border border-[var(--surface-line)] px-6 py-3 rounded-sm text-[var(--text)] hover:border-[var(--accent)] transition"
            >
              Me contacter
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-[var(--text-muted)]">
            <a href="#" aria-label="GitHub" className="hover:text-[var(--accent)] transition-colors">
              <GithubIcon size={19} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[var(--accent)] transition-colors">
              <LinkedinIcon size={19} />
            </a>
            <a href="mailto:vous@example.com" aria-label="Email" className="hover:text-[var(--accent)] transition-colors">
              <Mail size={19} />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Terminal />
        </div>
      </div>

      <a
        href="#about"
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[var(--text-muted)] font-mono text-[11px]"
      >
        scroll
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}

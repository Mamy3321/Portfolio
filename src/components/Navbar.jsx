import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#experience', label: 'Parcours' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-[var(--bg)]/90 backdrop-blur border-b border-[var(--surface-line)]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-8 py-4" style={{ marginLeft: '80px' }}>
        <a href="#top" className="flex items-center gap-3 font-mono text-sm tracking-wide text-[var(--text)]">
          <img
            src="/mamy.jpg"
            alt="Mamy Ernest"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1px solid var(--accent-dim)',
            }}
          />
          <span className="text-[var(--accent)]" style={{ fontSize: '18px', fontWeight: 'bold' }}>&nbsp;RAZAFIMAHATRADRAIBE Mamy Ernest</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-[13px] text-[var(--text-muted)]" style={{ marginLeft: '50px' }}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`transition-colors ${
                  active === l.href ? 'text-[var(--accent)]' : 'hover:text-[var(--text)]'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
        
          href="#contact"
          className="hidden md:inline-block font-mono text-[13px] border border-[var(--accent-dim)] text-[var(--accent)] px-4 py-2 rounded-sm hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors"
          style={{ marginRight: '-120px' }}
        >
          Discutons
        </a>

        <button
          className="md:hidden text-[var(--text)]"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-6 font-mono text-sm bg-[var(--bg)] border-b border-[var(--surface-line)]">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block py-3 transition-colors ${
                  active === l.href ? 'text-[var(--accent)]' : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
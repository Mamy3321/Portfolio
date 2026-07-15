import { Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon, FacebookIcon } from './icons'

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-8 py-32 border-t border-[var(--surface-line)]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-[13px] text-[var(--accent)] mb-4">06 — Contact</p>
        <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight">
          Un projet en tête ?
          <br />
          Discutons-en.
        </h2>
        <p className="mt-6 text-[15px] text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
          Je suis disponible pour des missions freelance et des opportunités à temps plein.
          Écrivez-moi, je réponds sous 48h.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:razafimahatradraibemamy@gmail.com"
            className="inline-flex items-center gap-2 font-mono text-sm bg-[var(--accent)] text-[var(--bg)] px-7 py-3.5 rounded-sm font-medium hover:brightness-110 transition"
          >
            <Mail size={16} />
            razafimahatradraibemamy@gmail.com
          </a>

          <a
            href="tel:+261349064340"
            className="inline-flex items-center gap-2 font-mono text-sm border border-[var(--accent-dim)] text-[var(--accent)] px-7 py-3.5 rounded-sm font-medium hover:bg-[var(--accent)] hover:text-[var(--bg)] transition"
          >
            <Phone size={16} />
            +261 34 90 643 40
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-6 text-[var(--text-muted)]">
          <a href="https://github.com/MamyErnest3321" aria-label="GitHub" className="hover:text-[var(--accent)] transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href="https://www.linkedin.com/in/mamy-razafimahatradraibe-7a89a1421/" aria-label="LinkedIn" className="hover:text-[var(--accent)] transition-colors">
            <LinkedinIcon size={20} />
          </a>
          <a href="https://www.facebook.com/ernest.mamy.95563" aria-label="Facebook" className="hover:text-[var(--accent)] transition-colors">
            <FacebookIcon size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
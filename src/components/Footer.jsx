export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="px-6 md:px-8 py-8 border-t border-[var(--surface-line)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-[12px] text-[var(--text-muted)]">
        <p>© {year} RAZAFIMAHATRADRAIBE Mamy Ernest. Tous droits réservés.</p>
        <p>Conçu et développé avec React &amp; Tailwind CSS.</p>
      </div>
    </footer>
  )
}

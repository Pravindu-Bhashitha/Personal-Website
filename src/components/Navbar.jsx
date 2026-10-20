import { useEffect, useState } from 'react'
import { profile } from '../data'
import { Download, Moon, Sun } from './Icons'

const links = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['education', 'Education'],
  ['contact', 'Contact'],
]

function initialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
  } catch {}
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">{profile.initials}</span>
          <span className="logo-name">{profile.name}</span>
        </a>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="icon-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <a className="btn btn-primary btn-sm hide-sm" href={profile.cv} download="Pravindu_Bhashitha_CV.pdf">
            <Download /> CV
          </a>
          <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

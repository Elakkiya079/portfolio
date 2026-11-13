import { useEffect, useState } from 'react'
import { navLinks, profile } from '../content.js'
import ResumeButton from './ResumeButton.jsx'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const marker = window.scrollY + 120
      let current = ''
      for (const link of navLinks) {
        const section = document.getElementById(link.id)
        if (section && section.offsetTop <= marker) current = link.id
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('hashchange', onScroll)
    window.addEventListener('resize', onScroll)
    const frame = requestAnimationFrame(onScroll)
    const settled = window.setTimeout(onScroll, 150)
    document.fonts?.ready.then(onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('hashchange', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
      window.clearTimeout(settled)
    }
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="shell header-inner">
        <a className="brand" href="#top">
          <span className="brand-mark">EE</span>
          <span className="brand-name">{profile.name}</span>
        </a>
        <nav className="site-nav" aria-label="Page">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'is-active' : undefined}
              aria-current={active === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <ResumeButton />
      </div>
    </header>
  )
}

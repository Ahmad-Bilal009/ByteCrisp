import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import BrandMark from './BrandMark'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/contact', label: 'Contact' },
  { to: '/team', label: 'Team' },
  { to: '/pricing', label: 'Pricing' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
        <BrandMark />
        ByteCrisp
      </NavLink>

      <button
        className={`nav-toggle ${open ? 'open' : ''}`}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-links ${open ? 'open' : ''}`}>
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.end} className={linkClass} onClick={() => setOpen(false)}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar

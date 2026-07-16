import { Link } from 'react-router-dom'
import BrandMark from './BrandMark'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <div className="brand footer-brand">
            <BrandMark />
            ByteCrisp
          </div>
          <p>Innovative software solutions for modern businesses &mdash; custom builds, delivered with clarity and speed.</p>
          <ul className="social-icons">
            <li>
              <a href="#" className="social-link" aria-label="ByteCrisp on LinkedIn" onClick={(e) => e.preventDefault()}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.5h4.5V23H.24V8.5zM8.5 8.5h4.32v1.98h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.9c0-1.65-.03-3.78-2.3-3.78-2.31 0-2.66 1.8-2.66 3.66V23H8.5V8.5z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="social-link" aria-label="ByteCrisp on X" onClick={(e) => e.preventDefault()}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.2l-5.6-6.9L4 22H1l8.1-9.3L.9 2h7.4l5.1 6.3L18.9 2zm-1.3 18h2L6.5 4h-2l13.1 16z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="social-link" aria-label="ByteCrisp on GitHub" onClick={(e) => e.preventDefault()}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.4-3.87-1.4-.53-1.32-1.28-1.68-1.28-1.68-1.04-.7.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.78 1.08.78 2.18v3.24c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul className="menu-list">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/work">Our Work</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="menu-list">
            <li>Mon&ndash;Fri, 09:00&ndash;18:00</li>
            <li><a href="tel:+923091761176">+92 309 1761176</a></li>
            <li><a href="mailto:info@bytecrisp.com">info@bytecrisp.com</a></li>
            <li>Street No. 2, Main Nishatabad Road, Bhaiwala, Faisalabad</li>
          </ul>
        </div>
      </div>

      <p className="footer-copyright">ByteCrisp &copy; {new Date().getFullYear()} &middot; All rights reserved.</p>
    </footer>
  )
}

export default Footer

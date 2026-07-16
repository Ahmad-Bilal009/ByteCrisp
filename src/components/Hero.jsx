import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    eyebrow: 'Innovative Software Solutions',
    title: (
      <>
        Custom Software
        <br />& Development
      </>
    ),
    ctaLabel: 'Get Started',
    ctaTo: '/contact',
  },
  {
    eyebrow: 'Expert Development Team',
    title: (
      <>
        Web & Mobile
        <br />Applications
      </>
    ),
    ctaLabel: 'Our Services',
    ctaTo: '/services',
  },
  {
    eyebrow: 'Cutting-edge Technology',
    title: (
      <>
        Cloud Solutions
        <br />& Digital Innovation
      </>
    ),
    ctaLabel: 'Learn More',
    ctaTo: '/about',
  },
]

function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 5500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="hero">
      <div className="hero-glow" aria-hidden="true" />
      {slides.map((slide, i) => (
        <div key={slide.ctaLabel} className={`hero-slide ${i === index ? 'hero-slide-active' : ''}`}>
          <span className="eyebrow">{slide.eyebrow}</span>
          <h1>{slide.title}</h1>
          <Link to={slide.ctaTo} className="cta-button primary">
            {slide.ctaLabel}
          </Link>
        </div>
      ))}

      <div className="hero-dots" role="tablist" aria-label="Hero slides">
        {slides.map((slide, i) => (
          <button
            key={slide.ctaLabel}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show slide ${i + 1}`}
            className={`hero-dot ${i === index ? 'hero-dot-active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero

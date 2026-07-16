import { useEffect, useState } from 'react'

function Testimonial({ items }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % items.length), 6000)
    return () => clearInterval(timer)
  }, [items.length])

  const current = items[index]

  return (
    <div className="testimonial-panel">
      <svg className="quote-mark" viewBox="0 0 32 24" width="34" height="26" fill="currentColor" aria-hidden="true">
        <path d="M0 24V14.4C0 6.4 4.8 1.1 12.3 0l1.4 3.7C9 5 6.6 7.6 6.3 11.5H12V24H0zm18.7 0V14.4c0-8 4.8-13.3 12.3-14.4l1.4 3.7c-4.7 1.3-7.1 3.9-7.4 7.8H30.7V24H18.7z" />
      </svg>
      <p className="testimonial-quote">&ldquo;{current.quote}&rdquo;</p>
      <p className="testimonial-attribution">&mdash; {current.attribution}</p>

      <div className="hero-dots" role="tablist" aria-label="Testimonials">
        {items.map((item, i) => (
          <button
            key={item.attribution}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show testimonial ${i + 1}`}
            className={`hero-dot ${i === index ? 'hero-dot-active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default Testimonial

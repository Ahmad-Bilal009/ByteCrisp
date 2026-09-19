import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const features = [
  { title: 'Money', description: 'Gold & silver price, currency converter, and other everyday money tools.' },
  { title: 'Calculator', description: 'Quick calculators for the numbers you need on the go.' },
  { title: 'Converter', description: 'Unit and currency converters, all in one place.' },
  { title: 'Time', description: 'Age calculator and other time-based utilities.' },
  { title: 'QR & Barcode', description: 'Scan and generate QR codes and barcodes instantly.' },
  { title: 'Documents', description: 'Handy tools for managing and working with your documents.' },
  { title: 'Security', description: 'Simple tools to help keep your data safe.' },
]

function MyLifeKit() {
  return (
    <section className="page-section my-life-kit-page">
      <Reveal className="page-intro my-life-kit-intro">
        <img src="/my-life-kit-logo.jpg" alt="My Life Kit logo" className="my-life-kit-logo" />
        <span className="eyebrow">My Life Kit</span>
        <h1>Your everyday toolkit, all in one app</h1>
        <p>
          My Life Kit brings together the small tools you reach for every day &mdash; money &amp; currency, calculators,
          converters, time tools, QR &amp; barcode, documents, and security &mdash; in one clean, fast app.
        </p>
      </Reveal>

      <Reveal as="div" className="banner-cta" delay={60}>
        <div>
          <h2>Download My Life Kit</h2>
          <p>Available soon for Android and iOS. Tap below to get the latest link.</p>
        </div>
        <a href="#" className="cta-button primary" onClick={(e) => e.preventDefault()}>
          Download Now
        </a>
      </Reveal>

      <Reveal as="div" className="split-panel" delay={100}>
        <div>
          <span className="eyebrow">What&apos;s inside</span>
          <h2>Seven categories, one app</h2>
          <ul className="values-list">
            {features.map((feature) => (
              <li key={feature.title}>
                <strong>{feature.title}:</strong> {feature.description}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal as="div" className="story-panel my-life-kit-privacy" delay={140}>
        <p>Learn how My Life Kit handles your data.</p>
        <Link
  to="/my-life-kit/privacy-policy"
  className="privacy-policy-card"
>
  <div className="privacy-policy-card-icon">
    🔒
  </div>

  <div className="privacy-policy-card-content">
    <h3>Privacy Policy</h3>
    <p>
      Learn how My Life Kit protects your data and privacy.
    </p>
  </div>

  <div className="privacy-policy-card-arrow">
    →
  </div>
</Link>
      </Reveal>
    </section>
  )
}

export default MyLifeKit

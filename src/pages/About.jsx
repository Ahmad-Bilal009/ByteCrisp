import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import StatRow from '../components/StatRow'

const values = [
  { title: 'Innovation', description: 'We constantly explore new technologies and approaches.' },
  { title: 'Excellence', description: 'We strive for the highest quality in everything we do.' },
  { title: 'Collaboration', description: 'We work closely with our clients and team members.' },
  { title: 'Integrity', description: 'We maintain the highest standards of professional ethics.' },
  { title: 'Continuous Learning', description: "We invest in our team's growth and development." },
]

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Expert Developers' },
  { value: '15+', label: 'Years Experience' },
]

function About({ id }) {
  return (
    <section id={id} className="page-section about-page">
      <Reveal className="page-intro">
        <span className="eyebrow">About ByteCrisp</span>
        <h1>Innovative software solutions for modern businesses</h1>
        <p>
          ByteCrisp was founded with a vision to transform businesses through innovative software solutions. We
          combine technical expertise with creative thinking to deliver cutting-edge software that helps our clients
          achieve their digital transformation goals.
        </p>
      </Reveal>

      <Reveal as="div" className="story-panel" delay={60}>
        <p>
          Our team of experienced developers, designers, and project managers works together to create custom
          software solutions that are scalable, maintainable, and user-friendly. We believe in building long-term
          partnerships with our clients and delivering solutions that exceed expectations.
        </p>
      </Reveal>

      <Reveal as="div" className="banner-cta">
        <div>
          <h2>Meet the people behind ByteCrisp</h2>
          <p>Developers, designers, and project managers working together on every engagement.</p>
        </div>
        <Link to="/team" className="cta-button primary">
          Meet the Team
        </Link>
      </Reveal>

      <Reveal as="div" className="split-panel">
        <div>
          <span className="eyebrow">Our values</span>
          <h2>What makes ByteCrisp different</h2>
          <ul className="values-list">
            {values.map((value) => (
              <li key={value.title}>
                <strong>{value.title}:</strong> {value.description}
              </li>
            ))}
          </ul>
        </div>
        <StatRow stats={stats} delay={100} />
      </Reveal>
    </section>
  )
}

export default About

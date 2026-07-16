import { Link } from 'react-router-dom'
import Reveal from './Reveal'

function PricingCard({ plan, delay }) {
  return (
    <Reveal as="article" delay={delay} className={plan.highlight ? 'pricing-card featured' : 'pricing-card'}>
      {plan.highlight && <span className="ribbon">Most popular</span>}

      <div className="card-label">{plan.name}</div>
      <p className="plan-description">{plan.description}</p>

      <div className="price-row">
        <span className="price-value">{plan.price}</span>
        <span className="price-period">/ project</span>
      </div>

      <ul>
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <Link to="/contact" className={plan.highlight ? 'cta-button primary' : 'cta-button'}>
        Choose {plan.name}
      </Link>
    </Reveal>
  )
}

export default PricingCard

import Reveal from './Reveal'

function ServiceCard({ service, delay }) {
  return (
    <Reveal as="article" delay={delay} className="service-card">
      <div className="service-icon" aria-hidden="true">
        {service.icon}
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      {service.features && (
        <ul className="service-features">
          {service.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      )}
    </Reveal>
  )
}

export default ServiceCard

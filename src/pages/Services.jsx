import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { CodeIcon, DevicesIcon, CloudIcon, PaletteIcon } from '../components/Icons'

const services = [
  {
    key: 'custom',
    icon: <CodeIcon />,
    title: 'Custom Software Development',
    description:
      'At ByteCrisp, we specialize in developing custom software solutions tailored to your specific business needs. Our experienced team follows industry best practices and modern development methodologies to deliver high-quality, scalable, and maintainable software.',
    features: [
      'Enterprise Software Solutions',
      'Business Process Automation',
      'API Development & Integration',
      'Legacy System Modernization',
      'Quality Assurance & Testing',
    ],
  },
  {
    key: 'web-mobile',
    icon: <DevicesIcon />,
    title: 'Web & Mobile Development',
    description:
      'We create responsive web applications and native mobile apps that deliver exceptional user experiences across all devices. Our development team stays up-to-date with the latest technologies and frameworks to build modern, performant applications.',
    features: [
      'Progressive Web Apps (PWA)',
      'Native iOS & Android Development',
      'Cross-platform Mobile Apps',
      'E-commerce Solutions',
      'Real-time Applications',
    ],
  },
  {
    key: 'cloud',
    icon: <CloudIcon />,
    title: 'Cloud Solutions',
    description:
      'Leverage the power of cloud computing with our comprehensive cloud solutions. We help businesses migrate to the cloud, optimize their infrastructure, and implement scalable cloud-based applications.',
    features: [
      'Cloud Migration & Strategy',
      'DevOps & CI/CD Implementation',
      'Cloud Infrastructure Management',
      'Serverless Architecture',
      'Cloud Security & Compliance',
    ],
  },
  {
    key: 'design',
    icon: <PaletteIcon />,
    title: 'UI/UX Design',
    description:
      'Create engaging and intuitive user experiences with our expert UI/UX design services. We combine creativity with user-centered design principles to deliver beautiful, functional interfaces that users love.',
    features: [
      'User Interface Design',
      'User Experience Design',
      'Wireframing & Prototyping',
      'Design Systems',
      'Usability Testing',
    ],
  },
]

function Services({ id }) {
  const [activeKey, setActiveKey] = useState(services[0].key)
  const active = services.find((service) => service.key === activeKey)
const currentIndex = services.findIndex(service => service.key === activeKey);

const next = () => {
  setActiveKey(services[(currentIndex + 1) % services.length].key);
};

const prev = () => {
  setActiveKey(services[(currentIndex - 1 + services.length) % services.length].key);
};
  return (
    <section id={id} className="page-section services-page">
      <Reveal className="page-intro">
        <span className="eyebrow">Our services</span>
        <h1>Comprehensive software solutions for your business</h1>
        <p>Explore the full range of engagements ByteCrisp delivers, from initial architecture to long-term support.</p>
      </Reveal>

      <Reveal as="div" className="services-tabs-panel" delay={60}>
        <div className="services-tab-list" role="tablist" aria-label="Service categories">
          {services.map((service) => (
            <button
              key={service.key}
              type="button"
              role="tab"
              aria-selected={service.key === activeKey}
              className={service.key === activeKey ? 'services-tab active' : 'services-tab'}
              onClick={() => setActiveKey(service.key)}
            >
              <span className="services-tab-icon" aria-hidden="true">{service.icon}</span>
              {service.title}
              <span>→</span>
              <span className="services-tab-icon" aria-hidden="true">
  {service.icon}
</span>
{service.title}
<span>→</span>
            </button>
          ))}
        </div>

        <article className="services-tab-content">
          <h2>{active.title}</h2>
          <p>{active.description}</p>
          <ul>
            {active.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </article>
      </Reveal>

      <Reveal as="div" className="banner-cta">
        <div>
          <h2>Request a call back</h2>
          <p>Let&apos;s discuss your project requirements and how we can help.</p>
        </div>
        <Link to="/contact" className="cta-button primary">
          Get in Touch
        </Link>
      </Reveal>
    </section>
  )
}

export default Services

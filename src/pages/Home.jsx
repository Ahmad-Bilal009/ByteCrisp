import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import StatRow from '../components/StatRow'
import Testimonial from '../components/Testimonial'
import { CodeIcon, DevicesIcon, CloudIcon } from '../components/Icons'
import About from './About'
import Services from './Services'
import Work from './Work'
import Contact from './Contact'

const services = [
  {
    icon: <CodeIcon />,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business requirements and challenges.',
  },
  {
    icon: <DevicesIcon />,
    title: 'Web & Mobile Apps',
    description: 'Responsive web applications and native mobile apps that deliver exceptional user experiences.',
  },
  {
    icon: <CloudIcon />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services to optimize your business operations.',
  },
]

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Expert Developers' },
  { value: '15+', label: 'Years Experience' },
]

const testimonials = [
  {
    quote: 'ByteCrisp rebuilt our core platform from the ground up and hit every milestone on time. Communication was clear at every stage.',
    attribution: 'Operations Lead, FinTech Client',
  },
  {
    quote: 'Their team understood our workflow better than we expected and shipped a mobile app our customers genuinely enjoy using.',
    attribution: 'Product Manager, Retail Client',
  },
  {
    quote: 'From cloud migration to ongoing support, ByteCrisp has been a dependable long-term technical partner.',
    attribution: 'CTO, Healthcare Client',
  },
]

function Home() {
  const location = useLocation()

  useEffect(() => {
    const sectionId =
      location.hash?.slice(1) ||
      (location.pathname === '/about' && 'about') ||
      (location.pathname === '/services' && 'services') ||
      (location.pathname === '/work' && 'work') ||
      (location.pathname === '/contact' && 'contact')

    if (sectionId) {
      const sectionElement = document.getElementById(sectionId)
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [location])

  return (
    <>
      <section id="home" className="page-section home-page">
        <Hero />

        <Reveal as="div" className="banner-cta">
          <div>
            <h2>Ready to start your project?</h2>
            <p>Let&apos;s discuss how we can help transform your ideas into reality.</p>
          </div>
          <Link to="/contact" className="cta-button primary">
            Get in Touch
          </Link>
        </Reveal>

        <Reveal className="page-intro">
          <span className="eyebrow">Our services</span>
          <h2>Comprehensive software solutions for your business</h2>
          <p>From custom builds to cloud infrastructure, we cover the full stack of modern software delivery.</p>
        </Reveal>

        <div className="service-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} delay={index * 90} />
          ))}
        </div>

        <Reveal as="div" className="split-panel">
          <div>
            <span className="eyebrow">Why choose ByteCrisp</span>
            <h2>Your trusted partner in digital transformation</h2>
            <p>
              We combine technical expertise with creative innovation to deliver cutting-edge software solutions. Our
              developers, designers, and project managers work together to bring your vision to life &mdash; and we pride
              ourselves on shipping software that is scalable, maintainable, and built to last.
            </p>
            <Link to="/about" className="cta-button">
              Learn More
            </Link>
          </div>
          <StatRow stats={stats} delay={100} />
        </Reveal>

        <Reveal as="div" className="testimonial-section">
          <span className="eyebrow">What clients say</span>
          <h2>Trusted by teams building serious products</h2>
          <Testimonial items={testimonials} />
        </Reveal>
      </section>

      <About id="about" />
      <Services id="services" />
      <Work id="work" />
      <Contact id="contact" />
    </>
  )
}

export default Home

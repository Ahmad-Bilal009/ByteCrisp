import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CategoryTabs from '../components/CategoryTabs'
import PricingCard from '../components/PricingCard'

const categories = [
  { key: 'web', label: 'Web Development' },
  { key: 'app', label: 'App Development' },
  { key: 'full', label: 'Full Stack Development' },
]

const plansByCategory = {
  web: [
    {
      name: 'Basic',
      price: '$999',
      description: 'A polished website built on a proven, cost-effective stack.',
      features: [
        'React.js frontend',
        'Node.js + Express.js backend',
        'MongoDB database',
        'REST API & JWT authentication',
        'Responsive UI & secure deployment',
        '1 month of support',
      ],
      highlight: false,
    },
    {
      name: 'Professional',
      price: '$4,999',
      description: 'React/Vue-powered sites with custom design and e-commerce.',
      features: [
        'React or Vue.js with Tailwind/Bootstrap',
        'Node.js/PHP backend, MySQL/PostgreSQL',
        'Custom UI/UX & advanced CMS',
        'E-commerce integration',
        'Advanced SEO, performance & security',
        '3 months of support',
      ],
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: '$9,999',
      description: 'Full-scale builds for complex, high-traffic platforms.',
      features: [
        'React/Vue/Angular with custom design system',
        'Node.js, Python or Java backend',
        'Multi-database architecture',
        'Cloud hosting & premium performance',
        'Enterprise-grade security',
        '6 months of support',
      ],
      highlight: false,
    },
  ],
  app: [
    {
      name: 'Basic',
      price: '$1,999',
      description: 'A single-platform native app, ready for launch.',
      features: [
        'Native iOS or Android (Swift/Kotlin)',
        'REST API backend',
        'Shared server & SQLite',
        'Basic push notifications & analytics',
        'App store submission',
        '1 month of support',
      ],
      highlight: false,
    },
    {
      name: 'Professional',
      price: '$39,999',
      description: 'Cross-platform apps with custom design and offline support.',
      features: [
        'React Native or Flutter, two platforms',
        'REST + GraphQL backend',
        'VPS with MySQL/PostgreSQL',
        'Custom UI/UX design',
        'Offline support & advanced analytics',
        '3 months of support',
      ],
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: '$79,999',
      description: 'Native and cross-platform coverage with custom integrations.',
      features: [
        'Native + cross-platform, all platforms',
        'Custom backend integrations',
        'Cloud (AWS/GCP) & MongoDB',
        'Enterprise-grade API security',
        'Custom analytics & push notifications',
        '6 months of support',
      ],
      highlight: false,
    },
  ],
  full: [
    {
      name: 'Basic',
      price: '$4,999',
      description: 'A complete web + mobile foundation on one modern stack.',
      features: [
        'React.js frontend',
        'Node.js + Express.js backend',
        'MongoDB database',
        'REST API & JWT authentication',
        'Responsive UI & secure deployment',
        '1 month of support',
      ],
      highlight: false,
    },
    {
      name: 'Professional',
      price: '$4,999',
      description: 'Cloud-hosted, multi-platform delivery with DevOps basics.',
      features: [
        'React/Vue frontend, Node.js/Django backend',
        'MongoDB/PostgreSQL, cloud hosting + CDN',
        'Two-platform mobile app',
        'Advanced backend, database & API',
        'Cloud integration & basic DevOps',
        '6 months of support',
      ],
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: '$11,999',
      description: 'End-to-end delivery across web, mobile, and infrastructure.',
      features: [
        'React/Vue/Angular, Spring Boot/Node.js',
        'Multi-database, multi-cloud infrastructure',
        'All-platform mobile app',
        'Custom backend, database & API',
        'Advanced DevOps & CI/CD',
        '12 months of support',
      ],
      highlight: false,
    },
  ],
}

function Pricing() {
  const [category, setCategory] = useState('web')
const currentIndex = categories.findIndex(item => item.key === category);

const next = () => {
  setCategory(categories[(currentIndex + 1) % categories.length].key);
};

const prev = () => {
  setCategory(categories[(currentIndex - 1 + categories.length) % categories.length].key);
};
  return (
    <section className="page-section pricing-page">
      <Reveal className="page-intro">
        <span className="eyebrow">Pricing plans</span>
        <h1>Choose the perfect plan for your business needs</h1>
        <p>
          Transparent, project-based pricing across web, app, and full stack development. Every tier includes
          onboarding, strategy guidance, and dedicated support.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <CategoryTabs categories={categories} active={category} onChange={setCategory} />
      </Reveal>
<div className="pricing-arrows">
  <button onClick={prev}>←</button>
  <button onClick={next}>→</button>
</div>
      <div className="pricing-grid">
        {plansByCategory[category].map((plan, index) => (
          <PricingCard key={plan.name} plan={plan} delay={index * 90} />
        ))}
      </div>

      <Reveal as="div" className="pricing-highlight">
        <h2>Need something custom?</h2>
        <p>
          Every engagement can be tailored beyond these tiers &mdash; talk to us about your requirements and we&apos;ll
          put together a custom quote.
        </p>
        <Link to="/contact" className="cta-button primary">
          Request a Custom Quote
        </Link>
      </Reveal>
    </section>
  )
}

export default Pricing

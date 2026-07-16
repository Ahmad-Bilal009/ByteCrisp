import Reveal from '../components/Reveal'
import PortfolioCard from '../components/PortfolioCard'

const projects = [
  {
    title: 'FinTech Dashboard',
    description: 'A robust financial analytics dashboard for a leading fintech startup, featuring real-time data visualization and secure user management.',
    tags: ['Web', 'React', 'Node.js'],
    tone: 'blue',
  },
  {
    title: 'E-Commerce Mobile App',
    description: 'A cross-platform mobile app for a retail brand, supporting seamless shopping, payments, and push notifications.',
    tags: ['Mobile', 'Flutter', 'Firebase'],
    tone: 'cyan',
  },
  {
    title: 'Healthcare Portal',
    description: 'A secure patient management and appointment booking system for a healthcare provider, with integrated video consultations.',
    tags: ['Full Stack', 'Vue.js', 'Django'],
    tone: 'violet',
  },
  {
    title: 'SaaS Analytics Platform',
    description: 'A scalable SaaS platform for business analytics, supporting multi-tenant architecture and advanced reporting.',
    tags: ['Web', 'Angular', 'Spring Boot'],
    tone: 'blue',
  },
  {
    title: 'AI Integrated Mobile App',
    description: 'An AI-powered mobile app that personalizes recommendations and automates everyday workflows for its users.',
    tags: ['React Native', 'Supabase', 'Node.js'],
    tone: 'cyan',
  },
  {
    title: 'Financial Navigation Dashboard',
    description: 'A multi-tenant analytics dashboard for financial operations teams, with advanced reporting and role-based access.',
    tags: ['Web', 'Vue.js', 'Node.js', 'MongoDB'],
    tone: 'violet',
  },
]

function Work() {
  return (
    <section className="page-section work-page">
      <Reveal className="page-intro">
        <span className="eyebrow">Our work</span>
        <h1>Showcasing our recent projects and success stories</h1>
        <p>Explore some of the web, app, and full stack solutions we&apos;ve delivered for our clients.</p>
      </Reveal>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <PortfolioCard key={project.title} project={project} delay={index * 80} />
        ))}
      </div>
    </section>
  )
}

export default Work

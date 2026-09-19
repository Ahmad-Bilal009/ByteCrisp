import { Link } from 'react-router-dom'
import Reveal from './Reveal'

function PortfolioCard({ project, delay }) {
  const Tag = project.link ? Link : 'article'
  const tagProps = project.link ? { to: project.link } : {}

  return (
    <Reveal as={Tag} delay={delay} className="portfolio-card" {...tagProps}>
      <div className={`portfolio-thumb portfolio-thumb-${project.tone}`} aria-hidden="true">
        {project.logo ? (
          <img src={project.logo} alt="" className="portfolio-thumb-logo" />
        ) : (
          <span>{project.title.split(' ').map((word) => word[0]).slice(0, 2).join('')}</span>
        )}
      </div>
      <div className="portfolio-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="portfolio-tags">
          {project.tags.map((tag) => (
            <span className="portfolio-tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default PortfolioCard

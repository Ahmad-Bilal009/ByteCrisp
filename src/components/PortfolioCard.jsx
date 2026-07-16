import Reveal from './Reveal'

function PortfolioCard({ project, delay }) {
  return (
    <Reveal as="article" delay={delay} className="portfolio-card">
      <div className={`portfolio-thumb portfolio-thumb-${project.tone}`} aria-hidden="true">
        <span>{project.title.split(' ').map((word) => word[0]).slice(0, 2).join('')}</span>
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

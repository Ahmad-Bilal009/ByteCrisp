import Reveal from './Reveal'

function StatRow({ stats, delay = 0 }) {
  return (
    <Reveal as="div" className="stats-row" delay={delay}>
      {stats.map((stat) => (
        <div className="stat-item" key={stat.label}>
          <span className="stat-value">{stat.value}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </Reveal>
  )
}

export default StatRow

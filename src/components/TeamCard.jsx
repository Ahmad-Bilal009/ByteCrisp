import Reveal from './Reveal'

function TeamCard({ member, delay }) {
  const initials = member.name.split(' ').map((n) => n[0]).join('')

  return (
    <Reveal as="article" delay={delay} className="team-card">
      {member.photo ? (
        <img className="team-photo" src={member.photo} alt={member.name} />
      ) : (
        <div className="team-avatar">{initials}</div>
      )}

      <div className="team-info">
        <h2>{member.name}</h2>
        <p className="team-role">{member.role}</p>
        <p>{member.bio}</p>
      </div>
    </Reveal>
  )
}

export default TeamCard
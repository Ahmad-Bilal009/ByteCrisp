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
        <div className="team-social">
          <a href="#" className="social-link" aria-label={`${member.name} on LinkedIn`} onClick={(e) => e.preventDefault()}>
            <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.5h4.5V23H.24V8.5zM8.5 8.5h4.32v1.98h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.9c0-1.65-.03-3.78-2.3-3.78-2.31 0-2.66 1.8-2.66 3.66V23H8.5V8.5z" />
            </svg>
          </a>
          <a href="#" className="social-link" aria-label={`${member.name} on X`} onClick={(e) => e.preventDefault()}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
              <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.2l-5.6-6.9L4 22H1l8.1-9.3L.9 2h7.4l5.1 6.3L18.9 2zm-1.3 18h2L6.5 4h-2l13.1 16z" />
            </svg>
          </a>
          <a href="#" className="social-link" aria-label={`Email ${member.name}`} onClick={(e) => e.preventDefault()}>
            <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
              <path d="M2 4h20a1 1 0 011 1v14a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1zm19.4 2.4L12 12.8 2.6 6.4l-.6.9L12 14l10-6.7-.6-.9z" />
            </svg>
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default TeamCard

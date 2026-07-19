import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal'
import TeamCard from '../components/TeamCard'

const TEAM_API_URL = 'https://mazduuri-backend-production.up.railway.app/api/team'

function Team() {
  const [members, setMembers] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let cancelled = false

    fetch(TEAM_API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed with ${res.status}`)
        return res.json()
      })
      .then((json) => {
        if (cancelled) return
        if (!json.success || !Array.isArray(json.data)) throw new Error('Unexpected response shape')
        setMembers(
          json.data.map((item) => ({
            name: item.name,
            role: item.jobRole,
            bio: item.description,
            photo: item.image || undefined,
          }))
        )
        setStatus('success')
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="page-section team-page">
      <Reveal className="page-intro">
        <span className="eyebrow">Our team</span>
        <h1>Meet the people behind ByteCrisp</h1>
        <p>
          A small team of developers, designers, and project managers who work together to ship custom software
          that&apos;s scalable, maintainable, and built to last.
        </p>
      </Reveal>

      {status === 'loading' && <p className="team-status">Loading team...</p>}
      {status === 'error' && <p className="team-status team-status-error">We couldn&apos;t load the team right now. Please try again shortly.</p>}

      {status === 'success' && (
        <div className="team-grid">
          {members.map((member, index) => (
            <TeamCard key={member.name} member={member} delay={index * 80} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Team

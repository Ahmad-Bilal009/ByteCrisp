import Reveal from '../components/Reveal'
import TeamCard from '../components/TeamCard'

const photoModules = import.meta.glob('../assets/team/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

const photosBySlug = Object.fromEntries(
  Object.entries(photoModules).map(([path, url]) => {
    const slug = path.split('/').pop().replace(/\.[^.]+$/, '')
    return [slug, url]
  })
)

const slugify = (name) => name.toLowerCase().trim().replace(/\s+/g, '-')

const teamMembers = [
  {
    name: 'Ahmad Bilal',
    role: 'CEO & Founder',
    bio: 'Leads technical strategy and innovation initiatives across every ByteCrisp engagement.',
  },
  {
    name: 'Aqsa Gulzar',
    role: 'Co-Founder & UX/UI Design Lead',
    bio: 'Combines creativity with user-centered design principles to craft intuitive, polished interfaces.',
  },
  {
    name: 'Khadija',
    role: 'Project Manager',
    bio: 'Keeps every engagement on time and on scope, from kickoff through delivery.',
  },
  {
    name: 'Abdur Rehman',
    role: 'DevOps Engineer',
    bio: 'Builds resilient cloud infrastructure and CI/CD pipelines for smooth, reliable releases.',
  },
  {
    name: 'Abdul Rehman',
    role: 'Full Stack Developer',
    bio: 'Ships end-to-end features across the stack, from database design to production UI.',
  },
  {
    name: 'Muhammad Umer',
    role: 'Full Stack Developer',
    bio: 'Focuses on clean architecture and performance across web and API layers.',
  },
  {
    name: 'Muhammad Uzair',
    role: 'Full Stack Developer',
    bio: 'Brings hands-on experience across modern frontend and backend frameworks.',
  },
].map((member) => ({ ...member, photo: photosBySlug[slugify(member.name)] }))

function Team() {
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

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamCard key={member.name} member={member} delay={index * 80} />
        ))}
      </div>
    </section>
  )
}

export default Team

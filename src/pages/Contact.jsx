import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import { PhoneIcon, MailIcon, PinIcon } from '../components/Icons'

const contactItems = [
  {
    icon: <PhoneIcon />,
    title: 'Phone',
    description: 'Feel free to call us during business hours',
    value: '+92 309 1761176',
    href: 'tel:+923091761176',
  },
  {
    icon: <MailIcon />,
    title: 'Email',
    description: 'Send us an email anytime',
    value: 'info@bytecrisp.com',
    href: 'mailto:info@bytecrisp.com',
  },
  {
    icon: <PinIcon />,
    title: 'Location',
    description: 'Visit our office',
    value: 'Street No. 2, Main Nishatabad Road, Bhaiwala, Faisalabad',
  },
]

function Contact({ id }) {
  return (
    <section id={id} className="page-section contact-page">
      <Reveal className="page-intro">
        <span className="eyebrow">Contact us</span>
        <h1>Let&apos;s discuss your project</h1>
        <p>Mon&ndash;Fri, 09:00&ndash;18:00. Reach out any way that&apos;s convenient and we&apos;ll get back to you quickly.</p>
      </Reveal>

      <div className="contact-info-grid">
        {contactItems.map((item, index) => (
          <Reveal as="div" className="contact-item" key={item.title} delay={index * 80}>
            <span className="contact-icon" aria-hidden="true">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.title === 'Location' ? (
              <span>{item.value}</span>
            ) : (
              <a href={item.href}>{item.value}</a>
            )}
          </Reveal>
        ))}
      </div>

      <Reveal as="div" className="contact-panel">
        <div className="section-heading-block">
          <span className="eyebrow">Send us a message</span>
          <h2>We&apos;ll get back to you as soon as possible</h2>
        </div>
        <ContactForm />
      </Reveal>

      <Reveal as="div" className="map-panel">
        <iframe
          title="ByteCrisp office location"
          src="https://maps.google.com/maps?q=Nishatabad+Road+Faisalabad+Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="460"
          style={{ border: 0 }}
          loading="lazy"
        />
      </Reveal>
    </section>
  )
}

export default Contact

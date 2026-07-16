import { useState } from 'react'

const initialForm = { name: '', email: '', subject: '', message: '' }

function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  if (submitted) {
    return (
      <div className="form-success">
        <h3>Thanks for reaching out!</h3>
        <p>We&apos;ve noted your message and will get back to you within one business day.</p>
        <button type="button" className="cta-button" onClick={() => setSubmitted(false)}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="form-field">
          <span>Full Name</span>
          <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Jane Doe" required />
        </label>
        <label className="form-field">
          <span>Email Address</span>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@company.com" required />
        </label>
      </div>
      <label className="form-field">
        <span>Subject</span>
        <input name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="Project inquiry" required />
      </label>
      <label className="form-field">
        <span>Message</span>
        <textarea name="message" rows={6} value={form.message} onChange={handleChange} placeholder="Tell us about your project..." required />
      </label>
      <button type="submit" className="cta-button primary">
        Send Message
      </button>
    </form>
  )
}

export default ContactForm

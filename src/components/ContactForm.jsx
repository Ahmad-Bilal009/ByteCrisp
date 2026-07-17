import { useState } from 'react'

const initialForm = { name: '', email: '', subject: '', message: '' }

function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!form.subject.trim()) nextErrors.subject = 'Please enter a subject.'
    if (!form.message.trim()) nextErrors.message = 'Please enter a message.'
    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      setForm(initialForm)
    }, 700)
  }

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <h3>Thanks for reaching out!</h3>
        <p>We&apos;ve noted your message and will get back to you within one business day.</p>
        <button type="button" className="cta-button" onClick={() => setSubmitted(false)}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label className="form-field">
          <span className="field-label">
            Full Name <span className="required-mark">*</span>
          </span>
          <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Jane Doe" required />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </label>
        <label className="form-field">
          <span className="field-label">
            Email Address <span className="required-mark">*</span>
          </span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            required
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </label>
      </div>
      <label className="form-field">
        <span className="field-label">
          Subject <span className="required-mark">*</span>
        </span>
        <input name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="Project inquiry" required />
        {errors.subject && <span className="field-error">{errors.subject}</span>}
      </label>
      <label className="form-field">
        <span className="field-label">
          Message <span className="required-mark">*</span>
        </span>
        <textarea
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          required
        />
        {errors.message && <span className="field-error">{errors.message}</span>}
      </label>
      <button type="submit" className="cta-button primary" disabled={sending}>
        {sending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

export default ContactForm

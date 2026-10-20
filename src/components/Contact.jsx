import { useState } from 'react'
import { profile } from '../data'
import { GitHub, LinkedIn, Mail } from './Icons'
import Section from './Section'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const channels = [
    { icon: <Mail />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: <LinkedIn />, label: 'LinkedIn', value: 'pravindu-bhashitha', href: profile.linkedin },
    { icon: <GitHub />, label: 'GitHub', value: 'Pravindu-Bhashitha', href: profile.github },
  ]

  return (
    <Section id="contact" kicker="Contact" title="Let's work together">
      <div className="contact-grid">
        <div>
          <p className="lead">
            I'm currently open to Software Engineering roles and interesting projects. Whether you have an opportunity,
            a question or just want to connect — my inbox is always open.
          </p>
          <div className="channels">
            {channels.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="card channel">
                <span className="project-icon">{c.icon}</span>
                <span>
                  <span className="muted small">{c.label}</span>
                  <b>{c.value}</b>
                </span>
              </a>
            ))}
          </div>
        </div>

        <form className="card contact-form" onSubmit={submit}>
          <label>
            Name
            <input value={form.name} onChange={set('name')} placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" required />
          </label>
          <label>
            Message
            <textarea rows="5" value={form.message} onChange={set('message')} placeholder="Hi Pravindu, …" required />
          </label>
          <button className="btn btn-primary full" type="submit">
            Send message
          </button>
        </form>
      </div>
    </Section>
  )
}

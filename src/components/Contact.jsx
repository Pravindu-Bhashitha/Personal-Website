import { useState } from 'react'
import { profile } from '../data'
import { GitHub, LinkedIn, Mail } from './Icons'
import Section from './Section'

const empty = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()

    if (!profile.web3formsKey) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: profile.web3formsKey,
          subject: `Portfolio enquiry from ${form.name}`,
          from_name: 'Portfolio Website',
          botcheck: e.target.botcheck.checked,
          ...form,
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message)
      setStatus('sent')
      setForm(empty)
    } catch {
      setStatus('error')
    }
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
          {/* Honeypot: hidden from people, catches spam bots */}
          <input type="checkbox" name="botcheck" className="botcheck" tabIndex="-1" autoComplete="off" />
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
          <button className="btn btn-primary full" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          {status === 'sent' && (
            <p className="form-note ok" role="status">
              ✓ Thanks! Your message has been sent — I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="form-note err" role="alert">
              Something went wrong. Please email me directly at {profile.email}.
            </p>
          )}
        </form>
      </div>
    </Section>
  )
}

import { activities, profile } from '../data'
import Section from './Section'

const facts = [
  ['Name', profile.name],
  ['Role', profile.role],
  ['Location', profile.location],
  ['Email', profile.email],
  ['Degree', 'BSc (Hons) IT — University of Moratuwa'],
  ['Status', profile.openToWork ? 'Open to opportunities' : 'Employed'],
]

export default function About() {
  return (
    <Section id="about" alt kicker="About me" title="Who I am">
      <div className="about-grid">
        <div className="about-text">
          {profile.summary.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <h3 className="sub">Beyond code</h3>
          <ul className="check-list">
            {activities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
        <div className="card facts">
          {facts.map(([k, v]) => (
            <div key={k} className="fact">
              <span className="muted">{k}</span>
              <span>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

import { certificates, skillGroups } from '../data'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" kicker="Skills" title="What I work with">
      <div className="skills">
        {skillGroups.map((g) => (
          <div key={g.title} className="card skill-card">
            <h3>{g.title}</h3>
            <div className="tags">
              {g.items.map((s) => (
                <span key={s} className="tag tag-lg">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <h3 className="sub">Certifications</h3>
      <div className="certs">
        {certificates.map((c) => (
          <div key={c} className="cert">
            <span className="cert-check">✓</span> {c}
          </div>
        ))}
      </div>
    </Section>
  )
}

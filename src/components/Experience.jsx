import { experience } from '../data'
import { Briefcase } from './Icons'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" kicker="Experience" title="Where I've worked">
      <ol className="timeline">
        {experience.map((e, i) => (
          <li key={e.role} className="tl-item">
            <span className={`tl-dot ${i === 0 ? 'current' : ''}`}>
              <Briefcase />
            </span>
            <div className="card tl-card">
              <div className="tl-head">
                <div>
                  <h3>{e.role}</h3>
                  <p className="company">{e.company}</p>
                </div>
                <span className="chip">{e.period}</span>
              </div>
              <ul>
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

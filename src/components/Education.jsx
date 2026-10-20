import { education } from '../data'
import { Grad } from './Icons'
import Section from './Section'

export default function Education() {
  return (
    <Section id="education" alt kicker="Education" title="Academic background">
      <div className="edu">
        {education.map((e) => (
          <div key={e.title} className="card edu-card">
            <span className="project-icon">
              <Grad />
            </span>
            <div className="edu-body">
              <h3>{e.title}</h3>
              <p className="muted">{e.place}</p>
            </div>
            <div className="edu-side">
              <span className="chip">{e.period}</span>
              <span className="edu-note">{e.note}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
